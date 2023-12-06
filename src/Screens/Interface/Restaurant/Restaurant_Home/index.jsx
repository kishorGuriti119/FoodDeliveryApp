import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {Icons} from '../../../../Utility/Icons';
import {colors} from '../../../../Utility/Colors';
import {Badge} from 'react-native-paper';

import InterfaceHeader from '../../../../Components/InterfaceHeader';

const Restaurant_Home = ({navigation, setOpen, open}) => {
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restuarantName, setRestaurantName] = useState('');
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    restaurantDetails();
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const restaurantDetails = async () => {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userid');
    let resData = jwtDecode(token);
    try {
      const {data} = await axios.get(
        `http://10.0.2.2:8082/api/restaurant/restaurant/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      const {name, address, restaurantId} = data;
      setRestaurantName(name);
      setRestaurantAddress(address);
    } catch (error) {
      // console.log(error.code);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <InterfaceHeader
        dashboardIcon
        location
        title="Area 7, Garki Abuja"
        notifications
        HandleDashboard={() => navigation.toggleDrawer()}
        onNotification={() => navigation.navigate('Messages')}
      />
      <Text style={styles.welcomeText}>Welcome, {restuarantName}</Text>
      <View style={styles.overviewContainer}>
        <View style={styles.card}>
          <View style={styles.viewOrdersContainer}>
            <Text style={styles.plainTextWhite}>Today's Orders</Text>
            <Text style={styles.orderValue}>25</Text>
          </View>
          <View style={styles.viewBookContainer}>
            <Image source={Icons.open_book} style={styles.viewBookIcon} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.viewOrdersContainer}>
            <Text style={styles.plainTextWhite}>Fullfilled Orders</Text>
            <Text style={styles.orderValue}>20</Text>
          </View>
          <View style={styles.viewBookContainer}>
            <Image source={Icons.shopping_basket} style={styles.viewBookIcon} />
          </View>
        </View>
      </View>
      <View style={styles.easyNavigationContaier}>
        <View style={styles.lightCard}>
          <View
            style={[styles.viewBookContainer, styles.customizedShoppingIcon]}>
            <Image source={Icons.shopping_basket} style={styles.viewBookIcon} />
            <Badge size={16} style={styles.badge}>
              3
            </Badge>
          </View>
          <Pressable>
            <Text style={[styles.easyNavigationText, {color: '#32D583'}]}>
              View Orders
            </Text>
          </Pressable>
        </View>
        <View style={styles.lightCard}>
          <View style={[styles.viewBookContainer, styles.customizedMailIcon]}>
            <Badge size={16} style={styles.badge}>
              5
            </Badge>
            <Image source={Icons.email_outline} style={styles.viewBookIcon} />
          </View>
          <Pressable>
            <Text style={[styles.easyNavigationText, {color: '#FFB547'}]}>
              Messages
            </Text>
          </Pressable>
        </View>
        <View style={styles.lightCard}>
          <View style={[styles.viewBookContainer, styles.customizedUSerIcon]}>
            <Image source={Icons.user_circle} style={styles.viewBookIcon} />
          </View>
          <Pressable>
            <Text style={[styles.easyNavigationText, {color: colors.primary}]}>
              Profile
            </Text>
          </Pressable>
        </View>
      </View>
      <Pressable onPress={()=>navigation.navigate('Additem')}>
            <Text style={[styles.easyNavigationText, {color: colors.primary}]}>
              Add Item
            </Text>
          </Pressable>
    </View>
  );
};

export default Restaurant_Home;
