import { Star } from "lucide-react";
import type { Testimonial } from "@/data/content";

export function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
      {/* 5-Star Rating in Vibrant Golden Yellow */}
      <div className="flex items-center gap-1 text-amber-400" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="size-4.5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 font-medium italic">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-5 border-t border-slate-100 pt-4">
        <span className="block text-sm font-bold text-slate-900">{review.name}</span>
        <span className="block text-xs font-semibold text-primary mt-0.5">{review.context}</span>
      </figcaption>
    </figure>
  );
}
