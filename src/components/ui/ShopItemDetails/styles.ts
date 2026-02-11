import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    width: '100%',
  },
  detailsContent: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp(20),
    paddingHorizontal: wp(20),
  },
  largeCarImage: {
    width: wp(300),
    height: hp(230),
    marginBottom: hp(20),
  },
  infoCard: {
    width: '100%',
    backgroundColor: COLORS.bruno_overlay_light,
    borderRadius: wp(20),
    padding: wp(12),
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
  },
  infoTitle: {
    fontSize: sp(18),
    textAlign: 'center',
    marginBottom: hp(6),
  },
  infoDescription: {
    fontSize: sp(12),
    textAlign: 'center',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(10),
    width: '100%',
    alignSelf: 'center',
    marginTop: hp(40),
    paddingVertical: hp(12),
    paddingHorizontal: wp(30),
    borderRadius: wp(16),
    borderWidth: 1,
    borderColor: COLORS.bruno_accent,
    backgroundColor: COLORS.bruno_main,
  },
  playButtonOverlay: {
    position: 'absolute',
    top: wp(4),
    left: wp(4),
    right: wp(4),
    bottom: wp(4),
    backgroundColor: COLORS.bruno_main,
    borderRadius: wp(12),
  },
  playButtonText: {
    fontSize: sp(16),
  },
  playButtonIcon: {
    width: wp(20),
    height: wp(20),
  },
  playButtonIconImage: {
    width: '100%',
    height: '100%',
  },
});
