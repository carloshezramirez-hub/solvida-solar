"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay: i * 0.07 },
});

const problemIcons = ["📄", "🏊", "❄️", "⚡", "🔍", "🤝"];
const benefitIcons = ["📐", "📋", "📱", "🛡️", "🌐", "👤"];

export default function ProblemasYBeneficios({ dict }: Props) {
  const { problems } = dict;

  return (
    <>
      {/* Problems */}
      <section id="beneficios" className="py-20 sm:py-28 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
              {problems.heading}
            </h2>
            <p className="text-[#78716C] text-lg leading-relaxed">
              {problems.subheading}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                className="bg-[#FEFBF6] border border-[#E7E1D5] rounded-2xl p-6 hover:border-[#D97706]/40 transition-colors"
              >
                <div className="text-2xl mb-3" aria-hidden="true">{problemIcons[i]}</div>
                <h3 className="font-semibold text-[#1C1917] mb-2">{item.title}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-[#FEFBF6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
              {problems.benefitsHeading}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.benefits.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center text-lg" aria-hidden="true">
                  {benefitIcons[i]}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1C1917] mb-1.5">{item.title}</h3>
                  <p className="text-[#78716C] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
