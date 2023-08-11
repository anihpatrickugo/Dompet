import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const TransferScreen = () => {
  const [currency, setCurrency] = useState("Naira");
  const [value, setValue] = useState("");

  const finalValue = () => {
    // adding commas to every last three digits
    const initialValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (currency === "Naira") {
      return "₦ " + (initialValue === "" ? "0" : initialValue);
    }
    return "$ " + (initialValue === "" ? "0" : initialValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.amount}
        onChangeText={() => setValue(value)}
        value={finalValue()}
        keyboardType="default"
      />

      {/* picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={currency}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
        >
          <Picker.Item label="Naira" value="Naira" />
          <Picker.Item label="Dollar" value="US Dollar" />
        </Picker>
      </View>

      {/* buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "4")}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "5")}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "6")}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "7")}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "8")}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "9")}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "00")}
        >
          <Text style={styles.buttonText}>00</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(value + "0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setValue("")}>
          <Image
            style={styles.button}
            source={require("../icons/close-circle.png")}
          />
        </TouchableOpacity>
      </View>

      {/* transfer button */}
      <TouchableOpacity style={styles.transferButton}>
        <Text style={styles.transferButtonText}>Transfer</Text>
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
  amount: {
    fontSize: 24,
    fontWeight: "700",
    color: "indigo",
  },
  pickerContainer: {
    borderRadius: 60,
    width: "80%",
    marginVertical: 32,
  },
  picker: {
    height: 50,
    width: "100%",
    backgroundColor: "#F2F2F2",
  },

  buttons: {
    width: "75%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },

  button: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },

  buttonText: {
    fontSize: 24,
    color: "#363853",
  },

  transferButton: {
    width: "55%",
    backgroundColor: "indigo",
    marginTop: 48,
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
  },
  transferButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default TransferScreen;
