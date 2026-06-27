"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

interface AccordionProps {
  items: FaqItem[];
  className?: string;
}

/** Animated accordion used for FAQ sections. */
export function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={index}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white transition-colors",
              isOpen ? "border-navy-200 shadow-card" : "border-navy-100",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
            >
              <span className="text-base font-bold text-navy-900 sm:text-lg">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                  isOpen
                    ? "rotate-45 bg-navy-800 text-white"
                    : "bg-navy-50 text-navy-700",
                )}
              >
                <Plus className="h-5 w-5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="px-6 pb-6 text-sm leading-8 text-navy-500 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
