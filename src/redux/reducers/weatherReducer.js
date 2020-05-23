import {
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
} from '../actions';

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return {...state, pending: true};
    case FETCH_WEATHER_ERROR:
      return {...state, pending: false, error: action.message};
    case FETCH_WEATHER_SUCCESS:
      return {...state, pending: false, data: action.data};
    default:
      return state;
  }
};

export default weatherReducer;
