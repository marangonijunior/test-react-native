import { registerRootComponent } from "expo";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar } from "react-native-paper";

import NavigationBar from "./components/navigationBar";
import Home from "./pages/home";
import Troller from "./pages/troller";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <NavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Troller" component={Troller} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
