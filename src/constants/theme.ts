// Tüm renkler, boşluklar ve yazı boyutları burada tutulur.
// Ekranlarda renk/boyut tek tek yazılmaz, bu dosyadan alınır.

export const COLORS = {
  primary: '#C2185B', // ana renk (koyu pembe)
  primaryLight: '#F8BBD0',
  background: '#FFF7FA',
  card: '#FFFFFF',
  text: '#2D2D2D',
  textLight: '#7A7A7A',
  border: '#EBD5DD',
  success: '#2E7D32',
  danger: '#C62828',
  white: '#FFFFFF',
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
  md: 14,
  pill: 999,
} as const;
