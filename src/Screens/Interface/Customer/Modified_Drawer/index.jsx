import React, {useState, useEffect} from 'react';
import {View, Text, Image, Switch, Pressable, TextInput} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {style} from './style';
import {Icons} from '../../../../Utility/Icons';
import {colors} from '../../../../Utility/Colors';
import {Card} from 'react-native-paper';
import SwitchToggle from 'react-native-switch-toggle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Modified_Drawer = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const onLogout = async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      console.log('token from backend');
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userInfo');
      props.navigation.navigate('login');
    } else {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log('log out');
    }
    props.navigation.navigate('login');
  };

  useEffect(() => {
    const getUserInfo = async () => {
      let userdetails = await AsyncStorage.getItem('userInfo');
      userdetails = JSON.parse(userdetails);
      setUserInfo(userdetails);
    };

    getUserInfo();
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View style={style.drawerHeader}>
        <Image source={Icons.customer_Profile} style={style.profileImage} />
        <View style={style.profileContainer}>
          <TextInput
            editable={false}
            style={style.profile_name}
            value={userInfo.userName}
          />
          <TextInput
            editable={false}
            style={style.profile_email}
            value={userInfo.email}
          />
        </View>
      </View>
      <Card style={style.card}>
        <Card.Content style={style.cardContent}>
          <Text style={style.text}>Switch vendor mode</Text>

          <SwitchToggle
            switchOn={isEnabled}
            circleColorOff="white"
            circleColorOn="white"
            backgroundColorOn="green"
            backgroundColorOff="grey"
            onPress={() => setIsEnabled(!isEnabled)}
            containerStyle={{
              width: 50,
              height: 25,
              borderRadius: 25,
              padding: 3,
            }}
            circleStyle={{
              width: 18,
              height: 18,
              borderRadius: 20,
            }}
          />
        </Card.Content>
      </Card>
      <View style={style.drawerItemsContainer}>
        <DrawerItemList {...props} />

        <Pressable style={style.logout} onPress={onLogout}>
          <Image source={Icons.logout} style={style.logoutIcon} />
          <Text style={style.logout_text}>Logout</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default Modified_Drawer;
