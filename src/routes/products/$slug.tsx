import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Phone,
  MessageCircle,
  Share2,
  HelpCircle,
  FileText,
  Sliders,
} from "lucide-react";
import { getProduct, getProductsByCategory } from "@/data/catalog";
import { PriceDisplay } from "@/components/commerce/PriceDisplay";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { ActionButton, Section, SectionHeading, Eyebrow } from "@/components/site/primitives";
import { site } from "@/data/site";
import { WishlistButton, CartButton } from "@/components/commerce/CartWishlistButtons";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    const related = getProductsByCategory(product.categorySlug)
      .filter((p) => p.slug !== product.slug)
      .slice(0, 4);
    return { product, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product Not Found — FloppyKart" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.product.name} — FloppyKart`;
    const description = loaderData.product.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product, related } = Route.useLoaderData();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"specs" | "description" | "features" | "faq">("specs");

  return (
    <>
      <Section>
        {/* Breadcrumb nav */}
        <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground">
            Products
          </Link>
          <span>/</span>
          <Link
            to="/categories/$slug"
            params={{ slug: product.categorySlug }}
            className="hover:text-foreground"
          >
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate">{product.name}</span>
        </div>

        {/* Top Product Detail Hero Grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-elevated shadow-lg">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                width={1024}
                height={768}
                className="w-full h-[360px] sm:h-[450px] object-cover transition-all duration-300"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Gallery Thumbnails if multiple images exist */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative rounded-xl border p-1 bg-elevated transition-all overflow-hidden shrink-0 ${
                      selectedImageIndex === idx
                        ? "border-primary ring-2 ring-primary/40 scale-105"
                        : "border-border opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="size-16 object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Key Details & CTAs */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-soft">
                {product.categoryName}
              </span>
              <div className="flex items-center gap-2">
                <WishlistButton />
                <CartButton />
              </div>
            </div>

            <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl text-foreground">
              {product.name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {product.summary}
            </p>

            {/* Price Box */}
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                Pricing & Availability
              </span>
              <PriceDisplay price={product.price} className="text-xl" />
              <p className="text-xs text-muted-foreground mt-2">
                Hardware & licence quotes vary based on current stock, volume, and exact configuration.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3.5">
              <ActionButton asChild size="lg" className="flex-1">
                <Link to="/contact" search={{ enquiry: product.slug }}>
                  Get Best Price Quote <ArrowRight className="size-4" />
                </Link>
              </ActionButton>
              <ActionButton asChild variant="outline" size="lg">
                <a href={site.contact.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 text-primary-soft" /> Instant WhatsApp
                </a>
              </ActionButton>
            </div>

            {/* Trust highlights checklist */}
            <div className="mt-8 border-t border-border pt-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-4 text-primary-soft shrink-0" />
                <span>100% Genuine product supply with manufacturer warranty</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <CheckCircle2 className="size-4 text-primary-soft shrink-0" />
                <span>In-house technical support, installation & activation assistance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Section Below: Description, Specifications, Features, FAQ */}
        <div className="mt-16">
          <div className="flex items-center gap-2 border-b border-border overflow-x-auto">
            <button
              onClick={() => setActiveTab("specs")}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "specs"
                  ? "border-primary text-primary-soft"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sliders className="size-4" /> Specifications
            </button>
            <button
              onClick={() => setActiveTab("description")}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "description"
                  ? "border-primary text-primary-soft"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="size-4" /> Description
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "features"
                  ? "border-primary text-primary-soft"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <CheckCircle2 className="size-4" /> Key Features
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
            {activeTab === "specs" && (
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-border last:border-0">
                        <th scope="row" className="w-1/3 bg-elevated px-5 py-3.5 font-semibold text-foreground">
                          {spec.label}
                        </th>
                        <td className="px-5 py-3.5 text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "description" && (
              <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p className="text-base">{product.description}</p>
                <div className="mt-6 rounded-xl border border-border bg-elevated p-4 text-xs text-muted-foreground">
                  <p className="font-bold text-foreground mb-1">Need help verifying compatibility?</p>
                  <p>
                    Contact FloppyKart technical support before purchase. We will verify your system hardware or operating environment requirements.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-xl border border-border bg-elevated p-4">
                    <CheckCircle2 className="size-5 text-primary-soft shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Related Products Grid */}
      {related.length > 0 && (
        <Section light>
          <SectionHeading eyebrow="Related Products" title="You May Also Need" />
          <ProductGrid className="mt-10" products={related} />
        </Section>
      )}
    </>
  );
}
