import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../Utility/Colors';

export const style = StyleSheet.create({
  drawerHeader: {
    backgroundColor: 'black',
    height: 220,
    borderTopRightRadius: 24,
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    padding: 12,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderColor: colors.whiteText,
    borderWidth: 2,
    borderRadius: 100,
  },
  profileContainer: {
    flex: 1,
  },
  profile_name: {
    color: colors.whiteText,
    fontSize: 20,
    padding: 0,
  },

  profile_email: {
    color: colors.whiteText,
    padding: 0,
    fontSize: 12,
  },
  drawerItemsContainer: {
    padding: 12,
  },
  card: {
    margin: 20,
    backgroundColor: colors.custominputBorder,
    height: 60,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.secondary,
    fontWeight: '600',
    fontSize: 15,
  },

  logout: {
    paddingHorizontal: 16,
    backgroundColor: colors.countryCodeBackground,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 12,
    marginVertical: 6,
    gap: 12,
  },
  logoutIcon: {
    height: 24,
    width: 28,
  },

  logout_text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
