import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    width: '100%',
    gap: hp(16),
    paddingHorizontal: wp(20),
  },
  contentContainer: {
    width: '100%',
    padding: wp(16),
    borderWidth: wp(1),
    borderColor: COLORS.white,
  },
  contentText: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: hp(350),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
