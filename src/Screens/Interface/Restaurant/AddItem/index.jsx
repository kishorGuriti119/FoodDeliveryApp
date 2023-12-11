import React, { useState } from 'react';
import { Button, Image, View, Alert, ActivityIndicator } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Input from '../../../../Components/Input';
import InterfaceHeader from '../../../../Components/InterfaceHeader';
import { useFormik } from 'formik';
import Auth_service from '../../../../Services/Auth_service';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { style } from './style'
const AddItem = ({ navigation }) => {
    const [downloadUrl, setDownloadUrl] = useState(null)
    const [showPickImage, setShowPickImage] = useState(false)




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

    const pickImage = async () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        const userId = await AsyncStorage.getItem('userid');
        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                setShowPickImage(true)
                console.log(userId)
                const imageUri = response.uri || response.assets?.[0]?.uri;
                if (!imageUri) {
                    Alert.alert('No Image Selected', 'Please select an image before uploading.');
                    return;
                }

                try {
                    const imageName = `${userId}_${Date.now()}.jpg`;
                    const reference = storage().ref(`${userId}/${imageName}`);
                    const response = await fetch(imageUri);
                    const blob = await response.blob();
                    await reference.put(blob);

                    const downloadURL = await reference.getDownloadURL();
                    console.log('Download URL:', downloadURL);
                    setDownloadUrl(downloadURL)
                    formik.setFieldValue('image', downloadURL)
                    setShowPickImage(false)
                    // Alert.alert('Success', 'Image Upload Succesfully');
                    // You can now use the downloadURL as needed (e.g., save it to your database).
                } catch (error) {
                    console.error('Image upload error:', error);
                    Alert.alert('Error', 'Failed to upload image. Please try again.');
                }
            }
        });


    };



    return (
        <View style={style.container}>
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
                <View style={{ justifyContent: 'center', alignItems: 'center', rowGap: 10 }}>
                    {downloadUrl && <Image source={{ uri: downloadUrl }} style={{ width: 150, height: 150, marginBottom: 20 }} />}
                    {showPickImage ? <ActivityIndicator size="large" color="red" /> : ""}
                    <Button title="Pick Image" onPress={pickImage} disabled={showPickImage} />
                </View>
                <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <Button title="Submit" onPress={formik.handleSubmit} disabled={showPickImage} />
                </View>
            </View>

        </View >
    );
};

export default AddItem;