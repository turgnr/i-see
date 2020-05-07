import React, { } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Server from "../mongoDbServer";
import Landing from './landing_Page';
import { Audio } from 'expo-av';
import { pi,sin,cos,sqrt,atan2 } from 'mathjs';
/**
 * x and y for blind man
 */
const lat = 31.262232;
const long = 34.798063;
const check2lat = 31.535435;
const check2long = 34.582375;

export default class VLlimitedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
    this.activeSound = this.activeSound.bind(this);
    this.deg2rad = this.deg2rad.bind(this);
    this.getDistanceFromLatLonInKm = this.getDistanceFromLatLonInKm.bind(this);
    this.activeSound();
  }

  confingGPS = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = position;
        this.setState({ location });
        if (this.state.location != null)
          ;
      },
      (error) => Alert.alert("נא לאשר גישת מיקום כדי להמשיך"),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  async activeSound() {
    this.soundObject = new Audio.Sound();
    try {
      let source = require("../assets/clickOn.m4a");
      await this.soundObject.loadAsync(source);
      await this.soundObject.playAsync();
    } catch (error) { }
  };

  deg2rad(deg) {
    return deg * (pi / 180);
  }
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      sin(dLat / 2) * sin(dLat / 2) +
      cos(this.deg2rad(lat1)) * cos(this.deg2rad(lat2)) *
      sin(dLon / 2) * sin(dLon / 2);
      
    var c = 2 * atan2(sqrt(a), sqrt(1 - a));
    var d = R * c; // Distance in km
    return parseInt(d*1000);
  }



  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}
          onPress={() => { this.confingGPS(); console.log(this.getDistanceFromLatLonInKm(lat, long, check2lat, check2long)); }}>
          <Text style={styles.text}> לחץ כאן לקבלת המיקום</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8D8D8D',
    width: '100%',
    height: "100%"
  },
  text: {
    marginTop: '75%'
  }
});
