export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";

export const fetchWeather = (city) => {
  return {
    type: FETCH_WEATHER_REQUEST,
    payload: { city },
  };
};
