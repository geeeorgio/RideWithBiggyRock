import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  ShopItemCard,
  ShopItemDetails,
} from 'src/components';
import { CAR_SCREEN_BG, MAIN_BG_IMAGE } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type { ShopItem } from 'src/types';

const ShopScreen = () => {
  const {
    contextShop,
    contextResults,
    buyContextShopItem,
    setContextBackground,
  } = useGameContext();
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);

  useEffect(() => {
    setContextBackground(CAR_SCREEN_BG);

    return () => {
      setContextBackground(MAIN_BG_IMAGE);
    };
  }, [setContextBackground]);

  if (selectedItem) {
    return (
      <CustomScreenWrapper extraStyle={styles.container}>
        <ShopItemDetails
          item={selectedItem}
          totalScore={contextResults.totalScore}
          onBack={() => setSelectedItem(null)}
        />
      </CustomScreenWrapper>
    );
  }

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader title={`${contextResults.totalScore}`} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerTextContainer}>
          <CustomText extraStyle={styles.headerTitle}>My Car</CustomText>
          <CustomText extraStyle={styles.headerDesc}>
            Earn points, unlock new rides, and upgrade your journey.
          </CustomText>
        </View>

        <View style={styles.carsContainer}>
          {[...contextShop].reverse().map((item, index) => (
            <ShopItemCard
              key={item.id}
              item={item}
              index={index}
              totalScore={contextResults.totalScore}
              onBuy={buyContextShopItem}
              onLook={() => setSelectedItem(item)}
            />
          ))}
        </View>
      </ScrollView>
    </CustomScreenWrapper>
  );
};

export default ShopScreen;
