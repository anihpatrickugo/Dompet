import React from "react";
import { View, Image } from "react-native";

const BackHeader = ({ navigation }) => {
  return (
    <View onPress={() => navigation.navigate("/")}>
      <Image
        source={require("../icons/arrow-circle-left.png")}
        height={30}
        width={30}
      />
    </View>
  );
};

export default BackHeader;
