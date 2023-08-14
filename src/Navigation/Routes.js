// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import HomeScreen from '../Screens/HomeScreen';
import MoviesView from '../Screens/MovieView';

import MyTabs from './Bottom';




const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name = "TabRoutes" component={MyTabs} options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="MovieView" component={MoviesView} options={{headerShown:false}}/>


        {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}} />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{headerShown:false}} />
        <Stack.Screen name="WatchlistScreen" component={WatchlistScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MovieView" component={MoviesView} options={{headerShown:false}}/>
        <Stack.Screen name="Movielist" component={Movielist} options={{headerShown:false}}/>
        <Stack.Screen name="MovieCard" component={MovieCard} options={{headerShown:false}}/> 
        <Stack.Screen name="MovieSingleProfile" component={MovieSingleProfile} options={{headerShown:false}}/>  */}



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;