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
    paddingHorizontal: wp(10),
  },
  introImage: {
    width: wp(250),
    height: hp(220),
  },
  introContent: {
    width: '94%',
    padding: wp(14),
    alignItems: 'center',
    borderRadius: wp(16),
    backgroundColor: COLORS.purple,
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
    marginBottom: hp(24),
  },
  introDescription: {
    fontSize: sp(12),
    textAlign: 'center',
  },
  startBtnOverlay: {
    position: 'absolute',
    top: wp(4),
    left: wp(4),
    right: wp(4),
    bottom: wp(4),
    backgroundColor: COLORS.purple_overlay_light,
    borderRadius: wp(12),
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(12),
    paddingHorizontal: wp(40),
    gap: wp(10),
    backgroundColor: COLORS.white_overlay_light,
  },
  startButtonText: {
    fontSize: sp(16),
  },
  playIcon: {
    width: wp(22),
    height: wp(22),
  },
  questionScrollView: {
    flex: 1,
    paddingHorizontal: wp(16),
  },
  questionContainer: {
    paddingVertical: hp(15),
    gap: hp(20),
  },
  progressContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: sp(12),
  },
  questionContent: {
    alignItems: 'center',
    gap: wp(8),
    padding: wp(10),
  },
  questionIcon: {
    width: wp(20),
    height: hp(20),
  },
  questionText: {
    fontSize: sp(12),
    textAlign: 'center',
  },
  optionsContainer: {
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
    borderRadius: wp(16),
    backgroundColor: COLORS.purple_overlay_medium,
    padding: wp(16),
    gap: hp(12),
  },
  optionButton: {
    backgroundColor: COLORS.purple_border,
    borderRadius: wp(16),
    paddingVertical: hp(12),
    paddingHorizontal: wp(16),
    borderWidth: 1,
    borderColor: COLORS.purple_border,
  },
  optionCorrect: {
    backgroundColor: COLORS.correct_answer,
    borderColor: COLORS.white_overlay_light,
  },
  optionWrong: {
    backgroundColor: COLORS.wrong_answer,
    borderColor: COLORS.white_overlay_light,
  },
  optionText: {
    fontSize: sp(12),
    fontFamily: FONTS.regular,
  },
  hintContainer: {
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
    borderRadius: wp(16),
    backgroundColor: COLORS.purple_overlay_medium,
    padding: wp(12),
  },
  hintHeader: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(8),
  },
  hintIcon: {
    width: wp(20),
    height: wp(20),
  },
  hintText: {
    fontSize: sp(14),
    fontFamily: FONTS.extraLight,
  },
  tryAgainButton: {
    alignSelf: 'center',
    width: '60%',
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
    borderRadius: wp(16),
    backgroundColor: COLORS.purple_border,
    paddingVertical: hp(10),
    paddingHorizontal: wp(30),
  },
  tryAgainText: {
    fontSize: sp(14),
  },
  correctFeedback: {
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
    borderRadius: wp(16),
    backgroundColor: COLORS.correct_answer,
    paddingVertical: hp(10),
    paddingHorizontal: wp(30),
  },
  correctText: {
    fontSize: sp(14),
    fontFamily: FONTS.extraBold,
  },
  completeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(24),
  },
  completeImage: {
    width: wp(222),
    height: hp(200),
  },
  completeContent: {
    padding: wp(12),
    alignItems: 'center',
    marginBottom: hp(16),
  },
  completeDescription: {
    fontSize: sp(12),
    textAlign: 'center',
    marginBottom: hp(10),
  },
  completeBadgeIcon: {
    width: wp(20),
    height: wp(20),
  },
  restartButtonsContainer: {
    marginTop: hp(16),
    width: '100%',
    gap: hp(10),
  },
  restartButton: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
    borderRadius: wp(16),
    backgroundColor: COLORS.white_overlay_light,
    paddingVertical: hp(10),
    paddingHorizontal: wp(30),
    gap: wp(10),
  },
  restartBtnOverlay: {
    position: 'absolute',
    top: wp(4),
    left: wp(4),
    right: wp(4),
    bottom: wp(4),
    backgroundColor: COLORS.purple_overlay_medium,
    borderRadius: wp(12),
  },
  restartButtonText: {
    fontSize: sp(14),
  },
});
