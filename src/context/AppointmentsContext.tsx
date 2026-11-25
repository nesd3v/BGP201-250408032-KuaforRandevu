import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Appointment, NewAppointment } from '../types';

// Ekranlar arasında paylaşılan randevu verisi (6. hafta: useState + useContext)

interface AppointmentsContextValue {
  appointments: Appointment[];
  addAppointment: (data: NewAppointment) => void;
  cancelAppointment: (id: string) => void;
}

const AppointmentsContext = createContext<AppointmentsContextValue | undefined>(undefined);

export function AppointmentsProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (data: NewAppointment) => {
    const newItem: Appointment = {
      ...data,
      id: Date.now().toString(),
      status: 'Aktif',
    };
    setAppointments((prev) => [newItem, ...prev]);
  };

  const cancelAppointment = (id: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'İptal' } : a)),
    );
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, cancelAppointment }}>
      {children}
    </AppointmentsContext.Provider>
  );
}

export function useAppointments(): AppointmentsContextValue {
  const ctx = useContext(AppointmentsContext);
  if (!ctx) {
    throw new Error('useAppointments, AppointmentsProvider içinde kullanılmalı');
  }
  return ctx;
}
