import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ICONS, ONBOARDING } from 'src/constants';

const StoryScreen = () => {
  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader title="Story" iconSource={ICONS.story}></CustomHeader>

      <View style={styles.content}>
        <CustomContainer extraStyle={styles.contentContainer}>
          <CustomText extraStyle={styles.contentText}>
            {`Markus the "Arctic Rider" is a traveler who never stays still.\nHe’s always on the road, exploring new routes, chasing new horizons, and living for the feeling of the journey itself.\nEvery road is different, and not every ride is perfect.\nTo keep moving forward, Markus needs a reliable ride that won’t let him down.\nPlay the game, earn points,upgrade vehicles, and help Markus travel further — wherever the road decides to take him.`}
          </CustomText>
        </CustomContainer>

        <View style={styles.imageContainer}>
          <Image
            source={ONBOARDING.onbd2}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </CustomScreenWrapper>
  );
};

export default StoryScreen;
