import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const ProfileScreen = ({ navigation }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("USERNAME");
      const savedemail = await AsyncStorage.getItem("USEREMAIL");
      const savedphone = await AsyncStorage.getItem("PHONENO");

      setname(savedUser);
      setemail(savedemail);
      setphone(savedphone);
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async () => {
    try {
      // In this you can also remove the details of user by using remove item
      //   await AsyncStorage.removeItem("USEREMAIL");
      //   await AsyncStorage.removeItem("PASSWORD");
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "black",
          padding: 20,
          width: 300,
          height: 200,
          borderRadius: 10,
        }}
      >
        <Image
          source={require("../Images/profile-icon-design-free-vector.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            alignSelf: "center",
          }}
        />
        <View style={{ alignSelf: "center", margin: 10 }}>
          <Animatable.Text animation="fadeIn" duration={2000}  style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            {name}
          </Animatable.Text>
        </View>
      </View>

      <View style={{marginTop:50,alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20}}>Email: </Text>
        <Text style={{fontSize:20}}>{email}</Text>

        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20}}>PhoneNo.: </Text>
        <Text style={{fontSize:20}}>{phone}</Text>
        </View>
      </View>

      <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-evenly'}} >
        <TouchableOpacity style={{backgroundColor:'black',width:50,height:40,padding:10,borderRadius:10}} onPress={()=> navigation.navigate('FavoriteScreen')}>
          <Icon name="heart" size={20} color='white' style={{alignSelf:'center'}}/>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'black',width:50,height:40,padding:10,borderRadius:10}} onPress={()=> navigation.navigate('HomeScreen')}>
          <Icon name="eye" size={20} color='white' style={{alignSelf:'center'}}/>
        </TouchableOpacity>
      </View>

      
      

      <View style={{backgroundColor:'red',marginTop:50,padding:20,borderRadius:10}}>
        <TouchableOpacity onPress={() => removeUser()}>
          <Text style={{fontWeight:'600',fontSize:20,alignSelf:'center'}}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingVertical: 10,
  },
});

export default ProfileScreen;
