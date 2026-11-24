// Uygulamadaki veri modelleri

export type ServiceCategory = 'Saç' | 'Bakım' | 'Makyaj' | 'Tırnak';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  durationMin: number; // dakika
  price: number; // TL
  description: string;
}

export type AppointmentStatus = 'Aktif' | 'İptal';

export interface Appointment {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string; // 'GG.AA.YYYY' biçiminde gösterim metni
  time: string; // 'SS:DD'
  price: number;
  status: AppointmentStatus;
}

// Randevu eklerken id ve durum otomatik atanır
export type NewAppointment = Omit<Appointment, 'id' | 'status'>;
