import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import ShowFlatList from '../../../../Components/ShowFlatList';

const Customer_Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart);
  const [userName, setUserName] = useState('');
  const [total, setTotal] = useState('');

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    setTotal(totalPrice);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      let userdetails = await AsyncStorage.getItem('userInfo');
      const user = JSON.parse(userdetails);
      setUserName(user.userName);
    };
    getUserInfo();
    getTotalPrice();
  }, [cart]);

  return (
    <View style={{ paddingHorizontal: 8 }}>
      <InterfaceHeader
        PreviousPage
        onBackPress={() => navigation.navigate('HomeScreen')}
      />
      <View style={{height:480,paddingHorizontal:10}}>
      <ShowFlatList
        data={cart}
        cartItemType
        horizontal={false}
      />
      </View>
      <Card style={{ marginVertical: 10 }}>
        <Card.Content>
          <Text variant="titleLarge">{userName}</Text>
          <Text variant="bodyMedium">
            Plot NO:1, Motivity Labs Pvt Ltd, Dallas Center,
            Raidurg, Hyderabad, Telangana - 500081
          </Text>
        </Card.Content>
      </Card>
      <Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8,
          }}>
          <Card.Title
            title={[
              <Text key={1} style={{ fontSize: 20, fontWeight: '600' }}>
                Rs.
              </Text>,
              <Text key={2} style={{ fontSize: 20, fontWeight: '600' }}>
                {total}
              </Text>,
            ]}
            subtitle="Total Price"
          />
          <Card.Actions style={{ marginLeft: 'auto' }}>
            <Button mode="contained-tonal" onPress={()=>navigation.navigate('OrderOnTheWay')}>Place Order</Button>
          </Card.Actions>
        </View>
      </Card>
    </View>
  );
};

export default Customer_Cart;
