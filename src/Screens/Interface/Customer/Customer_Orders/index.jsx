import React, { useEffect } from 'react';
import { ImageBackground, Text, View, Image } from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import { style } from './style';
import { Icons } from '../../../../Utility/Icons';
import { Order_status } from '../../../../Utility/Flatlist_data';
import ShowFlatList from '../../../../Components/ShowFlatList';
import { useSelector } from 'react-redux';

const Customer_Orders = ({ navigation }) => {
  const { orderStatus, orders } = useSelector((state) => state.orderStatus)
  const [orderItems] = orders

  useEffect(() => {
    console.log(orderStatus)
    console.log(orderItems)
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
        <ShowFlatList data={Order_status} defaultSelected="Current Order" categoryType showHorizontal mystyle={style.horizontalSpacingStyle}/>
      
    </View>
  );
};

export default Customer_Orders;
