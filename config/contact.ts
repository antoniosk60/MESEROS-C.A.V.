export const WHATSAPP_NUMBER = '525531190308';
export const FACEBOOK_URL = 'https://www.facebook.com/Meseros2025';

export const buildWhatsAppLink = (text?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
};

