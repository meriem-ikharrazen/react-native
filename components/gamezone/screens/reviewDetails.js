import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ReviewDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ReviewDetails screen</Text>
      <Button title="Go to home page" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
