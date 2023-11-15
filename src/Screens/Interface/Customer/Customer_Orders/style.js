import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {colors} from '../../../../Utility/Colors';

export const style = StyleSheet.create({
  headerPosition: {
    position: 'absolute',
    top: 6,
    width: width,
    padding: 24,
  },
  customBack: {
    backgroundColor: colors.custominputBorder,
  },
  backgroundImg: {
    position: 'relative',
    height: height * 0.5,
    width: width * 1.05,
  },
  locationStyle: {
    backgroundColor: colors.orderpage_location_background,
    padding: 10,
    borderRadius: 22,
  },
  orderPreview_fav_rating_container: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
  },
  FavouritesIcon: {
    height: 30,
    width: 35,
  },
  ratingContainer: {
    backgroundColor: colors.orderpage_location_background,
    padding: 10,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    height: 15,
    width: 15,
    marginHorizontal: 5,
  },
  ratingText: {
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
