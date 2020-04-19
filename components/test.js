import React ,{ useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class test extends React.Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null
  };
  componentDidMount() {
    this.getLocationAsync();
  }

  handleMapRegionChange(mapRegion) {
    console.log(mapRegion);
    this.setState({ mapRegion });
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

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });

    // Center the map on the location we just fetched.
    this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } });
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}
          region={this.state.mapRegion}
          onRegionChange={this.handleMapRegionChange}></MapView>
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
