import React from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import {style} from './style';
import {Icons} from '../../../../Utility/Icons';
const Customer_Orders = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={Icons.oreder_preview}
        style={style.backgroundImg}
      />
      <View style={style.headerPosition}>
        <InterfaceHeader
          orderpreview
          title="palasa"
          location
          notifications
          PreviousPage
          myStyle={style.customBack}
          locationCustomstyle={style.locationStyle}
        />
      </View>
      <View style={style.orderPreview_fav_rating_container}>
        <Image source={Icons.Favorites_white} style={style.FavouritesIcon} />
        <View style={style.ratingContainer}>
          <Image source={Icons.star} style={style.starIcon} />
          <Text style={style.ratingText}>4.9k Ratings</Text>
        </View>
      </View>
    </View>
  );
};

export default Customer_Orders;
