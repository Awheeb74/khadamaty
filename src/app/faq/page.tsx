import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description:
    "إجابات على أكثر الأسئلة شيوعاً حول خدمات منصة خدماتي وطريقة العمل والدفع والتنفيذ.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="مركز المساعدة"
        title="الأسئلة الشائعة"
        description={`كل ما تحتاج معرفته عن ${siteConfig.name} وطريقة عملنا.`}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "الأسئلة الشائعة" },
        ]}
      />
      <FaqSection />
      <CtaSection />
    </>
  );
}
