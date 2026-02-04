import { FlatList, Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ICONS } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type { Tip } from 'src/types';

const TipsScreen = () => {
  const { contextTips, unlockContextTip, contextResults } = useGameContext();

  const handleUnlockTip = (id: string) => {
    unlockContextTip(id);
  };

  const renderTipCard = ({ item }: { item: Tip }) => {
    const isLocked = item.locked;

    return (
      <CustomContainer variant="onboarding" extraStyle={styles.tipCard}>
        {isLocked ? (
          <View style={styles.lockedContent}>
            <Image
              source={ICONS.white_lock}
              style={styles.lockIcon}
              resizeMode="contain"
            />
            <CustomButton
              onPress={() => handleUnlockTip(item.id)}
              disabled={contextResults.totalScore < 1}
              extraStyle={styles.unlockButton}
            >
              <CustomText extraStyle={styles.unlockText}>
                Unlocked for 1 points
              </CustomText>
            </CustomButton>
          </View>
        ) : (
          <View style={styles.unlockedContent}>
            <Image
              source={ICONS.smile}
              style={styles.smileIcon}
              resizeMode="contain"
            />
            <CustomText extraStyle={styles.tipText}>{item.text}</CustomText>
          </View>
        )}
      </CustomContainer>
    );
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.headerRow}>
        <CustomHeader />
        <View style={styles.balanceBadge}>
          <CustomText extraStyle={styles.balanceText}>
            {contextResults.totalScore}
          </CustomText>
        </View>
      </View>

      <CustomContainer variant="onboarding" extraStyle={styles.titleContainer}>
        <CustomText extraStyle={styles.title}>
          Travel Tips by Biggy Rock
        </CustomText>
        <CustomText extraStyle={styles.subtitle}>
          Short thoughts from the road.{'\n'}
          No rules, no maps — just the travel vibe.
        </CustomText>
      </CustomContainer>

      <FlatList
        data={contextTips}
        renderItem={renderTipCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </CustomScreenWrapper>
  );
};

export default TipsScreen;
