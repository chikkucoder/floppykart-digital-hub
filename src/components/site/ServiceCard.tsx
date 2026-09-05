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
    <article className="group relative flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
      <div className="grid size-10 place-items-center rounded-lg bg-emerald-50 text-emerald-700 transition-colors duration-200 group-hover:bg-emerald-600 group-hover:text-white">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
        <Link
          to="/services"
          hash={service.slug}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {service.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
        {service.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
        Learn More
        <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </article>
  );
}
