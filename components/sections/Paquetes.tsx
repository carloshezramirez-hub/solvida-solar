"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Básico",
    kw: "3 kW",
    paneles: "6 paneles",
    price: "49,900",
    monthly: "2,079",
    ideal: "Casa pequeña · hasta $1,800 CFE",
    features: [
      "6 paneles de 500W",
      "Inversor monofásico",
      "Instalación incluida",
      "Monitoreo en app",
      "Garantía 10 años",
    ],
    cta: "Comenzar con Básico",
    highlight: false,
    color: "border-slate-700",
  },
  {
    name: "Familiar",
    kw: "5 kW",
    paneles: "10 paneles",
    price: "79,900",
    monthly: "3,329",
    ideal: "Casa mediana · hasta $4,000 CFE",
    features: [
      "10 paneles de 500W",
      "Inversor híbrido",
      "Instalación incluida",
      "Monitoreo premium",
      "Batería de respaldo",
      "Garantía 25 años",
    ],
    cta: "El más popular",
    highlight: true,
    color: "border-amber-400",
  },
  {
    name: "Premium",
    kw: "10 kW",
    paneles: "20 paneles",
    price: "139,900",
    monthly: "5,829",
    ideal: "Casa grande o negocio",
    features: [
      "20 paneles de 500W",
      "Inversor trifásico",
      "Instalación incluida",
      "Monitoreo 24/7",
      "2 baterías de respaldo",
      "Mantenimiento 1 año",
      "Garantía 25 años",
    ],
    cta: "Cotizar Premium",
    highlight: false,
    color: "border-slate-700",
  },
];

export default function Paquetes() {
  return (
    <section id="paquetes" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Elige tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              paquete solar
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Financiamiento desde $0 de enganche. Cuotas mensuales menores que tu recibo de CFE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl border-2 ${p.color} p-8 ${
                p.highlight ? "bg-gradient-to-b from-amber-400/10 to-slate-800/50" : "bg-slate-800/30"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 font-bold text-sm px-4 py-1.5 rounded-full">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <div className="text-slate-400 text-sm font-semibold mb-1">{p.kw} · {p.paneles}</div>
                <div className="text-2xl font-extrabold text-white">{p.name}</div>
                <div className="text-slate-500 text-sm mt-1">{p.ideal}</div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-sm">desde</span>
                  <span className="text-4xl font-extrabold text-white">${p.monthly}</span>
                  <span className="text-slate-400 text-sm">/mes</span>
                </div>
                <div className="text-slate-500 text-xs mt-1">o pago único ${p.price} MXN</div>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cotizar"
                className={`block w-full text-center font-bold py-3.5 rounded-2xl transition-all ${
                  p.highlight
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 shadow-lg shadow-amber-500/25"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          * Precios orientativos. Tu cotización exacta depende de la instalación.{" "}
          <a href="#cotizar" className="text-amber-400 hover:underline">
            Cotiza gratis sin compromiso →
          </a>
        </p>
      </div>
    </section>
  );
}
