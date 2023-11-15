import About from "../components/gamezone/screens/about";
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import Home from "../components/gamezone/screens/home";
import ReviewDetails from "../components/gamezone/screens/reviewDetails";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ route, navigation }) {
  console.log("params", route);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="ReviewDetails" component={ReviewDetails} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
