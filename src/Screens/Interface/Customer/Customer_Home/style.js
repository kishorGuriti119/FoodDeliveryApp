import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {colors} from '../../../../Utility/Colors';

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 36,
    height: height,
    backgroundColor: colors.whiteText,
  },
});
