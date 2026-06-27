import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ServiceExplorer } from "@/components/sections/ServiceExplorer";
import { CtaSection } from "@/components/sections/CtaSection";
import { categories } from "@/data/categories";
import { services } from "@/data/services";
import type { CategoryId } from "@/types";

export const metadata: Metadata = {
  title: "جميع الخدمات",
  description:
    "تصفّح جميع خدمات منصة خدماتي: حكومية، تعليمية، توظيف، إسكان، أعمال، تسويق وتصميم. ابحث وفلتر واطلب خدمتك عبر واتساب.",
  alternates: { canonical: "/services" },
};

type Filter = CategoryId | "all";

function resolveCategory(value?: string): Filter {
  if (value && categories.some((c) => c.slug === value)) {
    return value as CategoryId;
  }
  return "all";
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = resolveCategory(category);

  return (
    <>
      <PageHeader
        eyebrow="مكتبة الخدمات"
        title="جميع الخدمات"
        description={`أكثر من ${services.length} خدمة إلكترونية وحكومية وتعليمية وتجارية في مكان واحد.`}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "الخدمات" },
        ]}
      />
      <section className="py-12 sm:py-16">
        <Container>
          <ServiceExplorer
            key={initialCategory}
            initialCategory={initialCategory}
          />
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
