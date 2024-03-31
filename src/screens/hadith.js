import * as React from "react";
import { View } from 'react-native';
import { Text } from "react-native-paper";
import DashboardStyles from '../styles/dashboard/dashboard';

const HadithScreen = () => {

  return (
    <View style={DashboardStyles.container}>
        <Text variant="headlineLarge">Hadith Coming Soon</Text>
    </View>
  );
};

export default HadithScreen;
