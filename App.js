import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/transaction'
import SearchScreen from './screens/search'

export default function App() {
  return (
   <AppContainer />
  );
}

const TabNavigator = createBottomTabNavigator({
  facebook: {screen:TransactionScreen},
  instagram:{screen:SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)