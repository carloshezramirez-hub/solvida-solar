"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Cuánto cuesta instalar paneles solares en México?",
    a: "Un sistema residencial básico de 3 kW cuesta desde $49,900 MXN. Con nuestro financiamiento puedes empezar desde $0 de enganche con cuotas mensuales desde $2,079 MXN, que son menores que tu recibo de CFE actual.",
  },
  {
    q: "¿En cuánto tiempo recupero mi inversión?",
    a: "Dependiendo de tu consumo actual, la mayoría de nuestros clientes recuperan su inversión en 4-6 años. Después de eso, la energía es prácticamente gratis por 20+ años más.",
  },
  {
    q: "¿Funcionan los paneles cuando no hay sol o en días nublados?",
    a: "Sí. Los paneles siguen generando energía con luz difusa, aunque con menor eficiencia. Con nuestra batería de respaldo opcional, almacenas energía de día para usar de noche.",
  },
  {
    q: "¿Qué pasa con los excedentes de energía que genero?",
    a: "Con el esquema de Net Metering de CFE, los kWh que no consumes se inyectan a la red y se acreditan en tu siguiente recibo. En muchos casos, la CFE termina pagándote a ti.",
  },
  {
    q: "¿Necesito mantenimiento?",
    a: "Los paneles solares requieren muy poco mantenimiento. Basta con limpiarlos con agua 2-3 veces al año para mantener su eficiencia óptima. Los planes Premium incluyen mantenimiento preventivo el primer año.",
  },
  {
    q: "¿Cuánto tiempo dura la instalación?",
    a: "Para sistemas residenciales, la instalación completa toma entre 1 y 3 días. Nuestro equipo técnico certificado se encarga de todo, desde la instalación eléctrica hasta la interconexión con CFE.",
  },
  {
    q: "¿Tienen financiamiento propio o debo ir al banco?",
    a: "Tenemos financiamiento propio directo, sin necesidad de ir al banco. Solo se revisa historial crediticio básico. Ofrecemos plazos de 12, 24, 36, 48 y 60 meses.",
  },
  {
    q: "¿La instalación daña el techo de mi casa?",
    a: "No. Usamos sistemas de montaje especializados que distribuyen el peso uniformemente y no perforan innecesariamente el techo. Nuestros técnicos inspeccionan y refuerzan el techo si es necesario antes de instalar.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-slate-700 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-slate-800/50 hover:bg-slate-800 transition-colors"
      >
        <span className="text-white font-semibold pr-4">{item.q}</span>
        <span
          className={`text-amber-400 text-xl flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pt-2 text-slate-400 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Preguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              frecuentes
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Resolvemos todas tus dudas antes de empezar.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} item={f} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 mb-4">¿Tienes otra pregunta?</p>
          <a
            href="#cotizar"
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            Habla con un experto solar →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
