import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utility/Colors';

export const style = StyleSheet.create({
  container: {
    paddingVertical: 14,
  },
  labelStyle: {
    fontSize: 12,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 4,
  },
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.custominputBorder,
    padding: 5,
  },

  imageContainer: {
    marginRight: 12,
  },
  inputIconstyle: {
    height: 25,
    width: 25,
    margin: 7,
  },
  inputbox: {
    flex: 1,
    color: colors.secondary,
  },
  disabled: {
    backgroundColor: colors.custominputBorder,
    fontWeight: 'bold',
    paddingHorizontal: 24,
  },
});
