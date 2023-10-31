import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {style} from './style';
import {globelstyle} from '../../../Utility/GlobelStyles';
import Input from '../../../Components/Input';
import {Icons} from '../../../Utility/Icons';
import CheckBox from '../../../Components/CheckBox';
import Button from '../../../Components/Button';
import {useFormik} from 'formik';
import {ValidateSignUp} from '../../../Validations/InputValidation';

const SignUp = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');

  const navigateToLogin = () => {
    navigation.navigate('login');
  };

  const ValidateMobileNumber = text => {
    if (text.length <= 10) {
      setMobileNumber(text);
      console.log('mobile number validation is triggered');
    }
    return;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      mobileNumber: '',
    },

    onSubmit: async values => {
      const {isValid, errors} = await ValidateSignUp(values);
      if (isValid) {
        console.log('validations passed');
        if (!isChecked) {
          alert('agree Terms and Conditions');
          setIsChecked(true);
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
              icon={Icons.user}
              onChangeText={formik.handleChange('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <Text style={globelstyle.errorText}>{formik.errors.name}</Text>
            ) : null}
            <Input
              label="Email"
              placeholder="example.gamil.com"
              icon={Icons.gmail_fill}
              onChangeText={formik.handleChange('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <Text style={globelstyle.errorText}>{formik.errors.email}</Text>
            ) : null}
            <Input
              isMobileNumber
              label="Mobile number"
              value={mobileNumber}
              onChangeText={formik.handleChange('mobileNumber')}
            />
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
              <Text style={globelstyle.errorText}>
                {formik.errors.mobileNumber}
              </Text>
            ) : null}
            <Input
              label="password"
              isPassword
              placeholder="set password"
              onChangeText={formik.handleChange('password')}
              icon={' '}
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
