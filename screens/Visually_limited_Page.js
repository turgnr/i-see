import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import Start from "../components/start";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default class Login extends React.Component {
  componentWillMount() {
    setInterval(() => {
      this.props.navigation.navigate("Start");
    }, 3000);
  }
  render() {
    return (
      <View
        style={{
          alignItems: "flex-start",
          backgroundColor: "#4D8EC2",
          width: screenWidth,
          height: screenHeight,
        }}
      >
        <Image
          style={{
            width: 253,
            height: 111,
            marginStart: 75,
            marginTop: 170,
          }}
          source={require("../assets/eyeSee.png")}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 85,
            color: "rgba(62, 62, 62, 255)",
            marginStart: 55,
            marginTop: 4,
          }}
        >
          {" "}
          I - SEE{" "}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            color: "rgba(62, 62, 62, 255)",
            marginStart: 80,
          }}
        >
          {" "}
          Visually Impaired{" "}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            color: "rgba(62, 62, 62, 255)",
            marginStart: 170,
          }}
        >
          {" "}
          App{" "}
        </Text>
      </View>
    );
  }
}
