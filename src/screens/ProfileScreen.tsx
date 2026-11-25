import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZES, RADIUS, SPACING } from '../constants/theme';
import { useAppointments } from '../context/AppointmentsContext';

// Not: 12. haftada buraya Firebase kullanıcı bilgisi ve çıkış yap butonu eklenecek.
export default function ProfileScreen() {
  const { appointments } = useAppointments();

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>M</Text>
      </View>
      <Text style={styles.name}>Misafir Kullanıcı</Text>
      <Text style={styles.info}>Toplam randevu: {appointments.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    paddingTop: SPACING.xl,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: COLORS.white, fontSize: FONT_SIZES.hero, fontWeight: '700' },
  name: { fontSize: FONT_SIZES.title, fontWeight: '700', color: COLORS.text, marginTop: SPACING.md },
  info: { fontSize: FONT_SIZES.body, color: COLORS.textLight, marginTop: SPACING.sm },
});
