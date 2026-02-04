import { SHOP_IMAGES } from './images';

import type { ShopItem } from 'src/types';

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'old_scooter',
    name: 'Old Scooter',
    image: SHOP_IMAGES.old_scooter,
    description:
      'This scooter has seen more cracks than smooth roads. It’s slow, loud, and far from perfect — but every journey has to start somewhere.',
    price: 20,
    locked: true,
  },
  {
    id: 'worn_out_sedan',
    name: ' Worn-Out Sedan',
    image: SHOP_IMAGES.worn_out_sedan,
    description:
      'Not new, not stylish, but stubborn enough to keep going. When the road feels endless, this car still moves forward.',
    price: 40,
    locked: true,
  },
  {
    id: 'road_trip_wagon',
    name: 'Road Trip Wagon',
    image: SHOP_IMAGES.road_trip_wagon,
    description:
      'Built for long highways and late-night drives. This is where real stories begin — somewhere between stops.',
    price: 60,
    locked: true,
  },
  {
    id: 'classic_sports_ride',
    name: ' Classic Sports Ride',
    image: SHOP_IMAGES.classic_sports_ride,
    description:
      'Fast, bright, and impossible to miss. Biggy Rock finally drives the way he feels inside.',
    price: 80,
    locked: true,
  },
  {
    id: 'dream_ride',
    name: 'Dream Ride',
    image: SHOP_IMAGES.dream_ride,
    description:
      'This isn’t just a car — it’s a state of mind. When you’re behind the wheel, the road never has to end.',
    price: 100,
    locked: true,
  },
];
