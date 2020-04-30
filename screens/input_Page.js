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
import MapView, { Circle, PROVIDER_GOOGLE } from "react-native-maps";
const screenWidth = Math.round(Dimensions.get("screen").width);
const screenHeight = Math.round(Dimensions.get("screen").height);

export default class InputPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tag: "" };
  }
  render() {
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
        <TextInput style={styles.inputSA} placeholder="  סוג המיקום" />
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapStyle}
            //region={this.state.mapRegion}
          ></MapView>
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
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: "#fff",
    marginRight: 8,
  },
  inputSN: {
    backgroundColor: "#454F63",
    marginLeft: 40,
    marginTop: 20,
    width: 327,
    height: 52,
    borderRadius: 8,
    borderColor: "#8D8D8D",
    borderWidth: 1,
  },
  inputSA: {
    backgroundColor: "#FFFFFF",
    marginLeft: 32,
    marginTop: 15,
    width: 343,
    height: 52,
    borderRadius: 8,
    borderColor: "#8D8D8D",
    borderWidth: 1,
  },
  pikerS: {
    backgroundColor: "#FFFFFF",
    marginLeft: 32,
    marginTop: 15,
    width: 340,
    height: 52,
    borderColor: "#8D8D8D",
  },
  container: {
    marginLeft: 30,
    marginTop: 30,
    width: screenWidth - 50,
    height: 200,
    backgroundColor: "#8D8D8D",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
