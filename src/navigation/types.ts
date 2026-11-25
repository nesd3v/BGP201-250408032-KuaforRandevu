import { NavigatorScreenParams } from '@react-navigation/native';

// Ekran parametre tipleri (7. hafta: React Navigation + TypeScript)

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<TabParamList> | undefined;
  ServiceDetail: { serviceId: string };
  Booking: { serviceId: string };
};

export type TabParamList = {
  Home: undefined;
  Services: undefined;
  Appointments: undefined;
  Profile: undefined;
};
