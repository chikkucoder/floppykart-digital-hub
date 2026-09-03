import { cn } from "@/lib/utils";
import type { Product } from "@/data/catalog";

/**
 * Renders pricing. Today every product is enquiry-based ("on-request").
 * When real pricing exists, extend the Product price union and this component.
 */
export function PriceDisplay({
  price,
  className,
  label = "Price on Request",
}: {
  price: Product["price"];
  className?: string;
  label?: string;
}) {
  if (price.type === "on-request") {
    return (
      <span className={cn("text-sm font-semibold text-primary-soft", className)}>
        {label}
      </span>
    );
  }
  return null;
}
