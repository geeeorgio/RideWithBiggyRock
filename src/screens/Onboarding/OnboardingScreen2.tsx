import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ONBOARDING } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen2 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen3');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.pageWrapper}>
      <CustomContainer variant="onboarding" extraStyle={styles.textContainer}>
        <CustomText extraStyle={styles.title}>Tap the Hero</CustomText>
        <CustomText extraStyle={styles.description}>
          {`When you see Markus — tap fast. \n That’s how you earn points.`}
        </CustomText>
        <CustomButton
          variant="onboarding"
          onPress={handleNext}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Got it</CustomText>
        </CustomButton>
      </CustomContainer>

      <View style={styles.content}>
        <Image
          source={ONBOARDING.onbd2}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen2;
