import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {colors} from '../../../../Utility/Colors';

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    marginTop: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.secondary,
  },
});
