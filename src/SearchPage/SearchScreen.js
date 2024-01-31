// SearchScreen.js
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';

export default class SearchScreen extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.body}>
          <HomeIcon />
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});


export const HomeIcon = () => (
    <Icon size="2xl" viewBox="0 0 24 24" name="home">
      <Path
        fill="#222f3e"
        d="M21 12.155l-9-8.48-9 8.48v9.827h6v-6h6v6h6v-9.827z"
      />
      <Path
        fill="none"
        stroke="#222f3e"
        strokeWidth="1"
        d="M21 12.155l-9-8.48-9 8.48v9.827h6v-6h6v6h6v-9.827z"
      />
    </Icon>
  );

