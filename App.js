import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>DoneWithIt</Text>
      <Text>
        You can now easily sell stuff that you own but would want to get a
        shilling for it
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

// this is styles object put all your stylings here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
