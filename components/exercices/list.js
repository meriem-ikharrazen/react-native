import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-web";

export default function List() {
  const [people, setPeople] = useState([
    { name: "Meriem1", key: 1 },
    { name: "Meriem2", key: 2 },
    { name: "Meriem3", key: 3 },
    { name: "Meriem4", key: 4 },
    { name: "Meriem5", key: 5 },
    { name: "Meriem6", key: 6 },
    { name: "Meriem7", key: 7 },
    { name: "Meriem8", key: 8 },
    { name: "Meriem9", key: 9 },
    { name: "Meriem10", key: 10 },
    { name: "Meriem11", key: 11 },
    { name: "Meriem12", key: 12 },
    { name: "Meriem13", key: 13 },
  ]);

  const pressHandler = (key) => {
    console.log(key);
    setPeople((prev) => prev.filter((person) => person.key != key));
  };

  return (
    // <ScrollView>
    //   {people.map((person) => {
    //     return (
    //       <View key={person.key}>
    //         <Text style={styles.item}>{person.name}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
    //Using FlatList : plus performant
    //keyExtractor si jamais on a id au lieu de key pour dire à React native que le key c'esi id
    <View>
      <FlatList
        numColumns={2}
        data={people}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "grey",
    fontSize: 24,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
