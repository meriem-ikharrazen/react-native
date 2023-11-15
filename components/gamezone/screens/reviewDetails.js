import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../../../styles/global";

export default function ReviewDetails({ navigation, route }) {
  const { title, rating, body } = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10 }}>ReviewDetails screen</Text>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{body}</Text>
      <Button title="Go to home page" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
