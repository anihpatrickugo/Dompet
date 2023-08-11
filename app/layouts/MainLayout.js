import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  // Platform,
  // StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const MainLayout = ({ children, navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* all chillderen component */}

        {children}

        {/* Recent Transanctions history */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.recentTransactions}>
            <View style={styles.transactionsHead}>
              <Text
                style={{ color: "indigo", fontSize: 18, fontWeight: "bold" }}
              >
                Last Transactions
              </Text>
              <Text style={{ color: "#8438FF" }}>View all</Text>
            </View>

            {/* transanction list */}
            <ScrollView>
              {/* netflix */}
              <View style={styles.transactionList}>
                <View style={styles.transactionLeft}>
                  <Image
                    source={require("../icons/netflix.png")}
                    height={16}
                    width={16}
                  />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      Netflix
                    </Text>
                    <Text style={{ fontSize: 16, color: "lightgray" }}>
                      Transfer
                    </Text>
                  </View>
                </View>

                <View style={styles.transactionRight}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#5B259F",
                      textAlign: "right",
                    }}
                  >
                    ₦121.,000
                  </Text>
                </View>
              </View>

              {/* paypal */}
              <View style={styles.transactionList}>
                <View style={styles.transactionLeft}>
                  <Image
                    source={require("../icons/paypal.png")}
                    height={16}
                    width={16}
                  />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      Paypal
                    </Text>
                    <Text style={{ fontSize: 16, color: "lightgray" }}>
                      Transfer
                    </Text>
                  </View>
                </View>

                <View style={styles.transactionRight}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#5B259F",
                      textAlign: "right",
                    }}
                  >
                    ₦500,000
                  </Text>
                </View>
              </View>

              {/* paylater */}
              <View style={styles.transactionList}>
                <View style={styles.transactionLeft}>
                  <Image
                    source={require("../icons/paylater.png")}
                    height={16}
                    width={16}
                  />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      Paylater
                    </Text>
                    <Text style={{ fontSize: 16, color: "lightgray" }}>
                      Transfer
                    </Text>
                  </View>
                </View>

                <View style={styles.transactionRight}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#5B259F",
                      textAlign: "right",
                    }}
                  >
                    ₦150,000
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        {/* footer */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../icons/setting.png")}
              height={50}
              width={50}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Stats")}>
            <Image
              source={require("../icons/chart-2.png")}
              height={50}
              width={50}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image
              source={require("../icons/notification-bing.png")}
              height={50}
              width={50}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Card")}>
            <Image
              source={require("../icons/wallet-2.png")}
              height={50}
              width={50}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: 0,
    paddingHorizontal: 16,
    position: "relative",
  },

  //   recent transanctions
  recentTransactions: {
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  transactionsHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  transactionList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //   left hand
  transactionLeft: {
    flex: 2,
    flexDirection: "row",
  },

  //   right hand
  transactionRight: {
    flex: 1,
  },

  //   footer
  footer: {
    width: "100%",
    backgroundColor: "indigo",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 16,
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
  },
});

export default MainLayout;
