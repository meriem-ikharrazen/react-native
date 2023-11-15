import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontFamily: "Nunito",
  },
});
