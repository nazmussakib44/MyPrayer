import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import TimingContentStyles from "../../styles/dashboard/timingContent";

const TimingContent = ({ item }) => {
  return (
    <Card style={TimingContentStyles.Container}>
      <Card.Content style={TimingContentStyles.CardContent}>
        <Text>{item.name}</Text>
        <Text>{item.time}</Text>
      </Card.Content>
    </Card>
  );
};

export default TimingContent;
