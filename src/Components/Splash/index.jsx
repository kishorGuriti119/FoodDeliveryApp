import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Animated, Text, Pressable, StatusBar } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider'
import { Dimensions } from 'react-native'
import { colors } from "../../Utility/Colors";
import Button from "../Button";

const { width, height } = Dimensions.get('screen')

const splashScreenImages = [
    require("../../assets/splash_screen_slide_1.png"),
    require("../../assets/splash_screen_slide_1.png"),
    require("../../assets/splash_screen_slide_1.png"),
];

const splashData = [{
    id: 1,
    title: "Your one catalogue for a wide range of delicacies.",
    imageUrl: require("../../assets/splash_screen_slide_1.png")
},
{
    id: 2,
    title: "Place special orders for special moments.",
    imageUrl: require("../../assets/splash_screen_slide_2.png")
},
{
    id: 3,
    title: "Deliveries faster than your normal apps.",
    imageUrl: require("../../assets/splash_screen_slide_3.png")
}
]

const Splash = ({ navigation }) => {




    const handleSkip = () => {
        // Navigate to the main app screen
        navigation.navigate('login')
    };

    const handleLogin = () => {
        // Navigate to the login screen
        navigation.navigate('login')

    };

    const handleSignup = () => {
        navigation.navigate('signup')

        // Navigate to the signup screen
    };

    const onPress =()=>{
        navigation.navigate('login')
    }

    return (
        <>
            <View style={{ flex: 0.8, backgroundColor: "white", }}>
                <Pressable onPress={handleSkip} style={{ alignSelf: "flex-end", }}>
                    <Text style={{ color: colors.primary, margin: 20, fontSize: 16, fontWeight: "700", fontFamily: "Plus Jakarta Sans" }}>Skip</Text>
                </Pressable>
                
                    <AppIntroSlider data={splashData} 
                        renderItem={({ item }) => {
                            return (
                                <View style={{ backgroundColor: "white", justifyContent: "center", }}>
                                    <Text style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "700", fontSize: 24, lineHeight: 34, color: colors.secondary, width: 310, marginLeft: 20, marginBottom: -50, marginTop: 40 }}>{item.title}</Text>
                                    <Image source={item.imageUrl} style={{ width: width, height: width }}
                                        resizeMode="contain" />

                                </View>

                            )
                        }} activeDotStyle={{
                            backgroundColor: colors.primary,
                            width: 30,
                            height: 10
                        }}
                        
                    />
            </View>
            <StatusBar hidden={true} />
            <View style={{ flex: 0.4, backgroundColor: "white",justifyContent:"center",}}>
                <Button title="Login" onPress={onPress}/>
                <Text style={{alignSelf:"center",color:colors.primary,fontWeight:"700",fontSize:12}} onPress={handleSignup}>Create account</Text>
            </View>
        </>
    )

}
export default Splash;
