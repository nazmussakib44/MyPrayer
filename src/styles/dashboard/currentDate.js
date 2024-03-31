import { StyleSheet } from "react-native";

const CurrentDateStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: '15%',
  },
  text: {fontSize: 20, marginLeft: '2%'},
  icon: {
    source: 'alarm-bell',
    color: '#FFF',
    size: 20,
  },
});

export default CurrentDateStyles;
