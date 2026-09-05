import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Heart, CheckCircle2 } from "lucide-react";
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
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md",
        className,
      )}
    >
      {/* Product Image Area */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-50 border-b border-slate-100">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          width={768}
          height={576}
          className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-103"
        />
        {product.badge ? (
          <span className="absolute top-3 left-3 rounded-md bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase shadow-xs">
            {product.badge}
          </span>
        ) : null}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-90 sm:opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-within:opacity-100">
          <WishlistButton />
          <CartButton />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-4.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold tracking-wider text-emerald-700 uppercase">
            {product.categoryName}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            <CheckCircle2 className="size-3" /> Available
          </span>
        </div>

        <h3 className="mt-2 text-base leading-snug font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600">{product.summary}</p>

        {/* Price & Details Link */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <PriceDisplay price={product.price} />
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 group-hover:text-emerald-600 transition-colors">
            Details
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>

        {/* CTAs */}
        <div className="relative z-10 mt-3 flex gap-2">
          <ActionButton
            asChild
            variant="soft"
            size="sm"
            className="flex-1 text-xs"
          >
            <Link to="/contact" search={{ enquiry: product.slug }}>
              Get Best Price
            </Link>
          </ActionButton>

          <ActionButton
            asChild
            variant="outline"
            size="sm"
            className="px-2.5 border-emerald-500/40 text-emerald-700 hover:bg-emerald-50"
            title="Inquire / Order on WhatsApp"
          >
            <a
              href={getWhatsAppUrl(product.name)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Inquire about ${product.name} on WhatsApp`}
            >
              <MessageCircle className="size-4 text-emerald-600" />
            </a>
          </ActionButton>
        </div>
      </div>
    </article>
  );
}
