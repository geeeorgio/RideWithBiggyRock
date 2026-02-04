import React from 'react';
import { Image, ImageBackground, Pressable, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { ICONS } from 'src/constants';
import type { ShopItem } from 'src/types';

interface Props {
  item: ShopItem;
  index: number;
  totalScore: number;
  onBuy: (id: any) => boolean;
  onLook: () => void;
}

const ShopItemCard = ({ item, index, totalScore, onBuy, onLook }: Props) => {
  const isEven = index % 2 === 0;
  const canAfford = totalScore >= item.price;

  return (
    <View
      style={[styles.carWrapper, isEven ? styles.alignLeft : styles.alignRight]}
    >
      <Pressable onPress={() => !item.locked && onLook()}>
        <Image
          source={item.image}
          style={[styles.carImage, item.locked && { opacity: 0.7 }]}
          resizeMode="contain"
        />
      </Pressable>

      <View style={styles.lockOverlay}>
        {item.locked ? (
          <>
            <ImageBackground
              source={ICONS.yellow_lock}
              style={styles.lockIcon}
              resizeMode="contain"
            >
              <CustomText extraStyle={styles.priceText}>
                {item.price}
              </CustomText>
            </ImageBackground>

            {canAfford && (
              <CustomButton
                onPress={() => onBuy(item.id)}
                extraStyle={styles.unlockButton}
              >
                <CustomText extraStyle={styles.unlockText}>Unlock</CustomText>
              </CustomButton>
            )}
          </>
        ) : (
          <CustomButton onPress={onLook} extraStyle={styles.unlockButton}>
            <CustomText extraStyle={styles.unlockText}>Look!</CustomText>
          </CustomButton>
        )}
      </View>
    </View>
  );
};

export default ShopItemCard;
