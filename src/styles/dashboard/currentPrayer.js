import { StyleSheet } from "react-native";

const CurrentPrayerStyles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: "5%",
    backgroundColor: "#FE6F5E",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#FFF",
  },
  HeaderText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  BodyContainer: {
    marginTop: "5%",
    flexDirection: "row",
  },
  BodyItems: {
    color: "#FFF",
    fontSize: 18,
  },
  BottomText: {
    textAlign: "right",
    marginTop: "5%",
    fontWeight: "bold",
  },
});

export default CurrentPrayerStyles;
