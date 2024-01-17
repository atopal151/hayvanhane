// DetailsScreen.js
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default class DetailsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
        <Text>Details Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  body:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  }
})
