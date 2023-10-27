import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './style';

const Button = ({title, handleClick, accessibilityLabel = ''}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={style.button}
      onPress={handleClick}
      accessibilityLabel={title}>
      <LinearGradient
        colors={['#F9881F', '#ED474A']}
        start={{x: 0, y: 0.4}}
        end={{x: 1, y: 0.5}}
        style={style.button}>
        <Text style={style.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
