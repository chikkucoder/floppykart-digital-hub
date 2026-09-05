import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { site, getWhatsAppUrl } from "@/data/site";
import { getProduct } from "@/data/catalog";
import { ActionButton, Section, SectionHeading, Eyebrow } from "@/components/site/primitives";

const title = "Contact FloppyKart — Sales, Service & Best Price Quotes";
const description =
  "Call, WhatsApp or send your requirement to FloppyKart for product quotes, repair bookings and CCTV or networking site visits.";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { enquiry?: string } => {
    const enquiry = search["enquiry"];
    return typeof enquiry === "string" ? { enquiry } : {};
  },
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

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: product ? product.name : "Quick Heal Antivirus Pro",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Open WhatsApp directly with prefilled message
    const messageText = `Hi FloppyKart,\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}\nDetails: ${formData.message || 'Please share price & availability.'}`;
    window.open(getWhatsAppUrl(undefined, messageText), "_blank");
    setFormSubmitted(true);
  };

  return (
    <Section>
      <SectionHeading
        eyebrow="Tell Us What You Need"
        title="Get Best Price Quote & IT Assistance"
        subtitle="Looking for a laptop, hardware component, CCTV installation, repair or antivirus? Talk to our team."
      />

      {product ? (
        <div className="mt-6 rounded-2xl border border-primary/40 bg-primary/10 p-4 text-sm text-primary-soft flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 shrink-0" />
            <span>
              Enquiry initiated for <strong className="font-semibold text-foreground">{product.name}</strong>.
            </span>
          </div>
          <a
            href={getWhatsAppUrl(product.name)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg hover:bg-emerald-500/30 transition-colors"
          >
            <MessageCircle className="size-3.5" /> Chat on WhatsApp
          </a>
        </div>
      ) : null}

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        {/* Left Column: Direct Contact Details */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] space-y-4">
            <h3 className="text-lg font-bold text-foreground">Direct Contact Channels</h3>
            
            <div className="space-y-3">
              <ContactTile
                icon={<Phone className="size-5" />}
                label="Mobile Phone"
                value={site.contact.phone}
                href={site.contact.phoneHref}
              />
              <ContactTile
                icon={<Phone className="size-5" />}
                label="Landline"
                value={site.contact.landline}
                href={site.contact.landlineHref}
              />
              <ContactTile
                icon={<MessageCircle className="size-5 text-emerald-400" />}
                label="Instant WhatsApp Chat (8109105896)"
                value="Click to chat on WhatsApp"
                href={getWhatsAppUrl(product ? product.name : undefined)}
                target="_blank"
              />
              <ContactTile
                icon={<Mail className="size-5" />}
                label="Email Support"
                value={site.contact.email}
                href={site.contact.emailHref}
              />
              <ContactTile
                icon={<MapPin className="size-5" />}
                label="Store & Workshop Address"
                value={site.contact.address}
                href={site.contact.mapsHref}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              <Clock className="size-4 text-primary-soft" /> Business Hours
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {site.contact.hours.map((h) => (
                <li key={h.days} className="flex justify-between border-b border-border/50 pb-2 last:border-0">
                  <span className="font-semibold text-foreground">{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Lead Generation Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold text-foreground mb-2">Send Instant Inquiry</h3>
            <p className="text-xs text-muted-foreground mb-6">
              Fill out your requirement details below to send directly via WhatsApp or inquiry request.
            </p>

            {formSubmitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-4">
                <CheckCircle2 className="size-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-foreground">Inquiry Sent to WhatsApp!</h4>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Thank you, <strong className="text-foreground">{formData.name}</strong>. If WhatsApp did not open automatically, click the button below to complete chat.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <ActionButton asChild variant="solid">
                    <a href={getWhatsAppUrl(formData.requirement, `Hi FloppyKart, Name: ${formData.name}, Phone: ${formData.phone}, Requirement: ${formData.requirement}`)} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4" /> Open WhatsApp Chat
                    </a>
                  </ActionButton>
                  <ActionButton
                    variant="outline"
                    size="sm"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Inquiry
                  </ActionButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-border bg-elevated px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 8109105896"
                      className="w-full rounded-xl border border-border bg-elevated px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. COMPUTERZONE33@GMAIL.COM"
                      className="w-full rounded-xl border border-border bg-elevated px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Requirement Type
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full rounded-xl border border-border bg-elevated px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="Quick Heal Antivirus Pro">Quick Heal Antivirus Pro</option>
                      <option value="Laptop Purchase / Repair">Laptop Purchase / Repair</option>
                      <option value="Custom Desktop Assembly">Custom Desktop Assembly</option>
                      <option value="CCTV Installation & Maintenance">CCTV Installation & Maintenance</option>
                      <option value="Office Networking">Office Networking</option>
                      <option value="Computer Hardware / RAM / SSD">Computer Hardware / RAM / SSD</option>
                      <option value="Printer Purchase / Repair">Printer Purchase / Repair</option>
                      <option value="Other Technology Service">Other Technology Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    Requirement Details / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirement, preferred brand, or repair issue..."
                    className="w-full rounded-xl border border-border bg-elevated px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <ActionButton type="submit" size="lg" className="flex-1">
                    Send Inquiry on WhatsApp <MessageCircle className="size-4" />
                  </ActionButton>
                  <ActionButton
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(getWhatsAppUrl(formData.requirement), '_blank')}
                  >
                    Direct Chat
                  </ActionButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactTile({
  icon,
  label,
  value,
  href,
  target,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className="group flex gap-4 rounded-xl border border-border bg-elevated/40 p-3.5 transition-all hover:border-primary/50 hover:bg-primary/5"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary-soft transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
          {label}
        </span>
        <span className="mt-0.5 block text-xs font-semibold text-foreground truncate">{value}</span>
      </span>
    </a>
  );
}
