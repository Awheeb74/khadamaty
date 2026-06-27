import { MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { buildWhatsappLink, generalContactMessage } from "@/lib/whatsapp";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-6 py-14 text-center shadow-card sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-whatsapp/25 blur-3xl" />
              <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-navy-400/30 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
                جاهز لإنجاز خدمتك؟ ابدأ الآن بضغطة واحدة
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-200">
                راسلنا عبر واتساب وأخبرنا بما تحتاجه، وفريقنا جاهز لمساعدتك في أي
                وقت ومن أي محافظة.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  href={buildWhatsappLink(generalContactMessage)}
                  external
                  variant="whatsapp"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  تواصل عبر واتساب
                </Button>
                <Button
                  href={`tel:${siteConfig.phoneHref}`}
                  variant="light"
                  size="lg"
                >
                  <Phone className="h-5 w-5" />
                  {siteConfig.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
