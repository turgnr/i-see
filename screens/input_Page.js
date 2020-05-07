import React, { Component } from "react";
import {StyleSheet,View,Text,Dimensions,TextInput,
  Button,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Server from "../mongoDbServer";

const screenWidth = Math.round(Dimensions.get("screen").width);
const screenHeight = Math.round(Dimensions.get("screen").height);



export default class InputPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      latitudeGps: this.props.navigation.getParam("latitude", ""),
      longitudeGps: this.props.navigation.getParam("longitude", ""),
      type: this.props.navigation.getParam("type", "")
    };
  }

  render() {
    const { navigation } = this.props;
    let type = navigation.getParam("type", "");
    let latitudeGps = navigation.getParam("latitude", "");
    let longitudeGps = navigation.getParam("longitude", "");
    let name = "";
    let description = "";
    return (
      <View style={styles.mainS}>
        <Text style={styles.text}>הוספת מיקום חדש</Text>
        <TextInput
          style={styles.inputSN}
          placeholder="  שם המקום"
          onChangeText={(text) => (this.state.name = { text })}
        />
        <TextInput
          style={styles.inputSA}
          placeholder="  תיאור המקום"
          onChangeText={(text) => (this.state.description = { text })}
        />
        <TextInput
          style={styles.inputSA}
          placeholder={this.state.latitudeGps + " , " + this.state.longitudeGps}
          editable={false}
        />
        <TextInput style={styles.inputSA} placeholder={this.state.type} editable={false} />
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapStyle}
            region={{
              latitude: this.state.latitudeGps,
              longitude: this.state.longitudeGps,
              latitudeDelta: 0.0016303586663286,
              longitudeDelta: 0.001121738708019257,
            }}
            zoomEnabled={false}
            rotateEnabled={false}
            scrollEnabled={false}
          >
            <Marker
              title="i-see location"
              coordinate={{
                latitude: this.state.latitudeGps,
                longitude: this.state.longitudeGps,
              }}
              draggable
            />
          </MapView>
        </View>
        <Button
          onPress={() =>
            server.setLocaion(
              name.text,
              latitudeGps,
              longitudeGps,
              description.text,
              type
            )
          }
          title="שלח"
          Color="#454F63"
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainS: {
    backgroundColor: "#7A98AF",
    width: "100%",
    height: "100%",
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
    height: hp("7%"), // 70% of height device screen
    width: wp("80%"), // 80% of width device screen
  },
  buttonS: {
    backgroundColor: "skyblue",
    width: "100%",
    height: "100%"
  },
  textInButton: {
    textAlign: "center"
  },
  inputSN: {
    backgroundColor: "#454F63",
    marginLeft: 20,
    marginTop: 20,
    height: hp("5%"), // 70% of height device screen
    width: wp("85%"), // 80% of width device screen
    borderRadius: 8,
    borderColor: "#8D8D8D",
    borderWidth: 1,
  },
  inputSA: {
    backgroundColor: "#FFFFFF",
    marginLeft: 28,
    marginTop: 15,
    textAlign: "right",
    height: hp("5%"), // 70% of height device screen
    width: wp("80%"), // 80% of width device screen
    borderRadius: 8,
    borderColor: "#8D8D8D",
    borderWidth: 1,
  },
  container: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 50,
    height: hp("30%"), // 70% of height device screen
    width: wp("85%"), // 80% of width device screen
    backgroundColor: "#8D8D8D",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    height: "100%",
    width: "100%",
  },
});

//() => this.props.navigation.goBack(null)) //go back to priv page
