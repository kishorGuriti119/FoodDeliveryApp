import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {style} from './style';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import {Order_category} from '../../../../Utility/Flatlist_data';
import FlatList_box from '../../../../Components/Flat_List_Box';
import ShowFlatList from '../../../../Components/ShowFlatList';
import {Icons} from '../../../../Utility/Icons';
import {colors} from '../../../../Utility/Colors';
import SearchInput from '../../../../Components/SearchInput';

const Customer_Home = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <InterfaceHeader
          dashboardIcon
          location
          title="Area 7, Garki Abuja"
          notifications
        />
        <View style={style.title}>
          <Text style={style.titleText}>What are we ordering today?</Text>
        </View>
        <ShowFlatList data={Order_category} defaultSelected="Popular" />

        <View style={style.special_card_container}>
          <ImageBackground
            style={style.specialCard}
            source={Icons.customer_Home_Special_Card}>
            <View style={style.specialCard_Description}>
              <Text style={style.mainText}>Spaghetti Specials month</Text>
              <Text style={style.subText}>
                For all spaghetti lovers, get $10 off all spaghetti based meals.
              </Text>
              <TouchableOpacity style={style.claimNowButton}>
                <Text style={style.claim}>Claim now</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={Icons.special_card_image}
                style={style.special_card_image}
              />
            </View>
          </ImageBackground>
        </View>
        <View>
          <SearchInput placeholder="hello" />
        </View>

        <View style={style.popularPicContainer}>
          <Text style={style.popularText}>Popular picks🍲</Text>
          <Pressable style={style.seemore}>
            <Text style={style.seemoreText}>See more...</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Customer_Home;
