import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Buttons                                                                     */
/* -------------------------------------------------------------------------- */

export const actionButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-600 text-white shadow-sm shadow-emerald-600/25 hover:bg-emerald-700 hover:shadow-md active:scale-[0.98]",
        outline:
          "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 active:scale-[0.98]",
        ghost: "text-slate-700 hover:text-slate-900 hover:bg-slate-100",
        soft: "bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100/80 active:scale-[0.98]",
        solid:
          "bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-xs [&_svg]:size-3.5",
        md: "h-10 px-5 text-sm [&_svg]:size-4",
        lg: "h-12 px-7 text-sm sm:text-base [&_svg]:size-4.5",
        icon: "size-10 [&_svg]:size-[18px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function ActionButton({
  className,
  variant,
  size,
  asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof actionButtonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(actionButtonVariants({ variant, size }), className)} {...props} />
  );
}

/* -------------------------------------------------------------------------- */
/* Layout                                                                      */
/* -------------------------------------------------------------------------- */

export function Section({
  children,
  className,
  light = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-14 sm:py-18 lg:py-24",
        light ? "bg-slate-50/80 border-y border-slate-200/60" : "bg-white",
        className,
      )}
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/90 bg-emerald-50 px-3.5 py-1 text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/* Motion                                                                      */
/* -------------------------------------------------------------------------- */

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
