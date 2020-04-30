import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Start from "../components/start";

const screenWidth = Math.round(Dimensions.get("screen").width);
const screenHeight = Math.round(Dimensions.get("screen").height);
export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
    this.confingGPS();
  }
  confingGPS = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);

        this.setState({ location });
        if (this.state.location != null) this.props.navigation.replace("Map");
      },
      (error) => Alert.alert("נא לאשר גישת מיקום כדי להמשיך"),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  render() {
    return (
      <View style={styles.mainS}>
        <View>
          <Image
            style={styles.imageS}
            source={require("../assets/landingGPS.png")}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.confingGPS}>
            <Image source={require("../assets/buttonLanding.png")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageS: {
    position: "absolute",
    top: 50,
    width: 400,
    height: 650,
  },
  mainS: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#7A98AF",
  },
  buttonS: {
    color: "#2A2E43",
  },
  container: {
    alignItems: "center",
    marginTop: 660,
  },
});
