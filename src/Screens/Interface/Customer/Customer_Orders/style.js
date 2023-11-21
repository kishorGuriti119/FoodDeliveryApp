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
  title: {
    marginTop: 47,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.secondary,
  },
});
