import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, HardDrive, Wrench, Clock, Award } from "lucide-react";

import { ActionButton, Eyebrow, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { site } from "@/data/site";
import { brands } from "@/data/content";
import heroImage from "@/assets/hero-composition.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FloppyKart — Technology Products & IT Services Since 2014" },
      {
        name: "description",
        content:
          "Established in 2014, FloppyKart supplies genuine laptops, desktops, computer hardware, CCTV systems, networking equipment and Quick Heal antivirus with expert repair services.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const highlights = [
    {
      title: "Established in 2014",
      description: "Over a decade of hands-on experience in computer hardware sales, custom desktop assembly, and technical repairs.",
      icon: Clock,
    },
    {
      title: "Genuine Brand Supply",
      description: "We source authentic products with manufacturer warranties across top technology and security brands.",
      icon: ShieldCheck,
    },
    {
      title: "Comprehensive IT Services",
      description: "From component-level repair to office networking and CCTV surveillance deployment, we handle it all.",
      icon: Wrench,
    },
    {
      title: "Customer-First Support",
      description: "Transparent guidance without pushy sales — we recommend exact system specifications suited to your budget.",
      icon: Award,
    },
  ];

  const productCoverage = [
    "Laptops & Notebooks",
    "Branded & Custom Desktops",
    "Processors (Intel & AMD)",
    "Motherboards & VRM",
    "RAM & High-Speed SSDs",
    "NVIDIA & AMD Graphics Cards",
    "ATX Power Supplies (SMPS)",
    "CCTV Surveillance & DVR/NVR",
    "Laser & Inkjet Printers",
    "Quick Heal Antivirus Licences",
    "Structured Office Networking",
    "Smart LED TVs",
  ];

  return (
    <>
      {/* Hero Header */}
      <Section className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>Serving Customers Since {site.established}</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Building Trust Through <span className="text-gradient">Technology Excellence</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Established in {site.established}, FloppyKart provides genuine technology products, computer hardware, security surveillance systems, and expert IT repair services for individuals, homes, and enterprise businesses.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ActionButton asChild size="lg">
                <Link to="/contact">
                  Get Best Price Quote <ArrowRight />
                </Link>
              </ActionButton>
              <ActionButton asChild variant="outline" size="lg">
                <Link to="/products">Browse Product Catalog</Link>
              </ActionButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Story & Image Section */}
      <Section light>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <img
                src={heroImage}
                alt="FloppyKart computer hardware and IT equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/80 bg-background/90 p-4 backdrop-blur-md">
                <p className="text-xs font-bold text-primary-soft uppercase tracking-wider">
                  Established 2014
                </p>
                <p className="text-sm font-semibold text-foreground mt-0.5">
                  10+ Years of Trusted Computer Hardware & IT Solutions
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Our Legacy & Commitment</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Your Reliable Local Technology Partner
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At FloppyKart, we believe technology should be dependable, accessible, and backed by genuine support. Whether you are assembling a custom workstation, upgrading laptop memory, securing your commercial premises with CCTV cameras, or renewing your Quick Heal antivirus protection, our skilled technical team ensures seamless service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We work directly with individuals, educational institutions, retail stores, and corporate offices to deliver tailor-made hardware packages with complete post-purchase peace of mind.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="text-2xl font-bold text-primary-soft">{site.established}</p>
                <p className="text-xs text-muted-foreground font-medium">Year Established</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="text-2xl font-bold text-primary-soft">100%</p>
                <p className="text-xs text-muted-foreground font-medium">Genuine Brand Commitment</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Core Values / Highlights Grid */}
      <Section>
        <SectionHeading
          eyebrow="Why FloppyKart"
          title="What Sets Us Apart"
          subtitle="We combine product supply with expert technician support for complete end-to-end IT solutions."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary-soft">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Complete Product & Service Scope */}
      <Section light>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Catalog & Services"
            title="Complete Technology & Security Scope"
            subtitle="Explore our comprehensive range of electronics, computer parts, surveillance and repairs."
            align="center"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productCoverage.map((item) => (
              <Reveal key={item}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                  <CheckCircle2 className="size-5 text-primary-soft shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Brands Commonly Supplied */}
      <Section>
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Brands We Commonly Supply & Support
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-base font-bold text-muted-foreground/80 hover:text-foreground transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section light>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Have a computer, CCTV, or IT hardware requirement?
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Talk to our team today. We will assess your requirement and provide the best available price quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ActionButton asChild size="lg">
              <Link to="/contact">
                Enquire Now <ArrowRight className="size-4" />
              </Link>
            </ActionButton>
            <ActionButton asChild variant="outline" size="lg">
              <a href={site.contact.phoneHref}>Call Our Technical Team</a>
            </ActionButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
