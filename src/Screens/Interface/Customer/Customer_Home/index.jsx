import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style';
import InterfaceHeader from '../../../../Components/InterfaceHeader';

const Customer_Home = () => {
  return (
    <View style={style.container}>
      <InterfaceHeader
        dashboardIcon
        location
        title="Area 7, Garki Abuja"
        notifications
      />
    </View>
  );
};

export default Customer_Home;
