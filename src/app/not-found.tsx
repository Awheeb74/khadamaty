import Link from "next/link";
import { Home, LayoutGrid } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-grid">
      <Container className="text-center">
        <p className="text-7xl font-extrabold text-gradient sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-navy-900 sm:text-3xl">
          الصفحة غير موجودة
        </h1>
        <p className="mx-auto mt-3 max-w-md text-navy-500">
          عذراً، الصفحة التي تبحث عنها غير متاحة. قد يكون الرابط غير صحيح أو تم
          نقل الصفحة.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            <Home className="h-5 w-5" />
            العودة للرئيسية
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-200 px-6 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
          >
            <LayoutGrid className="h-5 w-5" />
            استعرض الخدمات
          </Link>
        </div>
      </Container>
    </section>
  );
}
