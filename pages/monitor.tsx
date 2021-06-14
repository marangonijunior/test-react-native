import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getUniqueId } from "react-native-device-info";
import Weather from "../components/weather";

export default function Monitor() {
  const [deviceID, setDeviceID] = useState<string>("");

  useEffect(() => {
    setDeviceID(getUniqueId());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Device ID</Text>
      <Text>{deviceID != "unknown" ? deviceID : "- - -"}</Text>
      <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
