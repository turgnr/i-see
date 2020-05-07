import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

const screenWidth = Math.round(Dimensions.get("screen").width);
const screenHeight = Math.round(Dimensions.get("screen").height);
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    interval = setInterval(() => {
      this.props.navigation.replace("Config");
    }, 3000);
  }
  render() {
    return (
      <View style={styles.mainS}>
        <Image style={styles.imageS} source={require("../assets/splash.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageS: {
    width: screenWidth,
    height: screenHeight,
  },
  mainS: {
    alignItems: "flex-start",
  },
});
