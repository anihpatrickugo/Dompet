import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

const HomeHeader = ({ navigation }) => {
  return (
    // header
    <View style={styles.header}>
      <View>
        <Text style={styles.companyName}>Dompet Digital</Text>
        <Text style={styles.userName}>Active!</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Image
          source={require("../images/Profile.png")}
          height={30}
          width={30}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //   header styles
  header: {
    flexDirection: "row",
    width: "97%",
    marginVertical: 15,
    // backgroundColor: "yellow",
    justifyContent: "space-between",
  },

  companyName: {
    color: "indigo",
    fontSize: 24,
    fontWeight: "700",
  },

  userName: {
    color: "#BDBDBD",
  },
});
export default HomeHeader;
