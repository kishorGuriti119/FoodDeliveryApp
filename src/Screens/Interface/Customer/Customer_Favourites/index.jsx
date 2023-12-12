import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style'
import InterfaceHeader from '../../../../Components/InterfaceHeader';

const Customer_Favourites = ({navigation}) => {
  return (
    <View style={style.container}>
      <InterfaceHeader
        PreviousPage
        notifications
        onBackPress={() => navigation.goBack()}
        onNotification={() => navigation.navigate('Messages')}
        title="Your Favourites"
      />
      
    </View>
  );
};

export default Customer_Favourites;
