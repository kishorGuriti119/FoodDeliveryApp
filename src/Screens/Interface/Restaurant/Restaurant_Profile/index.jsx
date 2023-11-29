import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../../../Components/Button';
import EditableInput from '../../../../Components/EditableInput';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import axios from 'axios';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import {style} from './style';
import {Icons} from '../../../../Utility/Icons';
import {colors} from '../../../../Utility/Colors';

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

  useEffect(() => {
    // need to get the user info
  }, []);

  return (
    <ScrollView style={style.container}>
      <InterfaceHeader
        dashboardIcon
        location
        title="Area 7, Garki Abuja"
        notifications
        HandleDashboard={() => navigation.toggleDrawer()}
        onNotification={() => navigation.navigate('Messages')}
      />
      <View style={style.profileContainer}>
        <View style={style.imageContainer}>
          <Image source={Icons.customer_Profile} style={style.profile_image} />
          <Pressable hitSlop={20}>
            <Image source={Icons.cameraIcon} style={style.camIcon} />
          </Pressable>
        </View>
        <View style={style.profile}>
          <Text
            style={{fontSize: 16, fontWeight: 'bold', color: colors.secondary}}>
            Profile
          </Text>
        </View>
      </View>
      <View style={style.editableContainer}>
        <EditableInput Icon={Icons.user} label="FullName" />
        <EditableInput Icon={Icons.email_outline} label="Email" />
        <EditableInput Icon={Icons.mobile} label="Phone number" />
        <EditableInput Icon={Icons.location_mark} label="Location" />
        <EditableInput Icon={Icons.paymentsIcon} label="Payment card" />
      </View>
    </ScrollView>
  );
};
export default Restaurant_Profile;
