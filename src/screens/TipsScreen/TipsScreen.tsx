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
    if (contextResults.totalScore >= 1) {
      unlockContextTip(id);
    }
  };

  const renderTipCard = ({ item }: { item: Tip }) => {
    const isLocked = item.locked;
    const canUnlock = contextResults.totalScore >= 1;

    return (
      <View style={styles.tipCard}>
        {isLocked ? (
          <View style={styles.lockedContent}>
            <Image
              source={ICONS.white_lock}
              style={styles.lockIcon}
              resizeMode="contain"
            />
            <CustomButton
              onPress={() => handleUnlockTip(item.id)}
              disabled={!canUnlock}
              extraStyle={[
                styles.unlockButton,
                !canUnlock && styles.unlockButtonDisabled,
              ]}
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
      </View>
    );
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.headerRow}>
        <CustomHeader title={`${contextResults.totalScore}`} />
      </View>

      <CustomContainer variant="lightPurple" extraStyle={styles.titleContainer}>
        <CustomText extraStyle={styles.title}>
          Travel Tips by Biggy Rock
        </CustomText>
        <CustomText extraStyle={styles.subtitle}>
          Short thoughts from the road.{'\n'}
          No rules, no maps — just the travel vibe.
        </CustomText>
      </CustomContainer>

      <View style={styles.listContainer}>
        <FlatList
          data={contextTips}
          renderItem={renderTipCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View style={styles.listFooter} />}
        />
      </View>
    </CustomScreenWrapper>
  );
};

export default TipsScreen;
