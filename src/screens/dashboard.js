import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, SafeAreaView, View, Button, Text } from "react-native";
import CurrentDate from "../components/dashboard/currentDate";
import CurrentPrayer from "../components/dashboard/currentPrayer";
import SehriIftar from "../components/dashboard/sehriIftar";
import PrayerTiming from "../components/dashboard/prayerTiming";
import DashboardStyles from "../styles/dashboard/dashboard";
import { fetchPrayerTimes } from "../store/Prayer/actions";
import Logo from "../components/logo";

const DashboardScreen = ({ store }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPrayerTimes());
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={DashboardStyles.container}>
        <View style={DashboardStyles.headerContainer}>
          {/* Left Side - Logo and Subtitle */}
          <View style={DashboardStyles.logoContainer}>
            <Logo width={120} height={40} showSubtitle />
          </View>

          {/* Right Side - Current Date */}
          <View style={DashboardStyles.dateContainer}>
            <CurrentDate />
          </View>
        </View>
        <View style={DashboardStyles.scrollviewContainer}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
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
