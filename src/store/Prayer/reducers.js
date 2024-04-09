
import { FETCH_PRAYER_TIMES_SUCCESS } from './actions';

const initialState = {
  pray_times: [],
};

const prayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRAYER_TIMES_SUCCESS:
      return {
        ...state,
        pray_times: action.payload,
      };
    default:
      return state;
  }
};

export default prayerReducer;