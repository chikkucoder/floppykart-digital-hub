import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wrench, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { services } from "@/data/content";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ActionButton, Reveal, Section, SectionHeading, Eyebrow } from "@/components/site/primitives";
import { site } from "@/data/site";

const title = "Repair & Installation Services — FloppyKart";
const description =
  "Laptop, desktop, printer and hardware repair plus CCTV, networking, software and antivirus installation from FloppyKart, serving customers since 2014.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Our Technology Services"
          title="Professional IT Services, Repairs & Installation"
          subtitle={description}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <li key={service.slug} id={service.slug}>
              <Reveal delay={(i % 4) * 0.05}>
                <ServiceCard service={service} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Service Consultation & Booking Banner */}
      <Section light>
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-lg">
          <Reveal>
            <Eyebrow>In-Workshop & On-Site Assistance</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-foreground">
              Need Technician Help for Laptop, CCTV or Networking?
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Describe your technical issue or project requirement. Our technicians will diagnose the fault and provide a transparent estimate.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ActionButton asChild size="lg">
                <Link to="/contact">
                  Book Repair Service <ArrowRight className="size-4" />
                </Link>
              </ActionButton>
              <ActionButton asChild variant="outline" size="lg">
                <a href={site.contact.phoneHref}>
                  <Phone className="size-4" /> Call Technical Support
                </a>
              </ActionButton>
              <ActionButton asChild variant="soft" size="lg">
                <a href={site.contact.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp Technician
                </a>
              </ActionButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
