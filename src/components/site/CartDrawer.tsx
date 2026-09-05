import { Link } from "@tanstack/react-router";
import { X, ShoppingCart, ArrowRight, ShieldCheck, Info } from "lucide-react";
import { ActionButton } from "@/components/site/primitives";
import { products } from "@/data/catalog";

export function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  // Static sample item for preview
  const sampleProduct = products[0]; // Quick Heal Antivirus Pro
  if (!sampleProduct) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-background/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-card border-l border-border shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary-soft">
                <ShoppingCart className="size-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Your Wishlist / Inquiry Cart</h2>
                <p className="text-xs text-muted-foreground">UI Preview — Full Checkout Coming Soon</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3 text-xs text-muted-foreground">
              <Info className="size-4 text-primary-soft shrink-0 mt-0.5" />
              <p>
                FloppyKart is preparing a full e-commerce checkout. Currently, you can request instant price quotes for all items in your requirement.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Saved Requirement Sample
              </p>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-elevated/40 p-3">
                <img
                  src={sampleProduct.images[0]}
                  alt={sampleProduct.name}
                  className="size-16 rounded-lg object-cover bg-muted shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-primary-soft uppercase">
                    {sampleProduct.categoryName}
                  </span>
                  <h4 className="text-sm font-semibold truncate text-foreground">
                    {sampleProduct.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    Price on Request
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border p-4 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary-soft shrink-0" />
                <span>100% Genuine products with brand warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary-soft shrink-0" />
                <span>Expert installation & on-site assistance</span>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-border bg-elevated/40 space-y-3">
            <ActionButton asChild size="lg" className="w-full">
              <Link to="/contact" search={{ enquiry: sampleProduct.slug }} onClick={onClose}>
                Request Price Quote <ArrowRight className="size-4" />
              </Link>
            </ActionButton>
            <ActionButton
              variant="outline"
              size="md"
              className="w-full"
              onClick={onClose}
            >
              Continue Browsing
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
