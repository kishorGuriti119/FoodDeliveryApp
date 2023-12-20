import { StyleSheet } from "react-native";
import { colors } from "../../Utility/Colors";

export const style = StyleSheet.create({
    couponApplyBtnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
      },
      enabledBtn: {
        backgroundColor: "#a6b6f6",
        color: colors.secondary,
      },
      disabledBtn: {
        backgroundColor: "#efefef", // Change to your desired color for disabled state
        color: "white",
      }
})