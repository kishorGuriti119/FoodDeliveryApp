import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../Utility/Colors';

const {width, height} = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    padding: 24,
    height: height,
    backgroundColor: colors.whiteText,
  },
  title: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },

  inputfieldsContainer: {
    marginTop: 40,
  },
  custominputstyle: {
    borderColor: colors.custominputBorder,
    borderBottomColor: colors.custominputBorder,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderRadius: 10,
    height: 50,
    padding: 10,
  },
  inputalign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 50,
  },
  buttonContainer: {
    marginVertical: 30,
  },
});
