import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  HomeScreen: undefined;
  MainGameScreen: undefined;
  QuizScreen: undefined;
  ShopScreen: undefined;
  StoryScreen: undefined;
  TipsScreen: undefined;
  ResultsScreen: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;
