import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: wp(16),
    alignItems: 'center',
    marginTop: hp(10),
  },
  headerTitle: {
    fontSize: sp(20),
    fontFamily: FONTS.extraBold,
    marginBottom: hp(10),
  },
  headerDescription: {
    fontSize: sp(13),
    fontFamily: FONTS.regular,
    textAlign: 'center',
    lineHeight: sp(18),
    opacity: 0.9,
  },
  statsSection: {
    flex: 1,
    marginTop: hp(20),
    gap: hp(10),
  },
  statsTable: {
    borderRadius: wp(14),
    borderWidth: 2,
    borderColor: COLORS.purple,
    overflow: 'hidden',
  },
  statsRow: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.purple,
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
    borderRightWidth: 2,
    borderRightColor: COLORS.purple,
    backgroundColor: COLORS.purple_container,
  },
  statsValueCell: {
    flex: 1,
    paddingVertical: hp(12),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.purple_container,
  },
  statsLabel: {
    fontSize: sp(15),
    fontFamily: FONTS.medium,
  },
  statsValue: {
    fontSize: sp(18),
    fontFamily: FONTS.extraBold,
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
    backgroundColor: COLORS.purple,
    borderRadius: wp(10),
    paddingVertical: hp(8),
    paddingHorizontal: wp(20),
    minWidth: wp(70),
    alignItems: 'center',
  },
  badgeValue: {
    fontSize: sp(16),
    fontFamily: FONTS.extraBold,
  },
  starsContainer: {
    alignItems: 'center',
    marginVertical: hp(5),
  },
  starsIcon: {
    width: wp(60),
    height: hp(30),
  },
  topScoresTable: {
    borderRadius: wp(14),
    borderWidth: 2,
    borderColor: COLORS.purple,
    overflow: 'hidden',
  },
  topScoreRow: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.purple,
  },
  topScoreLabelCell: {
    flex: 1,
    paddingVertical: hp(14),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: COLORS.purple,
    backgroundColor: COLORS.purple,
  },
  topScoreValueCell: {
    flex: 1,
    paddingVertical: hp(14),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.purple_container,
  },
  topScoreLabel: {
    fontSize: sp(14),
    fontFamily: FONTS.medium,
  },
  topScoreValue: {
    fontSize: sp(17),
    fontFamily: FONTS.extraBold,
  },
});
