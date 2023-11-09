import { View, Text, ScrollView, Image } from 'react-native'
import { Icons } from '../../../Utility/Icons'
import Button from '../../../Components/Button'
import { globelstyle } from '../../../Utility/GlobelStyles'
import Input from '../../../Components/Input'
import React from 'react'
import { useFormik } from 'formik'
import { style } from '../Login/style'
import { styles } from './style'
import axios from 'axios'

const ResetPassword = ({ navigation }) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            changePasswordId:"",
            newPassword: '',
            
        },
        onSubmit: async values => {
            console.log(values)
            if (values) {
                try {
                    const {data} = await axios.post(`http://10.0.2.2:8082/api/user/resetpassword`,values)
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            } else {
                console.log("Error")
            }
            
        }
    })

    return (

        <>
            <View style={styles.container}>
                <Text style={style.login}>Reset Password</Text>
            </View>
            <View style={styles.formContainer}>
            <Input
                    label="Secret Code"
                    placeholder="Enter Secret Code"
                    name="changePasswordId"
                    style={style.loginInput}
                    onChangeText={formik.handleChange('changePasswordId')}
                    value={formik.values.changePasswordId}
                />
                {formik.touched.email && formik.errors.changePasswordId ? (
                    <Text style={globelstyle.errorText}>{formik.errors.changePasswordId}</Text>
                ) : null}
                <Input
                    label="Email"
                    placeholder="Enter email"
                    name="email"
                    style={style.loginInput}
                    onChangeText={formik.handleChange('email')}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <Text style={globelstyle.errorText}>{formik.errors.email}</Text>
                ) : null}
                <Input
                    label="New Password"
                    name="newPassword"
                    isPassword
                    placeholder="Enter New Password"
                    onChangeText={formik.handleChange('newPassword')}
                    value={formik.values.password}
                    icon={Icons.closed_eye}
                />
                {formik.touched.newPassword && formik.errors.newPassword ? (
                    <Text style={globelstyle.errorText}>
                        {formik.errors.newPassword}
                    </Text>
                ) : null}
            </View>
            <View>
                <Button title="Change Password" onPress={formik.handleSubmit} />
            </View>
        </>

    )
}

export default ResetPassword