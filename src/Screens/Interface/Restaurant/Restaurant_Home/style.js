import { StyleSheet } from "react-native";
import { colors } from "../../../../Utility/Colors";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    interfaceContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 40,
        paddingHorizontal: 20
    },
    welcomeText: {
        paddingTop: 40,
        paddingHorizontal: 20,
        color: colors.primary,
        fontSize: 18,
        fontWeight: '700'
    },
    overviewCOntainer: {
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "center",
        gap: 10
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        width: 160,
        height: 100,
        borderRadius: 5
    },
    viewOrdersContainer:{ 
        alignItems: "center", 
        padding: 5 
    },
    orderValue:{
        color: "white", 
        fontSize: 26, 
        fontWeight:'700'
    },
    viewBookContainer:{
        backgroundColor: "#EAECF0", 
        width: 40, 
        height: 40, 
        borderRadius: 5, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    plainTextWhite:{
        color: "white"
    },
    viewBookIcon:{
        width: 28, 
        height: 26,
    }

})