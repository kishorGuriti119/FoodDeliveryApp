import React, {useState} from 'react';
import RestaurantForm1 from '../RegistrationForm1';
import RestaurantForm2 from '../RegistrationForm2';
import InputDropDown from '../../../../Components/InputDropDown';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const RestaurantForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [RestaurantName, setRestaurantName] = useState();
  const [Address, setAddress] = useState();

  return (
    <Stack.Navigator>
      <Stack.Screen name="restaurantform1" options={{headerShown: false}}>
        {props => (
          <RestaurantForm1
            {...props}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            contactNumber={contactNumber}
            setRestaurantName={setRestaurantName}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="restaurantform2"
        component={RestaurantForm2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="restaurantform3"
        component={InputDropDown}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RestaurantForm;
