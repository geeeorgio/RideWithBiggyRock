import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  ShopItemCard,
  ShopItemDetails,
} from 'src/components';
import { useGameContext } from 'src/hooks/useGameContext';
import type { ShopItem } from 'src/types';

const ShopScreen = () => {
  const { contextShop, contextResults, buyContextShopItem } = useGameContext();
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);

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
