import React, {useEffect, useState} from 'react';
import Button from '../../../../Components/Button';
import {ScrollView, Text, View, Image, Pressable} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {style} from './style';
import ProfileInput from '../../../../Components/ProfileInput';
import {Icons} from '../../../../Utility/Icons';
import DropdownComponent from '../../../../Components/InputDropDown';
import {states} from '../../../../Utility/states';
import {useFormik} from 'formik';
import {Validate_restaurant_Registration} from '../../../../Validations/InputValidation';
import {globelstyle} from '../../../../Utility/GlobelStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const RestaurantForm2 = ({navigation}) => {
  const route = useRoute();
  const {ownerName, emailAddress, password, contactNumber} = route.params;
  const [FormErrors, setFormErrors] = useState({});
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      let Storedtoken = await AsyncStorage.getItem('token');
      console.log(Storedtoken);
      if (Storedtoken !== null) {
        setToken(Storedtoken);
        console.log(token);
      }
    };
    getToken();
  }, [token]);

  const formik = useFormik({
    initialValues: {
      ownerName: ownerName,
      email: emailAddress,
      password: password,
      contactNumber: contactNumber,
      restaurantName: '',
      address: {
        locality: '',
        city: '',
        pincode: '',
        district: '',
        state: '',
        country: 'INDIA',
      },
    },

    onSubmit: async values => {
      const {isValid, errors} = await Validate_restaurant_Registration(values);
      if (isValid) {
        console.log(values);
        try {
          const {data} = await axios.post(
            'http://10.0.2.2:8083/api/restaurant/restaurant',
            {}, // Add an empty object or provide the data you want to send
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            },
          );

          console.log(data, 'restaurant added');
        } catch (error) {
          console.log(error);
        }
      }
      if (errors) {
        formik.setErrors(errors);

        setFormErrors(errors);
      }
    },
  });

  const previousForm = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <Pressable
          hitSlop={20}
          style={style.backArrowContainer}
          onPress={previousForm}>
          <Image source={Icons.direction_left} style={style.backArrow} />
        </Pressable>
        <ProfileInput
          label="Restaurant name"
          onChangeText={formik.handleChange('restaurantName')}
        />
        {formik.touched.restaurantName && formik.errors.restaurantName ? (
          <Text style={globelstyle.errorText}>
            {formik.errors.restaurantName}
          </Text>
        ) : null}

        <ProfileInput
          label="Locality/Plot_No"
          onChangeText={formik.handleChange('address.locality')}
        />
        {FormErrors['address.locality'] ? (
          <Text style={globelstyle.errorText}>
            {FormErrors['address.locality']}
          </Text>
        ) : null}

        <View style={style.address}>
          <View style={style.inputField}>
            <ProfileInput
              label="country"
              isCountry
              placeholder="INDIA"
              onChangeText={formik.handleChange('country')}
              defaultValue={formik.values.address.country}
            />
            {FormErrors['address.state'] ? (
              <Text style={globelstyle.errorText}>{''}</Text>
            ) : null}
          </View>
          <View style={style.inputField}>
            <DropdownComponent
              data={states}
              label="state"
              value={formik.values['address.state']}
              onValueChange={selectedValue => {
                formik.setFieldValue('address.state', selectedValue.value);
              }}
            />
            {FormErrors['address.state'] ? (
              <Text style={style.customErrorStyle}>
                {FormErrors['address.state']}
              </Text>
            ) : null}
          </View>
        </View>
        <View style={style.address}>
          <View style={style.inputField}>
            <ProfileInput
              label="district"
              placeholder="Vishakapatnam"
              onChangeText={formik.handleChange('address.district')}
            />
            {FormErrors['address.district'] ? (
              <Text style={globelstyle.errorText}>
                {FormErrors['address.district']}
              </Text>
            ) : null}
          </View>
          <View style={style.inputField}>
            <ProfileInput
              label="city"
              placeholder="Gajuwaka"
              onChangeText={formik.handleChange('address.city')}
            />
            {FormErrors['address.city'] ? (
              <Text style={globelstyle.errorText}>
                {FormErrors['address.city']}
              </Text>
            ) : null}
          </View>
        </View>
        <ProfileInput
          label="Zip/Pincode"
          ispincode
          onChangeText={formik.handleChange('address.pincode')}
        />
        {FormErrors['address.pincode'] && (
          <Text style={globelstyle.errorText}>
            {FormErrors['address.pincode']}
          </Text>
        )}
        <Button title="Create Restaurant" onPress={formik.handleSubmit} />
      </View>
      <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.removeItem('token');
          navigation.navigate('login');
        }}
      />
    </ScrollView>
  );
};

export default React.memo(RestaurantForm2);
