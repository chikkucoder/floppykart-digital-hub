import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getCategory, getProductsByCategory } from "@/data/catalog";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { ActionButton, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, products: getProductsByCategory(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found — FloppyKart" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.name} — FloppyKart`;
    const description = loaderData.category.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  return (
    <Section>
      <SectionHeading
        eyebrow="Category"
        title={category.name}
        subtitle={category.description}
      />
      {products.length ? (
        <ProductGrid className="mt-12" products={products} />
      ) : (
        <div className="mt-12 rounded-2xl border border-border bg-card p-8">
          <p className="text-muted-foreground">
            Products in this category are supplied to order. Share your requirement and we
            will quote current stock and pricing.
          </p>
          <ActionButton asChild className="mt-6">
            <Link to="/contact">Request a Quote</Link>
          </ActionButton>
        </div>
      )}
    </Section>
  );
}
