import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
  SafeAreaView,
  ToastAndroid,
} from 'react-native';
import {style} from './style';
import {globelstyle} from '../../../Utility/GlobelStyles';
import Input from '../../../Components/Input';
import {Icons} from '../../../Utility/Icons';
import CheckBox from '../../../Components/CheckBox';
import Button from '../../../Components/Button';
import {useFormik} from 'formik';
import {ValidateSignUp} from '../../../Validations/InputValidation';
import Auth_service from '../../../Services/Auth_service';

const SignUp = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const navigateToLogin = () => {
    navigation.navigate('login');
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      emailAddress: '',
      password: '',
      contactNumber: '',
      role: 'CUSTOMER',
    },

    onSubmit: async values => {
      const {isValid, errors} = await ValidateSignUp(values);
      if (isValid & !isChecked) {
        alert('Agree Terms and Conditions');
        setIsChecked(true);
        return;
      }
      if (isValid & isChecked) {
        try {
          let data = await Auth_service.userSignUp(values);
          ToastAndroid.show('user created', ToastAndroid.SHORT);
          navigation.navigate('login');
        } catch (error) {
          if (error.code === 'ECONNABORTED') {
            ToastAndroid.show(
              'Request timed out Try Again',
              ToastAndroid.SHORT,
            );
          } else if (error.status === 409) {
            ToastAndroid.show(
              'User with Email Already Exist',
              ToastAndroid.SHORT,
            );
          } else {
            ToastAndroid.show(
              'something went wrong , Try Again',
              ToastAndroid.SHORT,
            );
          }
        }
      } else {
        formik.setErrors(errors);
      }
    },
  });

  return (
    <SafeAreaView>
      <ScrollView style={style.Container}>
        <Pressable
          hitSlop={20}
          style={style.backArrowContainer}
          onPress={navigateToLogin}>
          <Image source={Icons.direction_left} style={style.backArrow} />
        </Pressable>
        <View style={style.SignUpContainer}>
          <Text style={style.signUpTitle}>Signup</Text>
          <View style={style.FormContainer}>
            <Input
              label="Full name"
              placeholder="Enter Fullname"
              icon={Icons.user_shade}
              onChangeText={formik.handleChange('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <Text style={globelstyle.errorText}>{formik.errors.name}</Text>
            ) : null}
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
            <Input
              isMobileNumber
              label="Mobile number"
              onChangeText={formik.handleChange('contactNumber')}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? (
              <Text style={globelstyle.errorText}>
                {formik.errors.contactNumber}
              </Text>
            ) : null}
            <Input
              label="Password"
              isPassword
              placeholder="set password"
              onChangeText={formik.handleChange('password')}
              icon={Icons.eye}
            />
            {formik.touched.password && formik.errors.password ? (
              <Text style={globelstyle.errorText}>
                {formik.errors.password}
              </Text>
            ) : null}
          </View>
        </View>
        <View style={style.checkboxContainer}>
          <CheckBox isChecked={isChecked} handleCheck={setIsChecked} />
          <Text style={style.terms_policy}>
            I agree to all the{' '}
            <Text style={style.helightedText}>Terms and Conditions</Text> and{' '}
            <Text style={style.helightedText}>Privacy policy.</Text>
          </Text>
        </View>
        <View>
          <Button title="Sign up" onPress={formik.handleSubmit} />
        </View>
        <Pressable style={style.googleSignContainer}>
          <Text style={style.googleSignText}>Sign up with Google</Text>
          <Image source={Icons.google} style={style.google} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
