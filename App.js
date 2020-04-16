import React, { PropTypes, Component,useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Image, ImageBackground, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Audio } from 'expo-av'
import Navigator from './homeStack'


export default function App() {
 // start()
  //SplashScreen.hide()
  return (
    <Navigator />
  );
}

function start() {

}

function tryTest() {
  alert("need add button and instraction voice")
}







/**
 *  style section each part with a specific style
 * container - all screen cover by image
 * image - the image is use to be a background
 * text - is the instraction top of button
 * headrer - is the headlight of top screen
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'space-around',
  },
  text: {
    color: "blue",
    fontSize: 25,
    fontWeight: "bold",
    height: 50,
    backgroundColor: 'red'
  },
  header: {
    color: "blue",
    fontSize: 25,
    fontWeight: "bold",
    height: 50,
    backgroundColor: 'skyblue'
  }
});
