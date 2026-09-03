import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/catalog";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
      <div className="relative aspect-16/10 overflow-hidden bg-elevated">
        <img
          src={category.image}
          alt={`${category.name} available at FloppyKart`}
          loading="lazy"
          width={768}
          height={480}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-107"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">
          <Link
            to="/categories/$slug"
            params={{ slug: category.slug }}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {category.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{category.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-soft">
          Explore Products
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </article>
  );
}
