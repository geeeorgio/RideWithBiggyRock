import type { ReactNode } from 'react';
import type { Insets, StyleProp, ViewStyle } from 'react-native';
import { Pressable, View } from 'react-native';

import { styles } from './styles';

interface CustomButtonProps {
  children: ReactNode;
  variant?: 'default' | 'red' | 'black';
  onPress: () => void;
  extraStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  distance?: Insets;
}

const CustomButton = ({
  children,
  variant = 'default',
  onPress,
  extraStyle,
  disabled = false,
  distance = { top: 10, bottom: 10, left: 10, right: 10 },
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.default,
        styles[variant],
        extraStyle,
        { opacity: pressed ? 0.7 : 1 },
      ]}
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      hitSlop={distance}
    >
      <View style={styles.overlay} />
      {children}
    </Pressable>
  );
};

export default CustomButton;
