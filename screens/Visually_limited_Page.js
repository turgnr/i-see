import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import Start from "../components/start";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    interval = setInterval(() => {
      this.props.navigation.replace("Start");
    }, 3000);
  }
  render() {
    return (
      <View
        style={{
          alignItems: "flex-start",
        }}
      >
        <Image
          style={{
            width: screenWidth,
            height: screenHeight,
          }}
          source={require("../assets/splash.png")}
        />
      </View>
    );
  }
}
