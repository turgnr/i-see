import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { Audio } from 'expo-av';
const screenWidth = Math.round(Dimensions.get("screen").width);
const screenHeight = Math.round(Dimensions.get("screen").height);

export default class ConfigP extends React.Component {
  constructor(props) {
    super(props);
    this.activeSound = this.activeSound.bind(this);
    
    moveToUnregular = setTimeout(() => {
      this.props.navigation.replace("VLlimitedPage");}, 8000);
      this.activeSound(require('../assets/Welcom.m4a'));
  }

  

  async activeSound(x) {
    this.soundObject = new Audio.Sound();
    try {
      await this.soundObject.loadAsync(x);
      await this.soundObject.playAsync();          
    } catch (error) { }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/configPage.png")}
          style={styles.image}
        >
          <TouchableOpacity
            onPress={() => {
              this.soundObject.stopAsync();
              this.props.navigation.replace("Landing");
            }}
          >
            <Image
              source={require("../assets/ok_button.png")}
              style={styles.buttonS}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  buttonS: {
    width: 300,
    height: 415.02,
    marginLeft: 48,
    marginTop: 250,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
