import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  Cpu,
  Download,
  Laptop,
  Monitor,
  Network,
  Printer,
  Settings,
  Shield,
  ShieldCheck,
  Wifi,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/content";

const icons: Record<Service["icon"], LucideIcon> = {
  laptop: Laptop,
  monitor: Monitor,
  cpu: Cpu,
  printer: Printer,
  camera: Camera,
  shieldCheck: ShieldCheck,
  network: Network,
  wifi: Wifi,
  download: Download,
  shield: Shield,
  wrench: Wrench,
  settings: Settings,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
      <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary-soft transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-base font-semibold">
        <Link
          to="/services"
          hash={service.slug}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {service.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-soft">
        Learn More
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </article>
  );
}
