import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
import Button from '../../../../Components/Button'
import InterfaceHeader from '../../../../Components/InterfaceHeader'


const OrderOnTheWay = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.onthewayContainer}>
                <Image source={require('../../../../assets/splash_screen_slide_3.png')} style={{
                    width: 320,
                }} />
                <Text style={styles.headingText}>Your Order is on the way</Text>
                <View style={{ width: 345 }}>
                    <Button title="Track Live" />
                </View>
                <Pressable >
                    <Text style={styles.plaintext} onPress={()=> navigation.navigate("Home")}>Back to Home</Text>
                </Pressable>

            </View>
        </View>
    )
}

export default OrderOnTheWay