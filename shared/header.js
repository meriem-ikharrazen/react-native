import React from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={() => {}}
        style={styles.icon}
      />
      <Image source={require("../assets/heart_logo.png")} style={styles.logo} />
      <Text style={styles.headerText}>Test</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    color: "#333",
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  logo: {
    height: 25,
    width: 26,
    marginHorizontal: 10,
  },
});
