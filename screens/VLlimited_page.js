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
import { data } from "../fakeDB";
import Fire from "../api/firebaseDb";
/**
 * x and y for blind man
 */
const lat = 31.262232;
const long = 34.798063;
export default class VLlimitedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
    this.locations = [];
    this.activeSound = this.activeSound.bind(this);
    this.deg2rad = this.deg2rad.bind(this);
    this.upTo100 = this.upTo100.bind(this);
    this.startData = this.startData.bind(this);
    this.activeSound(require("../assets/clickOn.m4a"));
  }

  componentDidMount() {
    Fire.get((location) => this.locations.push(location));
  }
  componentWillUnmount() {
    Fire.off();
  }

  /**
   * this function active the check if place is in 100m distance from the user location
   * @param {latitud place location} lat
   * @param longitud place location} long
   */
  startData(lat, long) {
    listOfPlace = data.filter((place) =>
      this.upTo100(lat, long, place.lat, place.long)
    );
    this.activeSound(require("../assets/Books_Junction.m4a"));
    //canot active all becuse is async
    //this.activeSound(require('../assets/Bus_Staion.m4a'));
    //this.activeSound(require('../assets/Aroma.m4a'));
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
          this.startData(lat, long);
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
    return parseInt(d * 1000) <= 100 ? true : false;
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
              if (this.state.location != null) {
                this.startData(lat, long);
              } else {
                this.confingGPS();
              }
              console.log(this.locations);
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
