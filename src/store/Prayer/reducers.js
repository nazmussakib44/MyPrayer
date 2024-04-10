
import { FETCH_PRAYER_TIMES_SUCCESS } from './actions';

const initialState = {
  pray_times: [],
};

const prayerReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_PRAYER_TIMES_SUCCESS:
      const { Firstthird, Imsak, Lastthird, Midnight, ...filteredData } = action.payload.timings;
      return {
        ...state,
        pray_times: filteredData,
      };
    default:
      return state;
  }
};

export default prayerReducer;