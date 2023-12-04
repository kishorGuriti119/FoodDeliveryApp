import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../../../Components/Button';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import axios from 'axios';


const Restaurant_Orders = ({ navigation }) => {
  // const onLogut = async () => {
  //   let token = await AsyncStorage.getItem('token');
  //   if (token) {
  //     console.log('token from backend');
  //     await AsyncStorage.removeItem('token');
  //     navigation.navigate('login');
  //   } else {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     console.log('log out');
  //   }
  //   navigation.navigate('login');
  // };

  // const [token, setToken] = useState('');
  // const [preview, setPreview] = useState(null);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // // const [restuarantID, setRestuarantID] = useState(
  // //   '44487ffd-cd6b-4ab1-9d7f-90529de99a4f',
  // // );

  // const createFormData = (selectedPhoto, body = {}) => {
  //   const data = new FormData();

  //   data.append('image', {
  //     name: selectedPhoto.fileName,
  //     type: selectedPhoto.type,
  //     uri:
  //       Platform.OS === 'ios'
  //         ? selectedPhoto.uri.replace('file://', '')
  //         : selectedPhoto.uri,
  //   });

  //   Object.keys(body).forEach(key => {
  //     data.append(key, body[key]);
  //   });

  //   console.log(data);
  //   return data;
  // };

  // useEffect(() => {
  //   const getToken = async () => {
  //     let Storedtoken = await AsyncStorage.getItem('token');
  //     if (Storedtoken !== null) {
  //       setToken(Storedtoken);
  //     }
  //   };
  //   getToken();
  // }, [token]);

  // const uploadImage = async () => {
  //   fetch(`http://10.0.2.2:8082/api/restaurant/menu`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     body: createFormData(selectedPhoto, {
  //       restaurantId: '44487ffd-cd6b-4ab1-9d7f-90529de99a4f',
  //       name: 'chicken',
  //       description: 'most popular food these days',
  //       price: '290',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log('response', response);
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //     });
  // };

  // const choosePhoto = async () => {
  //   let response = await launchImageLibrary();
  //   setSelectedPhoto(response);
  //   setPreview(response.assets[0].uri);
  // };

  return (
    <View>
      {/* <Button title="uploadImage" onPress={uploadImage} />
      <Button title="logout" onPress={onLogut} />
      <Button title="choose" onPress={choosePhoto} />
      {preview && (
        <Image
          source={{
            uri: preview,
          }}
          style={{ height: 200, width: 200 }}
        />
      )} */}
    </View>
  );
};


export default Restaurant_Orders;
