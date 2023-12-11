import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {colors} from '../../../../Utility/Colors';

export const style = StyleSheet.create({
  headerPosition: {
    paddingHorizontal:16,
    paddingVertical:16
  },
  customBack: {
    backgroundColor: colors.custominputBorder,
  },
  backgroundImg: {
    position: 'relative',
    height: height * 0.55,
    width: width * 1,
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
    height: 31,
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
  BottomContainer: {
    // minHeight: height * 0.4,
    backgroundColor: colors.whiteText,
    padding: 24,
  },
  ItemdescriptionContainer: {},
  title_and_quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item_title: {
    color: colors.secondary,
    fontWeight: '800',
    fontSize: 22,
    fontFamily: 'Plus Jakarta Sans',
    flex: 1,
    marginBottom: 4,
  },
  quantity_Container: {
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  quantityAction: {
    borderWidth: 2,
    borderColor: colors.orderCategoryColor,
    borderRadius: 100,
    width: 30,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityIndex: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  quantity: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  delivery_data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    gap: 8,
  },
  itemDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.secondary,
    marginBottom: 6,
  },
  container:{
    
  }
});
