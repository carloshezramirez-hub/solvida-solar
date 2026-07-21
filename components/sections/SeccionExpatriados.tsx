"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

const icons = [
  <svg key="cfe" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="lang" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  </svg>,
  <svg key="doc" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
  <svg key="photo" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  <svg key="home" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  <svg key="globe" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
];

export default function SeccionExpatriados({ dict, locale }: Props) {
  const { expats } = dict;
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(dict.whatsapp.prefilledMessage);

  return (
    <section className="py-20 sm:py-28 bg-[#052e16] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#16a34a]/20 border border-[#16a34a]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#86efac] text-sm font-semibold">
                {locale === "en" ? "For expats & international owners" : "Para propietarios extranjeros"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              {expats.heading}
            </h2>
            <p className="text-[#86efac]/70 text-lg leading-relaxed mb-8">
              {expats.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors shadow-lg shadow-black/20"
              >
                {locale === "en" ? expats.cta : expats.ctaEs}
              </a>
              {wa && (
                <a
                  href={`https://wa.me/${wa}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#86efac]/50 text-white/80 hover:text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </motion.div>

          {/* Items */}
          <div className="space-y-5">
            {expats.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0a3020] border border-[#1a5c38] flex items-center justify-center text-[#86efac]">
                  {icons[i]}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-[#86efac]/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
