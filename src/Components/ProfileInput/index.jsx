import React from 'react';
import {Pressable, Text, TextInput, View, Image} from 'react-native';
import {style} from './style';

const ProfileInput = ({
  label,
  placeholder,
  icon,
  onChangeText,
  isPassword,
  ismobile,
  ispincode,
  defaultValue,
  isCountry,
}) => {
  return (
    <View style={style.container}>
      {label ? <Text style={style.labelStyle}>{label}</Text> : null}
      <Pressable style={style.InputContainer}>
        {icon ? (
          <View style={style.imageContainer}>
            <Image source={icon} style={style.inputIconstyle} />
          </View>
        ) : null}
        <View style={style.inputbox}>
          {ismobile ? (
            <TextInput
              placeholder={placeholder}
              onChangeText={onChangeText}
              keyboardType="numeric"
              maxLength={10}
            />
          ) : (
            <TextInput
              placeholder={placeholder}
              onChangeText={onChangeText}
              secureTextEntry={isPassword}
              keyboardType={ispincode ? 'numeric' : 'default'}
              maxLength={ispincode ? 6 : undefined}
              value={defaultValue && defaultValue}
              editable={!isCountry}
              style={isCountry && style.disabled}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default React.memo(ProfileInput);
