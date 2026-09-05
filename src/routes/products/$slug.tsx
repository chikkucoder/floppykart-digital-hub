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
                    className={`relative rounded-xl border p-1 bg-slate-50 transition-all overflow-hidden shrink-0 ${
                      selectedImageIndex === idx
                        ? "border-emerald-600 ring-2 ring-emerald-500/40 scale-105"
                        : "border-slate-200 opacity-70 hover:opacity-100"
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
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {product.categoryName}
              </span>
              <div className="flex items-center gap-2">
                <WishlistButton />
                <CartButton />
              </div>
            </div>

            <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl text-slate-900">
              {product.name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {product.summary}
            </p>

            {/* Price Box */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Pricing & Availability
              </span>
              <PriceDisplay price={product.price} className="text-xl" />
              <p className="text-xs text-slate-500 mt-2">
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
                  <MessageCircle className="size-4 text-emerald-600" /> Instant WhatsApp
                </a>
              </ActionButton>
            </div>

            {/* Trust highlights checklist */}
            <div className="mt-8 border-t border-slate-200 pt-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                <span>100% Genuine product supply with manufacturer warranty</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>In-house technical support, installation & activation assistance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Section Below: Description, Specifications, Features */}
        <div className="mt-14">
          <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab("specs")}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "specs"
                  ? "border-emerald-600 text-emerald-700"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Sliders className="size-4" /> Specifications
            </button>
            <button
              onClick={() => setActiveTab("description")}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "description"
                  ? "border-emerald-600 text-emerald-700"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <FileText className="size-4" /> Description
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "features"
                  ? "border-emerald-600 text-emerald-700"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <CheckCircle2 className="size-4" /> Key Features
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            {activeTab === "specs" && (
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-slate-100 last:border-0">
                        <th scope="row" className="w-1/3 bg-slate-50 px-5 py-3.5 font-bold text-slate-800">
                          {spec.label}
                        </th>
                        <td className="px-5 py-3.5 text-slate-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "description" && (
              <div className="prose max-w-none text-slate-600 leading-relaxed">
                <p className="text-sm sm:text-base">{product.description}</p>
                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                  <p className="font-bold text-slate-900 mb-1">Need help verifying compatibility?</p>
                  <p>
                    Contact FloppyKart technical support before purchase. We will verify your system hardware or operating environment requirements.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <CheckCircle2 className="size-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{feature}</span>
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
