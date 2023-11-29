import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../Utility/Colors';
const {height, width} = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.whiteText,
  },
  profileContainer: {
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  profile_image: {
    height: 140,
    width: 140,
  },
  imageContainer: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    borderRadius: 100,
    padding: 3,
    position: 'relative',
  },
  camIcon: {
    position: 'absolute',
    height: 26,
    width: 26,
    left: 59,
    bottom: -6,
  },
  profile: {
    marginVertical: 30,
  },
  editableContainer: {
    marginBottom: 80,
  },
});
