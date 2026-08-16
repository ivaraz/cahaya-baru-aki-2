const PHONE_NUMBER = "6281809833193";

/**
 * Generates a direct WhatsApp URL with a pre-filled message.
 * @param message Custom initial text message (will be URL encoded)
 * @returns Formatted WhatsApp URL string
 */
export function generateWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${PHONE_NUMBER}`;
  if (!message || message.trim() === "") {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(message.trim())}`;
}

export function getProductInquiryMessage(productName: string): string {
  return `Halo Cahaya Baru Aki 2, saya ingin menanyakan harga dan ketersediaan ${productName}.`;
}

export function getDefaultInquiryMessage(): string {
  return `Halo Cahaya Baru Aki 2, saya ingin berkonsultasi mengenai aki mobil / motor.`;
}

export function getImportantMessage(): string {
  return `Halo Cahaya Baru Aki 2, kendaraan saya mogok bisakah anda menuju ke lokasi saya?`;
}
