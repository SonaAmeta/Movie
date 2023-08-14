import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = ({ navigation, props }) => {
  const [Username, setUsername] = useState("");
  const [Useremail, setUseremail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");

  const isEmailValid = (Useremail) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(Useremail);
  };

  const handleSubmit = () => {
    if (Username === "" || Useremail === "" || Password === "" || ConfirmPassword === "" || PhoneNo === "") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill all the details",
      });

      return false;
    }

    if (!isEmailValid(Useremail)) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Invalid Email, Please enter a valid email address.",
      });

      return;
    }

    const validPassRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        Password
      );
    if (validPassRegex === false) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2:
          "Password Must Contain 1 Upper Case, 1Special Character (!@#$&*) and should be of atleast 8 characters",
      });
    } else {
      AsyncStorage.setItem("USERNAME", Username);
      AsyncStorage.setItem("USEREMAIL", Useremail);
      AsyncStorage.setItem("PASSWORD", Password);
      AsyncStorage.setItem("PHONENO", PhoneNo);
      Toast.show({
        type: "success",
        text1: "Registration Successful",
        text2: "You are now Registered!",
      });

      navigation.navigate("LoginScreen");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "flex-end", marginEnd: 10 }}>
        <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')}>
          <Text style={{ color: "grey", fontSize: 15, fontWeight: "500" }}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      {/* Heading */}
      <View style={{ marginTop: 20 }}>
        <Text style={styles.heading}>JOIN US</Text>
        <Text style={{ alignSelf: "center", fontWeight: "300", color: "grey" }}>
          Create Your Account
        </Text>
      </View>
      {/* Input Feilds */}
      <KeyboardAwareScrollView viewIsInsideTabBar={true} enableOnAndroid={true}>
      <View style={styles.footer}>
        <TextInput
          placeholderTextColor={"grey"}
          placeholder="Enter Your Username"
          value={Username}
          style={styles.textinput}
          autoCapitalize="none"
          onChangeText={(text) => setUsername(text)}/>

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
        />

        <TextInput
          placeholderTextColor={"grey"}
          placeholder="Confirm Your Password"
          value={ConfirmPassword}
          style={styles.textinput}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TextInput
          placeholderTextColor={"grey"}
          placeholder="Enter Your Phone Number"
          value={PhoneNo}
          style={styles.textinput}
          keyboardType="numeric"
          autoCapitalize="none"
          onChangeText={(text) => setPhoneNo(text)}
        />

        <View  style={styles.signup}>
          <TouchableOpacity
            onPress={() => handleSubmit()}
          >
            <Text style={{ color: "white", fontWeight: "500" ,padding:12,alignSelf:'center'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAwareScrollView>
      

      <View
        style={{ alignSelf: "center", marginTop: -10, flexDirection: "row" }}
      >
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{ fontSize: 15, fontWeight: "600", color: "#0E86D4" }}>
            Log In
          </Text>
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
  signup: {
    width: '93%',
    alignSelf:'center',
    // height: 50,
    borderRadius: 10,
    backgroundColor: "#323232",
    borderWidth: 1,
    borderColor: "white",
  },
});

export default RegisterScreen;
