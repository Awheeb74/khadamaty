import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MessageCircle,
  CheckCircle2,
  Phone,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import {
  getServiceBySlug,
  allServiceSlugs,
  getServicesByCategory,
} from "@/data/services";
import { getCategory } from "@/data/categories";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { serviceWhatsappLink } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Pre-render every service page at build time.
export function generateStaticParams() {
  return allServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "الخدمة غير موجودة" };
  }
  const category = getCategory(service.category);
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    keywords: [service.title, category.title, "خدمات مصر", siteConfig.name],
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const category = getCategory(service.category);
  const waLink = serviceWhatsappLink(service);
  const related = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  // JSON-LD for richer search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: category.title,
    areaServed: "EG",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow={category.title}
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "الخدمات", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <Reveal className="mb-12">
                  <h2 className="mb-6 text-2xl font-extrabold text-navy-900">
                    مميزات الخدمة
                  </h2>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-whatsapp" />
                        <span className="text-sm leading-7 text-navy-600">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {/* Process steps */}
              {service.steps && service.steps.length > 0 && (
                <Reveal className="mb-12">
                  <h2 className="mb-6 text-2xl font-extrabold text-navy-900">
                    خطوات الحصول على الخدمة
                  </h2>
                  <ol className="relative space-y-6 border-r-2 border-dashed border-navy-100 pr-6">
                    {service.steps.map((step, i) => (
                      <li key={i} className="relative">
                        <span className="absolute -right-[2.1rem] flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-white">
                          {i + 1}
                        </span>
                        <h3 className="text-base font-bold text-navy-900">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-7 text-navy-500">
                          {step.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              )}

              {/* FAQ */}
              {service.faqs && service.faqs.length > 0 && (
                <Reveal>
                  <h2 className="mb-6 text-2xl font-extrabold text-navy-900">
                    أسئلة شائعة حول الخدمة
                  </h2>
                  <Accordion items={service.faqs} />
                </Reveal>
              )}
            </div>

            {/* Sticky sidebar CTA */}
            <div className="lg:col-span-1">
              <Reveal direction="left">
                <div className="sticky top-24 rounded-3xl border border-navy-100 bg-white p-7 shadow-card">
                  <div
                    className={cn(
                      "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md",
                      category.gradient,
                    )}
                  >
                    <DynamicIcon name={category.icon} className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy-900">
                    اطلب {service.title} الآن
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-navy-500">
                    اضغط على الزر بالأسفل وأرسل بياناتك عبر واتساب، وسيتواصل معك
                    فريقنا فوراً.
                  </p>
                  <div className="mt-6 space-y-3">
                    <Button
                      href={waLink}
                      external
                      variant="whatsapp"
                      size="lg"
                      className="w-full"
                    >
                      <MessageCircle className="h-5 w-5" />
                      طلب الخدمة عبر واتساب
                    </Button>
                    <Button
                      href={`tel:${siteConfig.phoneHref}`}
                      variant="outline"
                      className="w-full"
                    >
                      <Phone className="h-5 w-5" />
                      اتصل بنا
                    </Button>
                  </div>

                  <div className="mt-6 flex items-center gap-2 rounded-2xl bg-navy-50 p-4 text-sm text-navy-600">
                    <Sparkles className="h-5 w-5 shrink-0 text-navy-700" />
                    خدمة متاحة لجميع محافظات مصر إلكترونياً.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-navy-50/40 py-16">
          <Container>
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-extrabold text-navy-900">
                خدمات ذات صلة
              </h2>
              <Link
                href={`/services?category=${category.slug}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-navy-700 hover:text-navy-900"
              >
                المزيد
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
