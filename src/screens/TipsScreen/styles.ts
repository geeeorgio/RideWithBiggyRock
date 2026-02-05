import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  balanceText: {
    fontSize: sp(16),
    fontFamily: FONTS.semiBold,
  },
  titleContainer: {
    width: '80%',
    padding: wp(12),
    alignItems: 'center',
    marginBottom: hp(15),
    borderWidth: 2,
    borderColor: COLORS.white_overlay_light,
  },
  title: {
    fontSize: sp(14),
    fontFamily: FONTS.extraBold,
    textShadowColor: COLORS.wrong_answer,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: hp(8),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: sp(11),
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  listContent: {
    paddingHorizontal: wp(20),
    paddingBottom: hp(20),
    gap: hp(12),
  },
  listFooter: {
    height: hp(40),
  },
  tipCard: {
    width: '100%',
    backgroundColor: COLORS.purple,
    borderRadius: wp(16),
    paddingVertical: hp(8),
    paddingHorizontal: wp(16),
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
  },
  lockedContent: {
    alignItems: 'center',
    gap: hp(10),
  },
  lockIcon: {
    width: wp(20),
    height: wp(20),
  },
  unlockButton: {
    paddingVertical: hp(8),
    paddingHorizontal: wp(24),
    backgroundColor: COLORS.light_purple_bckd,
    borderRadius: wp(20),
  },
  unlockButtonDisabled: {
    opacity: 0.6,
  },
  unlockText: {
    fontSize: sp(11),
    fontFamily: FONTS.extraLight,
  },
  unlockedContent: {
    alignItems: 'center',
    gap: hp(8),
  },
  smileIcon: {
    width: wp(20),
    height: wp(20),
  },
  tipText: {
    fontSize: sp(10),
    textAlign: 'center',
  },
});
