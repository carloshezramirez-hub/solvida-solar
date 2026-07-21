"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

export default function Escenarios({ dict, locale }: Props) {
  const { scenarios } = dict;

  return (
    <section id="escenarios" className="py-20 sm:py-28 bg-[#f0fdf4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-4"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052e16] mb-4">
            {scenarios.heading}
          </h2>
          <p className="text-[#4b6a55] text-lg leading-relaxed">{scenarios.subheading}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#16a34a] text-sm font-semibold mb-10"
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
              className={`relative rounded-2xl p-7 flex flex-col border-2 transition-all ${
                item.highlight
                  ? "bg-white border-[#16a34a] shadow-lg shadow-green-100"
                  : "bg-white border-[#d1fae5] hover:border-[#86efac] hover:shadow-sm"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-3.5 left-6 bg-[#16a34a] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {locale === "en" ? "Most common" : "Más frecuente"}
                </div>
              )}

              <h3 className="text-lg font-extrabold text-[#052e16] mb-2">{item.name}</h3>
              <p className="text-[#16a34a] text-sm font-semibold mb-3">{item.ideal}</p>
              <p className="text-[#4b6a55] text-base leading-relaxed mb-5">{item.desc}</p>

              <div className="flex-1">
                <p className="text-[#166534] text-xs font-semibold uppercase tracking-wide mb-2">
                  {locale === "en" ? "Factors that affect the design" : "Factores que afectan el diseño"}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {item.factors.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-base text-[#4b6a55]">
                      <span className="text-[#16a34a] mt-0.5 flex-shrink-0">·</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-[#86a990] text-xs italic border-t border-[#d1fae5] pt-4">{item.custom}</p>
              </div>

              <a
                href="#formulario"
                className={`mt-6 block w-full text-center font-semibold py-3 rounded-xl text-sm transition-colors ${
                  item.highlight
                    ? "bg-[#16a34a] hover:bg-[#15803d] text-white shadow-md shadow-green-200"
                    : "border border-[#d1fae5] hover:border-[#16a34a] text-[#166534] hover:text-[#16a34a]"
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
