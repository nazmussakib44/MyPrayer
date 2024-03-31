import * as React from "react";
import { View } from 'react-native';
import { Text } from "react-native-paper";
import DashboardStyles from '../styles/dashboard/dashboard';

const TrackerScreen = () => {

  return (
    <View style={DashboardStyles.container}>
        <Text variant="headlineLarge">Prayer Tracker Coming Soon</Text>
    </View>
  );
};

export default TrackerScreen;
