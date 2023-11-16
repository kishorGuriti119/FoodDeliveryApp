import {StyleSheet} from 'react-native';
import {colors} from '../../Utility/Colors';

export const style = StyleSheet.create({
  Container: {
    paddingVertical: 14,
  },

  labelText: {
    color: colors.secondary,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    fontSize: 12,
  },
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.secondary,
  },
  PasswordContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.secondary,
  },

  InputIcon: {
    height: 18,
    width: 18,
    marginHorizontal: 10,
  },
  eyeIcon: {
    height: 28,
    width: 28,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    color: colors.secondary,
  },
});
