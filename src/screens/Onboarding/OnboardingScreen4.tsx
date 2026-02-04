import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ONBOARDING, SHOP_IMAGES } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen4 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen5');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.pageWrapper}>
      <CustomContainer variant="onboarding" extraStyle={styles.textContainer}>
        <CustomText extraStyle={styles.title}>Upgrade Your Ride</CustomText>
        <CustomText extraStyle={styles.description}>
          Play games, complete quizzes, earn points, and unlock new rides and
          travel tips as you go.
        </CustomText>
        <CustomButton
          variant="onboarding"
          onPress={handleNext}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Almost There</CustomText>
        </CustomButton>
      </CustomContainer>

      <View style={styles.onbd4Content}>
        <Image
          source={ONBOARDING.onbd4}
          style={styles.onbd4Image}
          resizeMode="cover"
        />
      </View>

      <Image
        source={SHOP_IMAGES.side_car_onbd}
        style={styles.absoluteImage4Right}
        resizeMode="contain"
      />
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen4;
