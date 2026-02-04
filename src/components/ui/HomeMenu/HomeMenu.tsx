import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { ICONS } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';

const HomeMenu = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.wrapper}>
      <View style={styles.storyButtonWrapper}>
        <CustomButton
          onPress={() => navigation.navigate('StoryScreen')}
          extraStyle={styles.storyButton}
        >
          <View style={styles.storyBtnOverlay} />
          <CustomText extraStyle={styles.storyBtnText}>Story</CustomText>
          <View style={styles.storyButtonIcon}>
            <Image
              source={ICONS.story}
              resizeMode="contain"
              style={styles.storyButtonIconImage}
            />
          </View>
        </CustomButton>
      </View>

      <View style={styles.menuContainer}>
        <CustomButton
          onPress={() => navigation.navigate('MainGameScreen')}
          extraStyle={styles.playButton}
        >
          <View style={styles.overlay} />
          <CustomText extraStyle={styles.playBtnText}>Play</CustomText>
          <View style={styles.playButtonIcon}>
            <Image
              source={ICONS.play}
              resizeMode="contain"
              style={styles.playButtonIconImage}
            />
          </View>
        </CustomButton>

        <View style={styles.otherBtnsContainer}>
          <CustomButton
            onPress={() => navigation.navigate('ShopScreen')}
            extraStyle={styles.secondaryButton}
          >
            <CustomText extraStyle={styles.text}>My car</CustomText>
          </CustomButton>

          <CustomButton
            onPress={() => navigation.navigate('TipsScreen')}
            extraStyle={styles.secondaryButton}
          >
            <CustomText extraStyle={styles.text}>Travel Tips</CustomText>
          </CustomButton>

          <CustomButton
            onPress={() => navigation.navigate('ResultsScreen')}
            extraStyle={styles.secondaryButton}
          >
            <CustomText extraStyle={styles.text}>My Results</CustomText>
          </CustomButton>

          <CustomButton
            onPress={() => navigation.navigate('QuizScreen')}
            extraStyle={styles.secondaryButton}
          >
            <CustomText extraStyle={styles.text}>Quiz</CustomText>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default HomeMenu;
