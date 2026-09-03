import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Future e-commerce affordances. Intentionally non-functional in this phase —
 * wire these to a cart/wishlist store when commerce is enabled.
 */

const iconButton =
  "grid size-9 place-items-center rounded-full border border-border/70 bg-background/70 text-muted-foreground backdrop-blur transition-all duration-300 hover:border-primary/50 hover:text-primary-soft hover:scale-105";

export function WishlistButton({ className, label = "Save to wishlist" }: { className?: string; label?: string }) {
  return (
    <button type="button" aria-label={label} title="Coming soon" className={cn(iconButton, className)}>
      <Heart className="size-4" />
    </button>
  );
}

export function CartButton({ className, label = "Add to cart" }: { className?: string; label?: string }) {
  return (
    <button type="button" aria-label={label} title="Coming soon" className={cn(iconButton, className)}>
      <ShoppingCart className="size-4" />
    </button>
  );
}
