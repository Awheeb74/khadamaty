import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
}

/** Interior-page hero header with breadcrumbs and navbar clearance. */
export function PageHeader({
  title,
  description,
  eyebrow,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-grid pt-32 pb-14 sm:pt-40 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-navy-100/70 to-transparent blur-3xl" />
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-gradient-to-br from-whatsapp/15 to-transparent blur-3xl" />
      </div>
      <Container>
        <Reveal>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="mb-5 flex flex-wrap items-center gap-1 text-sm text-navy-400">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronLeft className="h-4 w-4" />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="font-semibold transition-colors hover:text-navy-700"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-navy-600">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && (
            <span className="mb-3 inline-block rounded-full bg-navy-50 px-4 py-1.5 text-sm font-bold text-navy-600">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-8 text-navy-500 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
