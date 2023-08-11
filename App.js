// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./app/pages/HomeScreen";
import StatsScreen from "./app/pages/StatsScreen";
import TransferScreen from "./app/pages/TransferScreen";
import HomeHeader from "./app/components/homeHeader";
import SignupScreen from "./app/pages/SignupScreen";
import LoginScreen from "./app/pages/LoginScreen";
import MenuScreen from "./app/pages/MenuScreen";
import NotificationsScreen from "./app/pages/NotificationsScreen";
import ProfileScreen from "./app/pages/ProfileScreen";
import CardScreen from "./app/pages/CardScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: (props) => (
              <HomeHeader {...props} navigation={navigation} />
            ),
            headerShadowVisible: false,
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name="Stats"
          component={StatsScreen}
          options={({ navigation, route }) => ({
            headerTitle: "Balance",
            headerShadowVisible: false,
            headerBackVisible: false,
          })}
        />

        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={({ navigation, route }) => ({
            headerTitle: "",
            headerStyle: {
              backgroundColor: "white",
            },
            headerBackImageSource: require("./app/icons/arrow-circle-left.png"),
            headerShadowVisible: false,
          })}
        />

        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={({ navigation, route }) => ({
            headerTitle: "",
            headerStyle: {
              backgroundColor: "white",
            },
            headerBackImageSource: require("./app/icons/arrow-circle-left.png"),
            headerShadowVisible: false,
          })}
        />

        <Stack.Screen
          name="Card"
          component={CardScreen}
          options={({ navigation, route }) => ({
            headerTitle: "",
            headerStyle: {
              backgroundColor: "white",
            },
            headerBackImageSource: require("./app/icons/arrow-circle-left.png"),
            headerShadowVisible: false,
          })}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation, route }) => ({
            headerTitle: "",
            headerStyle: {
              backgroundColor: "white",
            },
            headerBackImageSource: require("./app/icons/arrow-circle-left.png"),
            headerShadowVisible: false,
          })}
        />

        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={({ navigation, route }) => ({
            headerTitle: "",
            headerStyle: {
              backgroundColor: "white",
            },
            headerBackImageSource: require("./app/icons/arrow-circle-left.png"),
            headerShadowVisible: false,
          })}
        />

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
