import { Image, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomHeader from '../CustomHeader/CustomHeader';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { ICONS } from 'src/constants';
import type { ShopItem } from 'src/types';

interface ShopItemDetailsProps {
  item: ShopItem;
  totalScore: number;
  onBack: () => void;
}

const ShopItemDetails = ({
  item,
  totalScore,
  onBack,
}: ShopItemDetailsProps) => {
  return (
    <View style={styles.detailsContainer}>
      <CustomHeader title={`${totalScore}`} onBackPress={onBack} />

      <View style={styles.detailsContent}>
        <Image
          source={item.image}
          style={styles.largeCarImage}
          resizeMode="contain"
        />

        <View style={styles.infoCard}>
          <CustomText extraStyle={styles.infoTitle}>{item.name}</CustomText>
          <CustomText extraStyle={styles.infoDescription}>
            {item.description}
          </CustomText>
        </View>

        <CustomButton onPress={onBack} extraStyle={styles.playButton}>
          <View style={styles.playButtonOverlay} />
          <CustomText extraStyle={styles.playButtonText}>
            Play to improve
          </CustomText>
          <View style={styles.playButtonIcon}>
            <Image
              source={ICONS.play}
              resizeMode="contain"
              style={styles.playButtonIconImage}
            />
          </View>
        </CustomButton>
      </View>
    </View>
  );
};

export default ShopItemDetails;
