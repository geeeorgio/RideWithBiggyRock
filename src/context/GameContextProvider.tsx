import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ImageSourcePropType } from 'react-native';

import {
  MAIN_BG_IMAGE,
  QUIZ_QUESTIONS,
  TIPS_LIST,
  SHOP_ITEMS,
} from 'src/constants';
import { GameContext } from 'src/hooks/useGameContext';
import type {
  QuizQuestion,
  ResultHistory,
  ShopItem,
  ShopItemId,
  Tip,
} from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [contextBackground, setContextBackground] =
    useState<ImageSourcePropType>(MAIN_BG_IMAGE);

  const [contextQuiz, _] = useState<QuizQuestion[]>(QUIZ_QUESTIONS);
  const [contextTips, setContextTips] = useState<Tip[]>(TIPS_LIST);
  const [contextShop, setContextShop] = useState<ShopItem[]>(SHOP_ITEMS);

  const [onboardingDone, setOnboardingDone] = useState(false);

  const [contextResults, setContextResults] = useState<ResultHistory>({
    gamesPlayed: 0,
    vehicleTapped: 0,
    fishTapped: 0,
    totalScore: 0,
    topScore: {
      topScore1: 0,
      topScore2: 0,
      topScore3: 0,
    },
  });

  useEffect(() => {
    const init = async () => {
      try {
        const [savedOnboarding, savedTips, savedShop, savedResults] =
          await Promise.all([
            getItemFromStorage<boolean>('is_onboarding_completed'),
            getItemFromStorage<Tip[]>('tips_completed'),
            getItemFromStorage<ShopItem[]>('shop_history'),
            getItemFromStorage<ResultHistory>('results_history'),
          ]);

        if (savedOnboarding !== null) setOnboardingDone(savedOnboarding);

        if (savedTips !== null) {
          const mergedTips = TIPS_LIST.map((defaultTip) => {
            const savedTip = savedTips.find((s) => s.id === defaultTip.id);
            return savedTip
              ? { ...defaultTip, locked: savedTip.locked }
              : defaultTip;
          });
          setContextTips(mergedTips);
        }

        if (savedShop !== null) {
          const mergedShop = SHOP_ITEMS.map((defaultItem) => {
            const savedItem = savedShop.find((s) => s.id === defaultItem.id);
            return savedItem
              ? { ...defaultItem, locked: savedItem.locked }
              : defaultItem;
          });
          setContextShop(mergedShop);
        }

        if (savedResults !== null) {
          setContextResults((prev) => ({
            ...prev,
            ...savedResults,
          }));
        }
      } catch (e) {
        console.error('Context init error:', e);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (onboardingDone)
      setItemInStorage('is_onboarding_completed', onboardingDone);
  }, [onboardingDone]);

  useEffect(() => {
    setItemInStorage('tips_completed', contextTips);
  }, [contextTips]);

  useEffect(() => {
    setItemInStorage('shop_history', contextShop);
  }, [contextShop]);

  useEffect(() => {
    setItemInStorage('results_history', contextResults);
  }, [contextResults]);

  const addToTotalScore = useCallback((amount: number) => {
    setContextResults((prev) => ({
      ...prev,
      totalScore: prev.totalScore + amount,
    }));
  }, []);

  const unlockContextTip = useCallback(
    (id: string): boolean => {
      const tip = contextTips.find((t) => t.id === id);

      if (!tip || !tip.locked) return false;
      if (contextResults.totalScore < 1) return false;

      setContextResults((prev) => ({
        ...prev,
        totalScore: prev.totalScore - 1,
      }));

      setContextTips((prev) =>
        prev.map((t) => (t.id === id ? { ...t, locked: false } : t)),
      );

      return true;
    },
    [contextTips, contextResults.totalScore],
  );

  const buyContextShopItem = useCallback(
    (id: ShopItemId): boolean => {
      const item = contextShop.find((i) => i.id === id);

      if (!item || !item.locked) return false;
      if (contextResults.totalScore < item.price) return false;

      setContextResults((prev) => ({
        ...prev,
        totalScore: prev.totalScore - item.price,
      }));

      setContextShop((prev) =>
        prev.map((shopItem) =>
          shopItem.id === id ? { ...shopItem, locked: false } : shopItem,
        ),
      );

      return true;
    },
    [contextShop, contextResults.totalScore],
  );

  const updateContextResults = useCallback((results: ResultHistory) => {
    setContextResults((prev) => ({
      ...prev,
      ...results,
    }));
  }, []);

  const contextValue = useMemo(
    () => ({
      contextBackground,
      setContextBackground,
      isContextOnboardingCompleted: onboardingDone,
      setIsContextOnboardingCompleted: setOnboardingDone,
      contextTips,
      unlockContextTip,
      contextQuiz,
      contextShop,
      buyContextShopItem,
      contextResults,
      updateContextResults,
      addToTotalScore,
    }),
    [
      contextBackground,
      onboardingDone,
      contextTips,
      contextQuiz,
      unlockContextTip,
      contextShop,
      buyContextShopItem,
      contextResults,
      updateContextResults,
      addToTotalScore,
    ],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
