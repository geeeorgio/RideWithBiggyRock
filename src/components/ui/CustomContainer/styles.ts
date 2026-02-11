import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
    borderRadius: wp(16),
  },
  onboarding: {
    backgroundColor: COLORS.marcus_border,
    borderWidth: wp(1),
    borderColor: COLORS.marcus_main,
  },
  lightPurple: {
    backgroundColor: COLORS.marcus_container,
  },
  red: {
    backgroundColor: COLORS.wrong_answer,
  },
});
