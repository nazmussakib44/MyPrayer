import { combineReducers } from 'redux';
import itemReducer from './itemStore/reducers';
import loaderReducer from './loaderStore/reducers';

const rootReducer = combineReducers({
  items: itemReducer,
  loader: loaderReducer,
});

export default rootReducer;