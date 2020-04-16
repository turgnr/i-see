import React, { PropTypes, Component,useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Image, ImageBackground, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Audio } from 'expo-av'



export default function Start() {

return(<ImageBackground source={require('./assets/eye.png')} style={styles.image}>
<Text style={styles.header}>Hello Please wait</Text>
<View>
  <Text style={styles.text}>שלום לך למשתמש רגיל לחץ מטה</Text>
  <Button
    title="Press me"
    color="gray"
    onPress={() => Alert.alert('זה עובד לא סתם!!')}
  />
</View>
</ImageBackground>);
}
