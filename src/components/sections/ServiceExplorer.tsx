"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { services } from "@/data/services";
import { categories } from "@/data/categories";
import type { CategoryId } from "@/types";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { cn } from "@/lib/utils";

type Filter = CategoryId | "all";

interface ServiceExplorerProps {
  initialCategory?: Filter;
}

/** Normalize Arabic text for forgiving search (strip tatweel + harakat). */
function normalize(text: string): string {
  return text
    .replace(/[ـ]/g, "") // tatweel
    .replace(/[ً-ْ]/g, "") // harakat
    .replace(/[إأآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .toLowerCase()
    .trim();
}

/** Live search + category filtering grid for all services. */
export function ServiceExplorer({ initialCategory = "all" }: ServiceExplorerProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Filter>(initialCategory);

  const filtered = useMemo(() => {
    const q = normalize(query);
    return services.filter((service) => {
      const matchesCategory = active === "all" || service.category === active;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        normalize(service.title).includes(q) ||
        normalize(service.description).includes(q)
      );
    });
  }, [query, active]);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "كل الخدمات" },
    ...categories.map((c) => ({ id: c.id as Filter, label: c.title })),
  ];

  return (
    <div>
      {/* Search bar */}
      <div className="mx-auto mb-6 max-w-2xl">
        <div className="relative">
          <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن خدمة... مثل: السيرة الذاتية، الإسكان، السجل التجاري"
            className="w-full rounded-2xl border border-navy-100 bg-white py-4 pr-12 pl-12 text-sm font-medium text-navy-900 shadow-sm outline-none transition-all placeholder:text-navy-400 focus:border-navy-300 focus:ring-4 focus:ring-navy-50 sm:text-base"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="مسح البحث"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-700"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Category chips */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        <span className="hidden items-center gap-1.5 rounded-full px-2 text-sm font-bold text-navy-400 sm:inline-flex">
          <SlidersHorizontal className="h-4 w-4" />
          تصفية:
        </span>
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              active === f.id
                ? "bg-navy-800 text-white shadow-card"
                : "bg-white text-navy-600 hover:bg-navy-50 border border-navy-100",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="mb-6 text-center text-sm font-semibold text-navy-400">
        {filtered.length > 0
          ? `${filtered.length} خدمة متاحة`
          : "لا توجد نتائج مطابقة"}
      </p>

      {/* Grid */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-navy-500">
            جرّب كلمة بحث أخرى أو اختر قسماً مختلفاً.
          </p>
        </div>
      )}
    </div>
  );
}
