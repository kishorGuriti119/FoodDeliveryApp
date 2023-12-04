import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Customer_Home from '../Customer_Home';
import Order_Preview from '../OrderPreview';
import OrderOnTheWay from '../OrderOnTheWay';
const Stack = createNativeStackNavigator();

const Customer_Home_Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Customer_Home} />
      <Stack.Screen name="orderPreview" component={Order_Preview} />
      <Stack.Screen name="OrderOnTheWay" component={OrderOnTheWay} />
    </Stack.Navigator>
  );
};

export default Customer_Home_Stack;
