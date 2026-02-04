import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(60),
    marginBottom: hp(10),
  },
  leftButton: {
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  backIcon: {
    width: wp(30),
    height: wp(30),
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.purple_overlay_medium,
    paddingVertical: hp(6),
    paddingHorizontal: wp(16),
    borderRadius: wp(16),
    borderWidth: wp(1),
    borderColor: COLORS.white_overlay_light,
    gap: wp(4),
  },
  title: {
    fontSize: sp(15),
  },
  icon: {
    width: wp(20),
    height: wp(20),
  },
});
