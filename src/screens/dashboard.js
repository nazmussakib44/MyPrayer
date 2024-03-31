import * as React from "react";
import { SafeAreaView, View, Button } from "react-native";
import { Card, Text } from "react-native-paper";
import CurrentDate from "../components/dashboard/currentDate";
import CurrentPrayer from "../components/dashboard/currentPrayer";
import SehriIftar from "../components/dashboard/sehriIftar";
import DashboardStyles from "../styles/dashboard/dashboard";

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={DashboardStyles.container}>
        <CurrentDate />
        <CurrentPrayer />
        <SehriIftar />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
