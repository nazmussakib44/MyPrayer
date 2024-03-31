import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import CurrentDate from '../components/dashboard/currentDate';
import DashboardStyles from "../styles/dashboard/dashboard";

const DashboardScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={DashboardStyles.container}>
        <CurrentDate />
        <Text>I am here</Text>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
