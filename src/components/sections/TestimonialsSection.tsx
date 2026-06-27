import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="آراء العملاء"
          title="ماذا يقول عملاؤنا عنا"
          description="قصص نجاح حقيقية من عملاء وثقوا بنا في إنجاز خدماتهم."
        />
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.id} className="h-full">
              <figure className="relative flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-card">
                <Quote className="absolute left-6 top-6 h-10 w-10 text-navy-50" />
                <div className="relative mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < t.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-navy-200",
                      )}
                    />
                  ))}
                </div>
                <blockquote className="relative mb-6 flex-1 text-sm leading-8 text-navy-600">
                  {t.content}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-900">{t.name}</p>
                    <p className="text-xs text-navy-400">
                      {t.role} — {t.city}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
