import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(10),
    borderRadius: wp(16),
    overflow: 'hidden',
  },
  red: {
    backgroundColor: COLORS.wrong_answer,
  },
  black: {
    backgroundColor: COLORS.light_purple_bckd,
    borderWidth: wp(1),
    borderColor: COLORS.purple_border,
  },
  overlay: {
    position: 'absolute',
    top: wp(4),
    left: wp(4),
    right: wp(4),
    bottom: wp(4),
    backgroundColor: COLORS.light_purple_bckd,
    borderRadius: wp(16),
    borderWidth: wp(1),
    borderColor: COLORS.purple_border,
  },
});
