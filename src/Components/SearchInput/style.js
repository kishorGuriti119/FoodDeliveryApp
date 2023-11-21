import {StyleSheet} from 'react-native';
import {colors} from '../../Utility/Colors';

export const style = StyleSheet.create({
  searchContainer: {
    borderWidth: 1.5,
    borderColor: colors.custominputBorder,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    color: colors.orderCategoryColor,
    fontWeight: '500',
  },
  searchIcon: {
    height: 18,
    width: 18,
  },
});
