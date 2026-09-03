import type { Product } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import { Reveal } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  className,
  scrollOnMobile = false,
}: {
  products: Product[];
  className?: string;
  /** Swipeable horizontal rail on small screens. */
  scrollOnMobile?: boolean;
}) {
  if (scrollOnMobile) {
    return (
      <>
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((product) => (
            <li key={product.slug} className="w-[78%] shrink-0 snap-start">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <ul
          className={cn(
            "hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4",
            className,
          )}
        >
          {products.map((product, i) => (
            <Reveal as="li" key={product.slug} delay={(i % 4) * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </ul>
      </>
    );
  }

  return (
    <ul
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {products.map((product, i) => (
        <Reveal as="li" key={product.slug} delay={(i % 4) * 0.06}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </ul>
  );
}
