// Form doğrulama fonksiyonları (9. hafta).
// Hata varsa Türkçe hata mesajı, hata yoksa null döndürür.

export function validateName(value: string): string | null {
  const name = value.trim();
  if (name.length === 0) return 'Ad soyad boş bırakılamaz';
  if (name.length < 3) return 'Ad soyad en az 3 karakter olmalı';
  if (!/^[A-Za-zÇĞİÖŞÜçğıöşü\s]+$/.test(name)) return 'Ad soyad sadece harf içermeli';
  return null;
}

export function validatePhone(value: string): string | null {
  const digits = value.replace(/\s/g, '');
  if (digits.length === 0) return 'Telefon numarası boş bırakılamaz';
  if (!/^\d+$/.test(digits)) return 'Telefon sadece rakamlardan oluşmalı';
  // 5XXXXXXXXX (10 hane) veya 05XXXXXXXXX (11 hane)
  if (!/^0?5\d{9}$/.test(digits)) return 'Geçerli bir cep telefonu girin (örn: 05321234567)';
  return null;
}
