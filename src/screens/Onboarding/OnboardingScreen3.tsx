import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ITEMS, ONBOARDING } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen3 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen4');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.pageWrapper}>
      <CustomContainer variant="onboarding" extraStyle={styles.textContainer}>
        <CustomText extraStyle={styles.title}>
          Watch Out for the Fish
        </CustomText>
        <CustomText extraStyle={styles.description}>
          {`The blue fish is a trap. \n Tap it — lose a point.`}
        </CustomText>
        <CustomButton
          variant="onboarding"
          onPress={handleNext}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Stay Focused</CustomText>
        </CustomButton>
      </CustomContainer>

      <View style={styles.content}>
        <Image
          source={ONBOARDING.onbd3}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Image
        source={ITEMS.blue_fish}
        style={styles.absoluteImageLeft}
        resizeMode="contain"
      />
      <Image
        source={ITEMS.blue_fish}
        style={styles.absoluteImageRight}
        resizeMode="contain"
      />
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen3;
