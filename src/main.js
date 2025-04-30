import * as React from "react";
import BottomNav from "./screens/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

const Main = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <SafeAreaProvider> */}
        {/* <NavigationContainer> */}
          <BottomNav />
        {/* </NavigationContainer> */}
      {/* </SafeAreaProvider> */}
    </GestureHandlerRootView>
  );
};

export default Main;
