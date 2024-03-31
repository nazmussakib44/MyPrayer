import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import NavigationStyles from "../styles/navigation/navigation";
import DashboardScreen from "./dashboard";
import QuranScreen from "./quran";
import HadithScreen from "./hadith";
import TrackerScreen from "./tracker";

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
    { key: "prayer_tracker", title: "Tracker", focusedIcon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardScreen,
    quran: QuranScreen,
    hadith: HadithScreen,
    prayer_tracker: TrackerScreen,
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
