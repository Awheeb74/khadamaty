import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import type { Service } from "@/types";
import { getCategory } from "@/data/categories";
import { DynamicIcon } from "./DynamicIcon";
import { serviceWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

/** Modern service card with icon, category badge and WhatsApp CTA. */
export function ServiceCard({ service, className }: ServiceCardProps) {
  const category = getCategory(service.category);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-card",
        className,
      )}
    >
      {/* Accent gradient that reveals on hover */}
      <div
        className={cn(
          "pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20",
          category.gradient,
        )}
      />

      <div className="mb-5 flex items-center justify-between">
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md",
            category.gradient,
          )}
        >
          <DynamicIcon name={category.icon} className="h-7 w-7" strokeWidth={2} />
        </div>
        <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-500">
          {category.title}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-navy-900">
        <Link
          href={`/services/${service.slug}`}
          className="before:absolute before:inset-0 hover:text-navy-700"
        >
          {service.title}
        </Link>
      </h3>
      <p className="mb-6 flex-1 text-sm leading-7 text-navy-500 line-clamp-3">
        {service.description}
      </p>

      <div className="relative z-10 flex items-center gap-2">
        <a
          href={serviceWhatsappLink(service)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
        >
          <MessageCircle className="h-4 w-4" />
          طلب الخدمة
        </a>
        <Link
          href={`/services/${service.slug}`}
          aria-label={`تفاصيل ${service.title}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 text-navy-600 transition-colors hover:bg-navy-50"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
