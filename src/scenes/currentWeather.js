import React, {useEffect, useState} from 'react';
import {ImageBackground, Alert} from 'react-native';
import styled from 'styled-components';
import RNLocation from 'react-native-location';
import {useSelector, useDispatch} from 'react-redux';
import {requestWeather, fetchWeatherAction} from '../redux/actions';
import Loading from './loading';
import Forecast from '../components/forecast';
import {PINK_COLOR} from '../utils/colors';
import {renderTemperature} from '../utils/text';

const MooView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: white;
`;

const MooBigText = styled.Text`
  color: white;
  font-size: 72px;
  font-family: 'Merriweather-Bold';
  padding: 20px;
`;

const MooText = styled.Text`
  color: white;
  font-size: 18px;
  font-family: 'FiraSans-Regular';
`;

const MooButton = styled.TouchableOpacity`
  background-color: ${PINK_COLOR};
  padding: 15px;
  border-radius: 10px;
`;

const MooImageBackground = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 4;
`;

const CurrentWeather = (props) => {
  const data = useSelector((state) => state.weather.data);
  const pending = useSelector((state) => state.weather.pending);
  const dispatch = useDispatch();
  const [location, setLocation] = useState({});
  const isConnected = useSelector((state) => state.network.isConnected);

  useEffect(() => {
    RNLocation.configure({distanceFilter: 1000});
    const unsubscribe = RNLocation.subscribeToLocationUpdates((locations) => {
      const latestLocation = locations[0];
      if (latestLocation !== null) {
        setLocation(latestLocation);
        dispatch(
          fetchWeatherAction(latestLocation.latitude, latestLocation.longitude),
        );
      } else {
        Alert.alert('Ops', 'Não foi possível obter dados de localização.');
      }
    });
    return () => {
      unsubscribe();
    };
  }, [location.latitude, location.longitude, isConnected, dispatch]);

  if (pending) {
    return <Loading />;
  } else {
    return (
      <MooView>
        <MooImageBackground
          resizeMode={'contain'}
          source={require('../assets/images/blob.png')}>
          {data && data.current && (
            <MooBigText>{renderTemperature(data.current.temp)}</MooBigText>
          )}
          {data && data.current && data.current.weather.length > 0 && (
            <MooText>{data.current.weather[0].description}</MooText>
          )}
        </MooImageBackground>
        {data && data.daily && <Forecast data={data.daily} />}
      </MooView>
    );
  }
};

export default CurrentWeather;
