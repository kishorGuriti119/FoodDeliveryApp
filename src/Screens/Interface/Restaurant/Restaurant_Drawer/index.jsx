import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Modified_Drawer from '../Modified_Drawer';
import Modified_Drawer from '../../Customer/Modified_Drawer';
import {colors} from '../../../../Utility/Colors';
import {Icons} from '../../../../Utility/Icons';
import {Image} from 'react-native';
import RestaurantLandingPage from '../RestaurantLandingPage';
import Restaurant_Messages from '../Restaurant_Messages';
import Restaurant_Profile from '../Restaurant_Profile';
import Restaurant_Notifications from '../Restaurant_Notifications';

const Drawer = createDrawerNavigator();

const Restaurant_Drawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Modified_Drawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {borderTopRightRadius: 24, width: 320},
        drawerInactiveBackgroundColor: colors.countryCodeBackground,
        drawerItemStyle: {
          height: 60,
          paddingHorizontal: 12,
        },
        drawerLabelStyle: {
          marginLeft: -20,
          fontWeight: 'bold',
          fontSize: 17,
          color: colors.secondary,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={RestaurantLandingPage}
        options={{
          drawerIcon: ({color}) => {
            return (
              <Image source={Icons.Home} style={{width: 23, height: 27}} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Restaurant_Notifications}
        options={{
          drawerIcon: ({color}) => {
            return (
              <Image
                source={Icons.notificationIcon}
                style={{width: 22, height: 27}}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Restaurant_Messages}
        options={{
          drawerIcon: ({color}) => {
            return (
              <Image
                source={Icons.email_outline}
                style={{width: 24, height: 27}}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Restaurant_Profile}
        options={{
          drawerIcon: ({color}) => {
            return (
              <Image
                source={Icons.custom_user}
                style={{width: 26, height: 30}}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default Restaurant_Drawer;
