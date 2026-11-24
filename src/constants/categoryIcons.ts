import type { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ServiceCategory } from '../types';

export type IconName = ComponentProps<typeof Ionicons>['name'];

// Her hizmet kategorisi için bir ikon
export const CATEGORY_ICONS: Record<ServiceCategory, IconName> = {
  Saç: 'cut-outline',
  Bakım: 'sparkles-outline',
  Makyaj: 'brush-outline',
  Tırnak: 'hand-left-outline',
};
