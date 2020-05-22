import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

const MooView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const MooBigText = styled.Text`
  color: #252436;
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
  background-color: #ff0066;
  padding: 15px;
  border-radius: 10px;
`;

const RequestLocation = (props) => {
  return (
    <MooView>
      <Image source={require('../assets/images/undraw_my_location.png')} />
      <MooBigText>Oi, precisamos de sua localização</MooBigText>
      <MooButton>
        <MooText>Autorizar acesso</MooText>
      </MooButton>
    </MooView>
  );
};

export default RequestLocation;
