import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native'
import InterfaceHeader from '../../../../Components/InterfaceHeader'
import ShowFlatList from '../../../../Components/ShowFlatList'

const Customer_Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>

    </View>
  );

  return (
    <View style={{paddingHorizontal:8}}>
      <InterfaceHeader
        PreviousPage
        onPress={() => navigation.goBack()}
      />
      
        <ShowFlatList
          data={cart}
          cartItemType
          horizontal={false}
        />
     

    </View>

  )
}

export default Customer_Cart