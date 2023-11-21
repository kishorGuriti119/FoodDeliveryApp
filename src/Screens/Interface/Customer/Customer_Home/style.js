import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {colors} from '../../../../Utility/Colors';

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 36,
    backgroundColor: colors.whiteText,
    minHeight: height,
  },

  title: {
    marginTop: 47,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.secondary,
  },
  textbg: {
    height: 200,
    marginHorizontal: 20,
  },
  special_card_container: {
    height: 160,
    marginVertical: 24,
  },
  specialCard: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    position: 'relative',
  },
  special_card_image: {
    height: 150,
    width: 150,
    position: 'absolute',
    right: -47,
    top: -70,
  },
  specialCard_Description: {
    maxWidth: '70%',
  },
  claimNowButton: {
    backgroundColor: colors.whiteText,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    maxWidth: 120,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginVertical: 7,
  },
  claim: {
    color: colors.primary,
    fontWeight: '800',
  },
  mainText: {
    color: colors.whiteText,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
  },
  subText: {
    color: colors.whiteText,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 25,
  },
  popularPicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  popularText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  seemore: {
    backgroundColor: colors.countryCodeBackground,
    padding: 7,
  },
  seemoreText: {
    color: colors.orderCategoryColor,
    fontSize: 12,
    fontWeight: '700',
  },
});
