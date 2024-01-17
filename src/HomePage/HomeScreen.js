import React, { Component } from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Dimensions } from 'react-native';


class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.screenWidth = Dimensions.get('window').width;
    this.screenHeight = Dimensions.get('window').height / 6;
    this.curveHeight = 30; 
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Svg height={this.screenHeight} width={this.screenWidth}>
          <Path
            d={`M0 0 L${this.screenWidth} 0 L${this.screenWidth} ${this.screenHeight - this.curveHeight} Q${this.screenWidth / 2} ${this.screenHeight - this.curveHeight * 2} 0 ${this.screenHeight - this.curveHeight} Z`}
            fill="#60a3bc"
          />
        </Svg>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
