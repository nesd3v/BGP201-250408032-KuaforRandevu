import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import AppointmentCard from '../components/AppointmentCard';
import { COLORS, FONT_SIZES, SPACING } from '../constants/theme';
import { useAppointments } from '../context/AppointmentsContext';

export default function AppointmentsScreen() {
  const { appointments, cancelAppointment } = useAppointments();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {appointments.length === 0 ? (
        <Text style={styles.empty}>Henüz randevunuz yok. Hizmetler sekmesinden randevu alabilirsiniz.</Text>
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
  empty: {
    fontSize: FONT_SIZES.body,
    color: COLORS.textLight,
    textAlign: 'center',
    marginTop: SPACING.xl,
  },
});
