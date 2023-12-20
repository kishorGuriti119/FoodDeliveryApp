import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Chip, Icon, MD3Colors, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import ShowFlatList from '../../../../Components/ShowFlatList';
import { style } from './style'
import { colors } from '../../../../Utility/Colors';
import { addOrder } from '../../../../Store/Slices/OrdersReducer';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const Customer_Cart = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const { data } = route.params
  const [coupon, setCoupon] = useState('')
  const [discountValue, setDiscountValue] = useState('')

  const cart = useSelector((state) => state.cart.cart);
  const [userName, setUserName] = useState('');
  const [total, setTotal] = useState('');
  const [toPay, setToPay] = useState('')

  const getCartValue = () => {
    if (data) {
      setCoupon(data)
      switch (data.type) {
        case "FLAT":
          if (data.minValue < total) {
            setDiscountValue(data.price)
            setToPay(total - data.price)
          }
          else {
            setDiscountValue("")
            setToPay(total)

          }
          break;
        case "UPTO":
          if (data.minValue < total) {
            const discountLimit = Math.ceil(total / 100) * data.percentage
            if (discountLimit < data.price) {
              setDiscountValue(discountLimit)
              setToPay(total - discountLimit)

            }
            else {
              setDiscountValue(data.price)
              setToPay(total - data.price)

            }
          } else if (total < data.minValue) {
            setDiscountValue("")
            setToPay(total)

          }
          break;
        case "DISCOUNT":
          if (data?.minValue < total) {
            console.log(total)
            const percentageValue = total / 100
            const discountLimit = percentageValue * data.percentage
            console.log("djfvkjfnjkfnd", discountLimit)
            if (discountLimit < data.price) {
              setDiscountValue(discountLimit)
              setToPay(total - discountLimit)

            }
            else {
              setDiscountValue(data.price)
              setToPay(total - data.price)

            }
          } else if (total < data.minValue) {
            setDiscountValue("")
            setToPay(total)

          }
          break;
        default:
          break;
      }
    }
  }




  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    setTotal(Math.ceil(totalPrice));
    if (!discountValue) {
      setToPay(total)
    }

  };

  useEffect(() => {
    const getUserInfo = async () => {
      let userdetails = await AsyncStorage.getItem('userInfo');
      const user = JSON.parse(userdetails);
      setUserName(user.userName);
    };
    getUserInfo();


  }, []);

  useEffect(() => {
    // const newTotal = getTotalPrice();
    // const newCartValue = getCartValue();
    // if (newTotal !== total || newCartValue !== cart) {
    //   // Update state only if there's a change
    //   setTotal(newTotal);
    //   setCart(newCartValue);
    // }
    getTotalPrice();
    getCartValue()
  }, [cart, data, total])

  const placeOrder = async (cart) => {
    const filteredItems = cart.map(item => ({
      menuItemId: item.menuItemId,
      quantity: item.quantity
    }));
    let userdetails = await AsyncStorage.getItem('token');
    userdetails = jwtDecode(userdetails);
    const orderRequest = {
      customerId: userdetails.sid,
      restaurantId: cart[0].restaurantId,
      orderItems: filteredItems,
      status: "ACCEPTED",
      totalAmount: total,
      orderTime: new Date(),
      coupon: coupon ? coupon.code : "",
      finalPrice: toPay
    }
    try {
      const { data } = await axios.post("http://10.0.2.2:8080/orders/placeOrder", orderRequest)
      console.log(data)

      navigation.navigate('OrderOnTheWay')
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }

  return (

    <View style={style.container}>
      <ScrollView>
        <InterfaceHeader
          PreviousPage
          onBackPress={() => navigation.navigate('HomeScreen')}
        />

        <View >
          <ShowFlatList
            data={cart}
            cartItemType
            horizontal={false}
          />
        </View>
        <View>
          <Card style={{ margin: 5 }}>
            {coupon.code ? <Card.Title
              titleStyle={{ marginLeft: -30, marginTop: 4 }}
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
            <Chip type="flat" style={{ backgroundColor: "#fafafa", }} textStyle={{ color: colors.primary, paddingHorizontal: 110 }} onPress={() => navigation.navigate("Coupons", { total: total })}>View Coupons</Chip>
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
              <Divider bold />
              <View style={style.rowSpaceBtwn}>
                <Text>Item Total</Text>
                <Text>{total}</Text>
              </View>
              <View style={style.rowSpaceBtwn}>
                <Text>Delivery Fee</Text>
                <Text>30</Text>
              </View>
              <View style={style.rowSpaceBtwn}>
                <Text>Item Discount</Text>
                <Text>{discountValue}</Text>
              </View>
              <View style={style.rowSpaceBtwn}>
                <Text>Platform Fee</Text>
                <Text>3</Text>
              </View>
              <View style={style.rowSpaceBtwn}>
                <Text>GST and Restaurant Charges</Text>
                <Text>20</Text>
              </View>
              <Text>To Pay</Text>

            </Card.Content>
          </Card>

        </View>
      </ScrollView>
      <Card style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}>
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
                {toPay}
              </Text>,
            ]}
            subtitle="Total Price"
          />
          <Card.Actions style={{ marginLeft: 'auto' }}>
            <Button mode="contained-tonal" onPress={() => {
              placeOrder(cart)
              dispatch(addOrder(cart))
            }}>Place Order</Button>
          </Card.Actions>
        </View>
      </Card>
    </View>

  );
};

export default Customer_Cart;
