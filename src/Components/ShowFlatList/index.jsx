import React, { useState } from 'react';
import FlatList_box from '../Flat_List_Box';

import { Text, View, FlatList, Image, Pressable, ScrollView } from 'react-native';
import FoodItem from '../FoodItem';
import CartItem from '../CartItem';
import { Card, Button, Chip } from 'react-native-paper'
import { colors } from '../../Utility/Colors';
import { useNavigation } from '@react-navigation/native';

const ShowFlatList = ({
  data,
  defaultSelected,
  categoryType,
  notificationsType,
  foodItemsType,
  ordersType,
  onFoodItemClick,
  cartItemType,
  showHorizontal,
  coupons,
  total

}) => {
  const [selected, setSelected] = useState(defaultSelected);
  const navigation = useNavigation()
  
  const renderList = ({ item }) => {
    if (categoryType) {
      return (
        <FlatList_box
          title={item.title}
          icon={item?.icon}
          onPress={() => {
            setSelected(item.title)
          }}
          isSelected={item.title === selected}
        />
      );
    }

    if (coupons) {
      console.log("chip", total)
      return (
        <Card style={{ margin: 5 }}>
          <Card.Title
            title={item.info}
            titleVariant='titleMedium'
            right={(props) =>
              <Chip type="flat" style={{ margin: 5 }}>{item.code}</Chip>
            }
          />
          <Chip disabled={total > item.minValue ? false : true} type="flat" style={{ margin: 5 }} textStyle={{ paddingHorizontal: 136 }} onPress={() => navigation.navigate('cart', { data: item })}>Apply</Chip>
        </Card>
      )
    }

    if (foodItemsType) {
      return (
        <FoodItem
          itemImage={item.itemImage}
          title={item.title}
          deliveryTime={item.deliveryTime}
          price={item.price}
          onPress={() => onFoodItemClick(item)}
        />
      );
    }

    if (cartItemType) {
      return (
        <CartItem item={item} key={item.id} />
      )
    }
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        style={{ marginVertical: 24 }}
        horizontal={showHorizontal}
        renderItem={renderList}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default ShowFlatList;
