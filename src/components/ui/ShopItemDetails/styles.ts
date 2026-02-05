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
    width: wp(320),
    height: hp(250),
    marginBottom: hp(20),
  },
  infoCard: {
    width: '100%',
    backgroundColor: COLORS.purple_overlay_medium,
    borderRadius: wp(20),
    padding: wp(20),
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
  },
  infoTitle: {
    fontSize: sp(20),
    textAlign: 'center',
    marginBottom: hp(10),
  },
  infoDescription: {
    fontSize: sp(14),
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
    borderColor: COLORS.white_overlay_light,
    backgroundColor: COLORS.purple_overlay_medium,
  },
  playButtonOverlay: {
    position: 'absolute',
    top: wp(4),
    left: wp(4),
    right: wp(4),
    bottom: wp(4),
    backgroundColor: COLORS.purple_overlay_light,
    borderRadius: wp(12),
  },
  playButtonText: {
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
});
