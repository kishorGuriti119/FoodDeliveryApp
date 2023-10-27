import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Text, View, Image, TextInput} from 'react-native';
import {style} from './style';
import {Icons} from '../../Utility/Icons';
import {colors} from '../../Utility/Colors';

const DropDown = ({onChangeText = () => {}}) => {
  return (
    <View style={style.DropDown}>
      <TextInput
        placeholder="+91"
        style={style.counterycodeInput}
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
      <Image source={Icons.country_code} style={style.icon} />
    </View>
  );
};

export default DropDown;
