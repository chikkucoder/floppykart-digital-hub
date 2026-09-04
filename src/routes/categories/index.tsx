import { createFileRoute } from "@tanstack/react-router";
import { categories } from "@/data/catalog";
import { CategoryCard } from "@/components/commerce/CategoryCard";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";

const title = "Product Categories — FloppyKart";
const description =
  "Browse laptops, desktops, processors, motherboards, RAM & SSD, CCTV, printers, networking and more at FloppyKart.";

export const Route = createFileRoute("/categories/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Categories"
        title="Everything we supply, in one place"
        subtitle={description}
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <Reveal as="li" key={category.slug} delay={(i % 3) * 0.06}>
            <CategoryCard category={category} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
