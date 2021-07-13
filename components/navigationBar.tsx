import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";

export default function NavigationBar({
  navigation,
  previous,
}: StackHeaderProps) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="React Native" />

      {previous ? null : (
        <Appbar.Action
          icon="cart"
          onPress={() => {
            navigation.navigate("Troller");
          }}
        />
      )}
    </Appbar.Header>
  );
}
