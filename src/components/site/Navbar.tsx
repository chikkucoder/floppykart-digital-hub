import { Link } from "@tanstack/react-router";
import { Menu, Phone, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { ActionButton } from "@/components/site/primitives";
import { site } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            F
          </span>
          <span className="text-base font-bold tracking-tight">
            Floppy<span className="text-primary-soft">Kart</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-foreground bg-foreground/5" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <ActionButton asChild variant="outline" size="sm">
            <a href={site.contact.phoneHref}>
              <Phone /> Call Now
            </a>
          </ActionButton>
          <ActionButton asChild size="sm">
            <a href={site.contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp Us
            </a>
          </ActionButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                className="rounded-lg px-2 py-3 text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
