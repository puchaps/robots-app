import {
  setRobotsFailed,
  setRobotsSuccess,
  toggleLoading,
} from "../../reducers/robots/robotsReducer";
import transformGettingData from "./robotsThunkUtils";

const setGettingData = () => (dispatch) => {
  try {
    dispatch(toggleLoading());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const transformData = transformGettingData(data);
        dispatch(setRobotsSuccess(transformData));
        dispatch(toggleLoading());
      });
  } catch (error) {
    dispatch(setRobotsFailed(error));
  }
};

export default setGettingData;
