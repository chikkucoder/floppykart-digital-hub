import { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X, ArrowRight, Package, Tag, ShieldCheck } from "lucide-react";
import { products, categories } from "@/data/catalog";
import { ActionButton } from "@/components/site/primitives";

export function SearchDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const matchedProducts = trimmed
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.categoryName.toLowerCase().includes(trimmed) ||
          p.summary.toLowerCase().includes(trimmed) ||
          p.features.some((f) => f.toLowerCase().includes(trimmed))
      )
    : products.slice(0, 5);

  const matchedCategories = trimmed
    ? categories.filter(
        (c) =>
          c.name.toLowerCase().includes(trimmed) ||
          c.description.toLowerCase().includes(trimmed)
      )
    : [];

  const handleSelectProduct = (slug: string) => {
    onClose();
    navigate({ to: "/products/$slug", params: { slug } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all">
        {/* Search input header */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <Search className="size-5 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, antivirus, CCTV, laptops, hardware..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            autoFocus
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded bg-muted/50"
            >
              Clear
            </button>
          ) : null}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50"
            aria-label="Close search"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Search results list */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {matchedCategories.length > 0 && (
            <div>
              <p className="px-2 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase flex items-center gap-1.5 mb-2">
                <Tag className="size-3.5" /> Categories
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {matchedCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to="/categories/$slug"
                    params={{ slug: cat.slug }}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-elevated/40 p-2.5 transition-colors hover:border-primary/50 hover:bg-primary/5"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="size-10 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-foreground truncate">
                        {cat.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground truncate">
                        {cat.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="px-2 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase flex items-center gap-1.5 mb-2">
              <Package className="size-3.5" /> {trimmed ? "Matching Products" : "Popular Suggestions"}
            </p>
            {matchedProducts.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No products found matching &ldquo;{query}&rdquo;.
                <div className="mt-3">
                  <ActionButton
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      onClose();
                      navigate({ to: "/contact" });
                    }}
                  >
                    Send Custom Requirement
                  </ActionButton>
                </div>
              </div>
            ) : (
              <div className="space-y-1.5">
                {matchedProducts.map((product) => (
                  <button
                    key={product.slug}
                    onClick={() => handleSelectProduct(product.slug)}
                    className="w-full flex items-center justify-between gap-3 rounded-xl p-2.5 text-left transition-colors hover:bg-primary/10 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="size-12 rounded-lg object-cover bg-muted shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-soft">
                            {product.categoryName}
                          </span>
                          {product.badge && (
                            <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[9px] font-bold text-primary-soft">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary-soft">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {product.summary}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground">
                        Get Best Price
                      </span>
                      <ArrowRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:text-primary-soft transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer tip */}
        <div className="border-t border-border bg-elevated/50 px-4 py-2.5 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-primary-soft" /> Genuine products & expert assistance
          </span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
