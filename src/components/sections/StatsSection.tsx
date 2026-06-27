import { Container } from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/testimonials";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Navy gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-whatsapp/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-navy-400/30 blur-3xl" />
      </div>

      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            أرقام تتحدث عن نجاحنا
          </h2>
          <p className="mt-3 text-navy-300">
            ثقة آلاف العملاء في كل محافظات مصر هي شهادتنا.
          </p>
        </div>

        <StaggerGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => {
            return (
              <StaggerItem key={stat.id}>
                <div className="glass-dark rounded-3xl p-6 text-center sm:p-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-whatsapp/15 text-whatsapp">
                    <DynamicIcon name={stat.icon} className="h-7 w-7" />
                  </div>
                  <p className="text-3xl font-extrabold text-white sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-semibold text-navy-300">
                    {stat.label}
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
