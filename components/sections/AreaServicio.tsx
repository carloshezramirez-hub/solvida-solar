"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale?: Locale };

export default function AreaServicio({ dict }: Props) {
  const { serviceArea } = dict;
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(dict.whatsapp.prefilledMessage);

  return (
    <section className="py-20 sm:py-28 bg-[#FEFBF6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
              {serviceArea.heading}
            </h2>
            <p className="text-[#78716C] text-lg leading-relaxed mb-6">
              {serviceArea.subheading}
            </p>
            <p className="text-[#78716C] text-sm mb-8 border border-[#E7E1D5] rounded-xl px-4 py-3 bg-[#F5F0E8]">
              {serviceArea.note}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center bg-[#D97706] hover:bg-[#B45309] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
              >
                {serviceArea.cta}
              </a>
              {wa && (
                <a
                  href={`https://wa.me/${wa}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#E7E1D5] hover:border-[#D97706] text-[#44403C] hover:text-[#D97706] font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#F5F0E8] border border-[#E7E1D5] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-[#D97706]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="font-semibold text-[#1C1917] text-sm">San Miguel de Allende, Gto.</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceArea.neighborhoods.map((n, i) => (
                  <span
                    key={i}
                    className="bg-[#FEFBF6] border border-[#E7E1D5] text-[#44403C] text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
