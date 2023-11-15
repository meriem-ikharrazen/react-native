import { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { globalStyles, images } from "../../../styles/global";
import Card from "../../../shared/card";

export default function ReviewDetails({ navigation, route }) {
  const { title, rating, body } = route.params;
  return (
    <View style={styles.container}>
      {/* <Text style={{ marginBottom: 10 }}>ReviewDetails screen</Text>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{body}</Text>
      <Button title="Go to home page" onPress={() => navigation.goBack()} /> */}
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: "row",
  },
});
