import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import MainScreen from "./screens/MainScreen/MainScreen";
import ID from "./CardDetails/[id]"
import Order from "./Order/Order"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main"  component={MainScreen} />
        <Stack.Screen name="ID"  component={ID} />
        <Stack.Screen name="Order"  component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
