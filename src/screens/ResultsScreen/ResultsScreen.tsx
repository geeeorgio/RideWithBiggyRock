import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ICONS, ITEMS, SHOP_IMAGES } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';

const ResultsScreen = () => {
  const { contextResults } = useGameContext();

  const {
    gamesPlayed,
    vehicleTapped,
    fishTapped,
    topScore: { topScore1, topScore2, topScore3 },
  } = contextResults;

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader />

      <CustomContainer
        variant="lightPurple"
        extraStyle={styles.headerContainer}
      >
        <CustomText extraStyle={styles.headerTitle}>My results</CustomText>
        <CustomText extraStyle={styles.headerDescription}>
          Track your progress on the road.{'\n'}
          See how many games you've played, what you've collected, and your top
          scores so far.
        </CustomText>
      </CustomContainer>

      <View style={styles.statsSection}>
        <View style={styles.statsTable}>
          <View style={styles.statsRow}>
            <View style={styles.statsLabelCell}>
              <CustomText extraStyle={styles.statsLabel}>
                Games Played
              </CustomText>
            </View>
            <View style={styles.statsValueCell}>
              <CustomText extraStyle={styles.statsValue}>
                {gamesPlayed}
              </CustomText>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statsLabelCell}>
              <Image
                source={SHOP_IMAGES.side_car_main}
                style={styles.carIcon}
                resizeMode="cover"
              />
            </View>
            <View style={styles.statsValueCell}>
              <View style={styles.valueBadge}>
                <CustomText extraStyle={styles.badgeValue}>
                  {vehicleTapped}
                </CustomText>
              </View>
            </View>
          </View>

          <View style={[styles.statsRow, styles.lastRow]}>
            <View style={styles.statsLabelCell}>
              <Image
                source={ITEMS.two_fishes}
                style={styles.fishIcon}
                resizeMode="cover"
              />
            </View>
            <View style={styles.statsValueCell}>
              <View style={styles.valueBadge}>
                <CustomText extraStyle={styles.badgeValue}>
                  {fishTapped}
                </CustomText>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.starsContainer}>
          <Image
            source={ICONS.stars}
            style={styles.starsIcon}
            resizeMode="cover"
          />
        </View>

        <View style={styles.topScoresTable}>
          <View style={styles.topScoreRow}>
            <View style={styles.topScoreLabelCell}>
              <CustomText extraStyle={styles.topScoreLabel}>
                Top Score #1
              </CustomText>
            </View>
            <View style={styles.topScoreValueCell}>
              <CustomText extraStyle={styles.topScoreValue}>
                {topScore1}
              </CustomText>
            </View>
          </View>

          <View style={styles.topScoreRow}>
            <View style={styles.topScoreLabelCell}>
              <CustomText extraStyle={styles.topScoreLabel}>
                Top Score #2
              </CustomText>
            </View>
            <View style={styles.topScoreValueCell}>
              <CustomText extraStyle={styles.topScoreValue}>
                {topScore2}
              </CustomText>
            </View>
          </View>

          <View style={[styles.topScoreRow, styles.lastRow]}>
            <View style={styles.topScoreLabelCell}>
              <CustomText extraStyle={styles.topScoreLabel}>
                Top Score #3
              </CustomText>
            </View>
            <View style={styles.topScoreValueCell}>
              <CustomText extraStyle={styles.topScoreValue}>
                {topScore3}
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </CustomScreenWrapper>
  );
};

export default ResultsScreen;
