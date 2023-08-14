import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const MoviesView = () => {
  const [movieList, setMovieList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA0YmZiOWI4ZmZmZWU3NTRlZjlkNWI1Zjc1OGRiNiIsInN1YiI6IjY0ZDM4MWMzMDM3MjY0MDEzOTE1NjhlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rWBaYe1tVbYvCD1dM5SWYaH2dSg-ywUUMyPAkntdy7Q ",
          },
        });
        const data = await response.json();
        setMovieList(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  const navigateToDetail = (item) => {
    // Navigate to the detail screen with the item's ID as a parameter
    navigation.navigate('MovieCard', { item });
  };

  const renderMovieCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetail(item)}>
      <View style={styles.card}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
          style={styles.cardImage}
        />
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
      </View>
      </TouchableOpacity>
  );
  return (
    <View>
      <Text style={styles.heading}>Movies</Text>
      <FlatList
        horizontal={true}
        data={movieList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
 
    card: {
      borderRadius: 8,
      padding: 10,
      margin: 10,
      width: 200,
      height: 200,
      backgroundColor: "black",
      shadowColor: 'black',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },

  cardImage: {
    width: 100,
    height: 150,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 10,
  },
  name: {
    margin: 10,
    flexDirection: "row",
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
    margin: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default MoviesView;
