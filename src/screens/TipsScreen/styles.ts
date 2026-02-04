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
    padding: wp(16),
    alignItems: 'center',
    marginTop: hp(10),
    marginBottom: hp(15),
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  title: {
    fontSize: sp(16),
    fontFamily: FONTS.extraBold,
    marginBottom: hp(8),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: sp(12),
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: hp(20),
    gap: hp(10),
  },
  tipCard: {
    backgroundColor: COLORS.purple,
    borderRadius: wp(16),
    paddingVertical: hp(16),
    paddingHorizontal: wp(16),
  },
  lockedContent: {
    alignItems: 'center',
    gap: hp(10),
  },
  lockIcon: {
    width: wp(24),
    height: wp(24),
  },
  unlockButton: {
    paddingVertical: hp(10),
    paddingHorizontal: wp(24),
    backgroundColor: COLORS.purple_overlay_medium,
    borderRadius: wp(20),
  },
  unlockButtonDisabled: {
    opacity: 0.6,
  },
  unlockText: {
    fontSize: sp(13),
  },
  unlockedContent: {
    alignItems: 'center',
    gap: hp(8),
  },
  smileIcon: {
    width: wp(24),
    height: wp(24),
  },
  tipText: {
    fontSize: sp(14),
    textAlign: 'center',
  },
});
