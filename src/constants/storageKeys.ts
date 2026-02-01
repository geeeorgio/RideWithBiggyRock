export const STORAGE_KEYS = [
  'is_onboarding_completed',
  'tips_completed',
  'results_history',
  'current_car',
  'shop_history',
] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
