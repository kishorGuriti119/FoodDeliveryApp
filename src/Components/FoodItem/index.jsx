import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {style} from './style';
import {Icons} from '../../Utility/Icons';

const FoodItem = ({itemImage, title, deliveryTime, price, onPress}) => {
  return (
    <Pressable style={style.Item} onPress={onPress}>
      <Image source={itemImage} style={style.cardImage} />
      <View style={style.FoodItemDescriptionContainer}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.Price}>{price}</Text>
        <Text style={style.delivery}>deliveryTime | {deliveryTime} mins</Text>
      </View>
      <Image source={Icons.Favorites_white} style={style.wishList} />
    </Pressable>
  );
};

export default FoodItem;
