import { StyleSheet } from "react-native";

const DashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
  scrollviewContainer: {
    width: "100%",
    marginLeft: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  dateContainer: {
    alignItems: 'flex-end',
  },
});

export default DashboardStyles;
