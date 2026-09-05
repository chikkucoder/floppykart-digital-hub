import laptops from "@/assets/cat-laptops.jpg";
import desktops from "@/assets/cat-desktops.jpg";
import processors from "@/assets/cat-processors.jpg";
import motherboards from "@/assets/cat-motherboards.jpg";
import ramSsd from "@/assets/cat-ram-ssd.jpg";
import psu from "@/assets/cat-psu.jpg";
import cctv from "@/assets/cat-cctv.jpg";
import printers from "@/assets/cat-printers.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import networking from "@/assets/cat-networking.jpg";
import tv from "@/assets/cat-tv.jpg";
import antivirus from "@/assets/product-antivirus.jpg";
import gpu from "@/assets/cat-gpu.jpg";

/**
 * Static mock catalog. Shapes intentionally mirror a future commerce API
 * (slug, category, images, price object) so this can be swapped for real data
 * without touching UI components.
 */

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  summary: string;
  description: string;
  /** No fake pricing: UI renders an enquiry CTA instead. */
  price: { type: "on-request" };
  images: string[];
  specs: { label: string; value: string }[];
  features: string[];
  badge?: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "laptops",
    name: "Laptops",
    description: "Home, business and performance notebooks for every budget.",
    image: laptops,
  },
  {
    slug: "desktop-computers",
    name: "Desktop Computers",
    description: "Branded and custom-assembled desktop systems.",
    image: desktops,
  },
  {
    slug: "processors",
    name: "Processors",
    description: "Latest generation Intel and AMD CPUs.",
    image: processors,
  },
  {
    slug: "motherboards",
    name: "Motherboards",
    description: "Reliable boards for office, gaming and workstation builds.",
    image: motherboards,
  },
  {
    slug: "ram-ssd",
    name: "RAM & SSD",
    description: "DDR4/DDR5 memory, NVMe and SATA storage upgrades.",
    image: ramSsd,
  },
  {
    slug: "graphics-cards",
    name: "Graphics Cards",
    description: "Dedicated NVIDIA and AMD GPUs for gaming, editing and rendering.",
    image: gpu,
  },
  {
    slug: "power-supply",
    name: "Power Supply / SMPS",
    description: "ATX12V power supplies with stable, protected output.",
    image: psu,
  },
  {
    slug: "cctv-cameras",
    name: "CCTV Cameras",
    description: "Dome, bullet and IP cameras with DVR/NVR options.",
    image: cctv,
  },
  {
    slug: "printers",
    name: "Printers",
    description: "Inkjet, laser and all-in-one printers for home and office.",
    image: printers,
  },
  {
    slug: "antivirus-security",
    name: "Antivirus & Security",
    description: "Genuine antivirus licences and security software.",
    image: antivirus,
  },
  {
    slug: "networking",
    name: "Networking",
    description: "Routers, switches, access points and structured cabling.",
    image: networking,
  },
  {
    slug: "computer-accessories",
    name: "Computer Accessories",
    description: "Keyboards, mice, cables, webcams, headsets and more.",
    image: accessories,
  },
  {
    slug: "led-tvs",
    name: "LED TVs",
    description: "Smart LED televisions in popular screen sizes.",
    image: tv,
  },
];

