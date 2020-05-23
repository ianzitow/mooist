import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import {
  checkInternetConnection,
  offlineActionCreators,
} from 'react-native-offline';
import {PINK_COLOR, BLUE_COLOR} from '../utils/colors';
import {useDispatch} from 'react-redux';

const MooView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const MooBigText = styled.Text`
  color: ${BLUE_COLOR};
  font-size: 36px;
  font-family: 'Merriweather-Bold';
  padding: 20px;
  text-align: center;
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

const NoDataAvailable = (props) => {
  const dispatch = useDispatch();

  const onPressCheckInternet = () => {
    checkInternetConnection().then((isConnected) => {
      const {connectionChange} = offlineActionCreators;
      dispatch(connectionChange(isConnected));
    });
  };

  return (
    <MooView>
      <Image
        source={require('../assets/images/undraw_the_world_is_mine.png')}
      />
      <MooBigText>Ops, conecte-se à Internet.</MooBigText>
      <MooButton onPress={onPressCheckInternet}>
        <MooText>Verificar novamente</MooText>
      </MooButton>
    </MooView>
  );
};

export default NoDataAvailable;
