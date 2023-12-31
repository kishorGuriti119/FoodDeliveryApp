import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Chip, Icon, MD3Colors, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import ShowFlatList from '../../../../Components/ShowFlatList';
import { style } from './style'
import { colors } from '../../../../Utility/Colors';
import { addOrder } from '../../../../Store/Slices/OrdersReducer';

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
          else if {
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
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text>Item Total</Text>
                <Text>{total}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text>Delivery Fee</Text>
                <Text>30</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text>Item Discount</Text>
                <Text>{discountValue}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text>Platform Fee</Text>
                <Text>3</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text>GST and Restaurant Charges</Text>
                <Text>20</Text>
              </View>
              <Text>To Pay</Text>

            </Card.Content>
          </Card>
        </ScrollView>
      </View>
      {/* Total Price Card */}
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
                {toPay}
              </Text>,
            ]}
            subtitle="Total Price"
          />
          <Card.Actions style={{ marginLeft: 'auto' }}>
            <Button mode="contained-tonal" onPress={() => {
              dispatch(addOrder(cart))
              navigation.navigate('OrderOnTheWay')
            }}>Place Order</Button>
          </Card.Actions>
        </View>
      </Card>

    </View>
  );
};

export default Customer_Cart;
