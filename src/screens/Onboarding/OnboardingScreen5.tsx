import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ONBOARDING } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';

const OnboardingScreen5 = () => {
  const { setIsContextOnboardingCompleted } = useGameContext();
  const handleNext = () => {
    setIsContextOnboardingCompleted(true);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.pageWrapper}>
      <CustomContainer variant="onboarding" extraStyle={styles.textContainer}>
        <CustomText extraStyle={styles.title}>Let’s Ride!</CustomText>
        <CustomText extraStyle={styles.description}>
          {`Tap fast. Stay sharp. \n Enjoy the road.`}
        </CustomText>
        <CustomButton
          variant="onboarding"
          onPress={handleNext}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Start Game</CustomText>
        </CustomButton>
      </CustomContainer>

      <View style={styles.content}>
        <Image
          source={ONBOARDING.onbd5}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen5;
