import { memo } from 'react';
import { Animated, Image, Pressable, View } from 'react-native';

import { styles } from '../styles';

import { CustomText } from 'src/components';
import { ITEMS, SHOP_IMAGES } from 'src/constants';
import type { FloatingScore, SpawnedItem } from 'src/types';

interface GameAreaProps {
  timeLeft: number;
  score: number;
  items: SpawnedItem[];
  floatingScores: FloatingScore[];
  onTap: (item: SpawnedItem) => void;
  formatTime: (seconds: number) => string;
}

interface SpawnedItemProps {
  item: SpawnedItem;
  onTap: (item: SpawnedItem) => void;
}

const SpawnedItemComponent = memo(({ item, onTap }: SpawnedItemProps) => (
  <Animated.View
    style={[
      styles.spawnedItem,
      {
        left: item.x,
        top: item.y,
        opacity: item.opacity,
      },
    ]}
  >
    <Pressable onPress={() => onTap(item)}>
      <Image
        source={
          item.type === 'biggy'
            ? SHOP_IMAGES.main_car
            : item.fishVariant === 'blue'
              ? ITEMS.blue_fish
              : ITEMS.violet_fish
        }
        style={item.type === 'biggy' ? styles.biggyImage : styles.fishImage}
        resizeMode="contain"
      />
    </Pressable>
  </Animated.View>
));

interface FloatingScoreProps {
  floating: FloatingScore;
}

const FloatingScoreComponent = memo(({ floating }: FloatingScoreProps) => (
  <Animated.View
    style={[
      styles.floatingScore,
      {
        left: floating.x,
        top: floating.y,
        opacity: floating.opacity,
        transform: [{ translateY: floating.translateY }],
      },
    ]}
  >
    <CustomText
      extraStyle={[
        styles.floatingScoreText,
        floating.value > 0 ? styles.positiveScore : styles.negativeScore,
      ]}
    >
      {floating.value > 0 ? `+${floating.value}` : floating.value}
    </CustomText>
  </Animated.View>
));

const GameArea = ({
  timeLeft,
  score,
  items,
  floatingScores,
  onTap,
  formatTime,
}: GameAreaProps) => {
  return (
    <>
      <View style={styles.timerContainer}>
        <View style={styles.timerBadge}>
          <CustomText extraStyle={styles.timerText}>
            {formatTime(timeLeft)}
          </CustomText>
        </View>
        <View style={styles.scoreBadge}>
          <CustomText extraStyle={styles.scoreText}>{score}</CustomText>
        </View>
      </View>

      {items.map((item) => (
        <SpawnedItemComponent key={item.id} item={item} onTap={onTap} />
      ))}

      {floatingScores.map((floating) => (
        <FloatingScoreComponent key={floating.id} floating={floating} />
      ))}
    </>
  );
};

export default memo(GameArea);
