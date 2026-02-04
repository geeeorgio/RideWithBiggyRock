import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  pageWrapper: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: hp(40),
  },
  textContainer: {
    width: '88%',
    paddingVertical: hp(12),
    paddingHorizontal: wp(24),
    alignItems: 'center',
    gap: hp(20),
  },
  title: {
    fontSize: sp(16),
    fontFamily: FONTS.extraBold,
  },
  description: {
    fontSize: sp(12),
    textAlign: 'center',
  },
  button: {
    width: '88%',
  },
  buttonText: {
    fontSize: sp(14),
    fontFamily: FONTS.extraBold,
  },
  content: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onbd4Content: {
    width: '100%',
    height: '60%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  onbd4Image: {
    position: 'absolute',
    left: 0,
    width: wp(250),
    height: '100%',
  },
  absoluteImageLeft: {
    position: 'absolute',
    top: '50%',
    left: -50,
    bottom: 0,
    width: wp(150),
    height: hp(150),
    transform: [{ scaleX: -1 }],
  },
  absoluteImageRight: {
    position: 'absolute',
    top: '60%',
    right: -50,
    bottom: 0,
    width: wp(150),
    height: hp(150),
  },
  absoluteImage4Right: {
    position: 'absolute',
    top: '55%',
    right: -15,
    bottom: 0,
    width: wp(180),
    height: hp(180),
  },
});
