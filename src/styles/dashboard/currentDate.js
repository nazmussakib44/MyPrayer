import { StyleSheet } from "react-native";

const CurrentDateStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 70,
  },
  text: {fontSize: 20, marginLeft: 10},
  icon: {
    source: 'alarm-bell',
    color: '#FFF',
    size: 20,
  },
});

export default CurrentDateStyles;
