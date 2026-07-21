"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

export default function Nav({ dict, locale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#beneficios", label: dict.nav.benefits },
    { href: "#como-funciona", label: dict.nav.howItWorks },
    { href: "#escenarios", label: dict.nav.options },
    { href: "#faq", label: dict.nav.faq },
  ];

  const altLocale = locale === "es" ? "en" : "es";

  return (
    <nav
      className={`fixed top-8 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#d1fae5]"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-1.5">
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="text-[#16a34a]">SOL</span>
            <span className="text-[#052e16]">VIDA</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-[#166534] hover:text-[#16a34a] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#formulario"
            className="bg-[#16a34a] hover:bg-[#15803d] text-white text-base font-semibold px-6 py-2.5 rounded-full transition-colors shadow-sm"
          >
            {dict.nav.ctaNav}
          </a>
          <a
            href={`/${altLocale}`}
            className="text-sm text-[#4b6a55] hover:text-[#16a34a] transition-colors font-medium border border-[#d1fae5] hover:border-[#86efac] px-3 py-1.5 rounded-full"
            aria-label={dict.nav.langLabel}
          >
            {dict.nav.langSwitch}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#052e16] p-2 rounded-lg hover:bg-[#f0fdf4] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#d1fae5] px-4 py-4 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-lg text-[#166534] hover:text-[#16a34a] font-medium border-b border-[#f0fdf4] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#formulario"
            onClick={() => setOpen(false)}
            className="block mt-4 bg-[#16a34a] hover:bg-[#15803d] text-white text-center font-bold py-4 rounded-full transition-colors text-lg"
          >
            {dict.nav.ctaNav}
          </a>
          <a
            href={`/${altLocale}`}
            className="block mt-3 text-center text-sm text-[#4b6a55] hover:text-[#16a34a] transition-colors"
          >
            {locale === "es" ? "Switch to English" : "Cambiar a español"}
          </a>
        </div>
      )}
    </nav>
  );
}
