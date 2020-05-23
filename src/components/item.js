import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {PINK_COLOR, BLUE_COLOR, WHITE_COLOR} from '../utils/colors';
import {renderTemperature, unixToHumanReadable} from '../utils/text';

const MooView = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const MooText = styled.Text`
  color: ${BLUE_COLOR};
  font-family: 'FiraSans-Regular';
  font-size: 12px;
`;

const MooTempText = styled.Text`
  font-family: 'Merriweather-Bold';
  font-size: 18px;
  color: ${WHITE_COLOR};
`;

const MooTempView = styled.View`
  border: 2px;
  border-radius: 35px;
  background-color: ${BLUE_COLOR};
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Item = (props) => {
  const {day, dt, min, max, weather} = props;
  return (
    <MooView>
      <MooText>{unixToHumanReadable(dt)}</MooText>
      <MooTempView>
        <MooTempText>{renderTemperature(day)}</MooTempText>
      </MooTempView>
      <MooText>
        {renderTemperature(min)} e {renderTemperature(max)}
      </MooText>
      <MooText>{weather}</MooText>
    </MooView>
  );
};

export default Item;
