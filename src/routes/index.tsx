import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import heroImage from "@/assets/hero-composition.jpg";
import cctvImage from "@/assets/cctv-networking.jpg";
import { CategoryCard } from "@/components/commerce/CategoryCard";
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
import { categories, featuredProduct, popularProducts } from "@/data/catalog";
import { brands, cctvSolutions, services, testimonials } from "@/data/content";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FloppyKart — Laptops, Hardware, CCTV & Antivirus Since 2014" },
      {
        name: "description",
        content:
          "FloppyKart supplies laptops, desktops, computer hardware, CCTV, networking, printers and genuine antivirus, plus expert repair and installation. Get the best price today.",
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
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <Eyebrow>Trusted since {site.established}</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Technology products.{" "}
              <span className="text-gradient">Professional solutions.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton asChild size="lg">
                <Link to="/contact">
                  Get Best Price <ArrowRight />
                </Link>
              </ActionButton>
              <ActionButton asChild variant="outline" size="lg">
                <Link to="/products">Browse Products</Link>
              </ActionButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Phone className="size-4 text-primary-soft" /> Call Now
              </a>
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircle className="size-4 text-primary-soft" /> WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-glow)]">
              <img
                src={heroImage}
                alt="Laptops, computer hardware and CCTV equipment supplied by FloppyKart"
                className="h-full w-full object-cover"
                width={1024}
                height={768}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured product */}
      <Section>
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Featured</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              {featuredProduct.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {featuredProduct.summary}
            </p>
            <ul className="mt-6 space-y-2.5">
              {featuredProduct.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary-soft" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton asChild>
                <Link to="/products/$slug" params={{ slug: featuredProduct.slug }}>
                  View Details
                </Link>
              </ActionButton>
              <ActionButton asChild variant="outline">
                <Link to="/contact" search={{ enquiry: featuredProduct.slug }}>
                  Enquire Now
                </Link>
              </ActionButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={featuredProduct.images[0]}
                alt={featuredProduct.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Categories */}
      <Section light>
        <SectionHeading
          eyebrow="Shop by category"
          title="Everything for your setup, in one place"
          subtitle="Laptops, desktops, components, peripherals, security and networking."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((category, i) => (
            <Reveal as="li" key={category.slug} delay={i * 0.05}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-10">
          <ActionButton asChild variant="outline">
            <Link to="/categories">
              View All Categories <ArrowRight />
            </Link>
          </ActionButton>
        </div>
      </Section>

      {/* Popular products */}
      <Section>
        <SectionHeading
          eyebrow="Popular picks"
          title="Frequently requested products"
          subtitle="Share your requirement and we will quote the current best price."
        />
        <div className="mt-10">
          <ProductGrid products={popularProducts.slice(0, 8)} scrollOnMobile />
        </div>
      </Section>

      {/* Services */}
      <Section light>
        <SectionHeading
          eyebrow="Services"
          title="Repair, installation and support"
          subtitle="In-workshop repairs and on-site installation handled by our own team."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
        <div className="mt-10">
          <ActionButton asChild variant="outline">
            <Link to="/services">
              All Services <ArrowRight />
            </Link>
          </ActionButton>
        </div>
      </Section>

      {/* CCTV & networking */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <img
                src={cctvImage}
                alt="CCTV camera and networking equipment installation"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>CCTV & Networking</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Security and connectivity, installed properly
            </h2>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {cctvSolutions.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary-soft" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ActionButton asChild>
                <Link to="/contact">Get Best Price</Link>
              </ActionButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Brands */}
      <Section light className="py-12 sm:py-14 lg:py-16">
        <Reveal className="max-w-none">
          <p className="text-center text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Brands we commonly supply
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {brands.map((brand) => (
              <li key={brand} className="text-sm font-semibold text-muted-foreground">
                {brand}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Customer feedback"
          title="What customers say"
          subtitle="Placeholder reviews shown below — replace them with real, verified feedback."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((review, i) => (
            <Reveal as="li" key={review.id} delay={i * 0.05}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Final CTA */}
      <Section light>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Tell us what you need — we will quote the best price
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Send your requirement by phone, WhatsApp or the enquiry form.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ActionButton asChild size="lg">
              <Link to="/contact">Enquire Now</Link>
            </ActionButton>
            <ActionButton asChild variant="outline" size="lg">
              <a href={site.contact.phoneHref}>
                <Phone /> Call Now
              </a>
            </ActionButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
