import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    width: '100%',
    gap: hp(6),
    paddingHorizontal: wp(20),
  },
  contentContainer: {
    width: '100%',
    padding: wp(8),
    borderWidth: wp(1),
    backgroundColor: COLORS.purple_overlay_medium,
    borderColor: COLORS.white_overlay_light,
  },
  contentText: {
    fontSize: sp(12),
    fontFamily: FONTS.regular,
    textAlign: 'center',
    lineHeight: hp(16),
  },
  imageContainer: {
    width: '100%',
    height: hp(330),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
