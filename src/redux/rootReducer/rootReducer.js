import { combineReducers } from '@reduxjs/toolkit';
import robotsReducer from '../reducers/robots/robotsReducer';

export default combineReducers({
  robots: robotsReducer
})