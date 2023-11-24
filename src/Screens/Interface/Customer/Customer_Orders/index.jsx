import React from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import {style} from './style';
import {Icons} from '../../../../Utility/Icons';
import {Order_status} from '../../../../Utility/Flatlist_data';
import ShowFlatList from '../../../../Components/ShowFlatList';

const Customer_Orders = ({navigation}) => {
  return (
    <View style={style.container}>
      <InterfaceHeader
        PreviousPage
        notifications
        onPress={() => navigation.goBack()}
        onNotification={() => navigation.navigate('Messages')}
      />
      <View style={style.title}>
        <Text style={style.titleText}>Your Orders</Text>
      </View>
      <ShowFlatList data={Order_status} defaultSelected="Pending" />
    </View>
  );
};

export default Customer_Orders;
