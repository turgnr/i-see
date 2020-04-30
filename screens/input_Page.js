import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Item,
  TextInput,
  Picker,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView, { Circle, PROVIDER_GOOGLE } from "react-native-maps";
const screenWidth = Math.round(Dimensions.get("screen").width);
const screenHeight = Math.round(Dimensions.get("screen").height);

export default class InputPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const type = navigation.getParam("type", "");
    const latitude = navigation.getParam("latitude", "");
    const longitude = navigation.getParam("longitude", "");
    return (
      <View style={styles.mainS}>
        <Text style={styles.text}>הוספת מיקום חדש</Text>
        <TextInput style={styles.inputSN} placeholder="  שם המקום" />
        <TextInput style={styles.inputSA} placeholder="  תיאור המקום" />
        <TextInput
          style={styles.inputSA}
          placeholder="  מיקום"
          editable={false}
        />
        <TextInput style={styles.inputSA} placeholder={type} editable={false} />
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapStyle}
            region={{
              latitude: 31.626328,
              longitude: 34.582968,
              latitudeDelta: 0.015186303586663286,
              longitudeDelta: 0.010021738708019257,
            }}
          ></MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainS: {
    backgroundColor: "#7A98AF",
  },
  text: {
    fontSize: hp("5%"),
    color: "#fff",
    height: hp("7%"), // 70% of height device screen
    width: wp("80%"), // 80% of width device screen
  },
  inputSN: {
    backgroundColor: "#454F63",
    marginLeft: 40,
    marginTop: 20,
    height: hp("5%"), // 70% of height device screen
    width: wp("80%"), // 80% of width device screen
    borderRadius: 8,
    borderColor: "#8D8D8D",
    borderWidth: 1,
  },
  inputSA: {
    backgroundColor: "#FFFFFF",
    marginLeft: 32,
    marginTop: 15,
    height: hp("5%"), // 70% of height device screen
    width: wp("80%"), // 80% of width device screen
    borderRadius: 8,
    borderColor: "#8D8D8D",
    borderWidth: 1,
  },
  pikerS: {
    backgroundColor: "#FFFFFF",
    marginLeft: 32,
    marginTop: 15,
    height: hp("5%"), // 70% of height device screen
    width: wp("5%"), // 80% of width device screen
    borderColor: "#8D8D8D",
  },
  container: {
    fontSize: hp('5%'),
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 50,
    height: hp("38%"), // 70% of height device screen
    width: wp("80%"), // 80% of width device screen
    backgroundColor: "#8D8D8D",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    height: hp("38%"), 
    width: wp("80%"), 
  },
});
