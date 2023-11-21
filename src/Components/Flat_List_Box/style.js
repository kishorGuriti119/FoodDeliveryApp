import {StyleSheet} from 'react-native';
import {colors} from '../../Utility/Colors';

export const style = StyleSheet.create({
  flatlistbox: {
    marginHorizontal: 4,
    backgroundColor: colors.orderCategoryBackground,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: colors.orderCategoryColor,
    fontWeight: '600',
    fontSize: 11,
  },
  icon: {
    height: 12,
    width: 12,
    marginHorizontal: 1,
  },
});
