// import { setLoading } from '../loaderStore/actions';
import { fetchPrayTimes } from "../../services/prayerService";
import { getAppSettings } from "../../uitlity/getSettings";

export const FETCH_PRAYER_TIMES_SUCCESS = "FETCH_PRAYER_TIMES_SUCCESS";

export const fetchPrayerTimesSuccess = (item) => ({
  type: FETCH_PRAYER_TIMES_SUCCESS,
  payload: item,
});

export const fetchPrayerTimes = () => {
  return async (dispatch) => {
    // dispatch(setLoading(true));
    try {
      // Get settings from AsyncStorage
      const settings = await getAppSettings();

      // Extract location and format date
      const today = new Date();
      const formattedDate = `${today.getDate()}-${
        today.getMonth() + 1
      }-${today.getFullYear()}`;

      // Use the location from settings
      // const prayerTimes = await fetchPrayTimes(
      //   settings.location,
      //   formattedDate
      // );
      const prayerTimes = await fetchPrayTimes("Sudbury", "28-04-2025");
      dispatch(fetchPrayerTimesSuccess(prayerTimes));
    } catch (error) {
      console.error("Error fetching prayer times: ", error);
    } finally {
      //   dispatch(setLoading(false));
    }
  };
};
