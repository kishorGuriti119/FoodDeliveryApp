import {
  Text,
  View,
  ActivityIndicator,
  ToastAndroid,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import Input from '../../../Components/Input';
import {globelstyle} from '../../../Utility/GlobelStyles';
import {useFormik} from 'formik';
import {Icons} from '../../../Utility/Icons';
import {style} from '../Login/style';
import Button from '../../../Components/Button';
import {useState} from 'react';
import axios from 'axios';
import {ValidateForgotPassword} from '../../../Validations/InputValidation';
import Auth_service from '../../../Services/Auth_service';
axios.defaults.timeout = 5000;

const ForgotPassword = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      emailAddress: '',
    },
    onSubmit: async values => {
      const {isValid, errors} = await ValidateForgotPassword(values);
      if (isValid) {
        try {
          setIsLoading(true);
          let ForgetPassword_response = await Auth_service.forgetPassword(
            values.emailAddress,
          );

          setIsLoading(false);

          ToastAndroid.show(
            `Check Email ${formik.values.emailAddress} `,
            ToastAndroid.SHORT,
          );
          setTimeout(() => {
            navigation.navigate('resetpassword');
          }, 1500);
        } catch (error) {
          if (error.statusCode === '500') {
            alert('Email not exist');
          } else {
            ToastAndroid.show('Network Error', ToastAndroid.SHORT);
          }
        }
      } else {
        formik.setErrors(errors);
      }
    },
  });
  return (
    <ScrollView style={styles.container}>
      <Pressable
        hitSlop={20}
        style={styles.backArrowContainer}
        onPress={() => navigation.goBack()}>
        <Image source={Icons.direction_left} style={styles.backArrow} />
      </Pressable>
      <View>
        <Text style={style.login}>ForgotPassword</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          label="Email"
          placeholder="example.gamil.com"
          icon={Icons.gmail_fill}
          onChangeText={formik.handleChange('emailAddress')}
        />
        {formik.touched.emailAddress && formik.errors.emailAddress ? (
          <Text style={globelstyle.errorText}>
            {formik.errors.emailAddress}
          </Text>
        ) : null}
        <Button title="Get Code" onPress={formik.handleSubmit} />
        <ActivityIndicator animating={isLoading} />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
