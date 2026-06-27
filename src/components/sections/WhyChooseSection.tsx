import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/data/testimonials";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="لماذا خدماتي؟"
          title="نصنع الفرق في كل خدمة نقدمها"
          description="نحرص على تقديم تجربة سلسة وموثوقة تجعلك تعتمد علينا في كل معاملاتك."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            return (
              <StaggerItem key={item.title} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-800 transition-colors duration-300 group-hover:bg-navy-800 group-hover:text-white">
                    <DynamicIcon name={item.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-navy-500">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
