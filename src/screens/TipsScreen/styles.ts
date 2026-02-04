import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  balanceBadge: {
    backgroundColor: COLORS.purple_overlay_dark,
    borderRadius: wp(12),
    paddingVertical: hp(8),
    paddingHorizontal: wp(18),
    borderWidth: 1,
    borderColor: COLORS.purple_border,
    minWidth: wp(50),
    alignItems: 'center',
  },
  balanceText: {
    fontSize: sp(16),
    fontFamily: FONTS.semiBold,
  },
  titleContainer: {
    padding: wp(16),
    alignItems: 'center',
    marginTop: hp(10),
    marginBottom: hp(15),
  },
  title: {
    fontSize: sp(18),
    fontFamily: FONTS.extraBold,
    marginBottom: hp(8),
  },
  subtitle: {
    fontSize: sp(13),
    fontFamily: FONTS.regular,
    textAlign: 'center',
    lineHeight: sp(18),
    opacity: 0.9,
  },
  listContent: {
    paddingBottom: hp(20),
    gap: hp(12),
  },
  tipCard: {
    paddingVertical: hp(16),
    paddingHorizontal: wp(16),
  },
  lockedContent: {
    alignItems: 'center',
    gap: hp(10),
  },
  lockIcon: {
    width: wp(28),
    height: wp(28),
    tintColor: COLORS.white,
    opacity: 0.8,
  },
  unlockButton: {
    paddingVertical: hp(10),
    paddingHorizontal: wp(24),
    backgroundColor: COLORS.purple_overlay_medium,
  },
  unlockText: {
    fontSize: sp(13),
    fontFamily: FONTS.medium,
  },
  unlockedContent: {
    alignItems: 'center',
    gap: hp(8),
  },
  smileIcon: {
    width: wp(26),
    height: wp(26),
    tintColor: COLORS.white,
  },
  tipText: {
    fontSize: sp(14),
    fontFamily: FONTS.medium,
    textAlign: 'center',
    lineHeight: sp(20),
  },
});
