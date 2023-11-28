import React, {useEffect, useState} from 'react';
import AdminLandingPage from '../../Screens/Interface/Admin/AdminLandingPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import CustomerLandingPage from '../../Screens/Interface/Customer/CustomerLandingPage';
import RestaurantForm from '../../Screens/Interface/Restaurant/Register';
import Login from '../../Screens/Authenticate/Login';
import {useRoute} from '@react-navigation/native';
import {View, ActivityIndicator} from 'react-native';
import Loading from '../../Screens/Loading';
import RestaurantLandingPage from '../../Screens/Interface/Restaurant/RestaurantLandingPage';
import Admin_Drawer from '../../Screens/Interface/Admin/Admin_Drawer';
import Customer_Drawer from '../../Screens/Interface/Customer/Customer_Drawer';
import Restaurant_Drawer from '../../Screens/Interface/Restaurant/Restaurant_Drawer';

const Stack = createNativeStackNavigator();

const DashboardNavigations = () => {
  const route = useRoute();
  const {role} = route.params;

  let [UserRole, setUserRole] = useState(role);
  let Storedtoken;

  useEffect(() => {
    const getRole = async Storedtoken => {
      let decoded = jwtDecode(Storedtoken);
      console.log(decoded, 'decoded ');
      const roles = decoded.roles;
      console.log('roles', roles);
      return roles[0];
    };

    const getToken = async () => {
      Storedtoken = await AsyncStorage.getItem('token');
      if (Storedtoken !== null) {
        let role = await getRole(Storedtoken);
        setUserRole(role);
      }
    };
    getToken();
  }, []);

  return (
    <Stack.Navigator>
      {UserRole === 'ADMIN' && (
        <Stack.Screen
          name="AdminDrawer"
          component={Admin_Drawer}
          options={{headerShown: false}}
        />
      )}
      {UserRole === 'CUSTOMER' && (
        <Stack.Screen
          name="customerDrawer"
          component={Customer_Drawer}
          options={{headerShown: false}}
        />
      )}
      {UserRole === 'RESTAURANT_OWNER' && (
        <Stack.Screen
          name="RestaurantDrawer"
          component={Restaurant_Drawer}
          options={{headerShown: false}}
        />
      )}

      {!UserRole && (
        <Stack.Screen
          name="loading"
          component={Loading}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};
export default React.memo(DashboardNavigations);
