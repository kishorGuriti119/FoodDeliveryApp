import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utility/Colors';
const {height, width} = Dimensions.get('window');

export const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcon: {
    height: 18,
    width: 18,
  },

  location: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    height: 18,
    width: 18,
    marginHorizontal: 8,
  },
  locationText: {
    fontSize: 11,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    color: colors.secondary,
  },
  customLocationText: {
    fontSize: 11,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    color: colors.whiteText,
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
});
