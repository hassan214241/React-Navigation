import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Chat } from "../screens/Chat";
import { Email } from "../screens";
import { Notification } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Email"
        component={Email}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="email" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="notifications-on" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
