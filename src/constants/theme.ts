import { ViewStyle } from 'react-native';

// Tüm renkler, boşluklar ve yazı boyutları burada tutulur.
// Ekranlarda renk/boyut tek tek yazılmaz, bu dosyadan alınır.

export const COLORS = {
  primary: '#2F4A43', // koyu adaçayı yeşili (ana renk)
  primaryLight: '#E7EEEA', // ana rengin çok açık tonu
  accent: '#C8A15B', // altın vurgu
  background: '#F7F5F0',
  card: '#FFFFFF',
  text: '#1E2321',
  textLight: '#6B7370',
  border: '#E6E2D9',
  success: '#2E7D32',
  successLight: '#E3F1E4',
  danger: '#C62828',
  dangerLight: '#FBE4E4',
  white: '#FFFFFF',
  whiteSoft: 'rgba(255,255,255,0.75)',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const FONT_SIZES = {
  small: 13,
  body: 16,
  subtitle: 18,
  title: 24,
  hero: 30,
} as const;

export const RADIUS = {
  sm: 8,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

// Kartlara hafif gölge
export const SHADOW: { card: ViewStyle } = {
  card: {
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
};
