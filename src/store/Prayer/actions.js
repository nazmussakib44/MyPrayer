// import { setLoading } from '../loaderStore/actions';
import { fetchPrayTimes } from '../../services/prayerService';

export const FETCH_PRAYER_TIMES_SUCCESS = 'FETCH_PRAYER_TIMES_SUCCESS';

export const fetchPrayerTimesSuccess = item => ({
  type: FETCH_PRAYER_TIMES_SUCCESS,
  payload: item,
});

export const fetchPrayerTimes = () => {
  return async dispatch => {
    console.log('here...');
    // dispatch(setLoading(true));
    try {
      const prayerTimes = await fetchPrayTimes('Dhaka', '10-04-2024'); 
      // console.log(prayerTimes);
      dispatch(fetchPrayerTimesSuccess(prayerTimes));
    } catch (error) {
      console.error('Error fetching prayer times: ', error);
    } finally {
    //   dispatch(setLoading(false));
    }
  };
};

// export function fetchPrayerTimes() {
//   return function(dispatch) {
//       return fetchPrayTimes().then(r => {
//         const postid = ['ok', 'hello'];
//         dispatch({
//           type: FETCH_PRAYER_TIMES_SUCCESS,
//           postId
//       });
//       });
//   };
// }