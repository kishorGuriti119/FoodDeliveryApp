import React, { useState } from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { replaceItem } from '../../Store/Slices/CartReducer';
import { useDispatch, useSelector } from 'react-redux';


export const ReplaceDialog = ({ visible, isVisible, item }) => {
    const cart = useSelector((state) => state.cart.cart)
    console.log(item)
    const dispatch = useDispatch()

    const hideDialog = () => isVisible(false);


    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Replace cart item?</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">Do you want to discard your dishes from {cart.length > 0 ? cart[0].restaurantId : ""} to {item.restaurantId} ?</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => isVisible(false)}>Cancel</Button>
                    <Button onPress={() => {
                        dispatch(replaceItem(item))
                        isVisible(false)
                    }}>Replace</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};