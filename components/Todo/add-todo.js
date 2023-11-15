import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

export default function AddTodo({ addToTodoList }) {
  const [todo, setTodo] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setTodo(val)}
        placeholder="new todo..."
      ></TextInput>
      <Button
        title="Add to Todo List"
        onPress={() => addToTodoList(todo)}
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#777",
    borderRadius: 10,
  },
});
