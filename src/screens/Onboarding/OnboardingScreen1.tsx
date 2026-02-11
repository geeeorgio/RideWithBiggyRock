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

const OnboardingScreen1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen2');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.pageWrapper}>
      <CustomContainer variant="onboarding" extraStyle={styles.textContainer}>
        <CustomText extraStyle={styles.title}>
          Meet Marcus Arctic Rider
        </CustomText>
        <CustomText extraStyle={styles.description}>
          {`Always on the road. \n Always ready for an adventure.`}
        </CustomText>
        <CustomButton
          variant="onboarding"
          onPress={handleNext}
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Next</CustomText>
        </CustomButton>
      </CustomContainer>

      <View style={styles.content}>
        <Image
          source={ONBOARDING.onbd1}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen1;
