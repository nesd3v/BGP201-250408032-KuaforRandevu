import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONT_SIZES, RADIUS, SHADOW, SPACING } from '../constants/theme';
import { Appointment } from '../types';
import CustomButton from './CustomButton';

interface AppointmentCardProps {
  appointment: Appointment;
  onCancel: () => void;
}

export default function AppointmentCard({ appointment, onCancel }: AppointmentCardProps) {
  const isActive = appointment.status === 'Aktif';
  return (
    <View style={[styles.card, isActive ? styles.cardActive : styles.cardCancelled]}>
      <View style={styles.row}>
        <Text style={styles.name}>{appointment.serviceName}</Text>
        <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgeCancelled]}>
          <Text style={[styles.badgeText, isActive ? styles.activeText : styles.cancelledText]}>
            {appointment.status}
          </Text>
        </View>
      </View>
      <View style={styles.infoRow}>
        <Ionicons name="calendar-outline" size={16} color={COLORS.textLight} />
        <Text style={styles.meta}>{appointment.date}</Text>
        <Ionicons name="time-outline" size={16} color={COLORS.textLight} />
        <Text style={styles.meta}>{appointment.time}</Text>
        <Text style={styles.price}>{appointment.price} ₺</Text>
      </View>
      {isActive && (
        <View style={styles.buttonWrap}>
          <CustomButton title="Randevuyu İptal Et" variant="outline" onPress={onCancel} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderLeftWidth: 4,
    marginBottom: SPACING.sm,
    ...SHADOW.card,
  },
  cardActive: { borderLeftColor: COLORS.primary },
  cardCancelled: { borderLeftColor: COLORS.border, opacity: 0.75 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: FONT_SIZES.subtitle, fontWeight: '600', color: COLORS.text },
  badge: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm + 2,
    borderRadius: RADIUS.pill,
  },
  badgeActive: { backgroundColor: COLORS.successLight },
  badgeCancelled: { backgroundColor: COLORS.dangerLight },
  badgeText: { fontSize: FONT_SIZES.small, fontWeight: '700' },
  activeText: { color: COLORS.success },
  cancelledText: { color: COLORS.danger },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginTop: SPACING.sm },
  meta: {
    fontSize: FONT_SIZES.body,
    color: COLORS.textLight,
    marginLeft: SPACING.xs,
    marginRight: SPACING.md,
  },
  price: {
    fontSize: FONT_SIZES.body,
    fontWeight: '700',
    color: COLORS.primary,
    marginLeft: 'auto',
  },
  buttonWrap: { marginTop: SPACING.md },
});
