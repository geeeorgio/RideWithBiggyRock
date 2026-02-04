import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { useGameContext } from 'src/hooks/useGameContext';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isContextOnboardingCompleted } = useGameContext();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      {isContextOnboardingCompleted ? (
        <RootStack.Screen name="MainStack" component={MainNavigator} />
      ) : (
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
