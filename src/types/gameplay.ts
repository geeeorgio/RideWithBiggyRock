import type { ImageSourcePropType } from 'react-native';

export type ShopItemId =
  | 'old_scooter'
  | 'worn_out_sedan'
  | 'road_trip_wagon'
  | 'classic_sports_ride'
  | 'dream_ride';

export type ShopItem = {
  id: ShopItemId;
  name: string;
  image: ImageSourcePropType;
  description: string;
  price: number;
  locked: boolean;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
};

export type Tip = {
  id: string;
  text: string;
  locked: boolean;
};

export type ResultHistory = {
  gamesPlayed: number;
  vehicleTapped: number;
  fishTapped: number;
  totalScore: number;
  topScore: {
    topScore1: number;
    topScore2: number;
    topScore3: number;
  };
};

export type GameContextType = {
  contextBackground: ImageSourcePropType;
  setContextBackground: (background: ImageSourcePropType) => void;
  //
  isContextOnboardingCompleted: boolean;
  setIsContextOnboardingCompleted: (value: boolean) => void;
  //
  contextTips: Tip[];
  unlockContextTip: (id: string) => boolean;
  //
  contextQuiz: QuizQuestion[];
  //
  contextShop: ShopItem[];
  buyContextShopItem: (id: ShopItemId) => boolean;
  //
  contextResults: ResultHistory;
  updateContextResults: (results: ResultHistory) => void;
  addToTotalScore: (amount: number) => void;
};
