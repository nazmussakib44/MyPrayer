import * as React from "react";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import Main from "./src/main";

const App = () => {
  return (
    <PaperProvider>
        <Main />
        <StatusBar style="auto" />
    </PaperProvider>
  );
}

export default App;

