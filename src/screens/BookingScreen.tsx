import React, { useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Chip from '../components/Chip';
import CustomButton from '../components/CustomButton';
import DateCard from '../components/DateCard';
import FormInput, { TextInputRef } from '../components/FormInput';
import { COLORS, FONT_SIZES, SPACING } from '../constants/theme';
import { MOCK_SERVICES, TIME_SLOTS } from '../constants/mockServices';
import { useAppointments } from '../context/AppointmentsContext';
import { RootStackParamList } from '../navigation/types';
import { getNextDays } from '../utils/dateUtils';
import { validateName, validatePhone } from '../utils/validation';

type Props = NativeStackScreenProps<RootStackParamList, 'Booking'>;

const DAYS = getNextDays(6);

export default function BookingScreen({ route, navigation }: Props) {
  const { serviceId } = route.params;
  const service = MOCK_SERVICES.find((s) => s.id === serviceId);
  const { addAppointment } = useAppointments();

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form alanları ve hata mesajları (9. hafta)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  // Enter'a basınca bir sonraki kutuya geçmek için referanslar
  const phoneRef = useRef<TextInputRef>(null);
  const noteRef = useRef<TextInputRef>(null);

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

    const nErr = validateName(name);
    const pErr = validatePhone(phone);
    setNameError(nErr);
    setPhoneError(pErr);
    if (nErr || pErr) return; // hatalı girişte kaydetme, uyarıları göster

    addAppointment({
      serviceId: service.id,
      serviceName: service.name,
      date: selectedDate,
      time: selectedTime,
      price: service.price,
      customerName: name.trim(),
      phone: phone.replace(/\s/g, ''),
      note: note.trim(),
    });
    Alert.alert('Randevu oluşturuldu', `${service.name} - ${selectedDate} ${selectedTime}`);
    navigation.navigate('MainTabs', { screen: 'Appointments' });
  };

  return (
    // Klavye açılınca içerik klavyenin altında kalmasın diye KeyboardAvoidingView
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
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

        <Text style={styles.label}>Bilgileriniz</Text>
        <FormInput
          label="Ad Soyad"
          value={name}
          onChangeText={setName}
          error={nameError}
          autoCapitalize="words"
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current?.focus()}
        />
        <FormInput
          label="Telefon"
          inputRef={phoneRef}
          value={phone}
          onChangeText={setPhone}
          error={phoneError}
          keyboardType="phone-pad"
          placeholder="05XX XXX XX XX"
          maxLength={14}
          returnKeyType="next"
          onSubmitEditing={() => noteRef.current?.focus()}
        />
        <FormInput
          label="Not (isteğe bağlı)"
          inputRef={noteRef}
          value={note}
          onChangeText={setNote}
          maxLength={120}
          returnKeyType="done"
        />

        <CustomButton title="Randevuyu Onayla" onPress={handleConfirm} disabled={!canConfirm} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.md, paddingBottom: SPACING.xl },
  title: { fontSize: FONT_SIZES.title, fontWeight: '700', color: COLORS.text },
  summary: { fontSize: FONT_SIZES.body, color: COLORS.textLight, marginTop: SPACING.xs },
  label: {
    fontSize: FONT_SIZES.subtitle,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: SPACING.sm },
  dateRow: { marginBottom: SPACING.md },
});
