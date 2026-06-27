import { MessageCircle, LayoutGrid, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { categories } from "@/data/categories";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { buildWhatsappLink, generalContactMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const trustBadges = [
  { icon: ShieldCheck, label: "موثوق وآمن" },
  { icon: Clock, label: "سرعة في التنفيذ" },
  { icon: MapPin, label: "كل المحافظات" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-navy-200/50 to-transparent blur-3xl" />
        <div className="animate-float absolute -left-32 top-40 h-96 w-96 rounded-full bg-gradient-to-br from-whatsapp/20 to-transparent blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text column */}
          <div>
            <Reveal direction="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white/70 px-4 py-1.5 text-sm font-bold text-navy-600 shadow-sm backdrop-blur">
                <span className="flex h-2 w-2 rounded-full bg-whatsapp" />
                منصة خدماتك الإلكترونية الأولى في مصر
              </span>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                خدماتي
                <span className="block text-gradient">
                  جميع خدماتك الإلكترونية في مكان واحد
                </span>
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-8 text-navy-500 sm:text-lg">
                نقدم خدمات التقديمات الحكومية والتعليمية وخدمات الشركات والتوظيف
                والتسويق لجميع محافظات مصر — بسرعة واحترافية ومن مكانك.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/services" size="lg">
                  <LayoutGrid className="h-5 w-5" />
                  استعرض الخدمات
                </Button>
                <Button
                  href={buildWhatsappLink(generalContactMessage)}
                  external
                  variant="whatsapp"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  تواصل عبر واتساب
                </Button>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm font-semibold text-navy-600"
                  >
                    <Icon className="h-5 w-5 text-whatsapp" />
                    {label}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual column — icon-based collage */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="glass rounded-4xl p-6 shadow-card">
                <div className="grid grid-cols-3 gap-4">
                  {categories.map((category, i) => {
                    return (
                      <div
                        key={category.id}
                        className={cn(
                          "flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-white p-3 text-center shadow-sm transition-transform hover:scale-105",
                          i === 4 && "ring-2 ring-whatsapp/40",
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                            category.gradient,
                          )}
                        >
                          <DynamicIcon name={category.icon} className="h-5 w-5" />
                        </span>
                        <span className="text-[11px] font-bold leading-tight text-navy-700">
                          {category.title.replace("الخدمات ", "").replace("خدمات ", "")}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="absolute -bottom-5 -right-4 hidden rounded-2xl bg-navy-900 px-5 py-4 text-white shadow-xl sm:block">
                <p className="text-2xl font-extrabold">12,000+</p>
                <p className="text-xs text-navy-300">خدمة منفذة بنجاح</p>
              </div>
              <div className="absolute -left-4 -top-5 hidden rounded-2xl bg-white px-5 py-4 shadow-xl sm:block">
                <p className="text-2xl font-extrabold text-whatsapp">27</p>
                <p className="text-xs text-navy-500">محافظة نخدمها</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
