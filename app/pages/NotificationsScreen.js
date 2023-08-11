import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      {/* all notifications */}
      <ScrollView style={styles.allnotifications}>
        {/* now notifications */}
        <View style={styles.notificationsList}>
          <Text style={styles.now}>Now</Text>

          <TouchableOpacity style={styles.singleNotification}>
            <View style={styles.details}>
              <Text style={styles.date}>29 July 2023, 7.14 PM</Text>
              <Text style={styles.message}>
                You received ₦100,000 from Aniekwe Ifeanyi Samuel
              </Text>
              <Text style={styles.description}>Pay debt</Text>
            </View>
            <Image
              style={styles.linkIcon}
              source={require("../icons/Arrow-Right.png")}
              height={25}
              width={25}
            />
            <Text style={styles.unread}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleNotification}>
            <View style={styles.details}>
              <Text style={styles.date}>29 July 2023, 7.14 PM</Text>
              <Text style={styles.message}>
                You spent ₦32,000 for Coffe at Genesis Cinnema, Enugu.
              </Text>
              <Text style={styles.description}>Buy drink</Text>
            </View>
            <Image
              style={styles.linkIcon}
              source={require("../icons/Arrow-Right.png")}
              height={25}
              width={25}
            />
            <Text style={styles.unread}>.</Text>
          </TouchableOpacity>
        </View>

        {/* yesterday Notifications */}
        <View style={styles.notificationsList}>
          <Text style={styles.now}>Yesterday</Text>

          <TouchableOpacity style={styles.singleNotification}>
            <View style={styles.details}>
              <Text style={styles.date}>29 July 2023, 7.14 PM</Text>
              <Text style={styles.message}>
                You received ₦100,000 from Aniekwe Ifeanyi Samuel
              </Text>
              <Text style={styles.description}>Pay debt</Text>
            </View>
            <Image
              style={styles.linkIcon}
              source={require("../icons/Arrow-Right.png")}
              height={25}
              width={25}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleNotification}>
            <View style={styles.details}>
              <Text style={styles.date}>29 July 2023, 7.14 PM</Text>
              <Text style={styles.message}>
                You spent ₦32,000 for Coffe at Genesis Cinnema, Enugu.
              </Text>
              <Text style={styles.description}>Buy drink</Text>
            </View>
            <Image
              style={styles.linkIcon}
              source={require("../icons/Arrow-Right.png")}
              height={25}
              width={25}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.singleNotification}>
            <View style={styles.details}>
              <Text style={styles.date}>29 July 2023, 7.14 PM</Text>
              <Text style={styles.message}>
                You spent ₦32,000 for Coffe at Genesis Cinnema, Enugu.
              </Text>
              <Text style={styles.description}>Buy drink</Text>
            </View>
            <Image
              style={styles.linkIcon}
              source={require("../icons/Arrow-Right.png")}
              height={25}
              width={25}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
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

  allnotifications: {
    width: "100%",
  },

  notificationsList: {
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },
  now: {
    height: 30,
    padding: 0,
    fontSize: 18,
    fontWeight: "700",
    // backgroundColor: "blue",
    color: "indigo",
  },
  singleNotification: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 4,
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#F2F2F2",
    borderRadius: 15,
    position: "relative",
  },

  details: {
    width: "80%",
    paddingLeft: 20,
  },

  date: {
    color: "#BDBDBD",
    marginVertical: 8,
  },

  message: {
    color: "#363853",
    fontWeight: "bold",
    fontSize: 16,
  },

  description: {
    color: "#BDBDBD",
    marginVertical: 8,
  },

  unread: {
    color: "red",
    fontWeight: "bold",
    fontSize: 50,
    position: "absolute",
    top: -50,
    right: 0,
  },
});

export default NotificationsScreen;
