import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
  variant?: 'default' | 'onboarding' | 'lightPurple' | 'red';
}

const CustomContainer = ({
  children,
  extraStyle,
  variant = 'default',
}: CustomContainerProps) => {
  return (
    <View style={[styles.default, styles[variant], extraStyle]}>
      {children}
    </View>
  );
};

export default CustomContainer;
