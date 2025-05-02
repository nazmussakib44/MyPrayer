import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAppSettings = async () => {
  try {
    const savedSettings = await AsyncStorage.getItem('@deenAppSettings');
    if (savedSettings) {
      return JSON.parse(savedSettings);
    }
    // Return default settings if none are saved
    return {
      prayerNotifications: true,
      darkMode: false,
      vibrate: true,
      adhanVolume: 75,
      language: "English",
      location: "London",
    };
  } catch (e) {
    console.error("Failed to load settings", e);
    // Return default settings in case of error
    return {
      prayerNotifications: true,
      darkMode: false,
      vibrate: true,
      adhanVolume: 75,
      language: "English",
      location: "London",
    };
  }
};