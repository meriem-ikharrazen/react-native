import { useState } from "react";
import Home from "./components/gamezone/screens/home";
import { StyleSheet } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Navigator from "./routes/homeStack";
import Router from "./routes/homeStack";

const getFonts = () => {
  return Font.loadAsync({
    Nunito: require("./assets/fonts/NunitoSans_7pt-Regular.ttf"),
  });
};

export default function App() {
  // return <MainToDo />;

  //Gamezone
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    // return <Home />;
    return <Router />;
  }
  return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
    />
  );
}

const styles = StyleSheet.create({});
