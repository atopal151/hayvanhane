// DetailsScreen.js
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default class DetailsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <View style={styles.containerBody}>
        <Text>Details Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  containerBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }

})
