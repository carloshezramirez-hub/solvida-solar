"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

type Props = { dict: Dictionary; locale?: string };

const HERO_IMG = "https://images.unsplash.com/flagged/photo-1566838616793-29a4102a5b0e?q=90&w=1400&auto=format&fit=crop";
const SOLAR_IMG = "https://images.unsplash.com/photo-1655300256335-beef51a914fe?q=85&w=900&auto=format&fit=crop";

export default function Hero({ dict, locale }: Props) {
  const { hero } = dict;
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(dict.whatsapp.prefilledMessage);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#052e16]" aria-label="Hero">

      {/* ── Background image ──────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Casa residencial con paneles solares"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#052e16] via-[#052e16]/80 to-[#052e16]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052e16] via-transparent to-transparent" />
      </div>

      {/* ── Decorative elements ────────────────────── */}
      <div className="absolute top-24 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #86efac 0%, transparent 65%)" }} />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 65%)" }} />

      {/* ── Content ───────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: Text */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#86efac] animate-pulse" />
                <span className="text-[#86efac] text-sm font-semibold tracking-wide">{hero.badge}</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
              >
                {locale === "en" ? (
                  <>
                    Residential<br />
                    <span className="gradient-text">solar panels</span><br />
                    in San Miguel
                  </>
                ) : (
                  <>
                    Paneles<br />
                    <span className="gradient-text">solares</span> para<br />
                    hogares en SMA
                  </>
                )}
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="text-[#86efac]/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
              >
                {hero.subheading}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.34 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <a
                  href="#formulario"
                  className="inline-flex items-center justify-center bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold px-8 py-4 rounded-full text-base transition-all shadow-lg shadow-green-900/40 hover:shadow-green-900/60 hover:-translate-y-0.5"
                >
                  {hero.ctaPrimary}
                </a>
                {wa && (
                  <a
                    href={`https://wa.me/${wa}?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 border border-white/25 hover:border-[#86efac]/60 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-base transition-all backdrop-blur-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.85L.057 23.928a.5.5 0 0 0 .614.614l6.079-1.471A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.793-.537-5.357-1.471l-.384-.226-3.603.872.871-3.604-.226-.383A9.949 9.949 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    {hero.ctaSecondary}
                  </a>
                )}
              </motion.div>

              {/* Trust line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-white/40 text-sm"
              >
                {hero.trustLine}
              </motion.p>
            </div>

            {/* Right: Image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <Image
                  src={SOLAR_IMG}
                  alt="Paneles solares residenciales"
                  width={600}
                  height={420}
                  className="w-full h-[420px] object-cover"
                  priority
                />
                {/* Green tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#052e16]/60 via-transparent to-[#052e16]/20" />
              </div>

              {/* Floating card — assessment */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#16a34a] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-10H21M3 12H2.34M18.36 5.64l-.71.71M6.34 17.66l-.71.71M18.36 18.36l-.71-.71M6.34 6.34l-.71-.71" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {locale === "en" ? "Free assessment" : "Diagnóstico gratuito"}
                    </p>
                    <p className="text-[#86efac]/70 text-xs">
                      {locale === "en" ? "No obligation" : "Sin compromiso"}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — bilingual */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="glass-card absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">🌐</span>
                  <div>
                    <p className="text-white text-xs font-semibold">ES · EN</p>
                    <p className="text-[#86efac]/70 text-xs">San Miguel de Allende</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Bottom stats bar ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "☀️", label: locale === "en" ? "Free assessment" : "Evaluación gratuita" },
              { icon: "🌐", label: locale === "en" ? "English & Spanish" : "Español e inglés" },
              { icon: "📋", label: locale === "en" ? "Clear written proposal" : "Propuesta por escrito" },
              { icon: "📍", label: "San Miguel de Allende" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl" aria-hidden="true">{s.icon}</span>
                <span className="text-white/60 text-xs sm:text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
