import { StyleSheet } from "react-native";

const SehriIftarStyles = StyleSheet.create({
  Container: {
    width: "90%",
    marginTop: "5%",
    backgroundColor: "#645452",
  },
  CardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  BodyWrapper: {
    marginTop: "5%",
    marginBottom: 20,
  },
  BodyItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    alignItems: "center",
  },
  BodyItemLeft: {
    fontSize: 18,
    color: "#FFF",
  },
  BodyItemRight: {
    fontSize: 18,
    fontWeight: "bold",
  },
  BottomText: {},
});

export default SehriIftarStyles;
