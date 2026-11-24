import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppointmentCard from '../components/AppointmentCard';
import { COLORS, FONT_SIZES, SPACING } from '../constants/theme';
import { useAppointments } from '../context/AppointmentsContext';

export default function AppointmentsScreen() {
  const { appointments, cancelAppointment } = useAppointments();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {appointments.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Ionicons name="calendar-outline" size={56} color={COLORS.border} />
          <Text style={styles.empty}>
            Henüz randevunuz yok. Hizmetler sekmesinden randevu alabilirsiniz.
          </Text>
        </View>
      ) : (
        appointments.map((a) => (
          <AppointmentCard key={a.id} appointment={a} onCancel={() => cancelAppointment(a.id)} />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md },
  emptyWrap: { alignItems: 'center', marginTop: SPACING.xl },
  empty: {
    fontSize: FONT_SIZES.body,
    color: COLORS.textLight,
    textAlign: 'center',
    marginTop: SPACING.md,
  },
});
