import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminLandingPage from '../AdminLandingPage';
import Admin_Profile from '../Admin_Profile';

const Drawer = createDrawerNavigator();

const Admin_Drawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="AdminLandingPage" component={AdminLandingPage} />
      <Drawer.Screen name="profile" component={Admin_Profile} />
    </Drawer.Navigator>
  );
};

export default Admin_Drawer;
