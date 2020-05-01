import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";

const screenWidth = Math.round(Dimensions.get("screen").width);
const screenHeight = Math.round(Dimensions.get("screen").height);

export default class ConfigP extends React.Component {
  constructor(props) {
    super(props);
    start();
  }

  start = async () => {
    const soundObject = new Audio.Sound();
    try {
      let source = require("../assets/start.m4a");
      await soundObject.loadAsync(source);
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/configPage.png")}
          style={styles.image}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.replace("Landing")}
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
