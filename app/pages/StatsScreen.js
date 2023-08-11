import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout navigation={navigation}>
      <View>
        {/* Account balance */}
        <View style={styles.chartContainer}>
          <Image
            source={require("../images/chart.png")}
            height={25}
            width={25}
          />
        </View>

        {/* Balance section */}
        <View style={styles.balance}>
          <Text style={styles.balanceTitle}>Balance</Text>
          <Text style={styles.balanceValue}>₦23,000,000</Text>
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  //   balance content styels
  chartContainer: {
    width: "100%",
    marginHorizontal: 20,
  },

  // balance section
  balance: {
    width: "100%",
    alignItems: "center",
    marginVertical: 16,
  },

  balanceTitle: {
    color: "gray",
    marginVertical: 6,
  },

  balanceValue: {
    color: "#9038FF",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreen;
