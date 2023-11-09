import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ToastAndroid,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {Icons} from '../../../Utility/Icons';
import Button from '../../../Components/Button';
import {globelstyle} from '../../../Utility/GlobelStyles';
import Input from '../../../Components/Input';

import {useFormik} from 'formik';
import {style} from '../Login/style';
import {styles} from './style';
import axios from 'axios';
import {Validate_Reset_Password} from '../../../Validations/InputValidation';
axios.defaults.timeout = 5000;

const ResetPassword = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      changePasswordId: '',
      newPassword: '',
    },
    onSubmit: async values => {
      console.log(values);

      const {isValid, errors} = await Validate_Reset_Password(values);

      if (isValid) {
        try {
          setIsLoading(true);
          const {data} = await axios.post(
            `http://10.0.2.2:8082/api/user/resetpassword`,
            values,
          );
          console.log(data);
          if (data) {
            setIsLoading(false);
          }
          ToastAndroid.show(
            'Resettin Password Succussfull',
            ToastAndroid.SHORT,
          );
        } catch (error) {
          console.log(error);

          if (err.code === 'ECONNABORTED') {
            ToastAndroid.show(
              'Request timed out Try Again',
              ToastAndroid.SHORT,
            );
          }
        }
      } else {
        formik.setErrors(errors);
        console.log('Error');
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
          <Text style={globelstyle.errorText}>
            {formik.errors.changePasswordId}
          </Text>
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
          <Text style={globelstyle.errorText}>{formik.errors.newPassword}</Text>
        ) : null}
      </View>
      <View>
        <Button title="Change Password" onPress={formik.handleSubmit} />
        <ActivityIndicator animating={isLoading} />
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
