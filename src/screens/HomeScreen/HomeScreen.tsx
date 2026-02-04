import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomScreenWrapper, HomeMenu } from 'src/components';
import { HOME_SCREEN_ICON } from 'src/constants';

const HomeScreen = () => {
  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={HOME_SCREEN_ICON}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
      <HomeMenu />
    </CustomScreenWrapper>
  );
};

export default HomeScreen;
