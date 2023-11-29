import React from 'react';
import {View, TextInput, Text, Image} from 'react-native';
import {style} from './style';

const EditableInput = ({Icon, label, onChnageText}) => {
  return (
    <View style={style.inputContainer}>
      <View style={style.IconContainer}>
        <Image source={Icon} style={style.inputlabelIcon} />
      </View>
      <View style={style.inputBox}>
        <Text style={style.labelText}>{label}</Text>
        <TextInput value={'kishor Guriti'} />
      </View>
    </View>
  );
};

export default EditableInput;
