import { StatusBar } from "expo-status-bar";
// import Animated from "react-native-reanimated";
import * as React from "react";
import 'react-native-gesture-handler';
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { HomeDrawer } from "./src/navigation/HomeDrawer";

export default function App() {
  return (
    <NavigationContainer>
      < HomeDrawer />
    </NavigationContainer>
  );
}
