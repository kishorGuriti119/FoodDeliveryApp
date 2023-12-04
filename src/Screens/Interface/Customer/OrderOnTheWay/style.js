import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../../../Utility/Colors';

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:"#ffffff",
        flex:1

    },
    onthewayContainer:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    headingText:{
        fontSize:24,
        color:colors.secondary,
        fontWeight:"800",
        marginTop:20
    },
    plaintext:{
        color:colors.secondary,
        fontWeight:"500",
    }
})