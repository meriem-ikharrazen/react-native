import { useState } from "react";
import { Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { globalStyles } from "../../../styles/global";

export default function Home({ navigation }) {
  //Pour la navigation on peut aussi utiliser navigation.push("ReviewDetails");
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button
        title="Go to detail page"
        onPress={() => navigation.navigate("ReviewDetails")}
      />
    </View>
  );
}
