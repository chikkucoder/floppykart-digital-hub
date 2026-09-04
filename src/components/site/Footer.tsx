import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { site } from "@/data/site";
import { categories } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="text-base font-bold tracking-tight">
            Floppy<span className="text-primary-soft">Kart</span>
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>
          <p className="mt-4 text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Trusted since {site.established}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">All Products</Link></li>
            <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Popular Categories</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {categories.slice(0, 5).map((category) => (
              <li key={category.slug}>
                <Link
                  to="/categories/$slug"
                  params={{ slug: category.slug }}
                  className="hover:text-foreground"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 text-primary-soft" />
              <a href={site.contact.phoneHref} className="hover:text-foreground">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 size-4 text-primary-soft" />
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 text-primary-soft" />
              <a href={site.contact.emailHref} className="hover:text-foreground">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 text-primary-soft" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 text-primary-soft" />
              <span>
                {site.contact.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Contact details on this site are placeholders pending confirmation.</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border/70 bg-background/95 backdrop-blur-xl sm:hidden">
      <a
        href={site.contact.phoneHref}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-foreground"
      >
        <Phone className="size-4 text-primary-soft" /> Call Now
      </a>
      <a
        href={site.contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
      >
        <MessageCircle className="size-4" /> WhatsApp
      </a>
    </div>
  );
}
