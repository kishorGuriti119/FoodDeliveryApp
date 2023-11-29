import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native'
import InterfaceHeader from '../../../../Components/InterfaceHeader'


const Customer_Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>

    </View>
  );

  return (
    <View>
      <InterfaceHeader
        PreviousPage
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>

  )
}

export default Customer_Cart