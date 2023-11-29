import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import {style} from './style';
import {Icons} from '../../../../Utility/Icons';
import {colors} from '../../../../Utility/Colors';
import Button from '../../../../Components/Button';
import { addToCart } from '../../../../Store/Slices/CartReducer';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';


const Order_Preview = ({route, navigation}) => {
  const cart = useSelector((state)=> state.cart.cart)
  const dispatch = useDispatch()
  const [itemQuantity, setItemQuantity] = useState(parseInt(1));
  const [isCart,setIsCart] = useState(true)
  const {item} = route?.params;

  const filterCartItems = (cart)=>{
    const isItem = cart.filter((items)=> items.id === item.id )
    console.log(isItem)
    if(isItem.length>0){
      setIsCart(false)
    }else{
      setIsCart(true)
    }
  }
  useEffect(()=>{
    filterCartItems(cart)
  },[cart])

  const handleAddItem = ()=>{
    console.log(item, "dispatch")
    dispatch(addToCart(item))
    
  }

  return (
    <ScrollView style={style.container}>
      <ImageBackground source={item.itemImage} style={style.backgroundImg}>
        <View style={style.headerPosition}>
          <InterfaceHeader
            orderpreview
            title="palasa"
            location
            notifications
            PreviousPage
            myStyle={style.customBack}
            locationCustomstyle={style.locationStyle}
            onNotification={() => navigation.navigate('Messages')}
            onBackPress={() => navigation.goBack()}
          />
        </View>
        <View style={style.orderPreview_fav_rating_container}>
          <Image source={Icons.Favorites_white} style={style.FavouritesIcon} />
          <View style={style.ratingContainer}>
            <Image source={Icons.star} style={style.starIcon} />
            <Text style={style.ratingText}>4.9k Ratings</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.BottomContainer}>
        <View style={style.ItemdescriptionContainer}>
          <View style={style.title_and_quantity}>
            <Text style={style.item_title}>{item?.title}</Text>
            <View style={style.quantity_Container}>
              <TouchableOpacity
                activeOpacity={0.6}
                hitslop={20}
                disabled={itemQuantity <= parseInt(1)}
                style={style.quantityAction}
                onPress={() =>
                  setItemQuantity(itemQuantity => parseInt(itemQuantity - 1))
                }>
                <Text style={style.quantityIndex}>-</Text>
              </TouchableOpacity>
              <Text style={style.quantity}>{cart.length > 0 ?cart[0].quantity:""}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={style.quantityAction}
                onPress={() =>
                  setItemQuantity(itemQuantity => parseInt(itemQuantity + 1))
                }>
                <Text style={style.quantityIndex}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text>{item.price}</Text>
          <View style={style.delivery_data}>
            <Text>Distance | 3.0km 🛵</Text>
            <Text>Distance | 3.0km 🛵</Text>
            <Text>Distance | 3.0km 🛵</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.orderCategoryColor,
                marginVertical: 12,
              }}>
              Description
            </Text>
          </View>

          <View>
            <Text style={style.itemDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim.
            </Text>
          </View>
          <View>
            {isCart && <Button title={`Place order X${itemQuantity}`} onPress={handleAddItem}/>}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Order_Preview;
