import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  introContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(25),
    paddingHorizontal: wp(10),
  },
  introImage: {
    width: wp(200),
    height: hp(150),
  },
  introContent: {
    padding: wp(20),
    alignItems: 'center',
  },
  introTitle: {
    fontSize: sp(22),
    fontFamily: FONTS.extraBold,
    marginBottom: hp(12),
  },
  introDescription: {
    fontSize: sp(14),
    fontFamily: FONTS.regular,
    textAlign: 'center',
    lineHeight: sp(20),
    opacity: 0.9,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(14),
    paddingHorizontal: wp(40),
    gap: wp(10),
  },
  startButtonText: {
    fontSize: sp(18),
    fontFamily: FONTS.semiBold,
  },
  playIcon: {
    width: wp(22),
    height: wp(22),
  },
  questionScrollView: {
    flex: 1,
  },
  questionContainer: {
    paddingVertical: hp(15),
    gap: hp(20),
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontSize: sp(15),
    fontFamily: FONTS.medium,
  },
  pointsBadge: {
    backgroundColor: COLORS.purple_overlay_dark,
    borderRadius: wp(10),
    paddingVertical: hp(6),
    paddingHorizontal: wp(14),
  },
  pointsText: {
    fontSize: sp(14),
    fontFamily: FONTS.semiBold,
    color: COLORS.correct_answer,
  },
  questionContent: {
    padding: wp(18),
  },
  questionText: {
    fontSize: sp(17),
    fontFamily: FONTS.semiBold,
    textAlign: 'center',
    lineHeight: sp(24),
  },
  optionsContainer: {
    gap: hp(12),
  },
  optionButton: {
    backgroundColor: COLORS.purple_container,
    borderRadius: wp(14),
    paddingVertical: hp(16),
    paddingHorizontal: wp(18),
    borderWidth: 1,
    borderColor: COLORS.purple_border,
  },
  optionCorrect: {
    backgroundColor: COLORS.correct_answer,
    borderColor: COLORS.correct_answer,
  },
  optionWrong: {
    backgroundColor: COLORS.wrong_answer,
    borderColor: COLORS.wrong_answer,
  },
  optionText: {
    fontSize: sp(15),
    fontFamily: FONTS.medium,
    textAlign: 'center',
  },
  optionTextCorrect: {
    color: COLORS.correct_answer,
  },
  optionTextWrong: {
    color: COLORS.wrong_answer,
  },
  hintContainer: {
    padding: wp(16),
    marginTop: hp(10),
    alignItems: 'center',
  },
  hintHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(8),
    marginBottom: hp(8),
  },
  hintIcon: {
    width: wp(22),
    height: wp(22),
  },
  hintTitle: {
    fontSize: sp(16),
    fontFamily: FONTS.semiBold,
  },
  hintText: {
    fontSize: sp(14),
    fontFamily: FONTS.regular,
    textAlign: 'center',
    marginBottom: hp(12),
  },
  tryAgainButton: {
    paddingVertical: hp(10),
    paddingHorizontal: wp(30),
  },
  tryAgainText: {
    fontSize: sp(14),
  },
  correctFeedback: {
    alignItems: 'center',
    marginTop: hp(10),
  },
  correctText: {
    fontSize: sp(20),
    fontFamily: FONTS.extraBold,
    color: COLORS.correct_answer,
  },
  completeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(25),
    paddingHorizontal: wp(10),
  },
  completeImage: {
    width: wp(200),
    height: hp(150),
  },
  completeContent: {
    padding: wp(20),
    alignItems: 'center',
  },
  completeTitle: {
    fontSize: sp(24),
    fontFamily: FONTS.extraBold,
    marginBottom: hp(12),
  },
  completeDescription: {
    fontSize: sp(14),
    fontFamily: FONTS.regular,
    textAlign: 'center',
    marginBottom: hp(15),
  },
  completeBadge: {
    backgroundColor: COLORS.correct_answer,
    borderRadius: wp(12),
    paddingVertical: hp(10),
    paddingHorizontal: wp(25),
    borderWidth: 1,
    borderColor: COLORS.correct_answer,
  },
  completeBadgeText: {
    fontSize: sp(16),
    fontFamily: FONTS.extraBold,
    color: COLORS.correct_answer,
  },
  restartButton: {
    paddingVertical: hp(14),
    paddingHorizontal: wp(40),
  },
  restartButtonText: {
    fontSize: sp(16),
  },
});
