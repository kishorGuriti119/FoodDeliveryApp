import React from 'react';
import {View, Text} from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';

const Customer_Messages = ({navigation}) => {
  return (
    <View>
      <InterfaceHeader
        dashboardIcon
        location
        title="Area 7, Garki Abuja"
        notifications
        HandleDashboard={() => navigation.openDrawer()}
      />
      <Text>Customer_Messages</Text>
      
    </View>
  );
};

export default Customer_Messages;
