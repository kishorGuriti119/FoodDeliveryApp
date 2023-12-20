import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Card, Button, ToggleButton, IconButton } from "react-native-paper";
import { incrementQunatity, decrementQuantity } from '../../Store/Slices/CartReducer';
import { useDispatch } from 'react-redux';
import { colors } from '../../Utility/Colors';

const CartItem = ({ item }) => {
    
    dispatch = useDispatch()
    const increaseQunatity = () => {
        dispatch(incrementQunatity(item))
        console.log("Increased")
    }
    const decreaseQunatity = () => {
        dispatch(decrementQuantity(item))
        console.log("decreased")
    }

    return (
        <View >
            <Card.Title key={item.id}
                title={item.title}
                subtitle={item.price}
                left={() => <Image source={item.itemImage} style={{ width: 40, height: 40, borderRadius: 10 }} />}
                right={(props) => <Card.Actions  >
                    <View style={{ flexDirection: "row", gap: 20, backgroundColor: "#ffffff", paddingVertical: 6, paddingHorizontal: 10, borderRadius: 8, borderColor: colors.primary, borderWidth: 2 }}>
                        <Pressable onPress={() => decreaseQunatity()}><Text style={{ fontSize: 18, fontWeight: "bold" }}>-</Text></Pressable>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.quantity}</Text>
                        <Pressable onPress={() => increaseQunatity()}><Text style={{ fontSize: 18, fontWeight: "bold" }}>+</Text></Pressable>
                    </View>
                </Card.Actions>}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", alignSelf: "flex-end" }}>{item.quantity * item.price}</Text>
        </View>


    )
}

export default CartItem