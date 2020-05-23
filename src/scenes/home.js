import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, SafeAreaView} from 'react-native';
import RNLocation from 'react-native-location';
import CurrentWeather from './currentWeather';
import RequestLocation from './requestLocation';
import NoDataAvailable from './nodataavailable';

const Home = (props) => {
  const dispatch = useDispatch();
  const permissionGranted = useSelector((state) => state.permission.status);
  const isConnected = useSelector((state) => state.network.isConnected);
  const isDataAvailable = useSelector(
    (state) => state.weather.data !== undefined,
  );

  useEffect(() => {
    RNLocation.checkPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then((result) => {
      dispatch({type: 'SET_PERMISSION_STATUS', status: result});
    });
  });

  if (isConnected) {
    if (permissionGranted) {
      return <CurrentWeather />;
    } else {
      return <RequestLocation />;
    }
  } else {
    if (isDataAvailable) {
      return <CurrentWeather />;
    } else {
      return <NoDataAvailable />;
    }
  }
};

export default Home;
