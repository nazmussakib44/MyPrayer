import * as React from "react";
import { View } from 'react-native';
import { Text } from "react-native-paper";
import DashboardStyles from '../styles/dashboard/dashboard';

const DashboardScreen = () => {

  return (
    <View style={DashboardStyles.container}>
        <Text variant="headlineLarge">Headline Large</Text>
    </View>
  );
};

export default DashboardScreen;
