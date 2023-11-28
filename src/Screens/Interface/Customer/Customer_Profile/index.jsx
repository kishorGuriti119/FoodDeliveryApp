import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
const baseURL = 'http://10.0.2.2:3001';
const Customer_Profile = ({navigation}) => {
  const onLogout = async () => {
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

  // Your image data

  return (
    <View>
      <Button title="logout" onPress={onLogout} />
    </View>
  );
};

export default Customer_Profile;
