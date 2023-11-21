import React from 'react';
import {TextInput, View, Image, Text} from 'react-native';
import {style} from './style';
import {Icons} from '../../Utility/Icons';

const SearchInput = ({placholder = 'search'}) => {
  return (
    <View style={style.searchContainer}>
      <TextInput placeholder={placholder} style={style.searchInput} />
      <Image source={Icons.search} style={style.searchIcon} />
    </View>
  );
};

export default SearchInput;
