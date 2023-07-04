import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Main from './src/components/Main'
import Segunda from './src/components/2'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
 
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Segunda" component={Segunda} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}

