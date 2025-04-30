import React, { useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Platform,
  ScrollView
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Slider from "@react-native-community/slider";

export default function SettingsScreen() {
  const [prayerNotifications, setPrayerNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [vibrate, setVibrate] = useState(true);
  const [adhanVolume, setAdhanVolume] = useState(75);
  const [language, setLanguage] = useState("English");
  const [location, setLocation] = useState("");

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top - 50 || 20, paddingBottom: insets.bottom - 80 }]}>
      <Text style={styles.header}>Settings</Text>
      <ScrollView
      style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 24,
        }}
      >
        

        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.title}>Prayer Notifications</Text>
              <Text style={styles.subtitle}>Get reminded for prayer times</Text>
            </View>
            <Switch
              value={prayerNotifications}
              onValueChange={setPrayerNotifications}
              trackColor={{ true: "#f2777b" }}
            />
          </View>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.title}>Dark Mode</Text>
              <Text style={styles.subtitle}>Switch app theme</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ true: "#f2777b" }}
            />
          </View>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.title}>Vibrate</Text>
              <Text style={styles.subtitle}>Vibrate with notifications</Text>
            </View>
            <Switch
              value={vibrate}
              onValueChange={setVibrate}
              trackColor={{ true: "#f2777b" }}
            />
          </View>

          <View style={styles.volumeContainer}>
            <Text style={styles.title}>Adhan Volume</Text>
            <Slider
              minimumValue={0}
              maximumValue={100}
              step={1}
              value={adhanVolume}
              onValueChange={setAdhanVolume}
              minimumTrackTintColor="#f2777b"
              style={styles.slider}
            />
            <Text style={styles.subtitle}>{adhanVolume}%</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Language</Text>
          <RNPickerSelect
            onValueChange={setLanguage}
            value={language}
            items={[
              { label: "English", value: "English" },
              { label: "Arabic", value: "Arabic" },
            ]}
            style={{
              inputIOS: styles.picker,
              inputAndroid: styles.picker,
            }}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Location</Text>
          <View style={styles.locationRow}>
            <TextInput
              value={location}
              onChangeText={setLocation}
              placeholder="Enter your location"
              style={styles.input}
            />
            <TouchableOpacity style={styles.locationBtn}>
              <Text style={styles.locationIcon}>📍</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { fontSize: 28, fontWeight: "bold", color: "#f2777b",    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10, },
  subHeader: { fontSize: 16, color: "#8a9db0", marginBottom: 10 },
  date: { alignSelf: "flex-end", color: "#8a9db0", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#333" },
  subtitle: { fontSize: 14, color: "#8a9db0" },
  volumeContainer: { marginTop: 8 },
  slider: { width: "100%", height: 40 },
  picker: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#eaeaea",
    color: "#333",
    marginTop: 10,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fefefe",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f3c4c6",
    padding: 10,
    fontSize: 16,
  },
  locationBtn: {
    backgroundColor: "#f2777b",
    padding: 10,
    marginLeft: 10,
    borderRadius: 12,
  },
  locationIcon: { color: "white", fontSize: 16 },
  saveBtn: {
    marginTop: 20,
    marginBottom: 40, 
    backgroundColor: "#f2777b",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  saveBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
