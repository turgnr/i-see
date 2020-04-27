import React, {  } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default class test extends React.Component {
  
  start = async () => {
    const soundObject = new Audio.Sound()
    try {
      let source = require('../assets/start.m4a')
      await soundObject.loadAsync(source)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>sdjdsfg</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
