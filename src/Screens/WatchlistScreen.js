// src/screens/FavoritesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WatchlistScreen = () => {
  const [watchlistItems, setwatchlistItems] = useState([]);

  useEffect(() => {
    retrievewatchlist();
  }, []);

  const retrievewatchlist = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('watchlistItems');
      const storedItems = JSON.parse(jsonValue) || [];
  
      // Filter out null or improperly structured items
      const filteredItems = storedItems.filter(item => item !== null && typeof item === 'object' && 'genre_ids' in item);
  
      setwatchlistItems(filteredItems);
    } catch (error) {
      console.error('Error retrieving watchlist:', error);
    }
  }




  return (
    <View>
      <Text>hey</Text>
      {watchlistItems.map((item, index) => (
        <View>
          <Text>{item.genre_ids}</Text>
          <Text>{item.id}</Text>
          <Text>{item.genre_ids}</Text>

        </View>
        
      ))}
    
    </View>
  );
};

export default WatchlistScreen;
