import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../../../Components/Input'
import { styles } from './style'
import InterfaceHeader from '../../../../Components/InterfaceHeader'
import Button from '../../../../Components/Button'
import { useFormik } from 'formik'
import { Validate_UserAddress } from '../../../../Validations/InputValidation'
import { globelstyle } from '../../../../Utility/GlobelStyles'
import { Card } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Customer_Adresses = ({ navigation }) => {
    const [addresses,setAddresses]= useState('')

    useEffect(()=>{
        const getAddresses = async ()=>{
            let userAddresses = await AsyncStorage.getItem('addresses')
            setAddresses(JSON.parse(userAddresses))
          }
          getAddresses()
    })

    return (
        <View style={styles.mainContainer}>
            <InterfaceHeader
                PreviousPage
                notifications
                onBackPress={() => navigation.goBack()}
                onNotification={() => navigation.navigate('Messages')}
                title="Your Addresses"
            />
            <Button title="Add Address" onPress={() => navigation.navigate("AddAddress")} />
            <Text style={globelstyle.subHeading}>Saved Addresses</Text>

            <FlatList

                data={addresses}
                keyExtractor={(item,index) => index} // Use toString() to ensure the key is a string
                renderItem={({ item }) => {
                    return (
                        <Card style={{ marginVertical: 5, marginHorizontal: 5 }}>
                            <Card.Content>
                                <Text variant="titleLarge">{item.plot}</Text>
                                <Text variant="bodyMedium">
                                    {item.area}
                                </Text>
                            </Card.Content>
                        </Card>
                    );
                }}
            />

        </View>
    )
}



export const Customer_AddAddress = ({ navigation }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            plot: '',
            area: '',

        },
        onSubmit: async values => {
            const { isValid, errors } = await Validate_UserAddress(values);
          
            if (isValid) {
              try {
                const addresses = await AsyncStorage.getItem("addresses");
                if (addresses) {
                  // If addresses exist, parse and update the existing array
                
                  const existingAddresses = JSON.parse(addresses);
                  existingAddresses.push(values);
                  await AsyncStorage.setItem("addresses", JSON.stringify(existingAddresses));
                } else {
                  // If no addresses exist, create a new array with the current values
                  await AsyncStorage.setItem("addresses", JSON.stringify([values]));
                }
          
                // Optionally, log the updated or initialized addresses
                const updatedAddresses = await AsyncStorage.getItem("addresses");
                console.log('Addresses:', JSON.parse(updatedAddresses));
              } catch (error) {
                console.error('AsyncStorage error:', error);
              }
            }
          }
    })
    return (
        <View style={styles.mainContainer}>
            <InterfaceHeader
                PreviousPage
                notifications
                onBackPress={() => navigation.goBack()}
                onNotification={() => navigation.navigate('Messages')}
                title="Add Address"
            />
            <View style={styles.formContainer}>
                <Input label="Recepient Name"
                    placeholder="Enter Name"
                    onChangeText={formik.handleChange('name')} />
                {formik.touched.name && formik.errors.name ? (
                    <Text style={globelstyle.errorText}>{formik.errors.name}</Text>
                ) : null}
                <Input label="Mobile Number"
                    isMobileNumber
                    placeholder="Enter Contact Number"
                    onChangeText={formik.handleChange('mobile')} />
                {formik.touched.mobile && formik.errors.mobile ? (
                    <Text style={globelstyle.errorText}>{formik.errors.mobile}</Text>
                ) : null}
                <Input
                    label="Plot.No/Flat/Building"
                    placeholder="Plot No 5,Flat G1, My Home Bhooja"
                    onChangeText={formik.handleChange('plot')}
                />
                {formik.touched.plot && formik.errors.plot ? (
                    <Text style={globelstyle.errorText}>{formik.errors.plot}</Text>
                ) : null}
                <Input label="Area/Sector/Locality"
                    placeholder="Madhapur,Hyderabad,Telangana"
                    onChangeText={formik.handleChange('area')} />
                {formik.touched.area && formik.errors.area ? (
                    <Text style={globelstyle.errorText}>{formik.errors.area}</Text>
                ) : null}

            </View>
            <View style={{ marginTop: 20, marginBottom: 50 }}>
                <Button title="Save Address" onPress={formik.handleSubmit} />
            </View>
        </View>
    )
}