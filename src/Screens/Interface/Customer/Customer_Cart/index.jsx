import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Chip, Icon,MD3Colors,Divider} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import ShowFlatList from '../../../../Components/ShowFlatList';
import { style } from './style'
import { colors } from '../../../../Utility/Colors';

const Customer_Cart = ({ route, navigation }) => {
  const { data } = route.params
  const [coupon, setCoupon] = useState('')
  const getCartValue = () => {
    if (data) {
      setCoupon(data)
      console.log(data)
      switch (data.type) {
        case "FLAT":
          if (data.minValue < total) {
            setTotal((prev) => Math.ceil(prev - data.price))
          }
          break;
        case "UPTO":
          if (data.minValue < total) {
            const discountLimit = Math.ceil(total / 100) * data.percentage
            if (discountLimit < data.price) {
              setTotal((prev) => Math.ceil(prev - discountLimit))
            } else {
              setTotal((prev) => prev - data.price)
            }
          }
          break;
        case "DISCOUNT":

          break;

        default:
          break;
      }
    }
  }


  const cart = useSelector((state) => state.cart.cart);
  const [userName, setUserName] = useState('');
  const [total, setTotal] = useState('');


  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    setTotal(Math.ceil(totalPrice));
  };

  useEffect(() => {
    const getUserInfo = async () => {
      let userdetails = await AsyncStorage.getItem('userInfo');
      const user = JSON.parse(userdetails);
      setUserName(user.userName);
    };
    getUserInfo();
    getTotalPrice();
    getCartValue()

  }, [cart, data, total]);

  return (
    <View style={style.container}>
      <InterfaceHeader
        PreviousPage
        onBackPress={() => navigation.navigate('HomeScreen')}
      />

      <View style={{ height: 350 }}>
        <ShowFlatList
          data={cart}
          cartItemType
          horizontal={false}
        />
      </View>
      <View style={{ height: 220 }}>
        <ScrollView>
          <Card style={{ margin: 5 }}>
            {coupon.code ? <Card.Title
              titleStyle={{marginLeft:-30,marginTop:4}}
              title={coupon.info}
              titleVariant='titleMedium'
              left={() => <Icon
                source="check-circle"
                color={"#05b334"}
                size={22}
              />}
              right={(props) =>
                <Chip type="flat" style={{ margin: 5 }}>{coupon.code}</Chip>
              }
            /> : <Chip type="flat" textStyle={{ paddingHorizontal: 90 }}>No Coupons Applied</Chip>}
            <Chip type="flat" style={{ backgroundColor: "#fafafa", }} textStyle={{ color: colors.primary, paddingHorizontal: 110 }} onPress={() => navigation.navigate("Coupons")}>View Coupons</Chip>
          </Card>
          <Card style={{ margin: 5 }}>
            <Card.Content>
              <Text variant="titleLarge">{userName}</Text>
              <Text variant="bodyMedium">
                Plot NO:1, Motivity Labs Pvt Ltd, Dallas Center,
                Raidurg, Hyderabad, Telangana - 500081
              </Text>
            </Card.Content>
          </Card>
          <Card style={{ margin: 5 }}>
            <Card.Content>
              <Text variant="titleLarge">Bill Summary</Text>
              <Divider bold/>
              <Text variant="bodyMedium">
                Plot NO:1, Motivity Labs Pvt Ltd, Dallas Center,
                Raidurg, Hyderabad, Telangana - 500081
              </Text>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>

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
            <Button mode="contained-tonal" onPress={() => navigation.navigate('OrderOnTheWay')}>Place Order</Button>
          </Card.Actions>
        </View>
      </Card>

    </View>
  );
};

export default Customer_Cart;
