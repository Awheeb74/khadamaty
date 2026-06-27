import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Category } from "@/types";
import { DynamicIcon } from "./DynamicIcon";
import { getServicesByCategory } from "@/data/services";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
}

/** Category tile linking to the filtered services page. */
export function CategoryCard({ category }: CategoryCardProps) {
  const count = getServicesByCategory(category.id).length;

  return (
    <Link
      href={`/services?category=${category.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25",
          category.gradient,
        )}
      />

      <div
        className={cn(
          "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110",
          category.gradient,
        )}
      >
        <DynamicIcon name={category.icon} className="h-8 w-8" strokeWidth={2} />
      </div>

      <h3 className="mb-2 text-xl font-bold text-navy-900">
        {category.emoji} {category.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-7 text-navy-500">
        {category.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-navy-400">
          {count} خدمة
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-all duration-300 group-hover:bg-navy-800 group-hover:text-white">
          <ArrowLeft className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
