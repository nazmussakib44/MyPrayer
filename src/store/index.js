
import { configureStore } from '@reduxjs/toolkit'
import prayerReducer from './Prayer/reducers';

export default configureStore({
  reducer: {
    prayer: prayerReducer
  },
})