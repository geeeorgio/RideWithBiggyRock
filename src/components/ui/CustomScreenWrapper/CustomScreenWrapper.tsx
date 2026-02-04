import type { ReactNode } from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';

import { styles } from './styles';

interface CustomScreenWrapperProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
}

const CustomScreenWrapper = ({
  children,
  extraStyle,
}: CustomScreenWrapperProps) => {
  return <View style={[styles.container, extraStyle]}>{children}</View>;
};

export default CustomScreenWrapper;
