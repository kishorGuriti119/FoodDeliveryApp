import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Customer_Profile = ({navigation}) => {
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

export default Customer_Profile;
