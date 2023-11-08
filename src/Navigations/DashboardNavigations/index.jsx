import React, {useEffect, useState} from 'react';
import AdminDashboard from '../../Screens/Interface/Admin/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import CustomerLandingPage from '../../Screens/Interface/Customer/CustomerLandingPage';

const Stack = createNativeStackNavigator();

const DashboardNavigations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState('');
  let token;
  useEffect(() => {
    getToken();
  }, []);

  const myFUNCTION = async () => {
    let token = await AsyncStorage.getItem('token');
    return token;
  };

  const getToken = async () => {
    token = await myFUNCTION();
    console.log(token, 'this is token from dashboard');
    if (token) {
      let decoded = jwtDecode(token);
      console.log(decoded, 'decoded');
      const roles = decoded.roles;
      setRole(roles[0]);
    }
    setIsLoading(false);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="admindashboard"
        component={AdminDashboard}
        options={{headerShown: false}}
      />


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






    </Stack.Navigator>
  );
};
export default React.memo(DashboardNavigations);
