export type Service = {
  slug: string;
  title: string;
  description: string;
  icon:
    | "laptop"
    | "monitor"
    | "cpu"
    | "printer"
    | "camera"
    | "shieldCheck"
    | "network"
    | "wifi"
    | "download"
    | "shield"
    | "wrench"
    | "settings";
};

export const services: Service[] = [
  {
    slug: "laptop-repair",
    title: "Laptop Repair",
    description: "Screen, keyboard, battery, hinge and board-level diagnostics.",
    icon: "laptop",
  },
  {
    slug: "desktop-repair",
    title: "Desktop Repair",
    description: "Boot failures, slow systems, OS issues and part replacement.",
    icon: "monitor",
  },
  {
    slug: "hardware-repair",
    title: "Computer Hardware Repair",
    description: "Motherboard, SMPS and component fault finding and repair.",
    icon: "cpu",
  },
  {
    slug: "printer-repair",
    title: "Printer Repair",
    description: "Paper feed, print quality, cartridge and connectivity issues.",
    icon: "printer",
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    description: "Site survey, camera placement, cabling and recorder setup.",
    icon: "camera",
  },
  {
    slug: "cctv-maintenance",
    title: "CCTV Repair & Maintenance",
    description: "Camera servicing, DVR/NVR faults and storage upkeep.",
    icon: "shieldCheck",
  },
  {
    slug: "networking-installation",
    title: "Networking Installation",
    description: "Structured cabling, switches and access points for offices.",
    icon: "network",
  },
  {
    slug: "network-troubleshooting",
    title: "Network Troubleshooting",
    description: "Connectivity drops, slow links and router configuration.",
    icon: "wifi",
  },
  {
    slug: "software-installation",
    title: "Software Installation",
    description: "Operating system, drivers and business software setup.",
    icon: "download",
  },
  {
    slug: "antivirus-installation",
    title: "Antivirus Installation",
    description: "Genuine licence activation, configuration and clean-up.",
    icon: "shield",
  },
  {
    slug: "hardware-upgrade",
    title: "Hardware Upgrade",
    description: "RAM, SSD, graphics and power supply upgrades.",
    icon: "wrench",
  },
  {
    slug: "system-maintenance",
    title: "System Maintenance",
    description: "Periodic servicing, cleaning and performance tuning.",
    icon: "settings",
  },
];

export const cctvSolutions = [
  "CCTV Installation",
  "CCTV Camera Sales",
  "DVR / NVR Setup",
  "Network Installation",
  "Router & Switch Configuration",
  "Office Networking",
  "Maintenance & Support",
];

export const brands = [
  "HP",
  "Dell",
  "Lenovo",
  "ASUS",
  "Acer",
  "Intel",
  "AMD",
  "Quick Heal",
  "Canon",
  "Epson",
  "TP-Link",
  "Hikvision",
  "CP Plus",
];

/**
 * PLACEHOLDER testimonials — replace with real, verified customer reviews.
 */
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  context: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Placeholder review: the team explained the options clearly and delivered exactly the configuration we discussed.",
    name: "Customer Name",
    context: "Custom Desktop PC",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Placeholder review: our office CCTV was surveyed and installed neatly, with the mobile app set up before they left.",
    name: "Customer Name",
    context: "CCTV Installation",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Placeholder review: laptop was diagnosed the same day and returned working, with no unnecessary part changes.",
    name: "Customer Name",
    context: "Laptop Repair",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Placeholder review: genuine antivirus licence supplied and installed on all our office machines quickly.",
    name: "Customer Name",
    context: "Antivirus & Security",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Do you supply genuine products?",
    a: "Yes. We supply genuine products with applicable manufacturer warranty. Warranty terms depend on the brand and product.",
  },
  {
    q: "Why are prices shown as 'Price on Request'?",
    a: "Hardware and licence pricing changes frequently with configuration and stock. Share your requirement and we will quote the current best price.",
  },
  {
    q: "Do you provide on-site service?",
    a: "On-site support is available for CCTV, networking and office systems. Laptop and printer repairs are usually handled in our workshop.",
  },
  {
    q: "Can you help choose the right configuration?",
    a: "Yes. Tell us your workload and budget and we will recommend a suitable laptop, desktop or upgrade path.",
  },
  {
    q: "Do you handle antivirus installation and activation?",
    a: "Yes. We supply genuine antivirus licences and can install, activate and configure them on your systems.",
  },
];
