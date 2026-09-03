import { Star } from "lucide-react";
import type { Testimonial } from "@/data/content";

export function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="flex gap-0.5 text-primary-soft" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 border-t border-border pt-4">
        <span className="block text-sm font-semibold">{review.name}</span>
        <span className="block text-xs text-muted-foreground">{review.context}</span>
      </figcaption>
    </figure>
  );
}
