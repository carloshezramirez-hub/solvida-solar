"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale?: Locale };

export default function Hero({ dict }: Props) {
  const { hero } = dict;
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(dict.whatsapp.prefilledMessage);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FEFBF6]" aria-label="Hero">
      {/* Warm atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(217,119,6,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(21,128,61,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#FDE68A] rounded-full px-4 py-1.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
            <span className="text-[#92400E] text-sm font-semibold">{hero.badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1917] leading-tight mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            {hero.heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#44403C] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            {hero.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="#formulario"
              className="inline-flex items-center justify-center bg-[#D97706] hover:bg-[#B45309] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-sm"
            >
              {hero.ctaPrimary}
            </a>
            {wa && (
              <a
                href={`https://wa.me/${wa}?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#E7E1D5] hover:border-[#D97706] text-[#1C1917] hover:text-[#D97706] font-semibold px-8 py-4 rounded-full text-base transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.85L.057 23.928a.5.5 0 0 0 .614.614l6.079-1.471A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.793-.537-5.357-1.471l-.384-.226-3.603.872.871-3.604-.226-.383A9.949 9.949 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                {hero.ctaSecondary}
              </a>
            )}
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-[#78716C] text-sm"
          >
            {hero.trustLine}
          </motion.p>
        </div>

        {/* Decorative sun element */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none hidden lg:block"
          style={{ background: "radial-gradient(circle, #D97706 0%, transparent 65%)" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
