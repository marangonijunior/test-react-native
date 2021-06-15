import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Location from "expo-location";

import WeatherAPI from "../services/weather";

export default function Weather() {
  const [location, setLocation] = useState<any>();
  const [weather, setWeather] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<any>(null);

  const getLocaton = () => {
    Location.requestForegroundPermissionsAsync().then((item) => {
      const { status } = item;
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      } else {
        setErrorMsg("Waiting..");
        Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        }).then((item) => {
          setLocation(item);
          let coord = {
            lat: item.coords.latitude,
            lng: item.coords.longitude,
          };
          WeatherAPI.searchWeather(coord).then((item) => {
            if (item.main) {
              setWeather(item);
              setErrorMsg(null);
            } else {
              setErrorMsg("Not was possible get the information from weather.");
            }
          });
        });
      }
    });
  };

  useEffect(() => {
    getLocaton();
  }, []);

  return (
    <React.Fragment>
      <Text>Weather ;)</Text>
      {errorMsg && <Text>{errorMsg}</Text>}
      {location && (
        <View style={styles.container}>
          <Text>{weather?.name}</Text>
          <Text>Temp: {weather?.main.temp}</Text>
          <Text>Feels like: {weather?.main.feels_like}</Text>
          <Text>Humidity: {weather?.main.humidity}</Text>
        </View>
      )}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
