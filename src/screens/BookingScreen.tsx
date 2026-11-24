import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Chip from '../components/Chip';
import DateCard from '../components/DateCard';
import CustomButton from '../components/CustomButton';
import { COLORS, FONT_SIZES, SPACING } from '../constants/theme';
import { MOCK_SERVICES, TIME_SLOTS } from '../constants/mockServices';
import { useAppointments } from '../context/AppointmentsContext';
import { RootStackParamList } from '../navigation/types';
import { getNextDays } from '../utils/dateUtils';

type Props = NativeStackScreenProps<RootStackParamList, 'Booking'>;

const DAYS = getNextDays(6);

// Not: 9. haftada buraya ad-soyad / telefon formu ve doğrulama eklenecek.
export default function BookingScreen({ route, navigation }: Props) {
  const { serviceId } = route.params;
  const service = MOCK_SERVICES.find((s) => s.id === serviceId);
  const { addAppointment } = useAppointments();

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!service) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Hizmet bulunamadı.</Text>
      </View>
    );
  }

  const canConfirm = selectedDate !== null && selectedTime !== null;

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    addAppointment({
      serviceId: service.id,
      serviceName: service.name,
      date: selectedDate,
      time: selectedTime,
      price: service.price,
    });
    Alert.alert('Randevu oluşturuldu', `${service.name} - ${selectedDate} ${selectedTime}`);
    navigation.navigate('MainTabs', { screen: 'Appointments' });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{service.name}</Text>
      <Text style={styles.summary}>
        {service.durationMin} dk · {service.price} ₺
      </Text>

      <Text style={styles.label}>Gün seçin</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateRow}>
        {DAYS.map((d) => (
          <DateCard
            key={d.date}
            day={d}
            selected={selectedDate === d.date}
            onPress={() => setSelectedDate(d.date)}
          />
        ))}
      </ScrollView>

      <Text style={styles.label}>Saat seçin</Text>
      <View style={styles.wrap}>
        {TIME_SLOTS.map((t) => (
          <Chip key={t} label={t} selected={selectedTime === t} onPress={() => setSelectedTime(t)} />
        ))}
      </View>

      <CustomButton title="Randevuyu Onayla" onPress={handleConfirm} disabled={!canConfirm} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md },
  title: { fontSize: FONT_SIZES.title, fontWeight: '700', color: COLORS.text },
  summary: { fontSize: FONT_SIZES.body, color: COLORS.textLight, marginTop: SPACING.xs },
  label: {
    fontSize: FONT_SIZES.subtitle,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: SPACING.md },
  dateRow: { marginBottom: SPACING.md },
});
