import {StyleSheet} from 'react-native';
import {colors} from '../../../Utility/Colors';
import {Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {height} = Dimensions.get('window');
export const style = StyleSheet.create({
  topContainer: {
    backgroundColor: colors.primary,
    height: height * 0.45,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    padding: 24,
    marginTop: -20,
    backgroundColor: colors.whiteText,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: height * 0.6,
  },
  Applogo: {
    height: 87.29,
    width: 79.32,
  },
  LogoText: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    fontSize: 36,
    color: colors.whiteText,
  },
  login: {
    textAlign: 'center',
    color: colors.primary,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    fontSize: 36,
  },

  loginActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBoxLabel: {
    marginHorizontal: 4,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    fontSize: 12,
    color: colors.secondary,
  },
  ForgetPassword: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    fontSize: 12,
    color: colors.secondary,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    fontSize: 12,
    color: colors.secondary,
  },
  helightedText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  googleSignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  googleSignText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 12,
    fontFamily: 'Plus Jakarta Sans',
  },
  google: {
    height: 24,
    width: 24,
    marginHorizontal: 8,
  },
});
