import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../Utility/Colors';
const {width, height} = Dimensions.get('window');

export const style = StyleSheet.create({
  backgroundDoodle: {
    opacity: 0.3,
  },
  Container: {
    padding: 24,
    height: '100%',
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
  SignUpContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  signUpTitle: {
    fontFamily: 'Plus Jakarta Sans',
    color: colors.primary,
    fontSize: 36,
    fontWeight: '700',
    marginVertical: 36,
  },
  FormContainer: {
    width: '100%',
  },
  checkboxContainer: {
    marginVertical: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  terms_policy: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '400',
    marginHorizontal: 8,
    color: colors.secondary,
    marginTop: -2,
    lineHeight: 16,
  },
  helightedText: {
    fontFamily: 'Plus Jakarta Sans',
    color: colors.primary,
    fontWeight: '600',
  },
  googleSignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
