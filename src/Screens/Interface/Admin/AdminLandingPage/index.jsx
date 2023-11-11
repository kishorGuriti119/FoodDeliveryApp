import React from 'react';

import {Icons} from '../../../../Utility/Icons';
import {colors} from '../../../../Utility/Colors';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Admin_Home from '../Admin_Home';
import Admin_Profile from '../Admin_Profile';
import Admin_Settings from '../Admin_Settings';
import {style} from './style';
const Tab = createBottomTabNavigator();

const AdminLandingPage = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused ? Icons.Home_Focused : Icons.Home;
          } else if (route.name === 'Profile') {
            icon = focused ? Icons.profile_focused : Icons.profile;
          } else if (route.name === 'Settings') {
            icon = focused ? Icons.settings_focused : Icons.settings;
          }

          return <Image source={icon} style={{height: 24, width: 24}} />;
        },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarAccessibilityLabel: route.name,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
          paddingVertical: 12,
          paddingBottom: 12,
        },
      })}>
      <Tab.Screen name="Home" component={Admin_Home} />
      <Tab.Screen name="Profile" component={Admin_Profile} />
      <Tab.Screen name="Settings" component={Admin_Settings} />
    </Tab.Navigator>
  );
};

export default AdminLandingPage;
