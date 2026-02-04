import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
    borderRadius: wp(16),
  },
  onboarding: {
    backgroundColor: COLORS.purple,
    borderWidth: wp(1),
    borderColor: COLORS.purple_border,
  },
  lightPurple: {
    backgroundColor: COLORS.purple_container,
  },
  red: {
    backgroundColor: COLORS.wrong_answer,
  },
});
