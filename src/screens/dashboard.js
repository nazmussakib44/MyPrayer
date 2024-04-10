import * as React from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, SafeAreaView, View, Button } from "react-native";
import CurrentDate from "../components/dashboard/currentDate";
import CurrentPrayer from "../components/dashboard/currentPrayer";
import SehriIftar from "../components/dashboard/sehriIftar";
import PrayerTiming from '../components/dashboard/prayerTiming';
import DashboardStyles from "../styles/dashboard/dashboard";
import { fetchPrayerTimes } from '../store/Prayer/actions';

const DashboardScreen = ({store}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPrayerTimes());
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={DashboardStyles.container}>
        <CurrentDate />
        <View style={{width:'100%', marginLeft:'10%', justifyContent: "center", alignItems: 'center'}}>
        <ScrollView style={{width:'100%', }} showsVerticalScrollIndicator={false}>
          <CurrentPrayer />
          <SehriIftar />
          <PrayerTiming />
        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
