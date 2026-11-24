import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { COLORS, FONT_SIZES, RADIUS, SPACING } from '../constants/theme';

// TextInput referansının tipi (bir sonraki kutuya odaklanmak için)
export type TextInputRef = React.ComponentRef<typeof TextInput>;

interface FormInputProps extends TextInputProps {
  label: string;
  error?: string | null; // doluysa kırmızı uyarı gösterilir
  inputRef?: React.RefObject<TextInputRef | null>;
}

export default function FormInput({ label, error, inputRef, style, ...rest }: FormInputProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={inputRef}
        style={[styles.input, error ? styles.inputError : null, style]}
        placeholderTextColor={COLORS.textLight}
        {...rest}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: SPACING.md },
  label: {
    fontSize: FONT_SIZES.small,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.sm,
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.md,
    fontSize: FONT_SIZES.body,
    color: COLORS.text,
  },
  inputError: { borderColor: COLORS.danger },
  error: { fontSize: FONT_SIZES.small, color: COLORS.danger, marginTop: SPACING.xs },
});
