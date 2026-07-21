"use client";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

export default function Compromiso({ dict }: Props) {
  const { commitment } = dict;

  return (
    <section className="py-20 sm:py-28 bg-[#FEFBF6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
            {commitment.heading}
          </h2>
          <p className="text-[#78716C] text-lg leading-relaxed">{commitment.subheading}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {commitment.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 bg-[#F5F0E8] rounded-2xl border border-[#E7E1D5]"
            >
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#1C1917] mb-1.5">{item.title}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials hidden until enabled */}
        {process.env.NEXT_PUBLIC_ENABLE_TESTIMONIALS === "true" && (
          <div className="mt-16">
            {/* Testimonials component placeholder */}
          </div>
        )}
      </div>
    </section>
  );
}
