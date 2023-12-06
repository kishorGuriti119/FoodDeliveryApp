import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddItem from '../AddItem';
import Restaurant_Home from '../Restaurant_Home';
const Stack = createNativeStackNavigator();

const Restaurant_Home_Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Restaurant_Home} />
      <Stack.Screen name="Additem" component={AddItem} />
    </Stack.Navigator>
  );
};

export default Restaurant_Home_Stack;
