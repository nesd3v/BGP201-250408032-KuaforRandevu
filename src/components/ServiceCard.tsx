import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZES, RADIUS, SPACING } from '../constants/theme';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onPress: () => void;
}

export default function ServiceCard({ service, onPress }: ServiceCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.info}>
        <Text style={styles.name}>{service.name}</Text>
        <Text style={styles.meta}>
          {service.category} · {service.durationMin} dk
        </Text>
      </View>
      <Text style={styles.price}>{service.price} ₺</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.sm,
  },
  info: { flex: 1 },
  name: { fontSize: FONT_SIZES.subtitle, fontWeight: '600', color: COLORS.text },
  meta: { fontSize: FONT_SIZES.small, color: COLORS.textLight, marginTop: SPACING.xs },
  price: { fontSize: FONT_SIZES.subtitle, fontWeight: '700', color: COLORS.primary },
});
