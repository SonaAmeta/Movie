// src/screens/FavoritesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text,Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

const FavoritesScreen = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    retrieveFavorites();
  }, []);

  const retrieveFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('favoriteItems');
      const storedItems = JSON.parse(jsonValue) || [];
  
      // Filter out null or improperly structured items
      const filteredItems = storedItems.filter(item => item !== null && typeof item === 'object' && 'genre_ids' in item);
  
      setFavoriteItems(filteredItems);
    } catch (error) {
      console.error('Error retrieving favorites:', error);
    }
  };

  return (
    <ScrollView >
      <View style={{alignSelf:'center',margin:20}}>
      <Text style={{fontWeight:'500',fontSize:20}}>Your Favorites</Text>
      </View>
      {favoriteItems.map((item, index) => (
        <Animatable.View animation ="bounceInRight" style={{backgroundColor:'black',margin:10 ,flexDirection:'row',width:300,borderRadius:20}}>
          
          <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    }}
                    style={{ width: 100, height: 150, borderRadius: 10,margin:10 }}
                  />
                  <View style={{width:150,justifyContent:'center'}}>
                  <Text style={{fontWeight:'500',color:'grey'}}>Language:{item.original_language}</Text>
                  <Text style={{fontSize:15,fontWeight:'600',color:'white'}}numberOfLines={3}>{item.original_title}</Text>
                    </View>

        </Animatable.View>
        
      ))}
    </ScrollView>
  );
};

export default FavoritesScreen;
