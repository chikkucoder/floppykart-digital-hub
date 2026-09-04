import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/content";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ActionButton, Reveal, Section, SectionHeading } from "@/components/site/primitives";

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
    <Section>
      <SectionHeading eyebrow="Services" title="Repair, installation and support" subtitle={description} />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="li" key={service.slug} id={service.slug} delay={(i % 3) * 0.06}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </ul>

      <div className="mt-14 rounded-2xl border border-border bg-card p-8 text-center">
        <h2 className="text-2xl font-semibold">Need help with a specific issue?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Describe the problem and we will advise whether it is a workshop repair or an
          on-site visit, along with an estimate.
        </p>
        <ActionButton asChild size="lg" className="mt-6">
          <Link to="/contact">Talk to Our Team</Link>
        </ActionButton>
      </div>
    </Section>
  );
}
