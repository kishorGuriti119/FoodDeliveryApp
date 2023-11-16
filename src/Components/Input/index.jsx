import React, {useState} from 'react';
import {Pressable, Text, TextInput, View, Image} from 'react-native';
import {style} from './style';
import DropDown from '../DropDown';
import {colors} from '../../Utility/Colors';
import {Icons} from '../../Utility/Icons';

const Input = ({
  label,
  icon,
  isPassword,
  placeholder,
  onChangeText = () => {},
  isMobileNumber,
}) => {
  const [hidePassword, SetHidePassword] = useState(true);

  return (
    <View style={style.Container}>
      {label ? <Text style={style.labelText}>{label}</Text> : null}
      <Pressable
        style={isPassword ? style.PasswordContainer : style.InputContainer}>
        {icon && !isPassword ? (
          <View>
            <Image source={icon} style={style.InputIcon} />
          </View>
        ) : isMobileNumber ? (
          <DropDown />
        ) : isPassword ? (
          <Pressable onPress={() => SetHidePassword(!hidePassword)}>
            <Image
              source={hidePassword ? Icons.closed_eye : Icons.eye}
              style={style.eyeIcon}
            />
          </Pressable>
        ) : null}
        {isMobileNumber ? (
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            keyboardType="numeric"
            style={style.input}
            onChangeText={onChangeText}
            maxLength={10}
          />
        ) : !isPassword ? (
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            style={style.input}
            onChangeText={onChangeText}
          />
        ) : (
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderTextColor}
            style={style.input}
            onChangeText={onChangeText}
            secureTextEntry={hidePassword}
          />
        )}
      </Pressable>
    </View>
  );
};

export default React.memo(Input);
