import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utility/Colors';
const {height, width} = Dimensions.get('window');

export const style = StyleSheet.create({
  inputContainer: {
    borderWidth: 1.8,
    borderColor: colors.custominputBorder,
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    marginVertical: 4,
  },
  IconContainer: {
    backgroundColor: colors.custominputBorder,
    borderRadius: 100,
    padding: 6,
  },
  inputlabelIcon: {
    height: 24,
    width: 24,
  },
  inputBox: {
    flex: 1,
  },
  labelText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.orderCategoryColor,
    marginBottom: 0,
  },
});
