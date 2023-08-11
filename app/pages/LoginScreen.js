import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link } from "@react-navigation/native";
import { Formik } from "formik";

const LoginScreen = ({ navigation }) => {
  const [socialOption, setSocialOption] = useState("google");
  const [hidePassword, setHidePassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tittle}>Welcome back in Digital Wallets</Text>

      <Text style={styles.label}>Log in with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity
          style={[
            styles.socialButton,
            {
              backgroundColor: socialOption === "google" ? "#4368C7" : "white",
            },
          ]}
          onPress={() => setSocialOption("google")}
        >
          <Image
            style={styles.buttonIcon}
            source={require("../icons/google.png")}
            height={15}
            width={15}
          />
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.socialButton,
            {
              backgroundColor:
                socialOption === "facebook" ? "#4368C7" : "white",
            },
          ]}
          onPress={() => setSocialOption("facebook")}
        >
          <Image
            style={styles.facebookIcon}
            source={require("../icons/Facebook.png")}
            height={15}
            width={15}
          />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* input */}
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.inputContainer}>
            {/* username */}
            <View style={styles.input}>
              <Image
                style={styles.inputIcon}
                source={require("../icons/profile.png")}
                height={25}
                width={25}
              />
              <TextInput
                style={styles.inputField}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username"
                keyboardType="default"
              />
            </View>

            {/* password */}
            <View style={styles.input}>
              <Image
                style={styles.inputIcon}
                source={require("../icons/key-square.png")}
                height={25}
                width={25}
              />
              <TextInput
                style={styles.inputField}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                // value={values.password}
                placeholder="Password"
                secureTextEntry={hidePassword}
              />
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Image
                  style={styles.inputIcon}
                  source={require("../icons/Eye-slash.png")}
                  height={25}
                  width={25}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>

      {/* button */}
      <TouchableOpacity
        style={styles.action}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.actionText}>Login</Text>
      </TouchableOpacity>

      {/* login or signup option */}
      <Text style={styles.options}>
        Don't have an account yet?{" "}
        <Link to={{ screen: "Signup" }} style={{ color: "#81C2FF" }}>
          Register
        </Link>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 28,
    display: "flex",
    alignItems: "center",
  },

  tittle: {
    textAlign: "center",
    color: "indigo",
    fontSize: 24,
    fontWeight: "bold",
    width: "80%",
    marginVertical: 32,
  },

  label: {
    color: "#BDBDBD",
  },

  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 18,
    paddingHorizontal: 36,
  },

  socialButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "45%",
    height: 48,
    marginHorizontal: 16,
    borderRadius: 12,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "#F2F2F2",
  },
  buttonText: {
    color: "#BDBDBD",
    fontWeight: "bold",
  },

  facebookIcon: {
    backgroundColor: "#4368C7",
    borderRadius: 8,
  },

  //   input

  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
    paddingVertical: 8,
    backgroundColor: "#F2F2F2",
    borderRadius: 16,
  },
  inputIcon: {
    marginHorizontal: 8,
  },
  inputField: {
    flex: 1,
    height: 40,
    padding: 0,
    marginHorizontal: 12,
  },

  //   button
  action: {
    marginVertical: 16,
    paddingVertical: 16,
    width: "70%",
    backgroundColor: "#5B259F",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 16,
  },

  actionText: {
    fontSize: 18,
    color: "white",
  },

  //   login or signup option
  options: {
    color: "grey",
  },
});

export default LoginScreen;
