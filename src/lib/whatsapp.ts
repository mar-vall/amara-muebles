import { WHATSAPP_NUMBER } from '../config';

const BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Opens WhatsApp with a pre-filled product inquiry message. */
export function productWhatsappUrl(productName: string): string {
  return `${BASE}?text=${encodeURIComponent(`Quiero comprar: ${productName}`)}`;
}

/** Opens WhatsApp with the visitor's custom message from the contact form. */
export function contactWhatsappUrl(message: string): string {
  return `${BASE}?text=${encodeURIComponent(message.trim())}`;
}

/** Opens WhatsApp with a pre-filled B2B / commercial project inquiry. */
export function b2bWhatsappUrl(): string {
  const text =
    'Hola, tengo un proyecto comercial y me gustaría recibir información sobre precios por volumen y tiempos de entrega.';
  return `${BASE}?text=${encodeURIComponent(text)}`;
}
