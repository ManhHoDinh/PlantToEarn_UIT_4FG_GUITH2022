import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import News from '../screens/News/News';
import A from '../screens/A';
export default function BottomNavigation(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="News" component={News}></Tab.Screen>
      <Tab.Screen name="A" component={A}></Tab.Screen>
    </Tab.Navigator>
  );
}
