import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class SearchScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.containerBody}>
                    <Text> Search Screen </Text>
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