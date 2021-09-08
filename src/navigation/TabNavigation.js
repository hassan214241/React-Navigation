import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { HomeStack } from "./HomeStack";
import { Settings } from "../screens";
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        //options={{ headerShown: false }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={"black"} size={26} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        // options={{ headerShown: false }}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={"black"} size={26} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
