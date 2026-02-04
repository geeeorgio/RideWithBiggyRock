import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignSelf: 'center',
    width: '80%',
    padding: wp(16),
    alignItems: 'center',
    marginTop: hp(10),
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
  },
  headerTitle: {
    fontSize: sp(16),
    fontFamily: FONTS.extraBold,
    marginBottom: hp(10),
  },
  headerDescription: {
    fontSize: sp(12),
    textAlign: 'center',
  },
  statsSection: {
    flex: 1,
    marginTop: hp(20),
    gap: hp(10),
  },
  statsTable: {
    borderRadius: wp(14),
    borderWidth: 1,
    borderColor: COLORS.white,
    overflow: 'hidden',
  },
  statsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  statsLabelCell: {
    flex: 1,
    paddingVertical: hp(12),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.white,
    backgroundColor: COLORS.purple,
  },
  statsValueCell: {
    flex: 1,
    paddingVertical: hp(12),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.purple,
  },
  statsLabel: {
    fontSize: sp(14),
  },
  statsValue: {
    fontSize: sp(16),
  },
  carIcon: {
    width: wp(70),
    height: hp(45),
  },
  fishIcon: {
    width: wp(65),
    height: hp(40),
  },
  valueBadge: {
    backgroundColor: COLORS.white_overlay_light,
    borderRadius: wp(10),
    paddingVertical: hp(8),
    paddingHorizontal: wp(20),
    minWidth: wp(70),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.purple_border,
  },
  badgeValue: {
    fontSize: sp(16),
  },
  starsContainer: {
    alignItems: 'center',
    marginVertical: hp(5),
  },
  starsIcon: {
    width: wp(66),
    height: hp(44),
  },
  topScoresTable: {
    borderRadius: wp(14),
    borderWidth: 1,
    borderColor: COLORS.white,
    overflow: 'hidden',
  },
  topScoreRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
  topScoreLabelCell: {
    flex: 1,
    paddingVertical: hp(14),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.white,
    backgroundColor: COLORS.purple,
  },
  topScoreValueCell: {
    flex: 1,
    paddingVertical: hp(14),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.purple,
  },
  topScoreLabel: {
    fontSize: sp(14),
  },
  topScoreValue: {
    fontSize: sp(16),
  },
});
