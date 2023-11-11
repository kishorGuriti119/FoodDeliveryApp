import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Customer_Profile = ({navigation}) => {
  return (
    <Button
      title="Logout"
      onPress={async () => {
        await AsyncStorage.removeItem('token');
        navigation.navigate('login');
      }}
    />
  );
};

export default Customer_Profile;
