import * as React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { Card, Text } from "react-native-paper";
import TimingContent from "./timingContent";
import PrayTimingStyles from "../../styles/dashboard/prayTiming";

const PrayerTiming = () => {
  const prayerData = [
    { id: "1", name: "Fazr", time: "04:36 AM" },
    { id: "2", name: "Duhr", time: "12:06 AM" },
    { id: "4", name: "Asar", time: "12:06 AM" },
    { id: "5", name: "Magrib", time: "12:06 AM" },
    { id: "6", name: "Isha", time: "12:06 AM" },
  ];

  return (
    <Card style={PrayTimingStyles.Container}>
      <Card.Content style={PrayTimingStyles.CardContent}>
        <Text style={PrayTimingStyles.HeaderText}>Pray Times</Text>
        <SafeAreaView style={PrayTimingStyles.ListContainer}>
          <FlatList
            data={prayerData}
            renderItem={TimingContent}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </Card.Content>
    </Card>
  );
};

export default PrayerTiming;
