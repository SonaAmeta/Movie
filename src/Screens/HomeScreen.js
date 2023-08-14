// Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA0YmZiOWI4ZmZmZWU3NTRlZjlkNWI1Zjc1OGRiNiIsInN1YiI6IjY0ZDM4MWMzMDM3MjY0MDEzOTE1NjhlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rWBaYe1tVbYvCD1dM5SWYaH2dSg-ywUUMyPAkntdy7Q
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MoviesView from "./MovieView";
import WatchlistScreen from "./WatchlistScreen";
import * as Animatable from "react-native-animatable";



const HomeScreen = ({ route, navigation }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [watchlistmovie, setWatchlistmovie] = useState([]);

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 

  const data = async () => {
    try {
      const storedUseremail = await AsyncStorage.getItem("USEREMAIL");
      const username = await AsyncStorage.getItem("USERNAME");
      if (storedUseremail !== "" && username !== "") {
        setName(username);
        setEmail(storedUseremail);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA0YmZiOWI4ZmZmZWU3NTRlZjlkNWI1Zjc1OGRiNiIsInN1YiI6IjY0ZDM4MWMzMDM3MjY0MDEzOTE1NjhlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rWBaYe1tVbYvCD1dM5SWYaH2dSg-ywUUMyPAkntdy7Q ",
            },
          }
        );
        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };


    const NowPlaying = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTA0YmZiOWI4ZmZmZWU3NTRlZjlkNWI1Zjc1OGRiNiIsInN1YiI6IjY0ZDM4MWMzMDM3MjY0MDEzOTE1NjhlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rWBaYe1tVbYvCD1dM5SWYaH2dSg-ywUUMyPAkntdy7Q ",
            },
          }
        );
        const data = await response.json();
        setWatchlistmovie(data.results);

       
      } catch (error) {
        console.error(error);
      }
    };


  

    data();
    fetchTrendingMovies();
    NowPlaying();
  }, []);



  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.name}>
          <Text style={{ fontSize: 18, fontWeight: "300" }}>Hello, </Text>
          <Animatable.Text style={{ fontSize: 18, fontWeight: "700" }} animation="bounceIn" duration={1500}>{name}</Animatable.Text>
        </View>

        <View>
          <Text style={styles.heading}>Trending Movies</Text>
          <View>
            <FlatList
              horizontal={true}
              data={trendingMovies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Animatable.View style={{ margin: 10 }} animation="bounceIn" duration={1000} >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    }}
                    style={{ width: 100, height: 150, borderRadius: 10 }}
                  />
                </Animatable.View>
              )}
            />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>Watchlist Movies</Text>
          <FlatList
              horizontal={true}
              data={watchlistmovie}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Animatable.View style={{ margin: 10 ,width:100 ,height:170,alignItems:'center'}} animation="bounceIn" duration={1000} >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    }}
                    style={{ width: 100, height: 150, borderRadius: 10 }}
                  />
                  <Text style={{alignSelf:'center',fontWeight:'500'}} numberOfLines={1} >{item.title.length < 10
                ? `${item.title}`
                : `${item.title.substring(0, 32)}...`}</Text>
                </Animatable.View>
              )}
            />
          
         
        </View>

      
        <View>
         <MoviesView/>
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: "white",
    shadowColor: '#171717',
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

export default HomeScreen;
