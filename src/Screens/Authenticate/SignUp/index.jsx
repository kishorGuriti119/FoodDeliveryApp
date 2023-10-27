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
import Input from '../../../Components/Input';
import {Icons} from '../../../Utility/Icons';
import CheckBox from '../../../Components/CheckBox';
import Button from '../../../Components/Button';

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

  return (
    <SafeAreaView>
      <ScrollView style={style.Container}>
        <Pressable
          hitSlop={20}
          style={style.backArrowContainer}
          onPress={navigateToLogin}>
          <Image
            source={require('../../../assets/direction_left.png')}
            style={style.backArrow}
          />
        </Pressable>
        <View style={style.SignUpContainer}>
          <Text style={style.signUpTitle}>Signup</Text>
          <View style={style.FormContainer}>
            <Input
              label="Full name"
              placeholder="kishor Guriti"
              icon={Icons.user}
            />
            <Input
              label="Email"
              placeholder="example.gamil.com"
              icon={Icons.gmail_fill}
            />
            <Input
              isMobileNumber
              label="Mobile number"
              value={mobileNumber}
              onChangeText={ValidateMobileNumber}
              
            />
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
          <Button title="Sign up" />
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
