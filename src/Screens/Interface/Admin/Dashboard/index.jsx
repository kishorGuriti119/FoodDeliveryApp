import React from 'react';
import {Text, View, SafeAreaView, ImageBackground} from 'react-native';
import {style} from './style';
import {Icons} from '../../../../Utility/Icons';
import Button from '../../../../Components/Button';

const AdminDashboard = ({navigation}) => {
  const navigetToRestarauantForm = () => {
    navigation.navigate('createRestaurant');
  };

  const navigetToCreatePilot = () => {
    navigation.navigate('createPilot');
  };

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default AdminDashboard;
