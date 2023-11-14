import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todo-item";
import AddTodo from "./components/add-todo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy a coffe", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on thse switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prev) => prev.filter((val) => val.key != key));
  };

  const addToTodoList = (name) => {
    if (name.length > 3) {
      setTodos((prev) => {
        return [...prev, { text: name, key: (prev.length + 1).toString() }];
      });
    } else {
      return Alert.alert("Ouups!", "todo must be over one char", [
        { text: "Understood", onPress: () => console.log("alert closed!") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addToTodoList={addToTodoList} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
