"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { buildWhatsappLink, generalContactMessage } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu in response to navigation events rather than
  // syncing it from `pathname` in an effect.
  const closeMenu = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-[0_4px_30px_-10px_rgba(10,18,40,0.25)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2.5">
          <Logo size={44} className="shadow-md" />
          <span className="text-2xl font-extrabold text-navy-900">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive(link.href)
                    ? "bg-navy-50 text-navy-900"
                    : "text-navy-600 hover:bg-navy-50 hover:text-navy-900",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={buildWhatsappLink(generalContactMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          تواصل عبر واتساب
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-100 bg-white text-navy-800 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-navy-100 bg-white/95 backdrop-blur-lg transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "block rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                  isActive(link.href)
                    ? "bg-navy-50 text-navy-900"
                    : "text-navy-700 hover:bg-navy-50",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={buildWhatsappLink(generalContactMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-base font-semibold text-white"
            >
              <MessageCircle className="h-5 w-5" />
              تواصل عبر واتساب
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
