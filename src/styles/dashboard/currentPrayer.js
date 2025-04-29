import { StyleSheet } from "react-native";

const CurrentPrayerStyles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: "5%",
    backgroundColor: "#F08080",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#FFF",
  },
  HeaderText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  BodyItems: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "left",
    padding: 5
  },
  BottomText: {
    textAlign: "right",
    color: '#FFF',
    marginTop: "5%",
    fontWeight: "bold",
  },
});

export default CurrentPrayerStyles;
