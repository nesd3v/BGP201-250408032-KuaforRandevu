import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import { COLORS, FONT_SIZES, RADIUS, SPACING } from '../constants/theme';
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
        <Text style={styles.category}>{service.category}</Text>
        <Text style={styles.name}>{service.name}</Text>
        <Text style={styles.description}>{service.description}</Text>
        <Text style={styles.meta}>Süre: {service.durationMin} dakika</Text>
        <Text style={styles.price}>{service.price} ₺</Text>
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
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.lg,
  },
  category: { fontSize: FONT_SIZES.small, color: COLORS.primary, fontWeight: '700' },
  name: { fontSize: FONT_SIZES.title, fontWeight: '700', color: COLORS.text, marginTop: SPACING.xs },
  description: { fontSize: FONT_SIZES.body, color: COLORS.textLight, marginTop: SPACING.md },
  meta: { fontSize: FONT_SIZES.body, color: COLORS.text, marginTop: SPACING.md },
  price: { fontSize: FONT_SIZES.hero, fontWeight: '700', color: COLORS.primary, marginTop: SPACING.sm },
});
