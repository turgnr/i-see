import React, { } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Server from "../mongoDbServer";
import Landing from './landing_Page';
import { Audio } from 'expo-av';

export default class VLlimitedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
    this.activeSound = this.activeSound.bind(this);
    this.activeSound();
  }

  confingGPS = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = position;
        this.setState({ location });
        if (this.state.location != null)
          alert(this.state.location);
      },
      (error) => Alert.alert("נא לאשר גישת מיקום כדי להמשיך"),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  async activeSound() {
    this.soundObject = new Audio.Sound();
    try {
      let source = require("../assets/clickOn.m4a");
      await this.soundObject.loadAsync(source);
      await this.soundObject.playAsync();
    } catch (error) { }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}
          onPress={() => { this.confingGPS(); console.log(this.state.location.coords) }}>
          <Text style={styles.text}> לחץ כאן לקבלת המיקום</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8D8D8D',
    width: '100%',
    height: "100%"
  },
  text: {
    marginTop: '75%'
  }
});
