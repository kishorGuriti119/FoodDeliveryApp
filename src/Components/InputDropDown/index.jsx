import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {style} from './style';

const DropdownComponent = ({data, label, value, onValueChange}) => {
  return (
    <Pressable hitSlop={20}>
      {label ? <Text style={style.labelStyle}>{label}</Text> : null}
      <Dropdown
        style={style.dropdown}
        inputSearchStyle={style.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="State"
        searchPlaceholder="Search..."
        value={value}
        onChange={onValueChange}
      />
    </Pressable>
  );
};

export default React.memo(DropdownComponent);
