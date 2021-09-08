import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home, Profile,Contact } from "../screens";
const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        
      />
    </Stack.Navigator>
  );
};
