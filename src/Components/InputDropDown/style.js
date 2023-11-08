import {StyleSheet} from 'react-native';
import {colors} from '../../Utility/Colors';
export const style = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 4,
  },
  dropdown: {
    borderColor: colors.custominputBorder,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    height:61,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
