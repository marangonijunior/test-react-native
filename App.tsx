import { registerRootComponent } from "expo";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Monitor from "./pages/monitor";

export default function App() {
  return (
    <View style={styles.container}>
      <Monitor />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);
