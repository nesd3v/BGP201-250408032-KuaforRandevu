import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, FONT_SIZES, RADIUS, SPACING } from '../constants/theme';

interface ChipProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

// Gün ve saat seçimi için küçük seçilebilir etiket
export default function Chip({ label, selected, onPress }: ChipProps) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, selected && styles.selected]}>
      <Text style={[styles.text, selected && styles.selectedText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.card,
    marginRight: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  selected: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  text: { color: COLORS.text, fontSize: FONT_SIZES.body },
  selectedText: { color: COLORS.white, fontWeight: '600' },
});
