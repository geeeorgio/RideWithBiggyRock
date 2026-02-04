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
    backgroundColor: COLORS.purple_container,
    borderWidth: wp(1),
    borderColor: COLORS.purple_border,
  },
  red: {
    backgroundColor: COLORS.wrong_answer,
  },
  onboarding: {
    backgroundColor: COLORS.light_purple_bckd,
    borderWidth: wp(1),
    borderColor: COLORS.purple_border,
  },
});
