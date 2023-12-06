import React, { useState } from 'react';
import { Button, Image, View,Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Input from '../../../../Components/Input';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import { useFormik } from 'formik';
import Auth_service from '../../../../Services/Auth_service';
import { CustomFireStorage } from '../../../../Components/FireStore';
import storage from '@react-native-firebase/storage';

const AddItem = ({ navigation }) => {

    
    const [imageUri, setImageUri] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            image: ''
        },
        onSubmit: async values => {
            console.log(values)
            const res = await Auth_service.userSignUp(values)
            console.log(res)
            

        },
    });

    // const openImagePicker = () => {
    //     const options = {
    //         mediaType: 'photo',
    //         includeBase64: true,
    //         maxHeight: 2000,
    //         maxWidth: 2000,
    //     };

    //     launchImageLibrary(options, (response) => {
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('Image picker error: ', response.error);
    //         } else {
    //             let imageBase64 = response.assets?.[0]?.base64;
    //             setSelectedImage(`data:image/jpeg;base64,${imageBase64}`);
    //             formik.setFieldValue('image', imageBase64);
    //         }
    //     });
    //     // const getResponse = await launchImageLibrary()
    //     // setSelectedImage(getResponse.uri || getResponse.assets?.[0]?.uri);
    //     // console.log(getResponse)
    // };

    // handleCameraLaunch = () => {
    //     const options = {
    //         mediaType: 'photo',
    //         includeBase64: false,
    //         maxHeight: 2000,
    //         maxWidth: 2000,

    //     };
    //     launchCamera(options, response => {
    //         if (response.didCancel) {
    //             console.log('User cancelled camera');
    //         } else if (response.error) {
    //             console.log('Camera Error: ', response.error);
    //         } else {
    //             let imageUri = response.uri || response.assets?.[0]?.uri;
    //             setSelectedImage(imageUri);
    //             console.log(imageUri);
    //         }
    //     });
    // }

    const pickImage = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
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
          formik.setFieldValue('image', downloadURL)
          Alert.alert('Success', 'Image Upload Succesfully');
          // You can now use the downloadURL as needed (e.g., save it to your database).
        } catch (error) {
          console.error('Image upload error:', error);
          Alert.alert('Error', 'Failed to upload image. Please try again.');
        }
      };


    return (
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
            <InterfaceHeader onBackPress={() => navigation.navigate('Home')} PreviousPage />
            <View style={{ flex: 1, justifyContent: 'center', }}>
                <Input
                    label="Name"
                    placeholder="Enter Item Name"
                    onChangeText={formik.handleChange('name')}
                />
                <Input
                    label="Description"
                    placeholder="Enter Item Description"
                    onChangeText={formik.handleChange('description')}
                />
                <Input
                    label="Price"
                    placeholder="Enter Item Price"
                    onChangeText={formik.handleChange('price')}
                />
                {/* <View style={{ marginTop: 20 }}>
                    <Button title="Image" onPress={openImagePicker} />
                </View> */}
                {/* <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <Button title="Open Camera" onPress={handleCameraLaunch} />
                </View> */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {imageUri && <Image source={{ uri: imageUri }} style={{ width: 150, height: 150, marginBottom: 20 }} />}
                    <Button title="Pick Image" onPress={pickImage} />
                    <Button title="Upload Image" onPress={uploadImage} />
                </View>
                <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <Button title="Submit" onPress={formik.handleSubmit} />
                </View>
            </View>

        </View >
    );
};

export default AddItem;