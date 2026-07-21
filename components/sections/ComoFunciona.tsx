"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

export default function ComoFunciona({ dict, locale }: Props) {
  const { howItWorks } = dict;

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052e16] mb-4">
            {howItWorks.heading}
          </h2>
          <p className="text-[#4b6a55] text-lg leading-relaxed">{howItWorks.subheading}</p>
        </motion.div>

        <div className="space-y-0">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 pb-8"
            >
              {/* Step number + line */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#dcfce7] border-2 border-[#16a34a] flex items-center justify-center text-[#16a34a] font-extrabold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                {i < howItWorks.steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-[#d1fae5] mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-2">
                <h3 className="font-semibold text-[#052e16] mb-1.5">{step.title}</h3>
                <p className="text-[#4b6a55] text-base leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interconnection note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#f0fdf4] border border-[#d1fae5] rounded-xl p-5 mb-10"
        >
          <p className="text-[#4b6a55] text-sm leading-relaxed">
            <span className="font-semibold text-[#166534]">
              {locale === "en" ? "Note: " : "Nota: "}
            </span>
            {howItWorks.interconnectionNote}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#formulario"
            className="inline-flex items-center bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg shadow-green-100"
          >
            {howItWorks.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
