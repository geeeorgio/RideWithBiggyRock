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

      <CustomContainer extraStyle={styles.rulesTextContainer}>
        <CustomText extraStyle={styles.rulesDescription}>
          Catch Biggy Rock — tap him as soon as he appears. {'\n'} Be fast — he
          stays on screen for a short time. {'\n'} Don't tap the fish — it gives
          −1 point. {'\n'}
          The faster you react, the more points you earn. {'\n'} You have 1
          minute
        </CustomText>
      </CustomContainer>

      <CustomButton onPress={onStart} extraStyle={styles.playButton}>
        <View style={styles.playButtonOverlay} />
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
