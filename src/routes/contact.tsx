import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { getProduct } from "@/data/catalog";
import { ActionButton, Section, SectionHeading } from "@/components/site/primitives";

const title = "Contact FloppyKart — Sales, Service & Quotes";
const description =
  "Call, WhatsApp or email FloppyKart for product quotes, repair bookings and CCTV or networking site visits.";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    enquiry: typeof search.enquiry === "string" ? search.enquiry : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { enquiry } = Route.useSearch();
  const product = enquiry ? getProduct(enquiry) : undefined;

  return (
    <Section>
      <SectionHeading eyebrow="Contact" title="Get in touch" subtitle={description} />

      {product ? (
        <p className="mt-6 rounded-xl border border-primary/30 bg-primary/10 px-5 py-4 text-sm text-primary-soft">
          Enquiry started for <strong className="font-semibold">{product.name}</strong> — mention
          this product when you call or message us.
        </p>
      ) : null}

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <ContactTile
          icon={<Phone className="size-5" />}
          label="Phone"
          value={site.contact.phone}
          href={site.contact.phoneHref}
        />
        <ContactTile
          icon={<MessageCircle className="size-5" />}
          label="WhatsApp"
          value={site.contact.whatsapp}
          href={site.contact.whatsappHref}
        />
        <ContactTile
          icon={<Mail className="size-5" />}
          label="Email"
          value={site.contact.email}
          href={site.contact.emailHref}
        />
        <ContactTile
          icon={<MapPin className="size-5" />}
          label="Shop address"
          value={site.contact.address}
          href={site.contact.mapsHref}
        />
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">Opening hours</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {site.contact.hours.map((h) => (
            <li key={h.days} className="flex justify-between gap-4">
              <span>{h.days}</span>
              <span className="text-foreground">{h.time}</span>
            </li>
          ))}
        </ul>
        <ActionButton asChild size="lg" className="mt-6 w-full sm:w-auto">
          <a href={site.contact.whatsappHref}>Message on WhatsApp</a>
        </ActionButton>
      </div>
    </Section>
  );
}

function ContactTile({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary-soft transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </span>
      <span>
        <span className="block text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {label}
        </span>
        <span className="mt-1 block text-sm font-medium">{value}</span>
      </span>
    </a>
  );
}
