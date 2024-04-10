import * as React from "react";
import { Provider as StoreProvider } from 'react-redux';
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import Main from "./src/main";
import store from "./src/store";

const App = () => {

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Main />
        <StatusBar style="auto" />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
