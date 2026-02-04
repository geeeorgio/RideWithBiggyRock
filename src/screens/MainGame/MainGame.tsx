import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, Pressable, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import {
  GAME_DURATION,
  ICONS,
  ITEM_DISPLAY_TIME,
  ITEMS,
  SHOP_IMAGES,
  SPAWN_INTERVAL_MAX,
  SPAWN_INTERVAL_MIN,
} from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type { FloatingScore, GamePhase, SpawnedItem } from 'src/types';
import { hp, wp } from 'src/utils';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const MainGame = () => {
  const { contextResults, updateContextResults } = useGameContext();

  const [gamePhase, setGamePhase] = useState<GamePhase>('rules');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionBiggy, setSessionBiggy] = useState(0);
  const [sessionFish, setSessionFish] = useState(0);
  const [spawnedItems, setSpawnedItems] = useState<SpawnedItem[]>([]);
  const [floatingScores, setFloatingScores] = useState<FloatingScore[]>([]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spawnRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const itemIdCounter = useRef(0);

  const clearAllTimers = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (spawnRef.current) {
      clearTimeout(spawnRef.current);
      spawnRef.current = null;
    }
  }, []);

  const getRandomPosition = useCallback(() => {
    const itemSize = wp(80);
    const padding = wp(20);
    const topOffset = hp(120);
    const bottomOffset = hp(350);

    const x = padding + Math.random() * (SCREEN_WIDTH - itemSize - padding * 2);
    const y =
      topOffset +
      Math.random() * (SCREEN_HEIGHT - topOffset - bottomOffset - itemSize);

    return { x, y };
  }, []);

  const spawnItem = useCallback(() => {
    if (gamePhase !== 'playing') return;

    const isBiggy = Math.random() > 0.35;
    const position = getRandomPosition();
    const opacity = new Animated.Value(0);

    const newItem: SpawnedItem = {
      id: `item_${itemIdCounter.current++}`,
      type: isBiggy ? 'biggy' : 'fish',
      x: position.x,
      y: position.y,
      opacity,
    };

    setSpawnedItems((prev) => [...prev, newItem]);

    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setSpawnedItems((prev) =>
          prev.filter((item) => item.id !== newItem.id),
        );
      });
    }, ITEM_DISPLAY_TIME);

    const nextSpawn =
      SPAWN_INTERVAL_MIN +
      Math.random() * (SPAWN_INTERVAL_MAX - SPAWN_INTERVAL_MIN);
    spawnRef.current = setTimeout(spawnItem, nextSpawn);
  }, [gamePhase, getRandomPosition]);

  const showFloatingScore = useCallback(
    (value: number, x: number, y: number) => {
      const opacity = new Animated.Value(1);
      const translateY = new Animated.Value(0);

      const floatingId = `float_${Date.now()}`;

      const newFloating: FloatingScore = {
        id: floatingId,
        value,
        x,
        y,
        opacity,
        translateY,
      };

      setFloatingScores((prev) => [...prev, newFloating]);

      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -50,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setFloatingScores((prev) => prev.filter((f) => f.id !== floatingId));
      });
    },
    [],
  );

  const handleItemTap = useCallback(
    (item: SpawnedItem) => {
      const scoreChange = item.type === 'biggy' ? 1 : -1;

      setSessionScore((prev) => prev + scoreChange);

      if (item.type === 'biggy') {
        setSessionBiggy((prev) => prev + 1);
      } else {
        setSessionFish((prev) => prev + 1);
      }

      showFloatingScore(scoreChange, item.x + wp(40), item.y);

      setSpawnedItems((prev) => prev.filter((i) => i.id !== item.id));
    },
    [showFloatingScore],
  );

  const startGame = useCallback(() => {
    setGamePhase('playing');
    setTimeLeft(GAME_DURATION);
    setSessionScore(0);
    setSessionBiggy(0);
    setSessionFish(0);
    setSpawnedItems([]);
    setFloatingScores([]);
    itemIdCounter.current = 0;
  }, []);

  const endGame = useCallback(() => {
    clearAllTimers();
    setGamePhase('results');
    setSpawnedItems([]);

    const finalScore = Math.max(0, sessionScore);

    const currentTopScores = [
      contextResults.topScore.topScore1,
      contextResults.topScore.topScore2,
      contextResults.topScore.topScore3,
    ];

    const newTopScores = [...currentTopScores, finalScore]
      .sort((a, b) => b - a)
      .slice(0, 3);

    updateContextResults({
      ...contextResults,
      gamesPlayed: contextResults.gamesPlayed + 1,
      vehicleTapped: contextResults.vehicleTapped + sessionBiggy,
      fishTapped: contextResults.fishTapped + sessionFish,
      totalScore: contextResults.totalScore + finalScore,
      topScore: {
        topScore1: newTopScores[0],
        topScore2: newTopScores[1],
        topScore3: newTopScores[2],
      },
    });
  }, [
    clearAllTimers,
    sessionScore,
    sessionBiggy,
    sessionFish,
    contextResults,
    updateContextResults,
  ]);

  useEffect(() => {
    if (gamePhase === 'playing') {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      const initialSpawnDelay =
        SPAWN_INTERVAL_MIN +
        Math.random() * (SPAWN_INTERVAL_MAX - SPAWN_INTERVAL_MIN);
      spawnRef.current = setTimeout(spawnItem, initialSpawnDelay);
    }

    return () => {
      clearAllTimers();
    };
  }, [gamePhase, spawnItem, clearAllTimers]);

  useEffect(() => {
    if (timeLeft === 0 && gamePhase === 'playing') {
      endGame();
    }
  }, [timeLeft, gamePhase, endGame]);

  useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderRulesOverlay = () => (
    <View style={styles.overlay}>
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

        <CustomButton onPress={startGame} extraStyle={styles.playButton}>
          <CustomText extraStyle={styles.playButtonText}>Play</CustomText>
          <Image
            source={ICONS.play}
            style={styles.playIcon}
            resizeMode="contain"
          />
        </CustomButton>
      </View>
    </View>
  );

  const renderResultsOverlay = () => (
    <View style={styles.overlay}>
      <CustomContainer
        variant="onboarding"
        extraStyle={styles.resultsContainer}
      >
        <View style={styles.resultsRow}>
          <View style={styles.resultsValueBadge}>
            <CustomText extraStyle={styles.resultsValue}>
              {sessionBiggy}
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
              {sessionFish}
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
              {Math.max(0, sessionScore)}
            </CustomText>
          </View>
        </View>
        <CustomButton onPress={startGame} extraStyle={styles.startAgainButton}>
          <CustomText extraStyle={styles.startAgainText}>
            Start Again
          </CustomText>
        </CustomButton>
      </CustomContainer>
    </View>
  );

  const renderGameArea = () => (
    <>
      <View style={styles.timerContainer}>
        <View style={styles.timerBadge}>
          <CustomText extraStyle={styles.timerText}>
            {formatTime(timeLeft)}
          </CustomText>
        </View>
        <View style={styles.scoreBadge}>
          <CustomText extraStyle={styles.scoreText}>{sessionScore}</CustomText>
        </View>
      </View>

      {spawnedItems.map((item) => (
        <Animated.View
          key={item.id}
          style={[
            styles.spawnedItem,
            {
              left: item.x,
              top: item.y,
              opacity: item.opacity,
            },
          ]}
        >
          <Pressable onPress={() => handleItemTap(item)}>
            <Image
              source={
                item.type === 'biggy'
                  ? SHOP_IMAGES.main_car
                  : item.type === 'fish'
                    ? ITEMS.blue_fish
                    : ITEMS.violet_fish
              }
              style={
                item.type === 'biggy' ? styles.biggyImage : styles.fishImage
              }
              resizeMode="contain"
            />
          </Pressable>
        </Animated.View>
      ))}

      {floatingScores.map((floating) => (
        <Animated.View
          key={floating.id}
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
      ))}

      {/* <View style={styles.carContainer}>
        <Image
          source={SHOP_IMAGES.main_car}
          style={styles.mainCarImage}
          resizeMode="contain"
        />
      </View> */}
    </>
  );

  return (
    <CustomScreenWrapper>
      <CustomHeader title="Rules" iconSource={ICONS.rules} />

      {gamePhase === 'playing' && renderGameArea()}
      {gamePhase === 'rules' && renderRulesOverlay()}
      {gamePhase === 'results' && renderResultsOverlay()}
    </CustomScreenWrapper>
  );
};

export default MainGame;
