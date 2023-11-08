import React, {useState} from 'react';
import Button from '../../../../Components/Button';
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
import ProfileInput from '../../../../Components/ProfileInput';
import {Icons} from '../../../../Utility/Icons';
import {useFormik} from 'formik';
import {validateRestaurantOwnerRegistration} from '../../../../Validations/InputValidation';
import {globelstyle} from '../../../../Utility/GlobelStyles';

const RestaurantForm1 = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      ownerName: '',
      emailAddress: '',
      password: '',
      contactNumber: '',
    },

    onSubmit: async values => {
      const {isValid, errors} = await validateRestaurantOwnerRegistration(
        values,
      );

      if (isValid) {
        navigation.navigate('restaurantform2', values);
      } else {
        formik.setErrors(errors);
      }
    },
  });

  return (
    <ScrollView>
      <SafeAreaView style={style.container}>
        <Text style={style.title}>Create Restaurant</Text>

        <View style={style.inputfieldsContainer}>
          <ProfileInput
            label="owner name"
            placeholder=""
            icon={Icons.user_shade}
            onChangeText={formik.handleChange('ownerName')}
          />
          {formik.touched.ownerName && formik.errors.ownerName ? (
            <Text style={globelstyle.errorText}>{formik.errors.ownerName}</Text>
          ) : null}
          <ProfileInput
            label="email"
            placeholder=""
            icon={Icons.email_shade}
            onChangeText={formik.handleChange('emailAddress')}
          />
          {formik.touched.emailAddress && formik.errors.emailAddress ? (
            <Text style={globelstyle.errorText}>
              {formik.errors.emailAddress}
            </Text>
          ) : null}
          <ProfileInput
            label="contact number"
            ismobile
            placeholder=""
            icon={Icons.mobile}
            onChangeText={formik.handleChange('contactNumber')}
          />
          {formik.touched.contactNumber && formik.errors.contactNumber ? (
            <Text style={globelstyle.errorText}>
              {formik.errors.contactNumber}
            </Text>
          ) : null}

          <ProfileInput
            label="password"
            placeholder=""
            isPassword
            onChangeText={formik.handleChange('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <Text style={globelstyle.errorText}>{formik.errors.password}</Text>
          ) : null}
        </View>
        <View style={style.buttonContainer}>
          <Button title="Next" onPress={formik.handleSubmit} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default React.memo(RestaurantForm1);
