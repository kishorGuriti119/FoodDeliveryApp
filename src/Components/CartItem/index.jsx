import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Card, Button, ToggleButton, IconButton } from "react-native-paper";

const CartItem = ({ item }) => {


    return (
        <>
            <Card.Title
                title={item.title}
                subtitle={item.price}
                right={(props) => <Card.Actions >
                    <Button mode="elevated" ><Text style={{ fontSize: 18, fontWeight: "bold" }}>-</Text></Button>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.quantity}</Text>
                    <Button mode="elevated"><Text style={{ fontSize: 18, fontWeight: "bold" }}>+</Text></Button>

                </Card.Actions>}

            />
            <Text style={{ fontSize: 16, fontWeight: "bold", alignSelf: "flex-end" }}>{item.quantity * item.price}</Text>
        </>


    )
}

export default CartItem