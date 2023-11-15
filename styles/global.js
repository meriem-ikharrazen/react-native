import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontFamily: "Nunito",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 2,
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
