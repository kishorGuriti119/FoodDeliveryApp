import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Pressable,
  BackHandler,
  ScrollView
} from 'react-native';
import {style} from './style';
import {Icons} from '../../../../Utility/Icons';
import Button from '../../../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Admin_Home = ({navigation}) => {
  const navigetToRestarauantForm = () => {
    navigation.navigate('createRestaurant');
  };

  const navigetToCreatePilot = () => {
    navigation.navigate('createPilot');
  };

  return (
    <SafeAreaView>
    <ScrollView>
      <View>
        <Button title="open drawer" onPress={() => navigation.openDrawer()} />
      </View>
      <View style={style.container}>
        <View style={style.addRestaurantcard}>
          <ImageBackground
            source={{
              uri: 'https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={style.addRestaurantcardbg}>
            <View style={style.button}>
              <Button
                title="Add Restaurant"
                onPress={navigetToRestarauantForm}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={style.addRestaurantcard}>
          <ImageBackground
            source={{
              uri: 'https://as1.ftcdn.net/v2/jpg/06/46/31/96/1000_F_646319625_Dzll0Ru2DERCzH8jqmAVQ9Y29WkQnmuX.jpg',
            }}
            style={style.addRestaurantcardbg}>
            <View style={style.button}>
              <Button
                title="Add Deliver Agent"
                onPress={navigetToCreatePilot}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Admin_Home;
