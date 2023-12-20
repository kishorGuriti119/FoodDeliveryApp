import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View, Image, ToastAndroid } from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import { style } from './style';
import { Icons } from '../../../../Utility/Icons';
import { Order_status } from '../../../../Utility/Flatlist_data';
import ShowFlatList from '../../../../Components/ShowFlatList';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import OrderHistoryList from '../../../../Components/OrderHistoryList';

const Customer_Orders = ({ navigation }) => {
  const { orderStatus, orders } = useSelector((state) => state.orderStatus)
  const [orderItems] = orders
  const [orderHistory, setOrderHistory] = useState('')


  const getOrderList = async () => {
    let userdetails = await AsyncStorage.getItem('token');
    console.log("orderLIst rendered")
    userdetails = jwtDecode(userdetails);
    try {
      const { data } = await axios.get(`http:10.0.2.2:8080/orders/history/${userdetails.sid}`)
      setOrderHistory(data)
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }

  }

  useEffect(() => {
    console.log(orderStatus)
    console.log(orderItems)
    getOrderList()
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
      <ShowFlatList data={Order_status} defaultSelected="Current Order" categoryType showHorizontal mystyle={style.horizontalSpacingStyle} />

      <View>
        <OrderHistoryList data={orderHistory} />
      </View>
    </View>
  );
};

export default Customer_Orders;
