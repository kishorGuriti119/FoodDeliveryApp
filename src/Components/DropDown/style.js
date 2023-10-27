import {StyleSheet} from 'react-native';
import {colors} from '../../Utility/Colors';

export const style = StyleSheet.create({
  DropDown: {
    backgroundColor: colors.countryCodeBorder,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 70,
    padding: 3,
    marginRight: 3,
    marginTop: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.countryCodeBorder,
  },
  icon: {
    marginHorizontal: 3,
    height: 14,
    width: 14,
  },
  counterycodeInput: {
    flex: 1,
    fontSize: 12,
    padding: 8,
    fontWeight: 'bold',
  },
});
