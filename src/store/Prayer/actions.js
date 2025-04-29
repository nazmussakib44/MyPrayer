// import { setLoading } from '../loaderStore/actions';
import { fetchPrayTimes } from '../../services/prayerService';

export const FETCH_PRAYER_TIMES_SUCCESS = 'FETCH_PRAYER_TIMES_SUCCESS';

export const fetchPrayerTimesSuccess = item => ({
  type: FETCH_PRAYER_TIMES_SUCCESS,
  payload: item,
});

export const fetchPrayerTimes = () => {
  return async dispatch => {
    // dispatch(setLoading(true));
    try {
      const prayerTimes = await fetchPrayTimes('Sudbury', '28-04-2025'); 
      console.log(prayerTimes);
      dispatch(fetchPrayerTimesSuccess(prayerTimes));
    } catch (error) {
      console.error('Error fetching prayer times: ', error);
    } finally {
    //   dispatch(setLoading(false));
    }
  };
};