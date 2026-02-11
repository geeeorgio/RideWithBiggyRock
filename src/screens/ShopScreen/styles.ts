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
    padding: wp(8),
    backgroundColor: COLORS.marcus_bg_dark,
    gap: hp(8),
    borderRadius: wp(16),
    borderWidth: 1,
    borderColor: COLORS.marcus_accent_light,
  },
  headerTitle: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  headerDesc: {
    fontSize: sp(10),
    textAlign: 'center',
  },
  carsContainer: {
    width: '100%',
    marginTop: hp(10),
  },
});
