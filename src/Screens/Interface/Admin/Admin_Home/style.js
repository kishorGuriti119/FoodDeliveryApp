import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../Utility/Colors';
const {height, width} = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    padding: 24,
    //backgroundColor: colors.primary,
    height: '100%',
    alignItems: 'center',
  },
  addRestaurantcard: {
    margin: 24,
    width: width - 60,
    height: 300,
  },

  addRestaurantcardbg: {
    height: '100%',
    width: '100%',
  },
  button: {
    marginTop: 200,
  },
});
