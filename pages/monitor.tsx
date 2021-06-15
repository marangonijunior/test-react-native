import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Device from "expo-device";

import Weather from "../components/weather";

export default function Monitor() {
  const [deviceName, setDeviceName] = useState<any>("");
  const [deviceVersion, setDeviceVersion] = useState<any>("");

  useEffect(() => {
    setDeviceName(Device.osName);
    setDeviceVersion(Device.osVersion);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Device NAME</Text>
      <Text testID="NAME">{deviceName && deviceName}</Text>
      <Text>Device VERSION</Text>
      <Text>{deviceVersion != "unknown" ? deviceVersion : "- - -"}</Text>
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
