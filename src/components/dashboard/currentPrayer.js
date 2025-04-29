import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import CurrentPrayerStyles from "../../styles/dashboard/currentPrayer";
import { useEffect, useState } from "react";
import { getCurrentPrayerInfo } from "../../uitlity/currentPrayerCalculation";

const CurrentPrayer = () => {
  const prayerData = useSelector((state) => state.prayer.pray_times);
  const [prayerInfo, setPrayerInfo] = useState({
    prayer: "",
    remaining_time: "Calculating...",
    status: "next",
  });

  useEffect(() => {
    if (prayerData && Object.keys(prayerData).length > 0) {
      updatePrayerInfo();
      const interval = setInterval(updatePrayerInfo, 60000); // Update every minute
      return () => clearInterval(interval);
    }
  }, [prayerData]);

  const updatePrayerInfo = () => {
    if (!prayerData) return;

    const info = getCurrentPrayerInfo(prayerData);
    setPrayerInfo(info);
  };

  return (
    <Card style={CurrentPrayerStyles.container}>
      <Card.Content>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 5,
            width: "100%",
          }}
        >
          <Text style={CurrentPrayerStyles.HeaderText}>Pray</Text>
          <Text style={{color:"#FFF", fontSize:16}}>{prayerInfo.status === "now" ? "Now" : "Next"}</Text>
        </View>
        <Text style={CurrentPrayerStyles.BodyItems}>
          {prayerInfo.prayer || "Fajr"}
        </Text>
        <Text style={CurrentPrayerStyles.BottomText}>
          {prayerInfo.remaining_time != 0 && (
            <>
              {prayerInfo.remaining_time}
              {" remaining"}
            </>
          )}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default CurrentPrayer;
