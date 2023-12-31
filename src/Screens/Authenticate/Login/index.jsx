import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ToastAndroid,
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
import {SignInwithGoogle} from '../../../Config/Firebase/GoogleSignIn';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {decode} from 'base-64';
import Auth_service from '../../../Services/Auth_service';
global.atob = decode;

const Login = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  // useEffect(() => {
  //   const signOut = async () => {
  //     try {
  //       await GoogleSignin.revokeAccess();
  //       await GoogleSignin.signOut();
  //       console.log('log out');
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   signOut();
  // }, []);

  const getRoleofTheUser = async token => {
    let decoded = jwtDecode(token);
    const roles = decoded.roles;
    return roles[0];
  };

  const OnGoogleSignIn = async () => {
    SignInwithGoogle().then(data => {
      if (!data) {
        console.log('error');
        return;
      }
      const {user} = data;
      user.role = 'CUSTOMER';
      navigation.navigate('dashboardNavigations', user);
      console.log(user, 'from google login');
    });
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
          const data = await Auth_service.userLogin(values);
          console.log(data);
          const {accessToken, email, refreshToken, id, userName} = data;
          const token = await AsyncStorage.setItem('token', accessToken);
          const userId = await AsyncStorage.setItem('userid', id);
          let role = await getRoleofTheUser(accessToken);
          let userData = {
            token: accessToken,
            role: role,
            email: email,
            userName: userName,
          };
          const userInfo = await AsyncStorage.setItem(
            'userInfo',
            JSON.stringify(userData),
          );
          navigation.navigate('dashboardNavigations', userData);
        } catch (error) {
          if (error.code === 'ECONNABORTED') {
            ToastAndroid.show(
              'Request timed out Try Again',
              ToastAndroid.SHORT,
            );
          }
          if (error) {
            ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
          }
        }
      } else {
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
              icon={Icons.eye}
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
            <Pressable onPress={() => navigation.navigate('forgotpassword')}>
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
          <Pressable style={style.googleSignContainer} onPress={OnGoogleSignIn}>
            <Text style={style.googleSignText}>Sign in with Google</Text>
            <Image source={Icons.google} style={style.google} />
          </Pressable>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
