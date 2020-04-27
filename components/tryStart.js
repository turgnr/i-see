import React, { PropTypes, Component, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
  Button,
} from "react-native";
import { Audio } from "expo-av";
/**
 * לבדוק איך אפשר לרנדר את האפליקציה לפי זמן באמצעות פונקציות של render
 * וגם להבין למה אין זיהוי של משתנה הנייוט בין מסכים
 */
//var navigation = props.navigation;
export default class tryStart extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.navigation);
    this.start();
    this.interval();
    this.timeOut = false;
    console.log("end counstractor");
  }
  preesHandler() {
    navigation.navigate("HomeRU");
  }
  preesTest() {
    navigation.navigate("Test");
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

  interval = async () => {
    setTimeout(() => {
      this.props.navigation.navigate("Test");
    }, 8000);
    //setTimeout(console.log("work"), 8000);
    //setTimeout(this.props.navigation.navigate("Test"), 8000);
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/eye.png")}
        style={styles.image}
      >
        <Text style={styles.header}>Hello Please wait</Text>
        <View>
          <Text style={styles.text}>שלום לך למשתמש רגיל לחץ מטה</Text>
          <Button
            title="Regular User"
            color="gray"
            onPress={this.preesHandler}
          />
        </View>
      </ImageBackground>
    );
  }
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
    flexDirection: "column",
    alignItems: "stretch",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-around",
  },
  text: {
    color: "blue",
    fontSize: 25,
    fontWeight: "bold",
    height: 50,
    backgroundColor: "red",
  },
  header: {
    color: "blue",
    fontSize: 25,
    fontWeight: "bold",
    height: 50,
    backgroundColor: "skyblue",
  },
});
