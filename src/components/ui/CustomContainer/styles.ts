import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
    borderRadius: wp(16),
  },
  onboarding: {
    backgroundColor: COLORS.bruno_overlay_light,
    borderWidth: wp(1),
    borderColor: COLORS.bruno_accent,
  },
  lightPurple: {
    backgroundColor: COLORS.bruno_container,
  },
  red: {
    backgroundColor: COLORS.wrong_answer,
  },
});
