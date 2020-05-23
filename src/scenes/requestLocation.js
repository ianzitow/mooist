import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import RNLocation from 'react-native-location';
import {useDispatch} from 'react-redux';
import {PINK_COLOR, BLUE_COLOR} from '../utils/colors';
import {setPermissionStatus} from '../redux/actions';

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

const RequestLocation = (props) => {
  const dispatch = useDispatch();

  const onPressRequestLocation = () => {
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then((granted) => {
      dispatch(setPermissionStatus(granted));
    });
  };

  return (
    <MooView>
      <Image source={require('../assets/images/undraw_my_location.png')} />
      <MooBigText>Oi, precisamos de sua localização</MooBigText>
      <MooButton onPress={onPressRequestLocation}>
        <MooText>Autorizar acesso</MooText>
      </MooButton>
    </MooView>
  );
};

export default RequestLocation;
