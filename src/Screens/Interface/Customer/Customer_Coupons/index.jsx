import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { style } from './style'
import InterfaceHeader from '../../../../Components/InterfaceHeader'
import { Card, Button, Chip } from 'react-native-paper'
import ShowFlatList from '../../../../Components/ShowFlatList'
import { useSelector } from 'react-redux';
const { width, height } = Dimensions.get("window")
const couponsData = [{
    id: 1,
    type: "FLAT",
    info: "You Will get Flat Rs.80",
    price: 80,
    code: "FLAT80",
    minValue: 300
},
{
    id: 2,
    type: "UPTO",
    info: "You Will get Upto Rs.100",
    code: "UPTO100",
    price: 100,
    percentage: 10,
    minValue: 500
},
{
    id: 3,
    type: "DISCOUNT",
    info: "You Will get Upto 10% Discount Upto Rs.1000",
    percentage: 10,
    code: "DISC10",
    price: 1000,
    minValue: 2000
}]

export const Customer_Cuopons = ({ route,navigation }) => {
    const { total } = route.params
    
    const cart = useSelector((state) => state.cart.cart)
    return (
        <View style={style.container}>
            <InterfaceHeader title="Your Coupons" notifications myStyle onBackPress={() => navigation.navigate(cart.length > 0 ? "cart" : "Home")} PreviousPage />
            <ShowFlatList
                coupons
                data={couponsData}
                total={total}
            />
        </View>
    )
}

