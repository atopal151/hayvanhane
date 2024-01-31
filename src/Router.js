// Router.js
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomePage/HomeScreen';
import DetailsScreen from './DetailsPage/DetailsScreen';
import SearchScreen from './SearchPage/SearchScreen';


const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name }) => {
    let iconName, iconSize, iconColor;
    if (name === 'HomeStackScreen') {
        iconName = focused ? 'Home' : 'Home';
        iconSize = focused ? 19 : 14;

        iconFont = focused ? "800" : "300";
        iconColor = focused ? '#60a3bc' : '#AAAAAA';
    } else if (name === 'DetailsStackScreen') {
        iconName = focused ? 'Detail' : 'Detail';
        iconSize = focused ? 19 : 14;

        iconFont = focused ? "800" : "300";
        iconColor = focused ? '#60a3bc' : '#AAAAAA';
    }
    else if (name === 'SearchStackScreen') {
        iconName = focused ? 'Search' : 'Search';
        iconSize = focused ? 19 : 14;
        iconFont = focused ? "800" : "300";
        iconColor = focused ? '#60a3bc' : '#AAAAAA';
    }
    return <Text style={{ fontSize: iconSize, color: iconColor,fontWeight:iconFont, }}> {iconName}</Text>

};


function TabBar() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => TabBarIcon({ focused, name: route.name }),
            tabBarStyle: {
                backgroundColor: '#FFFFFF',
                borderTopWidth: 0, // Tab çubuğunun üst çerçevesini kaldırır
                elevation: 0
            },
            tabBarShowLabel: false,
            headerShown: false,
            tabBarLabelStyle: {
                fontSize: 12,
            },
        })} >
            <Tab.Screen name="HomeStackScreen" component={HomeScreen} />
            <Tab.Screen name="DetailsStackScreen" component={DetailsScreen} />
            <Tab.Screen name="SearchStackScreen" component={SearchScreen} />

        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default class Router extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
