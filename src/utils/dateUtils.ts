// Tarih yardımcı fonksiyonları

const DAY_NAMES: string[] = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

export interface DayOption {
  label: string; // 'Pzt'
  date: string; // '24.11.2026'
}

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

export function formatDate(d: Date): string {
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
}

// Bugünden başlayarak ileriye doğru günleri üretir (Pazar kapalı sayılır).
export function getNextDays(count: number): DayOption[] {
  const result: DayOption[] = [];
  const current = new Date();
  while (result.length < count) {
    current.setDate(current.getDate() + 1);
    if (current.getDay() !== 0) {
      result.push({ label: DAY_NAMES[current.getDay()], date: formatDate(current) });
    }
  }
  return result;
}
