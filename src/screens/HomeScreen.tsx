import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import ServiceCard from '../components/ServiceCard';
import { COLORS, FONT_SIZES, RADIUS, SHADOW, SPACING } from '../constants/theme';
import { MOCK_SERVICES } from '../constants/mockServices';
import { useAppointments } from '../context/AppointmentsContext';
import { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();
  const { appointments } = useAppointments();
  const activeCount = appointments.filter((a) => a.status === 'Aktif').length;
  const popular = MOCK_SERVICES.slice(0, 3);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.heroLabel}>BAYAN KUAFÖRÜ</Text>
        <Text style={styles.heroTitle}>Kuaför Randevu</Text>
        <Text style={styles.heroSubtitle}>
          Hizmetini seç, sana uygun gün ve saatte randevunu oluştur.
        </Text>
        <View style={styles.heroButton}>
          <CustomButton
            title="Hemen Randevu Al"
            variant="light"
            onPress={() => navigation.navigate('MainTabs', { screen: 'Services' })}
          />
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{MOCK_SERVICES.length}</Text>
          <Text style={styles.statLabel}>Hizmet</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{activeCount}</Text>
          <Text style={styles.statLabel}>Aktif randevu</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Popüler Hizmetler</Text>
      {popular.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onPress={() => navigation.navigate('ServiceDetail', { serviceId: service.id })}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingBottom: SPACING.xl },
  hero: {
    backgroundColor: COLORS.primary,
    padding: SPACING.lg,
    borderRadius: RADIUS.lg,
  },
  heroLabel: {
    fontSize: FONT_SIZES.small,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: COLORS.accent,
  },
  heroTitle: {
    fontSize: FONT_SIZES.hero,
    fontWeight: '700',
    color: COLORS.white,
    marginTop: SPACING.xs,
  },
  heroSubtitle: {
    fontSize: FONT_SIZES.body,
    color: COLORS.whiteSoft,
    marginTop: SPACING.sm,
    lineHeight: 22,
  },
  heroButton: { marginTop: SPACING.lg },
  statsRow: { flexDirection: 'row', marginTop: SPACING.md },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginRight: SPACING.sm,
    ...SHADOW.card,
  },
  statNumber: { fontSize: FONT_SIZES.title, fontWeight: '700', color: COLORS.primary },
  statLabel: { fontSize: FONT_SIZES.small, color: COLORS.textLight, marginTop: SPACING.xs },
  sectionTitle: {
    fontSize: FONT_SIZES.subtitle,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
});
