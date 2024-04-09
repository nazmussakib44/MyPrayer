// import { setLoading } from '../loaderStore/actions';
import { fetchPrayTimes } from '../../services/prayerService';

export const FETCH_PRAYER_TIMES_SUCCESS = 'FETCH_PRAYER_TIMES_SUCCESS';

export const fetchPrayerTimesSuccess = data => ({
  type: FETCH_PRAYER_TIMES_SUCCESS,
  payload: data,
});

export const fetchPrayerTimes = (location, date) => {
  return async dispatch => {
    // dispatch(setLoading(true));
    try {
      const prayerTimes = await fetchPrayTimes(location, date); 
      dispatch(fetchPrayerTimesSuccess(prayerTimes));
    } catch (error) {
      console.error('Error fetching prayer times: ', error);
    } finally {
    //   dispatch(setLoading(false));
    }
  };
};