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
      <Section className="pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>Serving Customers Since {site.established}</Eyebrow>
            <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Building Trust Through <span className="text-emerald-600 underline decoration-emerald-300 decoration-2 underline-offset-4">Technology Excellence</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Established in {site.established}, FloppyKart provides genuine technology products, computer hardware, security surveillance systems, and expert IT repair services for individuals, homes, and enterprise businesses.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ActionButton asChild variant="primary" size="lg">
                <Link to="/contact">
                  Get Best Price Quote <ArrowRight className="size-4" />
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
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xs bg-white">
              <img
                src={heroImage}
                alt="FloppyKart computer hardware and IT equipment"
                className="w-full h-[340px] sm:h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-200/90 bg-white/95 p-4 backdrop-blur-md">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Established 2014
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">
                  10+ Years of Trusted Computer Hardware & IT Solutions
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Our Legacy & Commitment</Eyebrow>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl text-slate-900">
              Your Reliable Local Technology Partner
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              At FloppyKart, we believe technology should be dependable, accessible, and backed by genuine support. Whether you are assembling a custom workstation, upgrading laptop memory, securing your commercial premises with CCTV cameras, or renewing your Quick Heal antivirus protection, our skilled technical team ensures seamless service.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We work directly with individuals, educational institutions, retail stores, and corporate offices to deliver tailor-made hardware packages with complete post-purchase peace of mind.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-black text-emerald-700">{site.established}</p>
                <p className="text-xs text-slate-500 font-semibold">Year Established</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-black text-emerald-700">100%</p>
                <p className="text-xs text-slate-500 font-semibold">Genuine Brand Commitment</p>
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
