import React, { } from 'react';
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native';
export default class VLlimitedPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}
        onPress={()=>console.log("clicked")}>
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
  button:{
    alignItems:'center',
    backgroundColor:'#8D8D8D',
    width:'100%',
    height: "100%"
  },
  text:{
    marginTop:'75%'
  }
});
