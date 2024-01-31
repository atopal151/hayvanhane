import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput,Text, Alert, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Dimensions } from 'react-native';



class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.screenWidth = Dimensions.get('window').width;
    this.screenHeight = Dimensions.get('window').height / 6;
    this.curveHeight = 30;
    this.state = {
      inputText: ""
    };
  }

  handleInputChange = (text) => {
    this.setState({ inputText: text })
  }

  handleSearchPress = () => {
    Alert.alert('Arama', 'Arama butonuna basıldı');
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Svg height={this.screenHeight} width={this.screenWidth}>
          <Path
            d={`M0 0 L${this.screenWidth} 0 L${this.screenWidth} ${this.screenHeight - this.curveHeight} Q${this.screenWidth / 2} ${this.screenHeight - this.curveHeight * 2} 0 ${this.screenHeight - this.curveHeight} Z`}
            fill="#60a3bc"
          />
          <View style={styles.searchGrupStyle}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Search"
              onChangeText={this.handleInputChange}
              value={this.state.inputText}
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={this.handleSearchPress}
            >
              <Text style={{color:"white"}}>Search</Text>
            </TouchableOpacity>
          </View>

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
  textInputStyle: {
    height: 50,
    backgroundColor: "white",
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingLeft: 20,
    elevation: 5, // Android için gölge efekti
    borderRadius: 50,
    margin: 15,
  },
  searchGrupStyle: {
    position: "relative"
  },
  searchButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: '#222f3e',
    elevation:5,
    borderRadius: 50,
    padding: 10,
  },
});

export default HomeScreen;
