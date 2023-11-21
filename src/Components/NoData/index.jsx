import React from 'react';
import {Card, Text, View} from 'react-native-paper';
import {style} from './style';

const NoData = () => {
  return (
    <Card style={style.card}>
      <Card.Content>
        <Text style={style.text}>No Result Found</Text>
      </Card.Content>
    </Card>
  );
};

export default NoData;
