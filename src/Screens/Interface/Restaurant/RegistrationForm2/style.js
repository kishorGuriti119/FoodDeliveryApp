import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../Utility/Colors';

const {width, height} = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.whiteText,
    height: height,
  },
  backArrowContainer: {
    backgroundColor: colors.secondary,
    width: 30,
    height: 30,
    padding: 10,
    borderRadius: 100,
  },
  backArrow: {
    height: 11.5,
    width: 5.5,
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,
  },
  inputField: {
    flex: 1,
  },
  customErrorStyle: {
    marginTop: 0.5,
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
});
