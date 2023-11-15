// import React from 'react';
// import {View, Text} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Button from '../../../../Components/Button';

// const CustomerLandingPage = ({navigation}) => {
//   return (
//     <View>
//       <Text>CustomerLandingPage</Text>
//       <Button
//         title="Logout"
//         onPress={async () => {
//           await AsyncStorage.removeItem('token');
//           navigation.navigate('login');
//         }}
//       />
//     </View>
//   );
// };

// export default CustomerLandingPage;

import React from 'react';
import Customer_Favourites from '../Customer_Favourites';
import Customer_Home from '../Customer_Home';
import Customer_Orders from '../Customer_Orders';
import Customer_Profile from '../Customer_Profile';
import {Icons} from '../../../../Utility/Icons';
import {colors} from '../../../../Utility/Colors';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const CustomerLandingPage = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused ? Icons.Home_Focused : Icons.Home;
          } else if (route.name === 'Favorities') {
            icon = focused ? Icons.Favorites_Focused : Icons.Favourites;
          } else if (route.name === 'Profile') {
            icon = focused ? Icons.profile_focused : Icons.profile;
          } else if (route.name === 'Orders') {
            icon = focused ? Icons.orders_focused : Icons.orders;
          }

          return <Image source={icon} style={{height: 24, width: 24}} />;
        },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
          paddingVertical: 12,
          paddingBottom: 12,
        },
        tabBarLabelStyle: {
          color: 'gray',
        },
      })}>
      <Tab.Screen name="Home" component={Customer_Home} />
      <Tab.Screen name="Orders" component={Customer_Orders} />
      <Tab.Screen name="Favorities" component={Customer_Favourites} />
      <Tab.Screen name="Profile" component={Customer_Profile} />
    </Tab.Navigator>
  );
};

export default CustomerLandingPage;
