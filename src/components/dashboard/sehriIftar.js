import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import SehriIftarStyles from "../../styles/dashboard/sehriIftar";

const SehriIftar = () => {
  return (
    <View style={SehriIftarStyles.BodyWrapper}>
      <Card
        style={{
          width: "50%",
          marginHorizontal: "2.5%",
          backgroundColor: "#f5f5f5",
          borderRadius: 8,
          padding: 12,
          alignItems: "center",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#F08080",
        }}
      >
        <Card.Content>
          <Text style={{color: "#F08080", fontSize: 16}}>Sehri ends </Text>
          <Text style={{color: "#F08080", fontSize: 18, fontWeight: "bold"}}>04:30 AM</Text>
        </Card.Content>
      </Card>
      {/* <View style={{width: "20%"}} /> */}
      <Card
        style={{
          width: "50%",
          marginHorizontal: "2.5%",
          backgroundColor: "#f5f5f5",
          borderRadius: 8,
          padding: 12,
          alignItems: "center",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#F08080",
        }}
      >
        <Card.Content style={SehriIftarStyles.CardContent}>
          <Text style={{ color: "#F08080", fontSize: 16 }}>
            Iftar at
          </Text>
          <Text style={{color: "#F08080", fontSize: 18, fontWeight: "bold"}}>06:30 PM</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default SehriIftar;
