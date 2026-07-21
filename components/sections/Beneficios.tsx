"use client";
import { motion } from "framer-motion";

const beneficios = [
  {
    icon: "💰",
    title: "Ahorra hasta 95%",
    desc: "Elimina casi por completo tu recibo de CFE. La mayoría de nuestros clientes pagan menos de $200/mes.",
  },
  {
    icon: "🌍",
    title: "Impacto ambiental cero",
    desc: "Cada sistema solar SOLVIDA evita 3.5 toneladas de CO₂ al año. Cuida el planeta y tu bolsillo.",
  },
  {
    icon: "📱",
    title: "Monitoreo en tiempo real",
    desc: "App propia SOLVIDA para ver tu generación, consumo y ahorro desde cualquier lugar.",
  },
  {
    icon: "🔋",
    title: "Batería de respaldo",
    desc: "Opcional: almacena energía y tenla disponible de noche o durante apagones de CFE.",
  },
  {
    icon: "📈",
    title: "Plus en tu propiedad",
    desc: "Las propiedades con sistema solar se venden hasta 20% más caro. Una inversión, no un gasto.",
  },
  {
    icon: "🏆",
    title: "Garantía de 25 años",
    desc: "Los paneles más vendidos del mundo respaldados por garantía completa. Instalamos para durar.",
  },
  {
    icon: "🚀",
    title: "Sin enganche",
    desc: "Financiamiento propio. Empieza a generar energía sin pagar nada hoy, cuotas menores a tu CFE.",
  },
  {
    icon: "👨‍🔧",
    title: "Instaladores certificados",
    desc: "Todo nuestro equipo técnico está certificado por ANES y cumple la NOM-001-SEDE-2012.",
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Por qué elegir{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              SOLVIDA
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Más que paneles. Una decisión inteligente para tu familia y el planeta.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-slate-800/50 border border-slate-700 hover:border-amber-400/50 rounded-2xl p-6 transition-colors group"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-white font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {b.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
