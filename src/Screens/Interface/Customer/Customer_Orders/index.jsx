import React, { useEffect } from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import { style } from './style';
import { Icons } from '../../../../Utility/Icons';
import { Order_status } from '../../../../Utility/Flatlist_data';
import ShowFlatList from '../../../../Components/ShowFlatList';
import { useSelector } from 'react-redux';

const Customer_Orders = ({ navigation }) => {
  const { orderStatus } = useSelector((state) => state.orderStatus)
  useEffect(() => {
    console.log(orderStatus)
  }, [orderStatus])


  return (
    <View style={style.container}>
      <InterfaceHeader
        PreviousPage
        notifications
        onBackPress={() => navigation.goBack()}
        onNotification={() => navigation.navigate('Messages')}
        title="Your Orders"
      />
      <ShowFlatList data={Order_status} defaultSelected="Pending" categoryType showHorizontal
      />
    </View>
  );
};

export default Customer_Orders;
