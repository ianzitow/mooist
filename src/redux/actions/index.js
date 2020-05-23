import {fetchWeather} from '../../utils/fetch';

export const SET_PERMISSION_STATUS = 'SET_PERMISSION_STATUS';
export const setPermissionStatus = (status) => ({
  type: SET_PERMISSION_STATUS,
  status,
});

export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const requestWeatherPending = () => ({
  type: FETCH_WEATHER_PENDING,
  pending: true,
});

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const receiveWeather = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  pending: false,
  data,
});

export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';
export const requestWeatherError = ({message}) => ({
  type: FETCH_WEATHER_ERROR,
  pending: false,
  message,
});

export const fetchWeatherAction = (lat, lon) => {
  const thunk = (dispatch) => {
    dispatch(requestWeatherPending());
    return fetchWeather(lat, lon)
      .then((response) => response.data)
      .then((data) => dispatch(receiveWeather(data)))
      .catch((error) => dispatch(requestWeatherError(error)));
  };
  thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true,
  };
  return thunk;
};
