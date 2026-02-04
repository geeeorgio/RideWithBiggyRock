import { Image, View } from 'react-native';

import { styles } from '../styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ICONS, ITEMS, SHOP_IMAGES } from 'src/constants';

interface RulesOverlayProps {
  onStart: () => void;
}

const RulesOverlay = ({ onStart }: RulesOverlayProps) => {
  return (
    <View style={styles.rulesContent}>
      <View style={styles.rulesImagesRow}>
        <View style={styles.rulesImageContainer}>
          <CustomText extraStyle={styles.plusOneText}>+1</CustomText>
          <Image
            source={SHOP_IMAGES.side_car_main}
            style={styles.rulesCarImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.rulesImageContainer}>
          <CustomText extraStyle={styles.minusOneText}>-1</CustomText>
          <Image
            source={ITEMS.two_fishes}
            style={styles.rulesFishImage}
            resizeMode="contain"
          />
        </View>
      </View>

      <CustomContainer
        variant="onboarding"
        extraStyle={styles.rulesTextContainer}
      >
        <CustomText extraStyle={styles.rulesTitle}>
          Catch Biggy Rock — tap him as soon as he appears.
        </CustomText>
        <CustomText extraStyle={styles.rulesDescription}>
          Be fast — he stays on screen for a short time.
        </CustomText>
        <CustomText extraStyle={styles.rulesDescription}>
          Don't tap the fish — it gives −1 point.
        </CustomText>
        <CustomText extraStyle={styles.rulesDescription}>
          The faster you react, the more points you earn.
        </CustomText>
        <CustomText extraStyle={styles.rulesHighlight}>
          You have 1 minute
        </CustomText>
      </CustomContainer>

      <CustomButton onPress={onStart} extraStyle={styles.playButton}>
        <CustomText extraStyle={styles.playButtonText}>Play</CustomText>
        <Image
          source={ICONS.play}
          style={styles.playIcon}
          resizeMode="contain"
        />
      </CustomButton>
    </View>
  );
};

export default RulesOverlay;
