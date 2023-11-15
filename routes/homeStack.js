import Home from "../components/gamezone/screens/home";
import ReviewDetails from "../components/gamezone/screens/reviewDetails";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: "Detail Page",
            headerStyle: { backgroundColor: "coral" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "My home",
            headerStyle: { backgroundColor: "coral" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
