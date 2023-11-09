import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import {style} from './style';
import {globelstyle} from '../../../Utility/GlobelStyles';
import {Icons} from '../../../Utility/Icons';
import Input from '../../../Components/Input';
import CheckBox from '../../../Components/CheckBox';
import Button from '../../../Components/Button';
import {useFormik} from 'formik';
import {ValidateLogin} from '../../../Validations/InputValidation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const Login = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const getRoleofTheUser = async token => {
    let decoded = jwtDecode(token);
    const roles = decoded.roles;
    return roles[0];
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      const {isValid, errors} = await ValidateLogin(values);
      if (isValid) {
        try {
          const {data} = await axios.post(
            'http://10.0.2.2:8082/api/user/login',
            values,
          );

          const {accessToken, email, refreshToken} = data;
          const token = await AsyncStorage.setItem('token', accessToken);
          let role = await getRoleofTheUser(accessToken);

          let userData = {token: accessToken, role: role};

          navigation.navigate('dashboardNavigations', userData);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(errors);
        formik.setErrors(errors);
      }
    },
  });

  const navigateToSignUp = () => {
    navigation.navigate('signup');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.topContainer}>
          <Image source={Icons.AppLogo} style={style.Applogo} />
          <Text style={style.LogoText}>FoodApp</Text>
        </View>
        <ScrollView style={style.bottomContainer}>
          <View>
            <Text style={style.login}>Login</Text>
          </View>

          <View>
            <Input
              label=""
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
              label=""
              name="password"
              isPassword
              placeholder="Enter Password"
              onChangeText={formik.handleChange('password')}
              value={formik.values.password}
              icon={Icons.closed_eye}
            />
            {formik.touched.password && formik.errors.password ? (
              <Text style={globelstyle.errorText}>
                {formik.errors.password}
              </Text>
            ) : null}
          </View>
          <View style={style.loginActions}>
            <View style={style.checkBoxContainer}>
              <CheckBox isChecked={isChecked} handleCheck={setIsChecked} />
              <Text style={style.CheckBoxLabel}>Remember me</Text>
            </View>
            <Pressable>
              <Text style={style.ForgetPassword}>Forgot password</Text>
            </Pressable>
          </View>
          <View>
            <Button title="Login" onPress={formik.handleSubmit} />
          </View>

          <Text style={style.footerText}>
            I dont have an account,{' '}
            <Text style={style.helightedText} onPress={navigateToSignUp}>
              {' '}
              Sign-up
            </Text>
          </Text>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
