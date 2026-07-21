"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

export default function Escenarios({ dict }: Props) {
  const { scenarios } = dict;

  return (
    <section id="escenarios" className="py-20 sm:py-28 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-4"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
            {scenarios.heading}
          </h2>
          <p className="text-[#78716C] text-lg leading-relaxed">{scenarios.subheading}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#D97706] text-sm font-semibold mb-10"
        >
          {scenarios.note}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col border-2 transition-colors ${
                item.highlight
                  ? "bg-[#FEFBF6] border-[#D97706]"
                  : "bg-[#FEFBF6] border-[#E7E1D5] hover:border-[#D97706]/50"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-3.5 left-6 bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {dict.locale === "en" ? "Most common" : "Más frecuente"}
                </div>
              )}

              <h3 className="text-lg font-extrabold text-[#1C1917] mb-2">{item.name}</h3>
              <p className="text-[#D97706] text-sm font-semibold mb-3">{item.ideal}</p>
              <p className="text-[#78716C] text-sm leading-relaxed mb-5">{item.desc}</p>

              <div className="flex-1">
                <p className="text-[#44403C] text-xs font-semibold uppercase tracking-wide mb-2">
                  {dict.locale === "en" ? "Factors that affect the design" : "Factores que afectan el diseño"}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {item.factors.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#78716C]">
                      <span className="text-[#D97706] mt-0.5 flex-shrink-0">·</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-[#78716C] text-xs italic border-t border-[#E7E1D5] pt-4">{item.custom}</p>
              </div>

              <a
                href="#formulario"
                className={`mt-6 block w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors ${
                  item.highlight
                    ? "bg-[#D97706] hover:bg-[#B45309] text-white"
                    : "border border-[#E7E1D5] hover:border-[#D97706] text-[#1C1917] hover:text-[#D97706]"
                }`}
              >
                {scenarios.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
