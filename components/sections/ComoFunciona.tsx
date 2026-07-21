"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

export default function ComoFunciona({ dict }: Props) {
  const { howItWorks } = dict;

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-[#FEFBF6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
            {howItWorks.heading}
          </h2>
          <p className="text-[#78716C] text-lg leading-relaxed">{howItWorks.subheading}</p>
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
                <div className="w-9 h-9 rounded-full bg-[#FEF3C7] border-2 border-[#D97706] flex items-center justify-center text-[#D97706] font-extrabold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                {i < howItWorks.steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-[#E7E1D5] mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-2">
                <h3 className="font-semibold text-[#1C1917] mb-1.5">{step.title}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interconnection note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#F5F0E8] border border-[#E7E1D5] rounded-xl p-5 mb-10"
        >
          <p className="text-[#78716C] text-sm leading-relaxed">
            <span className="font-semibold text-[#44403C]">
              {dict.locale === "en" ? "Note: " : "Nota: "}
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
            className="inline-flex items-center bg-[#D97706] hover:bg-[#B45309] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            {howItWorks.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
