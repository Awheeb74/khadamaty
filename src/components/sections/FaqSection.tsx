import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";
import type { FaqItem } from "@/types";

interface FaqSectionProps {
  /** Limit the number of questions (used on the home page). */
  limit?: number;
  showAllLink?: boolean;
  items?: FaqItem[];
}

export function FaqSection({
  limit,
  showAllLink = false,
  items = faqs,
}: FaqSectionProps) {
  const list = limit ? items.slice(0, limit) : items;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title="إجابات لأكثر أسئلتكم تكراراً"
          description="كل ما تريد معرفته عن طريقة عملنا وخدماتنا في مكان واحد."
        />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion items={list} />
          {showAllLink && (
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-700 hover:text-navy-900"
              >
                عرض كل الأسئلة
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
