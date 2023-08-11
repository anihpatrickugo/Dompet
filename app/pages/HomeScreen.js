import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout navigation={navigation}>
      <View>
        {/* Account balance */}
        <View style={styles.balanceContent}>
          <Text style={styles.text1}>Balance</Text>
          <Text style={styles.text2}>₦23,000,000</Text>
        </View>

        {/* featured section */}
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.featured}>
            {/* transfer icon */}
            <TouchableOpacity
              style={styles.transfer}
              onPress={() => navigation.navigate("Transfer")}
            >
              <Image
                source={require("../icons/export.png")}
                height={25}
                width={25}
              />
              <Text style={{ color: "#8438FF", textAlign: "center" }}>
                Transfer
              </Text>
            </TouchableOpacity>

            {/* Pembayaran icon */}
            <TouchableOpacity style={styles.transfer}>
              <Image
                source={require("../icons/convert.png")}
                height={25}
                width={25}
              />
              <Text
                style={{
                  color: "#8438FF",
                  textAlign: "center",
                }}
              >
                Payment
              </Text>
            </TouchableOpacity>

            {/* Top up icon */}
            <TouchableOpacity style={styles.transfer}>
              <Image
                source={require("../icons/add-circle.png")}
                height={25}
                width={25}
              />
              <Text style={{ color: "#8438FF", textAlign: "center" }}>
                Top up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  //   balance content styels
  balanceContent: {
    backgroundColor: "#5B259F",
    paddingVertical: 30,
    paddingHorizontal: 50,
    borderRadius: 60,
  },
  text1: {
    color: "white",
    fontSize: 16,
  },
  text2: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  // featured section
  featured: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 5,
    width: "80%",
  },
});

export default HomeScreen;
