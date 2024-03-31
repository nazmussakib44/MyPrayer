import * as React from "react";
import { View } from 'react-native';
import { Text } from "react-native-paper";
import DashboardStyles from '../styles/dashboard/dashboard';

const QuranScreen = () => {

  return (
    <View style={DashboardStyles.container}>
        <Text variant="headlineLarge">Quran Coming Soon</Text>
    </View>
  );
};

export default QuranScreen;
