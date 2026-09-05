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
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import heroImage from "@/assets/hero-composition.jpg";
import cctvImage from "@/assets/cctv-networking.jpg";
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
      {/* 1. HERO SECTION — MAJOR IMPROVEMENT                                        */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-background pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-32">
        {/* Glowing background grid backdrop */}
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/10 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-primary-soft uppercase">
                  <ShieldCheck className="size-3.5" /> Trusted Since {site.established}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-soft/40 bg-primary-soft/10 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-primary-soft uppercase">
                  <Sparkles className="size-3.5" /> Featured: Quick Heal Antivirus Pro
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                Technology Products.{" "}
                <span className="text-gradient">Professional Solutions.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Trusted technology products, computer hardware, CCTV, networking and expert repair services — serving customers since 2014.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <ActionButton asChild size="lg">
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
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border/60 pt-6 text-sm text-muted-foreground">
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground font-medium"
                >
                  <Phone className="size-4 text-primary-soft" /> {site.contact.phone}
                </a>
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground font-medium"
                >
                  <MessageCircle className="size-4 text-primary-soft" /> Instant WhatsApp Quote
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Hero Visual Composition with Floating Cards */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Visual Card */}
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-glow)] group">
                  <img
                    src={heroImage}
                    alt="FloppyKart computer hardware and CCTV composite"
                    className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-103"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl border border-border/70 bg-card/90 backdrop-blur-md">
                    <p className="text-xs font-bold text-primary-soft uppercase tracking-wider">
                      FloppyKart Digital Hub
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">
                      Laptops • Desktops • CCTV • Antivirus • Repairs
                    </p>
                  </div>
                </div>

                {/* Floating Card 1: Quick Heal Antivirus */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -top-5 -left-4 sm:-left-8 hidden sm:flex items-center gap-3 rounded-2xl border border-primary/40 bg-card/95 p-3.5 shadow-2xl backdrop-blur-md max-w-xs"
                >
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/20 text-primary-soft shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Quick Heal Antivirus Pro</p>
                    <p className="text-[11px] text-primary-soft font-semibold">Current Product Focus</p>
                  </div>
                </motion.div>

                {/* Floating Card 2: Computer Hardware */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-1/2 -right-4 sm:-right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3.5 shadow-2xl backdrop-blur-md"
                >
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary-soft shrink-0">
                    <Cpu className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Computer Hardware</p>
                    <p className="text-[11px] text-muted-foreground">Processors, RAM & SSDs</p>
                  </div>
                </motion.div>

                {/* Floating Card 3: CCTV & Networking */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-6 left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3.5 shadow-2xl backdrop-blur-md"
                >
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary-soft shrink-0">
                    <Camera className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">CCTV & Networking</p>
                    <p className="text-[11px] text-muted-foreground">Installation & Maintenance</p>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 2. TRUST STRIP — Infinite Right to Left Marquee (Pauses on Hover)           */}
      {/* -------------------------------------------------------------------------- */}
      <section className="border-y border-border/70 bg-elevated/40 py-6 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-track flex items-center gap-8 sm:gap-12">
            {/* Double the items to make the infinite loop seamless */}
            {[...trustItems, ...trustItems, ...trustItems].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.title}-${index}`}
                  className="flex items-center gap-3 shrink-0 rounded-xl border border-border/50 bg-card/60 px-4 py-2.5 shadow-sm transition-colors hover:border-primary/50 hover:bg-card"
                >
                  <div className="grid size-9 place-items-center rounded-lg bg-primary/15 text-primary-soft shrink-0">
                    <Icon className="size-4" />
                  </div>
                  <div className="whitespace-nowrap">
                    <p className="text-xs font-bold text-foreground">{item.title}</p>
                    <p className="text-[10px] text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 3. FEATURED QUICK HEAL SECTION                                             */}
      {/* -------------------------------------------------------------------------- */}
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 size-96 rounded-full bg-primary/15 blur-[120px]" />
        
        <div className="relative rounded-3xl border border-primary/30 bg-card p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-glow)]">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Product Image */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-elevated p-2">
                  <img
                    src={featuredProduct.images[0]}
                    alt={featuredProduct.name}
                    className="w-full h-[320px] object-cover rounded-xl"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                    {featuredProduct.badge}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Product Content */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Eyebrow>Current Business Focus</Eyebrow>
                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-foreground">
                  {featuredProduct.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featuredProduct.description}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Protection Features:
                  </p>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {featuredProduct.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm font-medium text-foreground/90">
                        <CheckCircle2 className="size-4 text-primary-soft shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
                  <div>
                    <span className="text-xs text-muted-foreground block">Price Status</span>
                    <span className="text-lg font-bold text-primary-soft">Price on Request</span>
                  </div>
                  <div className="flex flex-wrap gap-3 ml-auto">
                    <ActionButton asChild size="md">
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
          eyebrow="Explore Our Products"
          title="Everything you need for your computer, security and connectivity."
          subtitle="Explore all 13 hardware, components, CCTV, printer, and security categories."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal as="li" key={category.slug} delay={i * 0.04}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 5. POPULAR PRODUCTS SHOWCASE                                                */}
      {/* -------------------------------------------------------------------------- */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Popular Picks"
            title="Frequently Requested Products"
            subtitle="Genuine computer components, laptops, antivirus licences and CCTV systems."
          />

          {/* Quick Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              All Picks
            </button>
            <button
              onClick={() => setSelectedCategory("antivirus-security")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === "antivirus-security"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              Antivirus
            </button>
            <button
              onClick={() => setSelectedCategory("processors")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === "processors"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              Processors
            </button>
            <button
              onClick={() => setSelectedCategory("cctv-cameras")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                selectedCategory === "cctv-cameras"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              CCTV
            </button>
          </div>
        </div>

        <div className="mt-10">
          <ProductGrid products={filteredPopularProducts} />
        </div>

        <div className="mt-10 text-center">
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
          eyebrow="Our Technology Services"
          title="Repair, Installation & Technical Support"
          subtitle="In-workshop computer repairs and on-site surveillance & network deployment by our technicians."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 0.04}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <ActionButton asChild variant="outline">
            <Link to="/services">
              View All 11 IT Services <ArrowRight />
            </Link>
          </ActionButton>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 7. CCTV + NETWORKING FEATURE SECTION                                       */}
      {/* -------------------------------------------------------------------------- */}
      <Section>
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-card)]">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <img
                  src={cctvImage}
                  alt="CCTV camera and networking installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>Surveillance & Infrastructure</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-foreground">
                Security & Connectivity Solutions
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                We provide complete site surveys, camera placement, high-definition DVR/NVR recorders, office structured cabling, and remote mobile viewing setup.
              </p>
              
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {cctvSolutions.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-foreground/90">
                    <CheckCircle2 className="size-4 text-primary-soft shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <ActionButton asChild size="lg">
                  <Link to="/contact" search={{ enquiry: "cctv-installation" }}>
                    Request Installation Quote <ArrowRight className="size-4" />
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
          title="Your Trusted Computer & IT Partner"
          subtitle="Combining product supply with experienced technical repair and installation support."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-3xl font-extrabold text-primary-soft mb-2">2014</div>
              <h3 className="text-lg font-bold text-foreground">Serving Since 2014</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Over a decade of established experience in computer hardware sales, custom builds, and repairs.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-3xl font-extrabold text-primary-soft mb-2">100%</div>
              <h3 className="text-lg font-bold text-foreground">Genuine Products</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                All laptops, components, software licences, and accessories are authentic with manufacturer warranty.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-3xl font-extrabold text-primary-soft mb-2">Expert</div>
              <h3 className="text-lg font-bold text-foreground">In-House Technicians</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Skilled technicians for component diagnostic, laptop repair, CCTV configuration, and networking.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 9. ABOUT FLOPPYKART HIGHLIGHT                                              */}
      {/* -------------------------------------------------------------------------- */}
      <Section>
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-lg">
          <Reveal>
            <Eyebrow>About FloppyKart</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-foreground">
              Technology Products & Professional Solutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Established in 2014, FloppyKart provides technology products, computer hardware and professional IT services for individuals, homes and businesses. We specialize in laptops, custom desktops, motherboards, processors, RAM, SSDs, power supplies, CCTV systems, networking, printers, Quick Heal antivirus, and LED TVs.
            </p>
            <div className="mt-8 flex justify-center">
              <ActionButton asChild size="lg">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="size-4" />
                </Link>
              </ActionButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------------------------- */}
      {/* 10. BRANDS COMMONLY SUPPLIED — Full Width Edge-to-Edge Compact Marquee     */}
      {/* -------------------------------------------------------------------------- */}
      <section className="section-light py-4 border-y border-slate-200/80 overflow-hidden w-full">
        <div className="w-full text-center mb-2.5">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-slate-500 uppercase">
            Brands Commonly Supplied & Supported
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-track flex items-center gap-4 sm:gap-6 py-1">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="shrink-0 rounded-xl border border-slate-200/90 bg-white px-5 py-2 text-xs sm:text-sm font-bold text-slate-800 shadow-sm transition-all hover:scale-105 hover:border-primary hover:text-primary hover:shadow-md"
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
      <Section>
        <SectionHeading
          eyebrow="What Our Customers Say"
          title="Customer Testimonials"
          subtitle="Feedback from clients on desktop builds, CCTV setup, and repair services."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((review, i) => (
            <Reveal as="li" key={review.id} delay={i * 0.05}>
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
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-foreground">
            Tell Us What You Need
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Looking for a laptop, hardware component, CCTV installation, printer repair or Quick Heal antivirus? Talk to our team for the best available price quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ActionButton asChild size="lg">
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
