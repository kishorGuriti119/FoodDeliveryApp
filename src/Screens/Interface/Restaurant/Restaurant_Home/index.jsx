import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { Icons } from '../../../../Utility/Icons';
import { style } from '../../../../Components/InterfaceHeader/style';
import { colors } from '../../../../Utility/Colors';

const Restaurant_Home = () => {
  const [restaurantAddress, setRestaurantAddress] = useState('')
  const [restuarantName, setRestaurantName] = useState('')

  useEffect(() => {
    restaurantDetails()
  }, [])


  const restaurantDetails = async () => {
    const token = await AsyncStorage.getItem('token')
    const userId = await AsyncStorage.getItem('userid')
    let resData = jwtDecode(token)
    try {
      const { data } = await axios.get(`http://10.0.2.2:8082/api/restaurant/restaurant/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
      const { name, address, restaurantId } = data
      setRestaurantName(name)
      setRestaurantAddress(address)

    } catch (error) {
      console.log(error.code)
    }


  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.interfaceContainer }>
        <Pressable>
          <Image source={Icons.dashboard_Icon} style={style.headerIcon} />
        </Pressable>
        <View style={{ flexDirection: 'row' }}>
          <Image source={Icons.location_mark} style={style.headerIcon} />
          <Text>{restaurantAddress.locality}</Text>
        </View>
        <Image source={Icons.email_outline} style={style.headerIcon} />
      </View>
      <Text style={styles.welcomeText}>Welcome, {restuarantName}</Text>
      <View style={styles.overviewCOntainer}>
        <View style={styles.card}>
          <View style={styles.viewOrdersContainer}>
            <Text style={styles.plainTextWhite}>
              Today's Orders
            </Text>
            <Text style={styles.orderValue}>
              25
            </Text>
          </View>
          <View style={styles.viewBookContainer}>
            <Image source={Icons.open_book} style={styles.viewBookIcon} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.viewOrdersContainer}>
            <Text style={styles.plainTextWhite}>
              Fullfilled Orders
            </Text>
            <Text style={styles.orderValue}>
              20
            </Text>
          </View>
          <View style={styles.viewBookContainer}>
            <Image source={Icons.shopping_basket} style={styles.viewBookIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Restaurant_Home;
