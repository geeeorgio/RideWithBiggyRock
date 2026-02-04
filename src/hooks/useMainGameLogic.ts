import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import {
  GAME_DURATION,
  ITEM_DISPLAY_TIME,
  MAIN_BG_IMAGE,
  SPAWN_INTERVAL_MAX,
  SPAWN_INTERVAL_MIN,
  TAP_GAME_BG,
} from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type {
  FloatingScore,
  GamePhase,
  MainStackNavigationProp,
  SpawnedItem,
} from 'src/types';
import { hp, wp } from 'src/utils';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const useMainGameLogic = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const { contextResults, updateContextResults, setContextBackground } =
    useGameContext();

  const [gamePhase, setGamePhase] = useState<GamePhase>('rules');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionBiggy, setSessionBiggy] = useState(0);
  const [sessionFish, setSessionFish] = useState(0);
  const [spawnedItems, setSpawnedItems] = useState<SpawnedItem[]>([]);
  const [floatingScores, setFloatingScores] = useState<FloatingScore[]>([]);
  const [showExitModal, setShowExitModal] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spawnRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const itemIdCounter = useRef(0);

  useEffect(() => {
    if (gamePhase === 'playing') {
      setContextBackground(TAP_GAME_BG);
    } else {
      setContextBackground(MAIN_BG_IMAGE);
    }

    return () => {
      setContextBackground(MAIN_BG_IMAGE);
    };
  }, [gamePhase, setContextBackground]);

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
    const fishType = Math.random() > 0.5 ? 'blue' : 'violet';
    const position = getRandomPosition();
    const opacity = new Animated.Value(0);

    const newItem: SpawnedItem = {
      id: `item_${itemIdCounter.current++}`,
      type: isBiggy ? 'biggy' : 'fish',
      fishVariant: isBiggy ? undefined : fishType,
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

  const handleBackPress = useCallback(() => {
    if (gamePhase === 'playing') {
      setShowExitModal(true);
    } else {
      navigation.goBack();
    }
  }, [gamePhase, navigation]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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

  const closeExitModal = useCallback(() => {
    setShowExitModal(false);
  }, []);

  const confirmExit = useCallback(() => {
    clearAllTimers();
    setShowExitModal(false);
    setGamePhase('rules');
    setContextBackground(MAIN_BG_IMAGE);
    navigation.goBack();
  }, [clearAllTimers, navigation, setContextBackground]);

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

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  return {
    gamePhase,
    timeLeft,
    sessionScore,
    sessionBiggy,
    sessionFish,
    spawnedItems,
    floatingScores,
    showExitModal,
    handleItemTap,
    handleBackPress,
    startGame,
    confirmExit,
    closeExitModal,
    goBack,
    formatTime,
  };
};
