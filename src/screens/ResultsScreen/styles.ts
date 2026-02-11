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
    padding: wp(12),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.marcus_overlay_light,
  },
  headerTitle: {
    fontSize: sp(16),
    textShadowColor: COLORS.wrong_answer,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
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
    borderRadius: wp(16),
    borderWidth: 1,
    borderColor: COLORS.marcus_accent_light,
    overflow: 'hidden',
  },
  statsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.marcus_accent_light,
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
    borderRightColor: COLORS.marcus_accent_light,
    backgroundColor: COLORS.marcus_main,
  },
  statsValueCell: {
    flex: 1,
    paddingVertical: hp(12),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.marcus_main,
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
    width: wp(55),
    height: hp(44),
  },
  valueBadge: {
    backgroundColor: COLORS.white_overlay_light,
    borderRadius: wp(16),
    paddingVertical: hp(8),
    paddingHorizontal: wp(20),
    minWidth: wp(70),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.marcus_accent,
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
    borderRadius: wp(16),
    borderWidth: 1,
    borderColor: COLORS.marcus_accent_light,
    overflow: 'hidden',
  },
  topScoreRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.marcus_accent_light,
  },
  topScoreLabelCell: {
    flex: 1,
    paddingVertical: hp(14),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.marcus_accent_light,
    backgroundColor: COLORS.marcus_main,
  },
  topScoreValueCell: {
    flex: 1,
    paddingVertical: hp(14),
    paddingHorizontal: wp(14),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.marcus_main,
  },
  topScoreLabel: {
    fontSize: sp(14),
  },
  topScoreValue: {
    fontSize: sp(16),
  },
});
