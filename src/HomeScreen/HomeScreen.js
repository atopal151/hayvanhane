import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <View style={styles.containerBody}>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

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