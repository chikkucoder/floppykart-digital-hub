import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Filter, Package, ArrowRight } from "lucide-react";
import { products, categories, type Product } from "@/data/catalog";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { ActionButton, Section, SectionHeading, Eyebrow } from "@/components/site/primitives";

const title = "Products — FloppyKart";
const description =
  "Laptops, desktops, processors, memory, storage, CCTV systems, printers and antivirus licences supplied and installed by FloppyKart.";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.categorySlug === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <Section>
      <SectionHeading
        eyebrow="Product Catalog"
        title="Explore Technology Products & Hardware"
        subtitle={description}
      />

      {/* Filter and Search Toolbar */}
      <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border-y border-border py-6">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products by keyword, specs, model..."
            className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills Selector */}
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground shadow-md"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            All Products ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.categorySlug === cat.slug).length;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name} {count > 0 ? `(${count})` : ""}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid Results */}
      <div className="mt-8">
        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-12 text-center max-w-xl mx-auto my-8">
            <Package className="size-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground">No Products Found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              No items matched your search filter &ldquo;{searchQuery}&rdquo;.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <ActionButton
                variant="outline"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </ActionButton>
              <ActionButton asChild>
                <Link to="/contact">Send Custom Requirement</Link>
              </ActionButton>
            </div>
          </div>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </div>
    </Section>
  );
}
