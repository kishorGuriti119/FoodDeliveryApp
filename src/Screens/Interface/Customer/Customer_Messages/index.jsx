import React from 'react';
import {View, Text} from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import {style} from './style'

const Customer_Messages = ({navigation}) => {
  return (
    <View style={style.container}>
       <InterfaceHeader
        PreviousPage
        notifications
        onBackPress={() => navigation.goBack()}
        onNotification={() => navigation.navigate('Messages')}
        title="Your Messages"
      />
      <Text>Customer_Messages</Text>
      
    </View>
  );
};

export default Customer_Messages;
