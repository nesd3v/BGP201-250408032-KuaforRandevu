import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, FONT_SIZES, RADIUS, SPACING } from '../constants/theme';

type Variant = 'primary' | 'outline' | 'danger' | 'light';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
}

const TEXT_COLORS: Record<Variant, string> = {
  primary: COLORS.white,
  danger: COLORS.white,
  outline: COLORS.primary,
  light: COLORS.primary,
};

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}: CustomButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.text, { color: TEXT_COLORS[variant] }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADIUS.pill,
    alignItems: 'center',
  },
  primary: { backgroundColor: COLORS.primary },
  danger: { backgroundColor: COLORS.danger },
  light: { backgroundColor: COLORS.white },
  outline: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: COLORS.primary },
  pressed: { opacity: 0.85 },
  disabled: { opacity: 0.4 },
  text: { fontSize: FONT_SIZES.body, fontWeight: '600' },
});
