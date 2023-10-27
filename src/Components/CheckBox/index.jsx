import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {style} from './style';
import {colors} from '../../Utility/Colors';
const CheckBox = ({isChecked, handleCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        style.container,
        isChecked
          ? {borderWidth: 0, borderRadius: 3}
          : {borderWidth: 1, borderColor: colors.secondary},
      ]}
      onPress={() => handleCheck(!isChecked)}>
      {isChecked ? (
        <View style={style.innerContainer}>
          <Image
            style={style.checkIcon}
            source={require('../../assets/check_Icon.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
