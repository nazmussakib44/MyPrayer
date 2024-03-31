import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import CurrentPrayerStyles from '../../styles/dashboard/currentPrayer';

const CurrentPrayer = () => {
  return (
    <Card
      style={CurrentPrayerStyles.container}>
      <Card.Content>
        <Text style={CurrentPrayerStyles.HeaderText}>
          Current Prayer Time
        </Text>
        <View style={CurrentPrayerStyles.BodyContainer}>
          <Text style={CurrentPrayerStyles.BodyItems}>Fajr - </Text>
          <Text style={CurrentPrayerStyles.BodyItems}>
            05:00 AM - 06:00 AM
          </Text>
        </View>
        <Text
          style={CurrentPrayerStyles.BottomText}
        >
          Time Left: 1 Hour 30 Minutes
        </Text>
      </Card.Content>
    </Card>
  );
};

export default CurrentPrayer;
