import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/catalog";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
      <div className="relative aspect-16/10 overflow-hidden bg-slate-50 border-b border-slate-100">
        <img
          src={category.image}
          alt={`${category.name} available at FloppyKart`}
          loading="lazy"
          width={768}
          height={480}
          className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-103"
        />
      </div>
      <div className="flex flex-1 flex-col p-4.5">
        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
          <Link
            to="/categories/$slug"
            params={{ slug: category.slug }}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {category.name}
          </Link>
        </h3>
        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-600">{category.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
          Explore Category
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
