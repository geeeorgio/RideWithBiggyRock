import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  carWrapper: {
    width: wp(160),
    height: hp(120),
    justifyContent: 'center',
  },
  carImage: { width: '100%', height: '100%' },
  alignLeft: { alignSelf: 'flex-start' },
  alignRight: { alignSelf: 'flex-end' },

  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(10),
  },
  lockIcon: {
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    color: COLORS.white,
    fontSize: sp(11),
    marginTop: hp(12),
  },
  unlockButton: {
    backgroundColor: COLORS.orange,
    paddingVertical: hp(4),
    paddingHorizontal: wp(12),
    borderRadius: wp(12),
    marginTop: hp(5),
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  unlockText: { color: COLORS.white, fontSize: sp(12) },
});
