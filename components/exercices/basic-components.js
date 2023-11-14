import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-web";
import List from "./list";

export default function BasicComponent() {
  const [name, setName] = useState("Meriem");
  const [age, setAge] = useState(0);

  const onChangeName = () => {
    setName("Changed !");
  };

  const onChangeInputText = () => {};

  return (
    <>
      <View style={styles.container}>
        <Text>My name is {name}</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="e.g. Meriemm"
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="e.g. 44"
          onChangeText={(val) => setAge(val)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Update state" onPress={onChangeName} />
        </View>
        <List></List>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: "2px",
    color: "blue",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
