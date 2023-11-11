import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';
import SignUp from '../SignUp';
import {Splash, SplashScreen} from '../../../Components/Splash';
import AdminDashboard from '../../Interface/Admin/Admin_Home';
import RestaurantForm from '../../Interface/Restaurant/Register';
import PilotRegister from '../../Interface/Pilot/Register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashboardNavigations from '../../../Navigations/DashboardNavigations';
import {jwtDecode} from 'jwt-decode';
import ForgotPassword from '../ForgotPassword';
import ResetPassword from '../ResetPassword';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isTokenAvailable, setToakenAvailable] = useState();
  const [loggedInUserRole, setLoggedInUserRole] = useState();

  let token;

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    const getRole = async token => {
      let decoded = jwtDecode(token);
      const roles = decoded.roles;
      console.log('roles', roles);
      return roles[0];
    };

    const getToken = async () => {
      token = await AsyncStorage.getItem('token');
      if (token !== null) {
        setToakenAvailable(true);
        let role = await getRole(token);
        setLoggedInUserRole(role);
      } else {
        setToakenAvailable(false);
      }
    };
    getToken();
  }, []);

  return (
    <NavigationContainer>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="dashboard"
            component={isTokenAvailable ? DashboardNavigations : Splash}
            options={{headerShown: false}}
            initialParams={{token: token}}
          />

          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="forgotpassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="resetpassword"
            component={ResetPassword}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="createRestaurant"
            component={RestaurantForm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="createPilot"
            component={PilotRegister}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="dashboardNavigations"
            component={DashboardNavigations}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigations;
