import React, {useEffect, useState} from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/Authenticate/Login';
import SignUp from './src/Screens/Authenticate/SignUp';
import Splash from './src/Components/Splash';
import AdminDashboard from './src/Screens/Interface/Admin/Dashboard';
import RestaurantForm from './src/Screens/Interface/Restaurant/Register';
import PilotRegister from './src/Screens/Interface/Pilot/Register';

const Stack = createNativeStackNavigator();

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/assets/splashscreen.png')} // Replace with the correct image path
        style={styles.image}
      />
    </View>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthToken, setAuthToken] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <Stack.Navigator>
            {isAuthToken ? (
              <Stack.Screen
                name="admindashboard"
                component={AdminDashboard}
                options={{headerShown: false}}
              />
            ) : (
              <Stack.Screen
                name="splash"
                component={Splash}
                options={{headerShown: false}}
              />
            )}
            <Stack.Screen
              name="login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="signup"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="createRestaurant"
              component={RestaurantForm}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="createPilot"
              component={PilotRegister}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default App;
