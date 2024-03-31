import * as React from "react";
import { Icon } from "react-native-paper";
import moment from "moment";
import { View } from "react-native";
import { Text } from "react-native-paper";
import CurrentDateStyles from '../../styles/dashboard/currentDate';

const CurrentDate = () => {
  const currentDate = moment().format("DD MMMM, YYYY");

  return (
    <View style={CurrentDateStyles.container}>
      <Icon source={CurrentDateStyles.icon.source} color={CurrentDateStyles.icon.color} size={CurrentDateStyles.icon.size} />
      <Text style={CurrentDateStyles.text}>{currentDate}</Text>
    </View>
  );
};

export default CurrentDate;
