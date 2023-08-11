import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const MenuScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* links container */}
      <View style={styles.links}>
        {/* profile */}
        <TouchableOpacity
          style={styles.singleLink}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.linkIcon}
            source={require("../icons/profile-icon.png")}
            height={25}
            width={25}
          />
          <Text style={styles.linkName}>Profile</Text>
          <Image
            style={styles.linkIcon}
            source={require("../icons/Arrow-Right.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>

        {/* notifications */}
        <TouchableOpacity
          style={styles.singleLink}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.linkIcon}
            source={require("../icons/notification.png")}
            height={25}
            width={25}
          />
          <Text style={styles.linkName}>Notifications</Text>
          <Image
            style={styles.linkIcon}
            source={require("../icons/Arrow-Right.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>

        {/* wallet */}
        <TouchableOpacity style={styles.singleLink}>
          <Image
            style={styles.linkIcon}
            source={require("../icons/wallet-3.png")}
            height={25}
            width={25}
          />
          <Text style={styles.linkName}>Your Wallet</Text>
          <Image
            style={styles.linkIcon}
            source={require("../icons/Arrow-Right.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>

        {/* security */}
        <TouchableOpacity style={styles.singleLink}>
          <Image
            style={styles.linkIcon}
            source={require("../icons/key-square2.png")}
            height={25}
            width={25}
          />
          <Text style={styles.linkName}>Login Settings</Text>
          <Image
            style={styles.linkIcon}
            source={require("../icons/Arrow-Right.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>

        {/* service center */}
        <TouchableOpacity style={styles.singleLink}>
          <Image
            style={styles.linkIcon}
            source={require("../icons/call-calling.png")}
            height={25}
            width={25}
          />
          <Text style={styles.linkName}>Service Center</Text>
          <Image
            style={styles.linkIcon}
            source={require("../icons/Arrow-Right.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>
      </View>

      {/* logout button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.linkIcon}
          source={require("../icons/logout.png")}
          height={25}
          width={25}
        />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingHorizontal: 16,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "indigo",
    marginVertical: 12,
  },

  links: {
    width: "100%",
    // backgroundColor: "red",
  },

  singleLink: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  linkIcon: {
    marginHorizontal: 8,
  },
  linkName: {
    flex: 1,
    height: 30,
    padding: 0,
    fontSize: 18,
    fontWeight: "700",
    // backgroundColor: "blue",
    color: "indigo",
  },

  logoutButton: {
    marginVertical: 8,
    alignItems: "center",
  },

  logoutText: {
    color: "indigo",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});
export default MenuScreen;
