"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale?: Locale };

export default function AreaServicio({ dict }: Props) {
  const { serviceArea } = dict;
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(dict.whatsapp.prefilledMessage);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052e16] mb-4">
              {serviceArea.heading}
            </h2>
            <p className="text-[#4b6a55] text-xl leading-relaxed mb-6">
              {serviceArea.subheading}
            </p>
            <p className="text-[#4b6a55] text-sm mb-8 border border-[#d1fae5] rounded-xl px-4 py-3 bg-[#f0fdf4]">
              {serviceArea.note}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors shadow-md shadow-green-100"
              >
                {serviceArea.cta}
              </a>
              {wa && (
                <a
                  href={`https://wa.me/${wa}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#d1fae5] hover:border-[#86efac] text-[#166534] hover:text-[#16a34a] font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
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
            <div className="bg-[#f0fdf4] border border-[#d1fae5] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-[#16a34a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="font-semibold text-[#052e16] text-sm">San Miguel de Allende, Gto.</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceArea.neighborhoods.map((n, i) => (
                  <span
                    key={i}
                    className="bg-white border border-[#d1fae5] text-[#166534] text-xs font-medium px-3 py-1.5 rounded-full hover:border-[#86efac] transition-colors"
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
