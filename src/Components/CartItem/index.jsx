import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Card, Button, ToggleButton, IconButton } from "react-native-paper";
import { incrementQunatity, decrementQuantity } from '../../Store/Slices/CartReducer';
import { useDispatch } from 'react-redux';

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
                right={(props) => <Card.Actions  >
                    <Button onPress={decreaseQunatity} mode="elevated" ><Text style={{ fontSize: 18, fontWeight: "bold" }}>-</Text></Button>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.quantity}</Text>
                    <Button onPress={increaseQunatity} mode="elevated"><Text style={{ fontSize: 18, fontWeight: "bold" }}>+</Text></Button>

                </Card.Actions>}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", alignSelf: "flex-end" }}>{item.quantity * item.price}</Text>
        </View>


    )
}

export default CartItem