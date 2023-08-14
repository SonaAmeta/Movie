import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button, Alert ,TouchableOpacity} from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Toast } from "react-native-toast-message/lib/src/Toast";


export default function MovieCard() {
  const route = useRoute();
  const { item } = route.params;

  const addToFavorites = async (item) => {
    try {
      const jsonValue = await AsyncStorage.getItem("favoriteItems");
      const storedItems = JSON.parse(jsonValue) || [];

      storedItems.push(item);
      await AsyncStorage.setItem("favoriteItems", JSON.stringify(storedItems));
      Toast.show({
        type: "success",
        text1: "Added Item to Favorites",
        text2: "Done!",
      });
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const addTowatchlist = async (item) => {
    try {
      const jsonValue = await AsyncStorage.getItem("watchlistItems");
      const storedItems = JSON.parse(jsonValue) || [];

      storedItems.push(item);
      await AsyncStorage.setItem("watchlistItems", JSON.stringify(storedItems));
      Toast.show({
        type: "success",
        text1: "Added Movie to Watchlist",
        text2: "Done!",
      });
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    }
  };

  return (
    <View style={{ margin: 20 }}>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "black",
          padding: 30,
          borderRadius: 20,
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
          }}
          style={{ width: 120, height: 150, borderRadius: 10 }}
        />
      </View>

      <View style={{marginTop:30}}>
      <View style={{ alignSelf:'center',margin:10 }}>
          <Text style={{ fontWeight:'500',fontSize:16 }}>{item.original_title}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Language : </Text>
          <Text style={{ fontSize: 15 }}>{item.original_language}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15 ,textAlign:'left'}} >{item.overview}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Released On : </Text>
          <Text style={{ fontSize: 15 }}>{item.release_date}</Text>
        </View>

       <View style={{flexDirection:'row'}}>
        <Icon  name="star" size={20} />
        <Text>{item.vote_count}</Text>
        </View>


        


      </View>
      <View style={{marginTop:50,flexDirection:'row',justifyContent:'space-evenly'}} >
        <TouchableOpacity style={{backgroundColor:'black',width:50,height:40,padding:10,borderRadius:10}}onPress={() => addToFavorites()}>
          <Icon name="heart" size={20} color='white' style={{alignSelf:'center'}}/>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'black',width:50,height:40,padding:10,borderRadius:10}} onPress={() => addTowatchlist()} >
          <Icon name="eye" size={20} color='white' style={{alignSelf:'center'}}/>
        </TouchableOpacity>
      </View>

     
    </View>
  );
}
