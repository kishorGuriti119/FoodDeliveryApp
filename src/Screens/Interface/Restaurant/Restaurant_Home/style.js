import {StyleSheet} from 'react-native';
import {colors} from '../../../../Utility/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteText,
    padding: 24,
  },
  interfaceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  welcomeText: {
    paddingTop: 40,
    paddingHorizontal: 20,
    color: colors.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  overviewContainer: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 160,
    height: 100,
    borderRadius: 5,
  },
  viewOrdersContainer: {
    alignItems: 'center',
    padding: 5,
  },
  orderValue: {
    color: 'white',
    fontSize: 26,
    fontWeight: '700',
  },
  viewBookContainer: {
    backgroundColor: '#EAECF0',
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plainTextWhite: {
    color: 'white',
  },
  viewBookIcon: {
    width: 28,
    height: 26,
  },
  lightCard: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    width: 110,
    height: 130,
    borderColor: '#EAECF0',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  easyNavigationContaier: {
    paddingVertical: 40,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  customizedShoppingIcon: {
    backgroundColor: '#D6F7E6',
    width: 50,
    height: 50,
  },
  customizedMailIcon: {
    backgroundColor: '#FFF0DA',
    width: 50,
    height: 50,
  },
  customizedUSerIcon: {
    backgroundColor: '#FBDADB',
    width: 50,
    height: 50,
  },
  easyNavigationText: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans',
  },
  badge: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: -5,
    right: -5,
    fontWeight: 'bold',
    fontSize: 10,
  },
});
