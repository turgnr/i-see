import React, { useState } from 'react';
import MapView, { Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class regularUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null,
      curlet:31.626328, 
      curlon:34.582968
    };
  }
  componentDidMount() {
    this.getLocationAsync();
  }


  async getLocationAsync() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    this.setState({ locationResult: JSON.stringify(location) });

    // Center the map on the location we just fetched.
   // this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.015186303586663286, longitudeDelta: 0.010021738708019257 } });
    //מיקום קבוע של נקודה באשקלון בתוך אזור מסחרי עם הרבה בתי עסק
    this.setState({ mapRegion: { latitude: this.curlet, longitude: this.curlon, latitudeDelta: 0.015186303586663286, longitudeDelta: 0.010021738708019257 } });
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          region={this.state.mapRegion}
        >
          <Circle center={{
            latitude: 31.532357,
            longitude: 34.588387
          }}
            radius={100}/></MapView>
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
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
