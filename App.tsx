import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import "react-native-gesture-handler";

import { COLORS } from "./utils/colors";
import LatestUplodesScreen from "./screens/LatestUplodesScreen";
import { SIZES } from "./utils/sizes";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.backgroundColor500,
            },
            headerTitleStyle: {
              fontSize: 14,
            },
            contentStyle: {
              backgroundColor: COLORS.backgroundColor,
            },
            headerTintColor: COLORS.textGray,
          }}
        >
          <Stack.Screen
            name="LatestUploades"
            component={LatestUplodesScreen}
            options={{ title: "Latest Uploads" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
