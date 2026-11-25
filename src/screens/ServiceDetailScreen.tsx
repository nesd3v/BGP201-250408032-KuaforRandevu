import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import { CATEGORY_ICONS } from '../constants/categoryIcons';
import { COLORS, FONT_SIZES, RADIUS, SHADOW, SPACING } from '../constants/theme';
import { MOCK_SERVICES } from '../constants/mockServices';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ServiceDetail'>;

export default function ServiceDetailScreen({ route, navigation }: Props) {
  const { serviceId } = route.params;
  const service = MOCK_SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Hizmet bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconWrap}>
          <Ionicons name={CATEGORY_ICONS[service.category]} size={30} color={COLORS.primary} />
        </View>
        <Text style={styles.category}>{service.category.toUpperCase()}</Text>
        <Text style={styles.name}>{service.name}</Text>
        <Text style={styles.description}>{service.description}</Text>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoTile}>
          <Ionicons name="time-outline" size={20} color={COLORS.primary} />
          <Text style={styles.infoValue}>{service.durationMin} dk</Text>
          <Text style={styles.infoLabel}>Süre</Text>
        </View>
        <View style={styles.infoTile}>
          <Ionicons name="pricetag-outline" size={20} color={COLORS.primary} />
          <Text style={styles.infoValue}>{service.price} ₺</Text>
          <Text style={styles.infoLabel}>Fiyat</Text>
        </View>
      </View>

      <CustomButton
        title="Bu Hizmet İçin Randevu Al"
        onPress={() => navigation.navigate('Booking', { serviceId: service.id })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.md },
  card: {
    backgroundColor: COLORS.card,
    padding: SPACING.lg,
    borderRadius: RADIUS.lg,
    ...SHADOW.card,
  },
  iconWrap: {
    width: 60,
    height: 60,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    fontSize: FONT_SIZES.small,
    color: COLORS.accent,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginTop: SPACING.md,
  },
  name: { fontSize: FONT_SIZES.title, fontWeight: '700', color: COLORS.text, marginTop: SPACING.xs },
  description: {
    fontSize: FONT_SIZES.body,
    color: COLORS.textLight,
    marginTop: SPACING.sm,
    lineHeight: 22,
  },
  infoRow: { flexDirection: 'row', marginVertical: SPACING.md },
  infoTile: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginRight: SPACING.sm,
    ...SHADOW.card,
  },
  infoValue: {
    fontSize: FONT_SIZES.subtitle,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: SPACING.sm,
  },
  infoLabel: { fontSize: FONT_SIZES.small, color: COLORS.textLight, marginTop: SPACING.xs },
});
