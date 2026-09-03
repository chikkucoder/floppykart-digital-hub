/**
 * Central business configuration.
 * NOTE: contact values below are PLACEHOLDERS — replace with real details.
 */
export const site = {
  name: "FloppyKart",
  domain: "floppykart.com",
  established: 2014,
  tagline: "Technology Products. Professional Solutions. Trusted Since 2014.",
  description:
    "FloppyKart supplies laptops, desktops, computer hardware, CCTV, networking, printers and antivirus software, with expert repair and installation services since 2014.",
  contact: {
    phone: "+91 00000 00000", // placeholder
    phoneHref: "tel:+910000000000",
    whatsapp: "+91 00000 00000", // placeholder
    whatsappHref: "https://wa.me/910000000000",
    email: "hello@floppykart.com", // placeholder
    emailHref: "mailto:hello@floppykart.com",
    address: "Shop address line 1, Area, City, State — PIN", // placeholder
    mapsHref: "https://maps.google.com/?q=FloppyKart",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
  },
} as const;

export type SiteConfig = typeof site;
