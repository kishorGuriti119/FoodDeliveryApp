import React from 'react';
import Restaurant_Home from '../Restaurant_Home';
import Restaurant_Orders from '../Restaurant_Orders';
import Restaurant_Messages from '../Restaurant_Messages';
import Restaurant_Profile from '../Restaurant_Profile';
import {Icons} from '../../../../Utility/Icons';
import {colors} from '../../../../Utility/Colors';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const RestaurantLandingPage = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused ? Icons.Home_Focused : Icons.Home;
          } else if (route.name === 'Messages') {
            icon = focused ? Icons.email_focused : Icons.email_outline;
          } else if (route.name === 'Profile') {
            icon = focused ? Icons.profile_focused : Icons.profile;
          } else if (route.name === 'Orders') {
            icon = focused ? Icons.orders_focused : Icons.orders;
          }

          return <Image source={icon} style={{height: 24, width: 24}} />;
        },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
          paddingVertical: 12,
          paddingBottom: 12,
        },
        tabBarLabelStyle: {
          color: 'gray',
        },
      })}>
      <Tab.Screen name="Home" component={Restaurant_Home} />
      <Tab.Screen name="Orders" component={Restaurant_Orders} />
      <Tab.Screen name="Messages" component={Restaurant_Messages} />
      <Tab.Screen name="Profile" component={Restaurant_Profile} />
    </Tab.Navigator>
  );
};

export default RestaurantLandingPage;
