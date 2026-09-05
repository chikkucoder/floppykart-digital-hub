/**
 * Central business configuration for FloppyKart.
 */
export const site = {
  name: "FloppyKart",
  domain: "floppykart.com",
  established: 2014,
  tagline: "Technology Products. Professional Solutions. Trusted Since 2014.",
  description:
    "FloppyKart supplies laptops, desktops, computer hardware, CCTV, networking, printers and antivirus software, with expert repair and installation services since 2014.",
  contact: {
    phone: "+91 8109105896",
    phoneHref: "tel:+918109105896",
    landline: "0788 4104801",
    landlineHref: "tel:07884104801",
    whatsapp: "+91 8109105896",
    whatsappHref: "https://wa.me/918109105896",
    email: "COMPUTERZONE33@GMAIL.COM",
    emailHref: "mailto:COMPUTERZONE33@GMAIL.COM",
    address: "A-11, DAKSHIN GANGOTRI, SUPELA , BHILAI (C.G) PINCODE- 490023",
    mapsHref: "https://maps.google.com/?q=FloppyKart+Supela+Bhilai",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
  },
} as const;

/**
 * Direct WhatsApp chat URL builder for products and general inquiries.
 */
export function getWhatsAppUrl(productName?: string, customText?: string): string {
  const baseUrl = "https://wa.me/918109105896";
  if (productName) {
    const text = `Hi FloppyKart, I am interested in inquiring / placing an order for: ${productName}. Please share price & availability details.`;
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  }
  if (customText) {
    return `${baseUrl}?text=${encodeURIComponent(customText)}`;
  }
  const defaultText = "Hi FloppyKart, I would like to inquire about technology products / repair services.";
  return `${baseUrl}?text=${encodeURIComponent(defaultText)}`;
}

export type SiteConfig = typeof site;
