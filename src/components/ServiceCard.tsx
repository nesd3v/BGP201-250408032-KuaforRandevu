import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CATEGORY_ICONS } from '../constants/categoryIcons';
import { COLORS, FONT_SIZES, RADIUS, SHADOW, SPACING } from '../constants/theme';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onPress: () => void;
}

export default function ServiceCard({ service, onPress }: ServiceCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.iconWrap}>
        <Ionicons name={CATEGORY_ICONS[service.category]} size={22} color={COLORS.primary} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{service.name}</Text>
        <Text style={styles.meta}>
          {service.category} · {service.durationMin} dk
        </Text>
      </View>
      <Text style={styles.price}>{service.price} ₺</Text>
      <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
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
    marginBottom: SPACING.sm,
    ...SHADOW.card,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  info: { flex: 1 },
  name: { fontSize: FONT_SIZES.body, fontWeight: '600', color: COLORS.text },
  meta: { fontSize: FONT_SIZES.small, color: COLORS.textLight, marginTop: SPACING.xs },
  price: {
    fontSize: FONT_SIZES.body,
    fontWeight: '700',
    color: COLORS.primary,
    marginRight: SPACING.sm,
  },
});
