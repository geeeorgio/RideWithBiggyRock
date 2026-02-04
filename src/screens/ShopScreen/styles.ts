import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: {
    width: '100%',
    paddingBottom: hp(40),
    alignItems: 'center',
  },
  headerTextContainer: {
    width: '80%',
    padding: wp(12),
    backgroundColor: COLORS.purple_overlay_medium,
    gap: hp(8),
    borderRadius: wp(15),
    borderWidth: 1,
    borderColor: COLORS.white_overlay_light,
  },
  headerTitle: {
    fontSize: sp(16),
    textAlign: 'center',
  },
  headerDesc: {
    fontSize: sp(12),
    textAlign: 'center',
  },
  carsContainer: {
    width: '100%',
    marginTop: hp(10),
  },
});
