import React from 'react';
import styled from 'styled-components';
import {BLUE_COLOR} from '../utils/colors';

const MooView = styled.SafeAreaView`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MooText = styled.Text`
  font-family: 'Merriweather-Bold';
  font-size: 20px;
  color: ${BLUE_COLOR};
`;

const Loading = (props) => {
  return (
    <MooView>
      <MooText>Carregando...</MooText>
    </MooView>
  );
};

export default Loading;
