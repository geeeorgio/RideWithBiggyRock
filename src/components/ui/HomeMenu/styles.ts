import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    marginTop: hp(20),
    backgroundColor: COLORS.bruno_container,
    borderRadius: wp(16),
    borderWidth: wp(2),
    borderColor: COLORS.white_overlay_light,
  },
  overlay: {
    position: 'absolute',
    top: wp(6),
    left: wp(6),
    right: wp(6),
    bottom: wp(6),
    backgroundColor: COLORS.bruno_overlay_light,
    borderRadius: wp(12),
  },
  storyBtnOverlay: {
    position: 'absolute',
    top: wp(6),
    left: wp(6),
    right: wp(6),
    bottom: wp(6),
    backgroundColor: COLORS.bruno_overlay_light,
    borderRadius: wp(12),
  },

  menuContainer: {
    width: '90%',
    borderRadius: wp(30),
    paddingTop: hp(40),
    paddingBottom: hp(30),
    paddingHorizontal: wp(20),
    alignItems: 'center',
  },
  storyButtonWrapper: {
    position: 'absolute',
    top: -hp(24),
    zIndex: 10,
  },
  storyButton: {
    backgroundColor: COLORS.bruno_main,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(6),
    paddingVertical: hp(10),
    borderRadius: wp(16),
    width: wp(100),
  },
  storyBtnText: {
    fontSize: sp(14),
  },
  storyButtonIcon: {
    width: wp(20),
    height: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyButtonIconImage: {
    width: '100%',
    height: '100%',
  },

  playButton: {
    backgroundColor: COLORS.bruno_main,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(10),
    paddingVertical: hp(12),
    borderRadius: wp(16),
    marginBottom: hp(24),
  },
  playBtnText: {
    fontSize: sp(18),
  },
  playButtonIcon: {
    width: wp(24),
    height: wp(24),
  },
  playButtonIconImage: {
    width: '100%',
    height: '100%',
  },

  otherBtnsContainer: {
    width: '100%',
    gap: hp(8),
  },
  secondaryButton: {
    backgroundColor: COLORS.bruno_main,
    borderRadius: wp(16),
    paddingVertical: hp(8),
  },
  text: {
    fontSize: sp(14),
    textAlign: 'center',
  },
});
