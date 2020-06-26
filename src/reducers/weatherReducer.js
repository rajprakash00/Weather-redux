import { FETCH_WEATHER_SUCCESS } from "../actions/index";

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return [action.payload.data, ...state];
  }
  return state;
};

export default weatherReducer;
