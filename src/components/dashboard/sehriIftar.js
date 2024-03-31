import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import SehriIftarStyles from "../../styles/dashboard/sehriIftar";

const SehriIftar = () => {
  return (
    <Card style={SehriIftarStyles.Container}>
      <Card.Content style={SehriIftarStyles.CardContent}>
        <Text style={SehriIftarStyles.HeaderText}>Sehri & Iftar</Text>

        <View style={SehriIftarStyles.BodyWrapper}>
          <View style={SehriIftarStyles.BodyItemWrapper}>
            <Text style={SehriIftarStyles.BodyItemLeft}>Sehri ends </Text>
            <Text style={SehriIftarStyles.BodyItemRight}>04:30 AM</Text>
          </View>
          <View style={SehriIftarStyles.BodyItemWrapper}>
            <Text style={SehriIftarStyles.BodyItemLeft}>Iftar at </Text>
            <Text style={SehriIftarStyles.BodyItemRight}>06:30 PM</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default SehriIftar;
