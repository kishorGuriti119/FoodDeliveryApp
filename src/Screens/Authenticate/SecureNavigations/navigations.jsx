import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import SignUp from '../SignUp';
import { Splash, SplashScreen } from '../../../Components/Splash';
import AdminDashboard from '../../Interface/Admin/Dashboard';
import RestaurantForm from '../../Interface/Restaurant/Register';
import PilotRegister from '../../Interface/Pilot/Register';


const Stack = createNativeStackNavigator();


const Navigations = () => {

    const [showSplash, setShowSplash] = useState(true);
    const [isAuthToken, setAuthToken] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 1000);
    }, []);


    return (
        <NavigationContainer>
            {showSplash ? (
                <SplashScreen />
            ) : (
                <Stack.Navigator>
                    {isAuthToken ? (
                        <Stack.Screen
                            name="admindashboard"
                            component={AdminDashboard}
                            options={{ headerShown: false }}
                        />
                    ) : (
                        <Stack.Screen
                            name="splash"
                            component={Splash}
                            options={{ headerShown: false }}
                        />
                    )}
                    <Stack.Screen
                        name="login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="signup"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="createRestaurant"
                        component={RestaurantForm}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="createPilot"
                        component={PilotRegister}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
}




export default Navigations