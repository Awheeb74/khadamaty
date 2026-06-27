import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { categories } from "@/data/categories";

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="أقسام الخدمات"
          title="تصفّح خدماتنا حسب القسم"
          description="مجموعة متكاملة من الخدمات تغطي كل احتياجاتك الحكومية والتعليمية والتجارية."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <StaggerItem key={category.id} className="h-full">
              <CategoryCard category={category} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
