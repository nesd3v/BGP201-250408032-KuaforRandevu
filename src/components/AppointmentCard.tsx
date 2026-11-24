import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZES, RADIUS, SPACING } from '../constants/theme';
import { Appointment } from '../types';
import CustomButton from './CustomButton';

interface AppointmentCardProps {
  appointment: Appointment;
  onCancel: () => void;
}

export default function AppointmentCard({ appointment, onCancel }: AppointmentCardProps) {
  const isActive = appointment.status === 'Aktif';
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.name}>{appointment.serviceName}</Text>
        <Text style={[styles.status, isActive ? styles.active : styles.cancelled]}>
          {appointment.status}
        </Text>
      </View>
      <Text style={styles.meta}>
        {appointment.date} · {appointment.time} · {appointment.price} ₺
      </Text>
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
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.sm,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: FONT_SIZES.subtitle, fontWeight: '600', color: COLORS.text },
  status: { fontSize: FONT_SIZES.small, fontWeight: '700' },
  active: { color: COLORS.success },
  cancelled: { color: COLORS.danger },
  meta: { fontSize: FONT_SIZES.body, color: COLORS.textLight, marginTop: SPACING.xs },
  buttonWrap: { marginTop: SPACING.md },
});
