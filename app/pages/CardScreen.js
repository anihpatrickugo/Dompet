import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const CardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Card</Text>
      {/* card iimage */}
      <TouchableOpacity style={styles.imageContainner}>
        <Image
          style={styles.image}
          source={require("../images/card.png")}
          height={25}
          width={25}
        />
      </TouchableOpacity>

      {/* card details */}
      <View style={styles.cardDetails}>
        {/* name */}
        <View style={styles.detailItem}>
          <Text style={styles.key}>Name</Text>
          <Text style={styles.value}>Anih-Patrick Ugochukwu</Text>
        </View>

        {/* bank */}
        <View style={styles.detailItem}>
          <Text style={styles.key}>Bank</Text>
          <Text style={styles.value}>Kuda</Text>
        </View>

        {/* Account */}
        <View style={styles.detailItem}>
          <Text style={styles.key}>Account</Text>
          <Text style={styles.value}>_ _ _ _ 245</Text>
        </View>

        {/* status */}
        <View style={styles.detailItem}>
          <Text style={styles.key}>Status</Text>
          <Text style={styles.value}>Active</Text>
        </View>

        {/* valid */}
        <View style={styles.detailItem}>
          <Text style={styles.key}>Valid</Text>
          <Text style={styles.value}>2023 - 2028</Text>
        </View>
      </View>

      {/* close */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>Close</Text>
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

  imageContainner: {
    width: "100%",
    marginVertical: 16,
  },

  image: {
    width: "100%",
    borderRadius: 40,
  },

  cardDetails: {
    width: "100%",
    paddingLeft: 45,
    paddingRight: 25,
  },

  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 6,
  },

  key: {
    fontSize: 16,
    color: "#BDBDBD",
  },

  value: {
    fontSize: 16,
    width: "70%",
  },

  closeText: {
    color: "indigo",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 32,
  },
});
export default CardScreen;
