import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  HomeScreen,
  MainGameScreen,
  QuizScreen,
  ResultsScreen,
  ShopScreen,
  StoryScreen,
  TipsScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="MainGameScreen" component={MainGameScreen} />
      <MainStack.Screen name="QuizScreen" component={QuizScreen} />
      <MainStack.Screen name="ShopScreen" component={ShopScreen} />
      <MainStack.Screen name="StoryScreen" component={StoryScreen} />
      <MainStack.Screen name="TipsScreen" component={TipsScreen} />
      <MainStack.Screen name="ResultsScreen" component={ResultsScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
