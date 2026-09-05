import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { site, getWhatsAppUrl } from "@/data/site";
import { categories } from "@/data/catalog";
import logoFloopy from "@/assets/logo-floopy.png";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background text-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand Col */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoFloopy}
              alt="FloppyKart Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-tight">
              Floppy<span className="text-primary-soft">Kart</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>
          <p className="text-xs text-muted-foreground">
            {site.description}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs text-primary-soft font-semibold">
            <ShieldCheck className="size-4 shrink-0" />
            <span>Serving Customers Since {site.established}</span>
          </div>
        </div>

        {/* Company Col */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-foreground transition-colors">Products</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Products Col */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Popular Categories</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link
                  to="/categories/$slug"
                  params={{ slug: cat.slug }}
                  className="hover:text-foreground transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services & Contact Col */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Services & Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 text-primary-soft shrink-0" />
              <div>
                <a href={site.contact.phoneHref} className="hover:text-foreground transition-colors block">
                  Mobile: {site.contact.phone}
                </a>
                <a href={site.contact.landlineHref} className="hover:text-foreground transition-colors block text-xs text-muted-foreground mt-0.5">
                  Landline: {site.contact.landline}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 size-4 text-primary-soft shrink-0" />
              <a
                href={getWhatsAppUrl(undefined, "Hi FloppyKart, I want to inquire about products / services.")}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors text-emerald-400 font-medium"
              >
                WhatsApp (8109105896)
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 text-primary-soft shrink-0" />
              <a href={site.contact.emailHref} className="hover:text-foreground transition-colors text-xs">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 text-primary-soft shrink-0" />
              <span className="text-xs leading-relaxed">{site.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 bg-elevated/40">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-[11px] text-muted-foreground/80">
            A-11, DAKSHIN GANGOTRI, SUPELA , BHILAI (C.G) PINCODE- 490023
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border/70 bg-background/95 backdrop-blur-xl sm:hidden">
      <a
        href={site.contact.phoneHref}
        className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-foreground hover:bg-muted/50 transition-colors"
      >
        <Phone className="size-4 text-primary-soft" /> Call Now
      </a>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-emerald-600 py-3 text-xs font-bold text-white hover:bg-emerald-500 transition-all"
      >
        <MessageCircle className="size-4" /> WhatsApp Us
      </a>
    </div>
  );
}
