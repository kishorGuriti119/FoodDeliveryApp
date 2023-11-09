import React, {useEffect, useState} from 'react';
import AdminDashboard from '../../Screens/Interface/Admin/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import CustomerLandingPage from '../../Screens/Interface/Customer/CustomerLandingPage';
import RestaurantForm from '../../Screens/Interface/Restaurant/Register';
import {useRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const DashboardNavigations = () => {
  const route = useRoute();
  const {token, role} = route.params;
  console.log(token, role, 'from dashboardnavigations');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="admindashboard"
        component={
          role === 'ADMIN'
            ? AdminDashboard
            : role === 'CUSTOMER'
            ? CustomerLandingPage
            : RestaurantForm
        }
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="restaurantform"
        component={RestaurantForm}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default React.memo(DashboardNavigations);
