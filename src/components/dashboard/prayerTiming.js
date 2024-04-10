import * as React from "react";
import { useSelector } from 'react-redux';
import { View, SafeAreaView, FlatList } from "react-native";
import { Card, Text } from "react-native-paper";
import TimingContent from "./timingContent";
import PrayTimingStyles from "../../styles/dashboard/prayTiming";

const PrayerTiming = () => {
  const prayerData = useSelector(state => state.prayer.pray_times);

  return (
    <Card style={PrayTimingStyles.Container}>
      <Card.Content style={PrayTimingStyles.CardContent}>
        <Text style={PrayTimingStyles.HeaderText}>Pray Times</Text>
        <SafeAreaView style={PrayTimingStyles.ListContainer}>
          <TimingContent item={prayerData} />
        </SafeAreaView>
      </Card.Content>
    </Card>
  );
};

export default PrayerTiming;
