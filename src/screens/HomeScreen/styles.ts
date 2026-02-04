import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: hp(20),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: wp(40),
  },
  imgContainer: {
    width: '100%',
    height: hp(300),
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
