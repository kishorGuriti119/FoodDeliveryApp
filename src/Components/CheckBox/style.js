import {StyleSheet} from 'react-native';
import {colors} from '../../Utility/Colors';

export const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.secondary,
    height: 15,
    width: 15,
    borderRadius: 3,
  },
  innerContainer: {
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  checkIcon: {
    height: 9,
    width: 12,
  },
});
