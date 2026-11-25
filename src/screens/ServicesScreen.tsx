import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ServiceCard from '../components/ServiceCard';
import { COLORS, SPACING } from '../constants/theme';
import { MOCK_SERVICES } from '../constants/mockServices';
import { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

// Not: 11. haftada bu liste FlatList + arama çubuğuna dönüştürülecek.
export default function ServicesScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {MOCK_SERVICES.map((service) => (
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
});
