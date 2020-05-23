import {combineReducers} from 'redux';
import permissionReducer from './permissionReducer';
import {reducer as network} from 'react-native-offline';
import weatherReducer from './weatherReducer';

export default combineReducers({
  permission: permissionReducer,
  weather: weatherReducer,
  network,
});
