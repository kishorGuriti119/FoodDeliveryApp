import React, { useState } from 'react';
import FlatList_box from '../Flat_List_Box';

import { Text, View, FlatList, Image, Pressable, ScrollView } from 'react-native';
import FoodItem from '../FoodItem';
import CartItem from '../CartItem';

const ShowFlatList = ({
  data,
  defaultSelected,
  categoryType,
  notificationsType,
  foodItemsType,
  ordersType,
  onFoodItemClick,
  cartItemType,
  showHorizontal

}) => {
  const [selected, setSelected] = useState(defaultSelected);

  const renderList = ({ item }) => {
    if (categoryType) {
      return (
        <FlatList_box
          title={item.title}
          icon={item?.icon}
          onPress={() => setSelected(item.title)}
          isSelected={item.title === selected}
        />
      );
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
          <CartItem item={item} />
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
