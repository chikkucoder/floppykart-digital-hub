import { Link } from "@tanstack/react-router";
import { Menu, Phone, MessageCircle, X, Search, ShoppingCart, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

import { ActionButton } from "@/components/site/primitives";
import { site, getWhatsAppUrl } from "@/data/site";
import { SearchDialog } from "@/components/site/SearchDialog";
import { CartDrawer } from "@/components/site/CartDrawer";
import logoFloopy from "@/assets/logo-floopy.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/categories", label: "Categories" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "py-1 shadow-lg bg-background/95" : "py-0"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
          {/* Brand Logo - Crisp badge container so logo image pops out with 100% clarity */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="flex items-center justify-center p-1.5 rounded-xl bg-white shadow-md border border-slate-200/80 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoFloopy}
                alt="FloppyKart Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight leading-none text-foreground">
                Floppy<span className="text-primary-soft">Kart</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wide text-muted-foreground mt-0.5">
                Since {site.established}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-foreground bg-primary/10 font-bold" }}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-foreground/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Bar - Shifted to the right */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto lg:ml-0">
            {/* Instant Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-full border border-border bg-elevated/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus:outline-none"
              aria-label="Search catalog"
            >
              <Search className="size-4 text-primary-soft" />
              <span className="hidden sm:inline-block">Search...</span>
              <kbd className="hidden md:inline-flex h-4 items-center rounded border border-border bg-muted/40 px-1.5 text-[10px] font-mono text-muted-foreground">
                ⌘K
              </kbd>
            </button>

            {/* Cart Preview Trigger */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative grid size-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
              aria-label="Wishlist / Cart"
            >
              <ShoppingCart className="size-4 text-foreground/80" />
              <span className="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                1
              </span>
            </button>

            {/* WhatsApp CTA Button (Direct Chat to 8109105896) */}
            <div className="hidden xl:flex items-center">
              <ActionButton asChild variant="outline" size="sm" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-bold">
                <a href={getWhatsAppUrl(undefined, "Hi FloppyKart, I want to inquire about products / services.")} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 text-emerald-400" /> WhatsApp
                </a>
              </ActionButton>
            </div>

            {/* Get Best Price Button */}
            <div className="hidden sm:flex items-center">
              <ActionButton asChild size="sm" className="shadow-md">
                <Link to="/contact">Get Best Price</Link>
              </ActionButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-muted/50 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open ? (
          <div className="border-t border-border/70 bg-background/95 backdrop-blur-2xl lg:hidden animate-in slide-in-from-top-2 duration-200">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-foreground bg-primary/10 font-bold" }}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </Link>
              ))}

              <div className="pt-4 border-t border-border mt-3 space-y-2.5">
                <ActionButton asChild size="md" className="w-full">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Get Best Price <ArrowRight className="size-4" />
                  </Link>
                </ActionButton>
                <div className="grid grid-cols-2 gap-2">
                  <ActionButton asChild variant="outline" size="sm" className="w-full">
                    <a href={site.contact.phoneHref}>
                      <Phone className="size-4" /> Call Now
                    </a>
                  </ActionButton>
                  <ActionButton asChild variant="soft" size="sm" className="w-full">
                    <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4 text-emerald-400" /> WhatsApp
                    </a>
                  </ActionButton>
                </div>
              </div>
            </nav>
          </div>
        ) : null}
      </header>

      {/* Modals */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
