import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
    import FavoriteScreen from '../Screens/FavoriteScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const MyTabs = ({route}) => {
    const name =  route.params.data;
  return (
  
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = 'home';
            } else if (route.name === 'FavoriteScreen') {
              iconName = 'heart';
            } else{
                iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle:{
            backgroundColor: 'rgba(34,36,40,1)',
            borderRadius:10
          }
        })}
        tabBarOptions={{
          activeTintColor: 'white', // Set your active color here
          inactiveTintColor: 'grey',
      
        }}  >
        <Tab.Screen name="HomeStack" component={HomeStack}  options={{headerShown:false,tabBarShowLabel:false}}/>
        <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} options={{headerShown:false}} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}} />
      </Tab.Navigator>
    
  );
};

export default MyTabs;
