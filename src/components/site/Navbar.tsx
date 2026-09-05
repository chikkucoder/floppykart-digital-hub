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
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-sm border-b border-gray-200/90"
            : "border-b border-gray-200/60"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

          {/* Brand Logo — Left aligned */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group focus:outline-none" aria-label="FloppyKart home">
            <img
              src={logoFloopy}
              alt="FloppyKart"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-103"
            />
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors uppercase leading-none">
                Floppy<span className="text-emerald-600">Kart</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{
                  className:
                    "text-slate-900 font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-emerald-600",
                }}
                className="relative px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto lg:ml-0">

            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3.5 py-1.5 text-xs text-gray-500 transition-all duration-200 hover:border-emerald-400 hover:text-gray-900 hover:bg-white hover:shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Search catalog"
            >
              <Search className="size-3.5 text-gray-500" />
              <span className="hidden sm:inline-block text-gray-500">Search products...</span>
              <kbd className="hidden md:inline-flex h-4 items-center rounded border border-gray-200 bg-gray-100 px-1.5 text-[10px] font-mono text-gray-400">
                ⌘K
              </kbd>
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex size-9 items-center justify-center rounded-full text-slate-700 transition-all duration-200 hover:bg-gray-100 hover:text-emerald-600 focus:outline-none"
              aria-label="Cart"
            >
              <ShoppingCart className="size-4.5" />
              <span className="absolute -top-0.5 -right-0.5 grid size-4 place-items-center rounded-full bg-emerald-600 text-[9px] font-bold text-white">
                1
              </span>
            </button>

            {/* WhatsApp — outline green */}
            <div className="hidden xl:flex items-center">
              <a
                href={getWhatsAppUrl(undefined, "Hi FloppyKart, I want to inquire about products / services.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-emerald-700 transition-all duration-200 hover:bg-emerald-50 hover:border-emerald-600 hover:shadow-xs focus:outline-none"
              >
                <MessageCircle className="size-3.5 text-emerald-600" />
                WhatsApp
              </a>
            </div>

            {/* Get Best Price — primary CTA */}
            <div className="hidden sm:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-emerald-700 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Get Best Price
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-slate-800 transition-colors hover:bg-gray-100 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="border-t border-gray-100 bg-white lg:hidden animate-in slide-in-from-top-2 duration-200">
            <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-3 space-y-0.5" aria-label="Mobile navigation">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-slate-900 bg-emerald-50 font-bold" }}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 hover:bg-gray-50"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="size-4 text-gray-400" />
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100 mt-2 space-y-2.5">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700"
                >
                  Get Best Price <ArrowRight className="size-4" />
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={site.contact.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-gray-50"
                  >
                    <Phone className="size-4 text-gray-500" /> Call Now
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-white px-3 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
                  >
                    <MessageCircle className="size-4 text-emerald-600" /> WhatsApp
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Modals */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
