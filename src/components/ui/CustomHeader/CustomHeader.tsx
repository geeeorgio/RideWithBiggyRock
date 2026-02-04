import { useNavigation } from '@react-navigation/native';
import type { ImageSourcePropType, StyleProp, TextStyle } from 'react-native';
import { Image, Pressable, View } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { ICONS } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';

interface CustomHeaderProps {
  title?: string;
  onBackPress?: () => void;
  extraTextStyle?: StyleProp<TextStyle>;
  iconSource?: ImageSourcePropType;
}

const CustomHeader = ({
  title,
  onBackPress,
  iconSource,
  extraTextStyle,
}: CustomHeaderProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleNavigate = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleNavigate} style={styles.leftButton}>
        <Image
          source={ICONS.back}
          resizeMode="contain"
          style={styles.backIcon}
        />
      </Pressable>

      {(title || iconSource) && (
        <View style={styles.rightContainer}>
          {title && (
            <CustomText extraStyle={[styles.title, extraTextStyle]}>
              {title}
            </CustomText>
          )}
          {iconSource && (
            <Image
              source={iconSource}
              resizeMode="contain"
              style={styles.icon}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default CustomHeader;
