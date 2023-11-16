import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../../../Components/Button';

const Restaurant_Profile = ({navigation}) => {
  const onLogut = async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      console.log('token from backend');
      await AsyncStorage.removeItem('token');
      navigation.navigate('login');
    } else {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('log out');
    }
    navigation.navigate('login');
  };

  return <Button title="Logout" onPress={onLogut} />;
};

export default Restaurant_Profile;