export const products: Product[] = [
  {
    slug: "quick-heal-antivirus-pro",
    name: "Quick Heal Antivirus Pro",
    categorySlug: "antivirus-security",
    categoryName: "Antivirus & Security",
    summary: "Complete antivirus protection with real-time and web security.",
    description:
      "Quick Heal Antivirus Pro provides everyday protection for home and business computers. It combines real-time virus scanning, web protection and privacy tools in a lightweight package that keeps systems responsive. Available as a genuine licence with installation and activation support from our team.",
    price: { type: "on-request" },
    images: [antivirus, antivirus, antivirus],
    specs: [
      { label: "Type", value: "Antivirus software licence" },
      { label: "Platform", value: "Windows PC / Laptop" },
      { label: "Licence options", value: "1 user / multi-user, 1–3 years" },
      { label: "Delivery", value: "Retail pack or digital key" },
      { label: "Installation", value: "Setup & activation support available" },
      { label: "Updates", value: "Automatic virus definitions update" },
    ],
    features: [
      "Complete Antivirus Protection",
      "Real-Time Security",
      "Web Protection",
      "Malware Protection",
      "Privacy Protection",
      "Easy Installation & Setup",
    ],
    badge: "Featured Focus",
    featured: true,
  },
  {
    slug: "intel-core-processor",
    name: "Intel Core Processor",
    categorySlug: "processors",
    categoryName: "Processors",
    summary: "Current-generation Intel Core CPUs for office and creative work.",
    description:
      "Intel Core desktop processors across i3, i5, i7 and i9 tiers. Tell us your workload and budget and we will recommend a matching CPU, motherboard and cooling combination.",
    price: { type: "on-request" },
    images: [processors, processors],
    specs: [
      { label: "Brand", value: "Intel" },
      { label: "Series", value: "Core i3 / i5 / i7 / i9" },
      { label: "Socket", value: "LGA (generation dependent)" },
      { label: "Warranty", value: "As per manufacturer" },
    ],
    features: ["Multi-core performance", "Integrated graphics options", "Boxed cooler variants"],
  },
  {
    slug: "amd-ryzen-processor",
    name: "AMD Ryzen Processor",
    categorySlug: "processors",
    categoryName: "Processors",
    summary: "Ryzen 3/5/7/9 CPUs for productivity, gaming and workstations.",
    description:
      "AMD Ryzen desktop processors with strong multi-threaded performance. Available with matching AM4 / AM5 motherboards and memory kits.",
    price: { type: "on-request" },
    images: [processors, processors],
    specs: [
      { label: "Brand", value: "AMD" },
      { label: "Series", value: "Ryzen 3 / 5 / 7 / 9" },
      { label: "Socket", value: "AM4 / AM5" },
      { label: "Warranty", value: "As per manufacturer" },
    ],
    features: ["High core counts", "Efficient performance", "Upgrade-friendly platforms"],
  },
  {
    slug: "atx-motherboard",
    name: "ATX Motherboard",
    categorySlug: "motherboards",
    categoryName: "Motherboards",
    summary: "Office, gaming and workstation boards with modern I/O.",
    description:
      "Motherboards for Intel and AMD platforms in ATX, mATX and ITX form factors, with M.2 storage slots, USB-C and stable VRM designs.",
    price: { type: "on-request" },
    images: [motherboards, motherboards],
    specs: [
      { label: "Form factor", value: "ATX / mATX / ITX" },
      { label: "Memory", value: "DDR4 or DDR5" },
      { label: "Storage", value: "M.2 NVMe + SATA" },
      { label: "Networking", value: "Gigabit LAN, Wi-Fi variants" },
    ],
    features: ["M.2 NVMe support", "Multiple USB ports", "Stable power delivery"],
  },
  {
    slug: "ddr4-ddr5-ram",
    name: "DDR4 / DDR5 RAM",
    categorySlug: "ram-ssd",
    categoryName: "RAM & SSD",
    summary: "Desktop and laptop memory modules from 8GB upwards.",
    description:
      "Memory upgrades for laptops and desktops. We verify compatibility with your existing system before supply and can install on the spot.",
    price: { type: "on-request" },
    images: [ramSsd, ramSsd],
    specs: [
      { label: "Type", value: "DDR4 / DDR5" },
      { label: "Capacity", value: "8GB / 16GB / 32GB" },
      { label: "Format", value: "DIMM & SODIMM" },
    ],
    features: ["Compatibility check included", "Single & dual-channel kits", "On-site installation"],
  },
  {
    slug: "ssd-storage",
    name: "SSD Storage Drive",
    categorySlug: "ram-ssd",
    categoryName: "RAM & SSD",
    summary: "NVMe and SATA SSDs for faster boot and load times.",
    description:
      "Solid state drives in NVMe M.2 and 2.5-inch SATA formats. Data migration and Windows setup can be handled by our service team.",
    price: { type: "on-request" },
    images: [ramSsd, ramSsd],
    specs: [
      { label: "Interface", value: "NVMe M.2 / SATA III" },
      { label: "Capacity", value: "256GB – 2TB" },
      { label: "Use case", value: "Boot drive, storage upgrade" },
    ],
    features: ["Fast sequential speeds", "Data migration service", "Laptop & desktop compatible"],
  },
  {
    slug: "high-performance-graphics-card",
    name: "High Performance Dedicated GPU",
    categorySlug: "graphics-cards",
    categoryName: "Graphics Cards",
    summary: "NVIDIA RTX and AMD Radeon graphics cards for video editing and 3D.",
    description:
      "Dedicated graphics cards with multi-fan cooling, HDMI/DisplayPort outputs, and GDDR6 VRAM for graphic designers, video editors, and gamers.",
    price: { type: "on-request" },
    images: [gpu, gpu],
    specs: [
      { label: "Chipset", value: "NVIDIA GeForce / AMD Radeon" },
      { label: "Memory", value: "6GB / 8GB / 12GB / 16GB GDDR6" },
      { label: "Interface", value: "PCI Express 4.0 / 5.0" },
      { label: "Outputs", value: "HDMI 2.1, DisplayPort 1.4a" },
    ],
    features: ["Dual / Triple Fan Cooling", "Ray Tracing Support", "Multi-Monitor Ready"],
  },
  {
    slug: "atx12v-power-supply",
    name: "ATX12V Power Supply (SMPS)",
    categorySlug: "power-supply",
    categoryName: "Power Supply / SMPS",
    summary: "Protected ATX12V units for stable system power.",
    description:
      "ATX12V power supplies with over-voltage and short-circuit protection, suited to office desktops through to high-draw gaming builds.",
    price: { type: "on-request" },
    images: [psu, psu],
    specs: [
      { label: "Standard", value: "ATX12V" },
      { label: "Wattage", value: "450W – 850W options" },
      { label: "Cabling", value: "Non-modular & modular" },
    ],
    features: ["Multiple protections", "Quiet cooling fan", "Wattage guidance included"],
  },
  {
    slug: "cctv-camera-system",
    name: "CCTV Camera System",
    categorySlug: "cctv-cameras",
    categoryName: "CCTV Cameras",
    summary: "Dome and bullet cameras with DVR/NVR and storage.",
    description:
      "Complete CCTV packages including cameras, recorder, storage, cabling and installation. We survey the site and propose camera positions before quoting.",
    price: { type: "on-request" },
    images: [cctv, cctv],
    specs: [
      { label: "Camera types", value: "Dome, bullet, IP" },
      { label: "Recording", value: "DVR / NVR with HDD" },
      { label: "Access", value: "Mobile viewing setup" },
    ],
    features: ["Site survey", "Professional installation", "Maintenance support"],
  },
  {
    slug: "office-printer",
    name: "Office Printer",
    categorySlug: "printers",
    categoryName: "Printers",
    summary: "Inkjet, laser and all-in-one printers with service support.",
    description:
      "Printers for home and office workloads, plus cartridges, refills and in-house repair service.",
    price: { type: "on-request" },
    images: [printers, printers],
    specs: [
      { label: "Types", value: "Inkjet / Laser / All-in-one" },
      { label: "Functions", value: "Print, scan, copy" },
      { label: "Connectivity", value: "USB, Wi-Fi options" },
    ],
    features: ["Consumables available", "Repair & service", "Network printer setup"],
  },
  {
    slug: "business-laptop",
    name: "Business Laptop",
    categorySlug: "laptops",
    categoryName: "Laptops",
    summary: "Reliable notebooks for study, work and business use.",
    description:
      "Laptops across popular brands for students, professionals and businesses, with configuration advice, setup and after-sales service.",
    price: { type: "on-request" },
    images: [laptops, laptops],
    specs: [
      { label: "Processor", value: "Intel Core / AMD Ryzen" },
      { label: "Memory", value: "8GB – 16GB" },
      { label: "Storage", value: "SSD" },
      { label: "Display", value: '14" – 15.6"' },
    ],
    features: ["Brand options", "Setup & data transfer", "Repair support"],
  },
  {
    slug: "custom-desktop-pc",
    name: "Custom Desktop PC",
    categorySlug: "desktop-computers",
    categoryName: "Desktop Computers",
    summary: "Assembled desktops built around your workload and budget.",
    description:
      "Custom-built desktop computers assembled in-house from genuine components, tested before handover and backed by component warranties.",
    price: { type: "on-request" },
    images: [desktops, desktops],
    specs: [
      { label: "Build", value: "Assembled to requirement" },
      { label: "Components", value: "CPU, board, RAM, SSD, SMPS, cabinet" },
      { label: "Testing", value: "Burn-in tested before delivery" },
    ],
    features: ["Component-level warranty", "Upgrade path planning", "Software installation"],
  },
  {
    slug: "wireless-keyboard-mouse-combo",
    name: "Wireless Desktop Accessories Combo",
    categorySlug: "computer-accessories",
    categoryName: "Computer Accessories",
    summary: "Ergonomic wireless keyboard and optical mouse kit.",
    description:
      "Reliable 2.4GHz wireless keyboard and mouse set with long battery life, quiet keys, and plug-and-play USB nano receiver.",
    price: { type: "on-request" },
    images: [accessories, accessories],
    specs: [
      { label: "Connectivity", value: "2.4GHz Wireless USB Nano" },
      { label: "Battery", value: "AA / AAA batteries included" },
      { label: "Compatibility", value: "Windows / Mac / Linux" },
    ],
    features: ["Spill-resistant layout", "Long battery endurance", "Plug & Play setup"],
  },
  {
    slug: "smart-led-tv",
    name: "Smart LED TV",
    categorySlug: "led-tvs",
    categoryName: "LED TVs",
    summary: "Smart LED televisions in popular screen sizes.",
    description:
      "Smart LED TVs for home and office, with wall-mount installation available on request.",
    price: { type: "on-request" },
    images: [tv, tv],
    specs: [
      { label: "Sizes", value: '32" – 65"' },
      { label: "Type", value: "Smart LED" },
      { label: "Installation", value: "Wall mounting available" },
    ],
    features: ["Multiple size options", "Installation support", "Demo before purchase"],
  },
];

export const popularProductSlugs = [
  "quick-heal-antivirus-pro",
  "intel-core-processor",
  "amd-ryzen-processor",
  "high-performance-graphics-card",
  "atx-motherboard",
  "ddr4-ddr5-ram",
  "ssd-storage",
  "cctv-camera-system",
  "business-laptop",
  "custom-desktop-pc",
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);
export const featuredProduct = products.find((p) => p.featured)!;
export const popularProducts = popularProductSlugs
  .map((slug) => getProduct(slug))
  .filter((p): p is Product => Boolean(p));

