"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Cotiza gratis",
    desc: "Llena nuestro formulario en 2 minutos. Un experto solar analiza tu consumo y diseña el sistema ideal.",
  },
  {
    num: "02",
    icon: "📐",
    title: "Visita técnica",
    desc: "Nuestro equipo visita tu propiedad para medir el espacio y evaluar la orientación óptima del techo.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Instalación en 3 días",
    desc: "Técnicos certificados instalan tu sistema completo en 1-3 días con mínima interrupción.",
  },
  {
    num: "04",
    icon: "☀️",
    title: "Empieza a generar",
    desc: "Tu sistema se conecta a la red y comienza a generar energía al instante. Monitórea desde tu celular.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Así de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              fácil funciona
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Del primer contacto a los primeros kilowatts, en menos de una semana.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-400/30 via-orange-500/30 to-amber-400/30" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 mb-5 text-4xl">
                  {s.icon}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-amber-400 text-slate-900 text-xs font-extrabold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="#cotizar"
            className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-900 font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg shadow-amber-500/25"
          >
            Empezar ahora — es gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
