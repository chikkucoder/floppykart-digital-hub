import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Product } from "@/data/catalog";
import { PriceDisplay } from "./PriceDisplay";
import { CartButton, WishlistButton } from "./CartWishlistButtons";
import { ActionButton } from "@/components/site/primitives";
import { getWhatsAppUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-elevated">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          width={768}
          height={576}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-107"
        />
        {product.badge ? (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold tracking-wide text-primary-foreground uppercase">
            {product.badge}
          </span>
        ) : null}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100 max-sm:opacity-100">
          <WishlistButton />
          <CartButton />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {product.categoryName}
        </p>
        <h3 className="mt-2 text-lg leading-snug font-semibold">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{product.summary}</p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <PriceDisplay price={product.price} />
          <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80">
            View Details
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>

        <div className="relative z-10 mt-4 flex gap-2">
          <ActionButton
            asChild
            variant="soft"
            size="sm"
            className="flex-1"
          >
            <Link to="/contact" search={{ enquiry: product.slug }}>
              Get Best Price
            </Link>
          </ActionButton>

          <ActionButton
            asChild
            variant="outline"
            size="sm"
            className="px-3 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
            title="Inquire / Order on WhatsApp"
          >
            <a
              href={getWhatsAppUrl(product.name)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Inquire about ${product.name} on WhatsApp`}
            >
              <MessageCircle className="size-4 text-emerald-400" />
            </a>
          </ActionButton>
        </div>
      </div>
    </article>
  );
}
