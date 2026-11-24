import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import ServiceCard from '../components/ServiceCard';
import { COLORS, FONT_SIZES, RADIUS, SPACING } from '../constants/theme';
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
        <Text style={styles.heroTitle}>Güzellik Durağı</Text>
        <Text style={styles.heroSubtitle}>Bayan Kuaförü · Online Randevu</Text>
        <Text style={styles.heroInfo}>Aktif randevularınız: {activeCount}</Text>
      </View>

      <CustomButton
        title="Hemen Randevu Al"
        onPress={() => navigation.navigate('MainTabs', { screen: 'Services' })}
      />

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
  content: { padding: SPACING.md },
  hero: {
    backgroundColor: COLORS.primaryLight,
    padding: SPACING.lg,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
  },
  heroTitle: { fontSize: FONT_SIZES.hero, fontWeight: '700', color: COLORS.primary },
  heroSubtitle: { fontSize: FONT_SIZES.body, color: COLORS.text, marginTop: SPACING.xs },
  heroInfo: { fontSize: FONT_SIZES.body, color: COLORS.text, marginTop: SPACING.md },
  sectionTitle: {
    fontSize: FONT_SIZES.title,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
});
