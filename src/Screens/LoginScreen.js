import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const LoginScreen = ({ navigation }) => {
  const [Useremail, setUseremail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Retrieve the stored user information from AsyncStorage
      const storedUseremail = await AsyncStorage.getItem("USEREMAIL");
      const storedPassword = await AsyncStorage.getItem("PASSWORD");
      const name = await AsyncStorage.getItem('USERNAME');

      if (Useremail === storedUseremail && Password === storedPassword) {
        Toast.show({
          type: "success",
          text1: "Login Successful",
          text2: "You are now logged in!",
        });

        navigation.navigate("TabRoutes", {data:name} );
      } else {
        // Handle unsuccessful login (e.g., show an error message)
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Invalid credentials. Please try again.",
        });
      }
    } catch (error) {
      // Handle errors that occurred during the login process
      Toast.show({
        type: "error",
        text1: "Error",
        text2: { error },
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "flex-end", marginEnd: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen" )}>
          <Text style={{ color: "grey", fontSize: 15, fontWeight: "500" }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      {/* Heading */}
      <View style={{ marginTop: 20 }}>
        <Text style={styles.heading}>SIGN IN</Text>
        <Text style={{ alignSelf: "center", fontWeight: "300", color: "grey" }}>
          Access Your Account
        </Text>
      </View>
      {/* Input Fields */}
      <View style={styles.footer}>
        <TextInput
          placeholderTextColor={"grey"}
          placeholder="Enter Your Email"
          value={Useremail}
          style={styles.textinput}
          autoCapitalize="none"
          onChangeText={(text) => setUseremail(text)}
        />
        <TextInput
          placeholderTextColor={"grey"}
          placeholder="Enter Your Password"
          value={Password}
          style={styles.textinput}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <View style={styles.login}>
          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                padding: 12,
                alignSelf: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        
      </View>
      <View
          style={{
            flex:1,
            flexDirection: "row",
            justifyContent: 'center', // Aligns content to the bottom of the container
            alignItems: 'center', // Centers content horizontally
            bottom:-50
          }}
        >
          <Text>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#0E86D4" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 25,
    fontWeight: "700",
    alignSelf: "center",
    borderRadius: 10,
  },
  textinput: {
    color: "#323232",
    borderWidth: 1,
    padding: 10,
    borderColor: "#323232",
    margin: 15,
    marginLeft: 10,
    borderRadius: 10,
  },
  footer: {
    borderRadius: 30,
    marginTop: 70,
    // backgroundColor: "#323232",
    padding: 30,
  },
  login: {
    width: "93%",
    alignSelf: "center",
    // height: 50,
    borderRadius: 10,
    backgroundColor: "#323232",
    borderWidth: 1,
    borderColor: "white",
  },
});

export default LoginScreen;
