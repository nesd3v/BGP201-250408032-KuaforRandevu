import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, FONT_SIZES, RADIUS, SHADOW, SPACING } from '../constants/theme';
import { DayOption } from '../utils/dateUtils';

interface DateCardProps {
  day: DayOption;
  selected: boolean;
  onPress: () => void;
}

// Gün seçimi için dikey kart: üstte gün adı, ortada gün numarası, altta ay
export default function DateCard({ day, selected, onPress }: DateCardProps) {
  return (
    <Pressable onPress={onPress} style={[styles.card, selected && styles.selected]}>
      <Text style={[styles.dayName, selected && styles.selectedText]}>{day.label}</Text>
      <Text style={[styles.dayNumber, selected && styles.selectedText]}>{day.dayNumber}</Text>
      <Text style={[styles.month, selected && styles.selectedText]}>{day.month}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 64,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.card,
    marginRight: SPACING.sm,
    ...SHADOW.card,
  },
  selected: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  dayName: { fontSize: FONT_SIZES.small, color: COLORS.textLight },
  dayNumber: {
    fontSize: FONT_SIZES.title,
    fontWeight: '700',
    color: COLORS.text,
    marginVertical: SPACING.xs,
  },
  month: { fontSize: FONT_SIZES.small, color: COLORS.textLight },
  selectedText: { color: COLORS.white },
});
