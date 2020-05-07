import React, { useState, Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("screen").height);

export default class mapP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: {
        latitude: this.props.navigation.getParam("latitude"),
        longitude: this.props.navigation.getParam("longitude"),
        latitudeDelta: 0.0016303586663286,
        longitudeDelta: 0.00212738708019257,
      },
    };
  }

  onRegionChange = (region) => {
    this.setState({ region: region });
  }

  render() {
    return (
      <View style={styles.mainS}>
        <View style={styles.mapS}>
          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.mapStyle}
              region={this.state.region}
              onRegionChangeComplete={this.onRegionChange}
            >
              <Marker
                coordinate={{
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude,
                }}
                title={"i-see location"}
                draggable
              />
            </MapView>
          </View>
        </View>
        <View style={styles.barS}>
          <Text style={styles.text}>הוספת מיקום חדש</Text>
          <View style={styles.barMarge}>
            <TouchableOpacity
              style={styles.buttonS}
              onPress={() =>
                this.props.navigation.navigate("Input", {
                  type: " תחנת אוטובוס",
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude,
                })
              }
            >
              <Image source={require("../assets/buttonBus.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonS}
              onPress={() =>
                this.props.navigation.navigate("Input", {
                  type: " מסעדה",
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude,
                })
              }
            >
              <Image source={require("../assets/buttonRes.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonS}
              onPress={() =>
                this.props.navigation.navigate("Input", {
                  type: " אחר",
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude,
                })
              }
            >
              <Image source={require("../assets/buttonOth.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainS: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#7A98AF",
    flex: 1,
  },
  mapS: {
    flex: 4,
    width: screenWidth,
    backgroundColor: "#ffff",
  },
  barS: {
    flex: 1,
    width: screenWidth,
    backgroundColor: "#2A2E43",
  },
  barMarge: {
    flexDirection: "row",
    width: screenWidth,
    backgroundColor: "#2A2E43",
  },
  buttonS: {
    marginTop: 10,
    marginLeft: 25,
  },
  text: {
    fontSize: 15,
    color: "#fff",
    marginLeft: 5,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});

/*<Circle
    center={{
      latitude: this.state.region.latitude,
     longitude: this.state.region.longitude,
    }}
    radius={100}
  /> */
