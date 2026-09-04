import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/catalog";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { Section, SectionHeading } from "@/components/site/primitives";

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
  return (
    <Section>
      <SectionHeading eyebrow="Products" title="Our product range" subtitle={description} />
      <ProductGrid className="mt-12" products={products} />
    </Section>
  );
}
