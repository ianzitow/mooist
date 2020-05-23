import React from 'react';
import Item from './item';
import styled from 'styled-components';

const MooFlatList = styled.FlatList`
  flex: 1;
`;

const Forecast = (props) => {
  return (
    <MooFlatList
      data={props.data}
      renderItem={({item}) => (
        <Item
          dt={item.dt}
          day={item.temp.day}
          min={item.temp.min}
          max={item.temp.max}
          weather={item.weather[0].description}
        />
      )}
      keyExtractor={(item) => item.dt.toString()}
      horizontal={true}
    />
  );
};

export default Forecast;
