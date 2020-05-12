import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
const screenWidth = Math.round(Dimensions.get("screen").width);
const screenHeight = Math.round(Dimensions.get("screen").height);
export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
    //this.confingGPS();
  }
  confingGPS = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        this.setState({ location });
        if (this.state.location != null)
          this.props.navigation.navigate("Map", {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
      },
      (error) => Alert.alert("נא לאשר גישת מיקום כדי להמשיך"),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  render() {
    return (
      <View style={styles.mainS}>
        <View style={styles.viewImageS}>
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
    width: "100%",
    height: "100%",
    marginTop: 40,
    alignItems: "center",
    marginLeft: -12,
  },
  viewImageS: {
    flex: 2,
    alignItems: "center",
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
    flex: 0.4,

    alignItems: "center",
    marginLeft: 5,
  },
});
