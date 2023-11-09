import React from 'react';
import {Pressable, Text, TextInput, View, Image} from 'react-native';
import {style} from './style';
import DropDown from '../DropDown';
import {colors} from '../../Utility/Colors';

const Input = ({
  label,
  icon,
  isPassword,
  placeholder,
  customStyle,
  onChangeText = () => {},
  isMobileNumber,
  value = '',
}) => {
  return (
    <View style={style.Container}>
      {label ? <Text style={style.labelText}>{label}</Text> : null}
      <Pressable style={style.InputContainer}>
        {icon && !isPassword ? (
          <View>
            <Image source={icon} style={style.InputIcon} />
          </View>
        ) : isMobileNumber ? (
          <DropDown />
        ) : null}
        {!isMobileNumber ? (
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            style={style.input}
            onChangeText={onChangeText}
            secureTextEntry={isPassword}
          />
        ) : (
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            keyboardType="numeric"
            style={style.input}
            onChangeText={onChangeText}
            maxLength={10}
          />
        )}
      </Pressable>
    </View>
  );
};

export default React.memo(Input);
