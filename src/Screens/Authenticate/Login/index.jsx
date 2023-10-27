import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import {style} from './style';
import {Icons} from '../../../Utility/Icons';
import Input from '../../../Components/Input';
import CheckBox from '../../../Components/CheckBox';
import Button from '../../../Components/Button';

const Login = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
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
        <View style={style.bottomContainer}>
          <View>
            <Text style={style.login}>Login</Text>
          </View>

          <View>
            <Input
              label=""
              placeholder="Enter email"
              style={style.loginInput}
            />
            <Input label="" placeholder="Enter Password" />
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
            <Button title="Login" />
          </View>

          <Text style={style.footerText}>
            I dont have an account,{' '}
            <Text style={style.helightedText} onPress={navigateToSignUp}>
              {' '}
              Sign-up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
