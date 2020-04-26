import React, {  } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default class test extends React.Component {

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
