import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Audio } from "expo-av";
import { pi, sin, cos, sqrt, atan2 } from "mathjs";
import Fire from "../api/firebaseDb";

/**
 * x and y for blind man
 */
const lat = 31.262232;
const long = 34.798263;
export default class VLlimitedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
    this.distTemp = null; //temp distance for location
    this.locations = []; //locaiton from firebase
    this.locationsFromMy = [];
    this.listofSound = [
      require("../assets/Bus_Staion.m4a"),
      require("../assets/Books_Junction.m4a"),
      require("../assets/Aroma.m4a"),
    ];
    this.listofSoundDist = [
      require("../assets/10.m4a"),
      require("../assets/50.m4a"),
      require("../assets/100.m4a"),
    ];
    this.ListNumSound = [];
    this.ListNumSoundDist = [];
    this.activeSound = this.activeSound.bind(this);
    this.deg2rad = this.deg2rad.bind(this);
    this.upTo100 = this.upTo100.bind(this);
    this.searchFromMyLoca = this.searchFromMyLoca.bind(this);
    this.playSound = this.playSound.bind(this);
    this.activeSound(require("../assets/clickOn.m4a"));
  }

  componentDidMount() {
    Fire.get((location) => this.locations.push(location));
  }
  componentWillUnmount() {
    Fire.off();
  }
  /**
   *
   */
  confingGPS = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = position;
        this.setState({ location });
        if (this.state.location != null) {
          this.searchFromMyLoca();
          console.log(this.locationsFromMy);
          this.playSound(this.locationsFromMy.length, this.ListNumSound);
        }
      },
      (error) => Alert.alert("נא לאשר גישת מיקום כדי להמשיך"),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  async activeSound(path) {
    console.log("path ", path);
    this.soundObject = new Audio.Sound();
    try {
      await this.soundObject.loadAsync(path);
      await this.soundObject.playAsync();
    } catch (error) {}
  }

  async playSound(times, numbers) {
    if (times === 0) return;
    let soundObject = new Audio.Sound();
    let soundObjectDist = new Audio.Sound();
    await soundObject.loadAsync(this.listofSound[numbers[times - 1]]);
    await soundObjectDist.loadAsync(this.listofSoundDist[numbers[times - 1]]);
    await soundObject.playAsync().then(async (playbackStatus) => {
      setTimeout(() => {
        soundObject.unloadAsync();
        soundObjectDist.playAsync().then(async (playbackStatus2) => {
          setTimeout(() => {
            this.playSound(times - 1, numbers);
          }, playbackStatus2.playableDurationMillis);
        });
      }, playbackStatus.playableDurationMillis);
    });
  }

  deg2rad(deg) {
    return deg * (pi / 180);
  }
  upTo100(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      sin(dLat / 2) * sin(dLat / 2) +
      cos(this.deg2rad(lat1)) *
        cos(this.deg2rad(lat2)) *
        sin(dLon / 2) *
        sin(dLon / 2);

    var c = 2 * atan2(sqrt(a), sqrt(1 - a));
    var d = R * c; // Distance in km
    this.distTemp = d * 1000;
    return parseInt(d * 1000) <= 100 ? true : false;
  }

  searchFromMyLoca() {
    //get all the location from my GPS location in 100m
    var lat = this.state.location.coords.latitude;
    var lon = this.state.location.coords.longitude;
    this.locationsFromMy = [];
    for (let i = 0; i < this.locations.length; i++) {
      //lat,lon my location //lat2,lon2 place location
      //this.distTemp get the distance from upTo100 run
      if (
        this.upTo100(
          lat,
          lon,
          this.locations[i].latitudeGps,
          this.locations[i].longitudeGps
        )
      ) {
        console.log(this.locations[i].name);
        var loca = {
          //temp locaiton for add to locationsFromMy
          name: this.locations[i].name,
          type: this.locations[i].type,
          latitudeGps: this.locations[i].latitudeGps,
          longitudeGps: this.locations[i].longitudeGps,
          description: this.locations[i].description,
          distance: this.distTemp,
          soundDistance: null,
        };
        if (this.locations[i].name == "aroma") {
          loca.soundDistance = 2;
          this.ListNumSoundDist.push(2);
        } else if (this.locations[i].name == "8A") {
          loca.soundDistance = 0;
          this.ListNumSoundDist.push(0);
        } else loca.soundDistance = 1;
        this.locationsFromMy.push(loca);
        this.ListNumSound.push(loca.soundDistance);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/VLBackGround.png")}
          style={styles.image}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              //if (this.state.location != null) {
              //  this.startData(lat, long);
              //} else {
              //  this.confingGPS();
              //}
              this.confingGPS();
            }}
          >
            <Text style={styles.text}> לחץ כאן לקבלת המיקום</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#8D8D8D",
    width: "100%",
    height: "100%",
  },
  text: {
    marginTop: "75%",
  },
});
