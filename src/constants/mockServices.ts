import { Service } from '../types';

// Geçici (sahte) veri. 12. haftada Firestore'dan okunacak.
export const MOCK_SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Saç Kesimi',
    category: 'Saç',
    durationMin: 45,
    price: 400,
    description: 'Yüz şekline uygun kesim ve fön dahildir.',
  },
  {
    id: 's2',
    name: 'Fön',
    category: 'Saç',
    durationMin: 30,
    price: 250,
    description: 'Yıkama ve şekillendirme.',
  },
  {
    id: 's3',
    name: 'Saç Boyama',
    category: 'Saç',
    durationMin: 120,
    price: 1200,
    description: 'Dip boya veya komple boya. Fiyat saç uzunluğuna göre değişebilir.',
  },
  {
    id: 's4',
    name: 'Keratin Bakımı',
    category: 'Bakım',
    durationMin: 150,
    price: 1800,
    description: 'Elektriklenme ve kabarmayı azaltan düzleştirici bakım.',
  },
  {
    id: 's5',
    name: 'Cilt Bakımı',
    category: 'Bakım',
    durationMin: 60,
    price: 700,
    description: 'Temizleme, peeling ve nemlendirici maske.',
  },
  {
    id: 's6',
    name: 'Gelin Makyajı',
    category: 'Makyaj',
    durationMin: 90,
    price: 2500,
    description: 'Deneme makyajı dahil değildir.',
  },
  {
    id: 's7',
    name: 'Manikür',
    category: 'Tırnak',
    durationMin: 40,
    price: 300,
    description: 'Tırnak bakımı ve oje uygulaması.',
  },
];

export const TIME_SLOTS: string[] = [
  '10:00',
  '11:00',
  '12:00',
  '13:30',
  '14:30',
  '15:30',
  '16:30',
  '17:30',
];
