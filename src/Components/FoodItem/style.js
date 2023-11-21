import {StyleSheet} from 'react-native';
import {colors} from '../../Utility/Colors';

export const style = StyleSheet.create({
  Item: {
    marginHorizontal: 5,
    maxHeight: 225,
  },
  cardImage: {
    height: 150,
    width: 130,
    borderRadius: 6,
  },
  FoodItemDescriptionContainer: {
    maxWidth: 125,
    margin: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.secondary,
  },
  Price: {
    fontWeight: '500',
    fontSize: 12,
    color: colors.orderCategoryColor,
    lineHeight: 20,
  },
  delivery: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 20,
  },
});
