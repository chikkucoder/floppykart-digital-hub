import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getProduct, getProductsByCategory } from "@/data/catalog";
import { PriceDisplay } from "@/components/commerce/PriceDisplay";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { ActionButton, Section, SectionHeading } from "@/components/site/primitives";

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
        meta: [{ title: "Product not found — FloppyKart" }, { name: "robots", content: "noindex" }],
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
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-elevated">
            <img
              src={product.images[0]}
              alt={product.name}
              width={1024}
              height={768}
              className="size-full object-cover"
            />
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {product.categoryName}
            </p>
            <h1 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-6">
              <PriceDisplay price={product.price} />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <ActionButton asChild size="lg">
                <Link to="/contact" search={{ enquiry: product.slug }}>
                  Get Best Price
                </Link>
              </ActionButton>
              <ActionButton asChild variant="outline" size="lg">
                <Link to="/categories/$slug" params={{ slug: product.categorySlug }}>
                  More in {product.categoryName}
                </Link>
              </ActionButton>
            </div>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <tbody>
              {product.specs.map((spec) => (
                <tr key={spec.label} className="border-b border-border last:border-0">
                  <th scope="row" className="w-1/3 bg-card px-5 py-3 font-medium">
                    {spec.label}
                  </th>
                  <td className="px-5 py-3 text-muted-foreground">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {related.length ? (
        <Section light>
          <SectionHeading eyebrow="Related" title="You may also need" />
          <ProductGrid className="mt-10" products={related} />
        </Section>
      ) : null}
    </>
  );
}
