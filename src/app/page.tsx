import { Hero } from "@/components/sections/Hero";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ServiceExplorer } from "@/components/sections/ServiceExplorer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSection />

      {/* Search & live filter */}
      <section id="explore" className="bg-navy-50/40 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="ابحث وفلتر"
            title="ابحث عن خدمتك بسهولة"
            description="استخدم البحث أو اختر القسم المناسب للوصول إلى الخدمة التي تحتاجها فوراً."
          />
          <div className="mt-12">
            <ServiceExplorer />
          </div>
        </Container>
      </section>

      <FeaturedSection />
      <WhyChooseSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection limit={6} showAllLink />
      <CtaSection />
    </>
  );
}
