import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Admin_Settings = ({navigation}) => {
  return (
    <View>
      <Text>Admin_Settings</Text>
      <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.removeItem('token');
          navigation.navigate('login');
        }}
      />
    </View>
  );
};

export default Admin_Settings;
