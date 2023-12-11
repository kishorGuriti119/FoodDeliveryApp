import React from 'react';
import {View, Text} from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import {style} from './style'

const Customer_Notifications = ({navigation}) => {
  return (
    <View style={style.container}>
      <InterfaceHeader
        PreviousPage
        notifications
        onBackPress={() => navigation.goBack()}
        onNotification={() => navigation.navigate('Messages')}
        title="Your Notifications"
      />
      <Text>Notifications</Text>
    </View>
  );
};

export default Customer_Notifications;
