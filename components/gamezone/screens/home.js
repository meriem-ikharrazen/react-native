import { useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import * as Font from "expo-font";
import { globalStyles } from "../../../styles/global";
import Card from "../../../shared/card";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  //Pour la navigation on peut aussi utiliser navigation.push("ReviewDetails");

  const [reviews, setReviews] = useState([
    { title: "review 1", rating: 5, body: "body 1", key: "1" },
    { title: "review 2", rating: 4, body: "body 2", key: "2" },
    { title: "review 3", rating: 3, body: "body 3", key: "3" },
  ]);

  const [modalOpen, setOpneModal] = useState(false);

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home screen</Text>
      <Button
        title="Go to detail page"
        onPress={() => navigation.navigate("ReviewDetails")}
      /> */}

      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setOpneModal(false)}
          />
          <Text>Hello from the modal :)</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setOpneModal(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            {/* <Text style={globalStyles.item}>{item.title}</Text> */}
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 10,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    borderColor: "white",
    marginBottom: 0,
    marginTop: 20,
  },
});
