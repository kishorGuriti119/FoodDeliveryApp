import React from 'react';
import {Text, View, FlatList, Image, Pressable, ScrollView} from 'react-native';
import {colors} from '../../Utility/Colors';
import {style} from './style';

const FlatList_box = ({onPress, isSelected, title, icon}) => {
  return (
    <Pressable
      hitSlop={20}
      onPress={onPress}
      style={[
        style.flatlistbox,
        isSelected ? {backgroundColor: colors.secondary} : '',
      ]}>
      <Text style={[style.text, isSelected ? {color: colors.whiteText} : '']}>
        {title}
      </Text>
      {icon ? <Image source={icon} style={style.icon} /> : null}
    </Pressable>
  );
};

export default FlatList_box;
