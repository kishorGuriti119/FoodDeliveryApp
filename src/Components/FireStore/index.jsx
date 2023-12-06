import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

export const CustomFireStorage = () => {
  const [imageUri, setImageUri] = useState(null);


  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
  };

  launchImageLibrary(options, (response) => {
      if (response.didCancel) {
          console.log('User cancelled image picker');
      } else if (response.error) {
          console.log('Image picker error: ', response.error);
      } else {
          setImageUri(response.uri || response.assets?.[0]?.uri);
          
      }
  });
  };

  const uploadImage = async () => {
    if (!imageUri) {
      Alert.alert('No Image Selected', 'Please select an image before uploading.');
      return;
    }

    try {
      const imageName = `image_${Date.now()}.jpg`;
      const reference = storage().ref(`images/${imageName}`);
      const response = await fetch(imageUri);
      const blob = await response.blob();
      await reference.put(blob);

      const downloadURL = await reference.getDownloadURL();
      console.log('Download URL:', downloadURL);

      // You can now use the downloadURL as needed (e.g., save it to your database).
    } catch (error) {
      console.error('Image upload error:', error);
      Alert.alert('Error', 'Failed to upload image. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 150, height: 150, marginBottom: 20 }} />}
      <Button title="Pick Image" onPress={pickImage} />
      <Button title="Upload Image" onPress={uploadImage} />
      
    </View>
  );
};


