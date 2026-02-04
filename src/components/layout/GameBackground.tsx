import type { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';

interface GameBackgroundProps {
  children: ReactNode;
}

const GameBackground = ({ children }: GameBackgroundProps) => {
  const { contextBackground } = useGameContext();

  return (
    <ImageBackground
      source={contextBackground}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.content}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default GameBackground;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.black_overlay,
  },
});
