import { useState } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { globalStyles } from "../../../styles/global";

export default function Home({ navigation }) {
  //Pour la navigation on peut aussi utiliser navigation.push("ReviewDetails");

  const [reviews, setReviews] = useState([
    { title: "review 1", rating: 5, body: "body 1", key: "1" },
    { title: "review 2", rating: 4, body: "body 2", key: "2" },
    { title: "review 3", rating: 3, body: "body 3", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home screen</Text>
      <Button
        title="Go to detail page"
        onPress={() => navigation.navigate("ReviewDetails")}
      /> */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
