import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import moment from "moment";
import TimingContentStyles from "../../styles/dashboard/timingContent";

const TimingContent = ({ item }) => {
  const formatTime = (time) => {
    return moment(time, "HH:mm").format("hh:mm A");
  };

  return Object.keys(item).map((key) => (
    <Card style={TimingContentStyles.Container} key={key}>
      <Card.Content style={TimingContentStyles.CardContent}>
        <Text>{key}</Text>
        <Text>{formatTime(item[key])}</Text>
      </Card.Content>
    </Card>
  ));
};

export default TimingContent;
