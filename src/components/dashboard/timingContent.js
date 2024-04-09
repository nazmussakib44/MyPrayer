import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import TimingContentStyles from "../../styles/dashboard/timingContent";

const TimingContent = () => {
  const prayerData = [
    { id: "1", name: "Fazr", time: "04:36 AM" },
    { id: "2", name: "Duhr", time: "12:06 AM" },
    { id: "4", name: "Asar", time: "12:06 AM" },
    { id: "5", name: "Magrib", time: "12:06 AM" },
    { id: "6", name: "Isha", time: "12:06 AM" },
  ];

  return prayerData.map((item, index) => (
    <Card style={TimingContentStyles.Container} key={index}>
      <Card.Content style={TimingContentStyles.CardContent}>
        <Text>{item.name}</Text>
        <Text>{item.time}</Text>
      </Card.Content>
    </Card>
  ));
};

export default TimingContent;
