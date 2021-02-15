import { createSlice } from "@reduxjs/toolkit";
import transformByEnterValue from "./utils/robotsUtils";

const robotsReducer = createSlice({
  name: "robots",
  initialState: {
    robots: null,
    searchValue: "",
    robotsBySearch: null,
    loader: false,
    error: null,
  },
  reducers: {
    setRobotsSuccess: (state, action) => ({ ...state, robots: action.payload }),
    setRobotsFailed: (state, action) => ({
      ...state,
      robots: null,
      error: action.payload,
    }),
    toggleLoading: (state) => ({ ...state, loader: !state.loader }),
    setSearchValue: (state, action) => ({
      ...state,
      searchValue: action.payload,
    }),
    setRobotsBySearchValue: (state) => ({
      ...state,
      robotsBySearch: transformByEnterValue(state.robots, state.searchValue),
    }),
  },
});

export default robotsReducer.reducer;
export const {
  setRobotsSuccess,
  setRobotsFailed,
  toggleLoading,
  setSearchValue,
  setRobotsBySearchValue,
} = robotsReducer.actions;
