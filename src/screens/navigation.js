import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStyles from "../styles/navigation/navigation";
import DashboardScreen from "./dashboard";
import QuranScreen from "./quran";
import HadithScreen from "./hadith";
import SettingsScreen from "./settings";

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "dashboard",
      title: "Dashboard",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "quran", title: "Quran", focusedIcon: "album" },
    { key: "hadith", title: "Hadith", focusedIcon: "history" },
    { key: "settings", title: "Settings", focusedIcon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardScreen,
    quran: QuranScreen,
    hadith: HadithScreen,
    settings: SettingsScreen,
  });
  return (

    <BottomNavigation
      activeColor={NavigationStyles.activeColor}
      inactiveColor={NavigationStyles.inactiveColor}
      barStyle={NavigationStyles.container}
      sceneAnimationEnabled={true}
      sceneAnimationType={NavigationStyles.animationType}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

  );
};

export default BottomNav;
