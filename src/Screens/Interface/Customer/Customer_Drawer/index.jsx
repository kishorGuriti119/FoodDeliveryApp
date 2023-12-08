import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomerLandingPage from '../CustomerLandingPage';
import Customer_Profile from '../Customer_Profile';
import Customer_Orders from '../Customer_Orders';
import Customer_Notifications from '../Customer_Notifications';
import Customer_Messages from '../Customer_Messages';
import Modified_Drawer from '../Modified_Drawer';
import {Dimensions} from 'react-native';
import {colors} from '../../../../Utility/Colors';
import {Icons} from '../../../../Utility/Icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import Customer_Adresses from '../Customer_Adresses';

const Drawer = createDrawerNavigator();

const Customer_Drawer = () => {
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
        component={CustomerLandingPage}
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
        component={Customer_Notifications}
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
        component={Customer_Messages}
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
        name="Addresses"
        component={Customer_Adresses}
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
      <Drawer.Screen
        name="Profile"
        component={Customer_Profile}
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

export default Customer_Drawer;
