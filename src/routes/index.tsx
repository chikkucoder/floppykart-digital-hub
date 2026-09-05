import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Cpu,
  Camera,
  Server,
  Zap,
  Star,
  Sparkles,
  Laptop,
  HardDrive,
  Printer,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import laptopsImage from "@/assets/cat-laptops.jpg";
import processorsImage from "@/assets/cat-processors.jpg";
import cctvImage from "@/assets/cat-cctv.jpg";
import ssdImage from "@/assets/cat-ram-ssd.jpg";
import cctvSolutionImage from "@/assets/cctv-networking.jpg";

import { CategoryCard } from "@/components/commerce/CategoryCard";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { ReviewCard } from "@/components/site/ReviewCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import {
  ActionButton,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { categories, featuredProduct, popularProducts, products } from "@/data/catalog";
import { brands, cctvSolutions, services, testimonials } from "@/data/content";
import { site, getWhatsAppUrl } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FloppyKart | Computers, Laptops, Hardware, CCTV & IT Solutions" },
      {
        name: "description",
        content:
          "FloppyKart, serving since 2014, offers laptops, desktops, computer hardware, CCTV, networking, printers, Quick Heal antivirus and professional repair services.",
      },
      {
        property: "og:title",
        content: "FloppyKart — Technology Products & Professional Solutions",
      },
      {
        property: "og:description",
        content:
          "Laptops, desktops, hardware, CCTV, networking and genuine antivirus with expert service. Trusted since 2014.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPopularProducts =
    selectedCategory === "all"
      ? popularProducts
      : products.filter((p) => p.categorySlug === selectedCategory);

  const trustItems = [
    { title: "Trusted Since 2014", desc: "10+ years serving customers", icon: ShieldCheck },
    { title: "Genuine Products", desc: "Authentic manufacturer supply", icon: CheckCircle2 },
    { title: "Expert IT Service", desc: "In-house & on-site technicians", icon: Zap },
    { title: "Competitive Pricing", desc: "Best price quotes on request", icon: Star },
    { title: "After-Sales Support", desc: "Dedicated repair & assistance", icon: Lock },
  ];

  return (
    <>
      {/* -------------------------------------------------------------------------- */}
      {/* 1. HERO SECTION — CLEAN RETAIL & E-COMMERCE THEME                           */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200/60">
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/90 bg-emerald-50 px-3.5 py-1 text-[11px] font-bold tracking-wide text-emerald-800 uppercase mb-4 shadow-2xs">
                <ShieldCheck className="size-3.5 text-emerald-600" />
                <span>Trusted Technology Partner Since 2014</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="text-3xl leading-[1.12] font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Technology Products.{" "}
                <span className="text-emerald-600 font-extrabold">
                  Professional Solutions.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Computers, hardware, CCTV, networking, printers and professional repair services — all from one trusted technology partner.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap gap-3">
                <ActionButton asChild variant="primary" size="lg">
                  <Link to="/products">
                    Explore Products <ArrowRight className="size-4" />
                  </Link>
                </ActionButton>
                <ActionButton asChild variant="outline" size="lg">
                  <Link to="/contact">Get Best Price</Link>
                </ActionButton>
                <ActionButton asChild variant="soft" size="lg">
                  <a href={site.contact.phoneHref}>Talk to an Expert</a>
                </ActionButton>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-slate-200/80 pt-5 text-xs text-slate-600">
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-slate-900 font-semibold"
                >
                  <Phone className="size-3.5 text-emerald-600" /> {site.contact.phone}
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href={getWhatsAppUrl(undefined, "Hi FloppyKart, I want to request a price quote.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-emerald-700 font-semibold text-emerald-600"
                >
                  <MessageCircle className="size-3.5 text-emerald-600" /> Instant WhatsApp Quote
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Hero Clean Retail Showcase */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5 px-1">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Featured Products & Systems
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Genuine Inventory
                  </span>
                </div>

                {/* 2x2 Retail Product Grid */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Item 1: Laptops */}
                  <div className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 transition-all hover:bg-white hover:shadow-sm hover:border-slate-300">
                    <div className="aspect-16/10 overflow-hidden rounded-lg bg-white border border-slate-100 mb-2">
                      <img
                        src={laptopsImage}
                        alt="Branded Laptops"
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      Notebooks & Laptops
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 truncate mt-0.5">
                      Business & Student Laptops
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500 mt-1">
                      Price on Request
                    </p>
                  </div>

                  {/* Item 2: Processors */}
                  <div className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 transition-all hover:bg-white hover:shadow-sm hover:border-slate-300">
                    <div className="aspect-16/10 overflow-hidden rounded-lg bg-white border border-slate-100 mb-2">
                      <img
                        src={processorsImage}
                        alt="Intel & AMD Processors"
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      Intel & AMD CPUs
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 truncate mt-0.5">
                      Core i3 / i5 / i7 & Ryzen
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500 mt-1">
                      Price on Request
                    </p>
                  </div>

                  {/* Item 3: CCTV Surveillance */}
                  <div className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 transition-all hover:bg-white hover:shadow-sm hover:border-slate-300">
                    <div className="aspect-16/10 overflow-hidden rounded-lg bg-white border border-slate-100 mb-2">
                      <img
                        src={cctvImage}
                        alt="CCTV Security System"
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      Surveillance Systems
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 truncate mt-0.5">
                      HD Dome & Bullet Cameras
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500 mt-1">
                      Price on Request
                    </p>
                  </div>

                  {/* Item 4: High Speed Storage */}
                  <div className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 transition-all hover:bg-white hover:shadow-sm hover:border-slate-300">
                    <div className="aspect-16/10 overflow-hidden rounded-lg bg-white border border-slate-100 mb-2">
                      <img
                        src={ssdImage}
                        alt="RAM & SSD Upgrades"
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      Memory & Storage
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 truncate mt-0.5">
                      NVMe SSDs & DDR4/DDR5 RAM
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500 mt-1">
                      Price on Request
                    </p>
                  </div>

                </div>

                {/* Footer Trust Bar */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 px-1">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                    Official Manufacturer Supply
                  </span>
                  <Link to="/products" className="font-bold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1">
                    Catalog <ArrowRight className="size-3" />
                  </Link>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 2. TRUST STRIP — Clean Marquee Ticker                                       */}
      {/* -------------------------------------------------------------------------- */}
      <section className="border-b border-slate-200 bg-slate-50 py-4.5 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-track flex items-center gap-6 sm:gap-10">
            {[...trustItems, ...trustItems, ...trustItems].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.title}-${index}`}
                  className="flex items-center gap-3 shrink-0 rounded-lg border border-slate-200/90 bg-white px-4 py-2 shadow-2xs transition-colors hover:border-emerald-500/60"
                >
                  <div className="grid size-8 place-items-center rounded-md bg-emerald-50 text-emerald-700 shrink-0">
                    <Icon className="size-4" />
                  </div>
                  <div className="whitespace-nowrap">
                    <p className="text-xs font-bold text-slate-900">{item.title}</p>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 3. FEATURED QUICK HEAL SECTION — CLEAN LIGHT LAYOUT                         */}
      {/* -------------------------------------------------------------------------- */}
      <Section className="bg-white">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:p-10 shadow-2xs">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Product Image */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
                  <img
                    src={featuredProduct.images[0]}
                    alt={featuredProduct.name}
                    className="w-full h-[280px] sm:h-[320px] object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4 rounded-md bg-emerald-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-xs">
                    {featuredProduct.badge}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Product Content */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Eyebrow>Antivirus & Security Focus</Eyebrow>
                <h2 className="mt-3 text-2xl font-black sm:text-3xl text-slate-900">
                  {featuredProduct.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {featuredProduct.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    Protection Features:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {featuredProduct.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-5">
                  <div>
                    <span className="text-xs text-slate-500 block">Pricing Status</span>
                    <span className="text-base font-extrabold text-emerald-700">Price on Request</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5 ml-auto">
                    <ActionButton asChild variant="primary" size="md">
                      <Link to="/contact" search={{ enquiry: featuredProduct.slug }}>
                        Get Best Price
                      </Link>
                    </ActionButton>
                    <ActionButton asChild variant="outline" size="md">
                      <Link to="/products/$slug" params={{ slug: featuredProduct.slug }}>
                        View Details
                      </Link>
                    </ActionButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 4. PRODUCT CATEGORIES                                                       */}
      {/* -------------------------------------------------------------------------- */}
      <Section light>
        <SectionHeading
          eyebrow="Browse Categories"
          title="Hardware, Systems & IT Equipment"
          subtitle="Explore all 13 computer hardware, CCTV, networking, printer and antivirus categories."
        />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal as="li" key={category.slug} delay={i * 0.03}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 5. POPULAR PRODUCTS SHOWCASE                                                */}
      {/* -------------------------------------------------------------------------- */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <SectionHeading
            eyebrow="Popular Picks"
            title="Frequently Requested Products"
            subtitle="Genuine laptops, processors, SSDs, graphics cards, printers and security software."
          />

          {/* Quick Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Products" },
              { id: "antivirus-security", label: "Antivirus" },
              { id: "processors", label: "Processors" },
              { id: "cctv-cameras", label: "CCTV" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <ProductGrid products={filteredPopularProducts} />
        </div>

        <div className="mt-9 text-center">
          <ActionButton asChild variant="outline" size="lg">
            <Link to="/products">
              View Full Product Catalog <ArrowRight className="size-4" />
            </Link>
          </ActionButton>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 6. SERVICES SECTION                                                         */}
      {/* -------------------------------------------------------------------------- */}
      <Section light>
        <SectionHeading
          eyebrow="Professional IT Services"
          title="Computer Repair & CCTV Installation"
          subtitle="In-workshop hardware repairs and on-site surveillance & networking setup by our technical team."
        />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 0.03}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-9 text-center">
          <ActionButton asChild variant="outline" size="lg">
            <Link to="/services">
              View All 11 IT Services <ArrowRight className="size-4" />
            </Link>
          </ActionButton>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 7. CCTV + NETWORKING FEATURE SECTION                                       */}
      {/* -------------------------------------------------------------------------- */}
      <Section className="bg-white">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-10 shadow-2xs">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-2xs bg-white">
                <img
                  src={cctvSolutionImage}
                  alt="CCTV camera and networking installation"
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>Surveillance & Networking</Eyebrow>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl text-slate-900">
                Security & Office Connectivity
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We offer end-to-end security camera setup, DVR/NVR configuration, structured ethernet cabling, and wireless network setup for offices, shops, and homes.
              </p>
              
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {cctvSolutions.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <ActionButton asChild variant="primary" size="lg">
                  <Link to="/contact" search={{ enquiry: "cctv-installation" }}>
                    Request Quote <ArrowRight className="size-4" />
                  </Link>
                </ActionButton>
                <ActionButton asChild variant="outline" size="lg">
                  <a href={site.contact.phoneHref}>Call CCTV Technician</a>
                </ActionButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 8. WHY CHOOSE FLOPPYKART                                                   */}
      {/* -------------------------------------------------------------------------- */}
      <Section light>
        <SectionHeading
          eyebrow="Why Choose FloppyKart"
          title="Your Local Computer & IT Partner"
          subtitle="Combining product supply with experienced technical repair and installation support."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="text-2xl font-black text-emerald-700 mb-1">Since 2014</div>
              <h3 className="text-base font-bold text-slate-900">Serving Since 2014</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Over a decade of established experience in computer hardware sales, custom builds, and repair services.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="text-2xl font-black text-emerald-700 mb-1">100%</div>
              <h3 className="text-base font-bold text-slate-900">Genuine Products</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                All laptops, components, software licences, and accessories are authentic with manufacturer warranty.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="text-2xl font-black text-emerald-700 mb-1">Expert</div>
              <h3 className="text-base font-bold text-slate-900">In-House Technicians</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Skilled technicians for component diagnostic, laptop repair, CCTV configuration, and networking.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 9. ABOUT FLOPPYKART HIGHLIGHT                                              */}
      {/* -------------------------------------------------------------------------- */}
      <Section className="bg-white">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xs">
          <Reveal>
            <Eyebrow>About FloppyKart</Eyebrow>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl text-slate-900">
              Technology Products & Professional Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Established in 2014, FloppyKart provides technology products, computer hardware and professional IT services for individuals, homes and businesses. We specialize in laptops, custom desktops, motherboards, processors, RAM, SSDs, power supplies, CCTV systems, networking, printers, Quick Heal antivirus, and LED TVs.
            </p>
            <div className="mt-7 flex justify-center">
              <ActionButton asChild variant="primary" size="lg">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="size-4" />
                </Link>
              </ActionButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 10. BRANDS COMMONLY SUPPLIED — Edge-to-Edge Compact Marquee                 */}
      {/* -------------------------------------------------------------------------- */}
      <section className="bg-slate-100/70 py-4 border-y border-slate-200 overflow-hidden w-full">
        <div className="w-full text-center mb-2.5">
          <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            Brands Commonly Supplied & Supported
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-track flex items-center gap-3 sm:gap-4 py-1">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="shrink-0 rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-800 shadow-2xs transition-all hover:border-emerald-500 hover:text-emerald-700"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 11. REVIEWS / TESTIMONIALS                                                */}
      {/* -------------------------------------------------------------------------- */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Customer Feedback"
          title="What Our Clients Say"
          subtitle="Feedback from local clients on desktop builds, CCTV setup, and repair services."
        />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((review, i) => (
            <Reveal as="li" key={review.id} delay={i * 0.04}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 12. FINAL CONTACT CTA BANNER                                               */}
      {/* -------------------------------------------------------------------------- */}
      <Section light>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Get Started Today</Eyebrow>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl text-slate-900">
            Tell Us What You Need
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Looking for a laptop, hardware component, CCTV installation, printer repair or Quick Heal antivirus? Talk to our team for the best available price quote.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ActionButton asChild variant="primary" size="lg">
              <Link to="/contact">
                Enquire Now <ArrowRight className="size-4" />
              </Link>
            </ActionButton>
            <ActionButton asChild variant="outline" size="lg">
              <a href={site.contact.phoneHref}>
                <Phone className="size-4" /> Call Now
              </a>
            </ActionButton>
            <ActionButton asChild variant="soft" size="lg">
              <a href={site.contact.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
            </ActionButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
