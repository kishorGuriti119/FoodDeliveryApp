import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../../../Components/Input'
import { styles } from './style'
import InterfaceHeader from '../../../../Components/InterfaceHeader'
import Button from '../../../../Components/Button'
import { useFormik } from 'formik'
import { Validate_UserAddress } from '../../../../Validations/InputValidation'
import { globelstyle } from '../../../../Utility/GlobelStyles'

const Customer_Adresses = ({ navigation }) => {


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
                console.log(values)
            }
            formik.setErrors(errors);

            // const res = await Auth_service.userSignUp(values)
            // console.log(res)

        },
    })
    return (
        <View style={styles.mainContainer}>
            <InterfaceHeader PreviousPage onBackPress={() => navigation.navigate("Home")} />
            <View style={styles.formContainer}>
                <Input label="Recepient Name"
                    placeholder="Enter Name"
                    onChangeText={formik.handleChange('name')} />
                {formik.touched.name && formik.errors.name ? (
                    <Text style={globelstyle.errorText}>{formik.errors.name}</Text>
                ) : null}
                <Input label="Mobile Number"
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

export default Customer_Adresses