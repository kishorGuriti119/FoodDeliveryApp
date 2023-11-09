import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../../../Components/Button';

const CustomerLandingPage = ({navigation}) => {
  return (
    <View>
      <Text>CustomerLandingPage</Text>
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

export default CustomerLandingPage;
