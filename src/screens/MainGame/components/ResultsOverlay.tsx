import { Image, Pressable, View } from 'react-native';

import { styles } from '../styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ITEMS, SHOP_IMAGES } from 'src/constants';

interface ResultsOverlayProps {
  biggyCount: number;
  fishCount: number;
  finalScore: number;
  onRestart: () => void;
  onClose: () => void;
}

const ResultsOverlay = ({
  biggyCount,
  fishCount,
  finalScore,
  onRestart,
  onClose,
}: ResultsOverlayProps) => {
  return (
    <View style={styles.resultsOverlay}>
      <Pressable style={styles.closeOverlayBtn} onPress={onClose}>
        <CustomText extraStyle={styles.closeOverlayText}>✕</CustomText>
      </Pressable>

      <CustomContainer
        variant="onboarding"
        extraStyle={styles.resultsContainer}
      >
        <View style={styles.resultsRow}>
          <View style={styles.resultsValueBadge}>
            <CustomText extraStyle={styles.resultsValue}>
              {biggyCount}
            </CustomText>
          </View>
          <Image
            source={SHOP_IMAGES.side_car_main}
            style={styles.resultsCarIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.resultsRow}>
          <View style={styles.resultsValueBadge}>
            <CustomText extraStyle={styles.resultsValue}>
              {fishCount}
            </CustomText>
          </View>
          <Image
            source={ITEMS.two_fishes}
            style={styles.resultsFishIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.finalResultRow}>
          <CustomText extraStyle={styles.finalResultLabel}>
            Final result
          </CustomText>
          <View style={styles.finalScoreBadge}>
            <CustomText extraStyle={styles.finalScoreText}>
              {Math.max(0, finalScore)}
            </CustomText>
          </View>
        </View>

        <CustomButton onPress={onRestart} extraStyle={styles.startAgainButton}>
          <CustomText extraStyle={styles.startAgainText}>
            Start Again
          </CustomText>
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default ResultsOverlay;
