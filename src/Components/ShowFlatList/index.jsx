import React, {useState} from 'react';
import FlatList_box from '../Flat_List_Box';

import {Text, View, FlatList, Image, Pressable, ScrollView} from 'react-native';

const ShowFlatList = ({data, defaultSelected}) => {
  const [selected, setSelected] = useState(defaultSelected);

  const renderList = ({item}) => {
    return (
      <FlatList_box
        title={item.title}
        icon={item?.icon}
        onPress={() => setSelected(item.title)}
        isSelected={item.title === selected}
      />
    );
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        style={{marginVertical: 24}}
        horizontal
        renderItem={renderList}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default ShowFlatList;
