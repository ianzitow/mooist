import Axios from 'axios';

const OPEN_WEATHER_MAP_ONECALL_URL =
  'https://api.openweathermap.org/data/2.5/onecall';
const API_KEY = 'cc8aee447b262629e4a86bd27c676ff3';

export const fetchWeather = (lat, lon) => {
  return Axios.get(OPEN_WEATHER_MAP_ONECALL_URL, {
    params: {
      appid: API_KEY,
      lat,
      lon,
      exclude: 'minutely,hourly',
      units: 'metric',
      lang: 'pt_br',
    },
  });
};
