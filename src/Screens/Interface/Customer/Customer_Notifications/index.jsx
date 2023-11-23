import React from 'react';
import {View, Text} from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';

const Customer_Notifications = ({navigation}) => {
  return (
    <View>
      <InterfaceHeader
        dashboardIcon
        location
        title="Area 7, Garki Abuja"
        notifications
        HandleDashboard={() => navigation.openDrawer()}
      />
      <Text>Notifications</Text>
    </View>
  );
};

export default Customer_Notifications;
