"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#calculadora", label: "Calculadora" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F172A]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-amber-400" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            SOL<span className="text-white">VIDA</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotizar"
            className="bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-bold px-5 py-2 rounded-full transition-colors"
          >
            Cotiza gratis
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0F172A] border-t border-slate-800 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-300 hover:text-amber-400 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotizar"
            onClick={() => setOpen(false)}
            className="block mt-3 bg-amber-400 text-slate-900 text-center font-bold py-3 rounded-full"
          >
            Cotiza gratis
          </a>
        </div>
      )}
    </nav>
  );
}
