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

const Stack = createNativeStackNavigator();

const DashboardNavigations = () => {
  const route = useRoute();
  const {token, role} = route.params;
  let [UserRole, setUserRole] = useState(role);

  let Storedtoken;

  useEffect(() => {
    const getRole = async Storedtoken => {
      let decoded = jwtDecode(Storedtoken);
      const roles = decoded.roles;
      console.log('roles', roles);
      return roles[0];
    };

    const getToken = async () => {
      Storedtoken = await AsyncStorage.getItem('token');
      if (token !== null) {
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
          name="AdminlandingPage"
          component={AdminLandingPage}
          options={{headerShown: false}}
        />
      )}
      {UserRole === 'CUSTOMER' && (
        <Stack.Screen
          name="customerlandingPage"
          component={CustomerLandingPage}
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
