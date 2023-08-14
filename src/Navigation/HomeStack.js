// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieCard from '../Screens/MovieCard';

import HomeScreen from '../Screens/HomeScreen';
import MoviesView from '../Screens/MovieView';




const Stack = createNativeStackNavigator();

function HomeStack() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="MovieView" component={MoviesView}/>
        <Stack.Screen name="MovieCard" component={MovieCard} options={{headerShown:false}}/> 
      </Stack.Navigator>
  );
}

export default HomeStack;