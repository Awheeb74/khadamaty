import Link from "next/link";
import { ArrowLeft, Star, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { featuredServices } from "@/data/services";
import { getCategory } from "@/data/categories";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { serviceWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function FeaturedSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-navy-50/60 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="الأكثر طلباً"
          title="خدمات مميزة يثق بها عملاؤنا"
          description="أبرز الخدمات التي ينفذها فريقنا يومياً لآلاف العملاء في كل المحافظات."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            const category = getCategory(service.category);
            return (
              <StaggerItem key={service.id} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5">
                  <div
                    className={cn(
                      "pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 blur-2xl transition-opacity group-hover:opacity-25",
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
                      <DynamicIcon name={category.icon} className="h-7 w-7" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      مميزة
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy-900">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-navy-700"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-7 text-navy-500">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2">
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
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy-200 px-6 py-3 text-sm font-bold text-navy-800 transition-colors hover:border-navy-800 hover:bg-navy-50"
          >
            عرض جميع الخدمات
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
