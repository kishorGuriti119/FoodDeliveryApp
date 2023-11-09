import { Text, View, ActivityIndicator, ToastAndroid } from 'react-native'
import React from 'react'
import { styles } from './style'
import Input from '../../../Components/Input'
import { globelstyle } from '../../../Utility/GlobelStyles'
import { useFormik } from 'formik';
import { Icons } from '../../../Utility/Icons'
import { style } from '../Login/style'
import Button from '../../../Components/Button'
import { useState } from 'react'
import axios from 'axios'
import { ValidateForgotPassword } from '../../../Validations/InputValidation'
axios.defaults.timeout = 5000

const ForgotPassword = ({ navigation }) => {
    const [emailErrors, setEmailErrors] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            emailAddress: '',
        },
        onSubmit: async values => {
            const { isValid, errors } = await ValidateForgotPassword(values);
            if (isValid) {
                try {
                    setIsLoading(true)
                    await axios.post(`http://10.0.2.2:8082/api/user/forgotpassword?loginId=${values.emailAddress}`)
                        .then((res) => {
                            if (res.status === 200) {
                                setIsLoading(false)
                                ToastAndroid.show("Code Sent Successfully", ToastAndroid.SHORT)
                                navigation.navigate('resetpassword')

                            } else {
                                ToastAndroid.show('Error', ToastAndroid.SHORT)
                            }
                        })
                        .catch((err) => {
                            setIsLoading(false)
                            if (err.code === 'ECONNABORTED') {
                                ToastAndroid.show("Request timed out Try Again", ToastAndroid.SHORT)
                              }
                            else{
                                ToastAndroid.show('Check Email',ToastAndroid.SHORT)
                            }
                        })

                } catch (error) {
                    ToastAndroid.show('Network Error', ToastAndroid.SHORT)
                }

                // ToastAndroid.show('Code Sent Succesfully',ToastAndroid.SHORT) // For Testing Purpose
                // navigation.navigate('resetpassword')

            }
            else {
                formik.setErrors(errors);
            }
        }
    })
    return (
        <View style={styles.container} >
            <View>
                <Text style={style.login}>ForgotPassword</Text>
            </View>
            <View style={styles.formContainer}>
                <Input
                    label="Email"
                    placeholder="Enter email"
                    name="emailAddress"
                    style={style.loginInput}
                    onChangeText={formik.handleChange('emailAddress')}
                    value={formik.values.emailAddress}
                />
                {formik.touched.emailAddress && formik.errors.emailAddress ? (
                    <Text style={globelstyle.errorText}>{formik.errors.emailAddress}</Text>
                ) : null}
                <Button title="Get Code" onPress={formik.handleSubmit} />
                <ActivityIndicator animating={isLoading} />


            </View>

        </View >
    )
}



export default ForgotPassword
