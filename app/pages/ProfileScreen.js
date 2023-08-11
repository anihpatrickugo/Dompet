import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* profile icon */}

      <View style={styles.profileIcon}>
        <Image
          style={styles.profileImage}
          source={require("../images/Profile.png")}
          height={45}
          width={45}
        />
        <View style={styles.profileLabel}>
          <Text style={styles.changeText}>Change</Text>
        </View>
      </View>

      <View style={styles.titleContainner}>
        <Text style={styles.title}>Ugochukwu Patrick</Text>
        <TouchableOpacity>
          <Image
            style={styles.linkIcon}
            source={require("../icons/edit-2.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>
      </View>

      {/* links container */}
      <View style={styles.links}>
        {/*Linked account. */}
        <TouchableOpacity style={styles.singleLink}>
          <Text style={styles.linkName}>Linked Account</Text>
          <Image
            style={styles.linkIcon}
            source={require("../icons/Arrow-Right.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>

        {/*Privacy and security */}
        <TouchableOpacity style={styles.singleLink}>
          <Text style={styles.linkName}>Privacy and security</Text>
          <Image
            style={styles.linkIcon}
            source={require("../icons/Arrow-Right.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>

        {/*Login settings. */}
        <TouchableOpacity style={styles.singleLink}>
          <Text style={styles.linkName}>Login Settings</Text>
          <Image
            style={styles.linkIcon}
            source={require("../icons/Arrow-Right.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>

        {/*Service center */}
        <TouchableOpacity style={styles.singleLink}>
          <Text style={styles.linkName}>Service Center</Text>
          <Image
            style={styles.linkIcon}
            source={require("../icons/Arrow-Right.png")}
            height={25}
            width={25}
          />
        </TouchableOpacity>
      </View>
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

  profileIcon: {
    position: "relative",
    // backgroundColor: "green",
  },

  profileLabel: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: 3,
    right: 0,
    width: "15%",
    height: "30%",
    backgroundColor: "indigo",
    opacity: 0.7,
    borderBottomEndRadius: 45,
    borderBottomStartRadius: 45,
  },

  changeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "700",
  },

  titleContainner: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
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
    marginVertical: 10,
  },

  linkIcon: {
    marginHorizontal: 8,
  },
  linkName: {
    flex: 1,
    height: 30,
    paddingLeft: 24,
    fontSize: 16,
    fontWeight: "600",
    // backgroundColor: "blue",
    color: "indigo",
  },
});
export default SettingsScreen;
