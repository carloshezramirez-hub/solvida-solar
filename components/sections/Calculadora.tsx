"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Calculadora() {
  const [cfe, setCfe] = useState(1500);
  const [paneles, setPaneles] = useState(8);

  const ahorro = Math.round(cfe * 0.9);
  const generacion = paneles * 1.6;
  const roi = Math.round((paneles * 8500) / (ahorro * 12));

  return (
    <section id="calculadora" className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Calcula tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              ahorro solar
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Mueve los controles y ve cuánto puedes ahorrar con energía solar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-3xl border border-slate-700 p-8"
          >
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <label className="text-white font-semibold">Pago mensual de CFE</label>
                <span className="text-amber-400 font-bold text-lg">${cfe.toLocaleString()} MXN</span>
              </div>
              <input
                type="range"
                min={500}
                max={15000}
                step={100}
                value={cfe}
                onChange={(e) => setCfe(Number(e.target.value))}
                className="w-full accent-amber-400 h-2 cursor-pointer"
              />
              <div className="flex justify-between text-slate-500 text-xs mt-1">
                <span>$500</span>
                <span>$15,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-white font-semibold">Número de paneles</label>
                <span className="text-amber-400 font-bold text-lg">{paneles} paneles</span>
              </div>
              <input
                type="range"
                min={4}
                max={30}
                step={1}
                value={paneles}
                onChange={(e) => setPaneles(Number(e.target.value))}
                className="w-full accent-amber-400 h-2 cursor-pointer"
              />
              <div className="flex justify-between text-slate-500 text-xs mt-1">
                <span>4 paneles</span>
                <span>30 paneles</span>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-2xl p-6">
              <div className="text-green-400 text-sm font-semibold mb-1">Ahorro mensual estimado</div>
              <div className="text-4xl font-extrabold text-white">
                ${ahorro.toLocaleString()} <span className="text-lg text-slate-400">MXN</span>
              </div>
              <div className="text-slate-400 text-sm mt-1">
                ${(ahorro * 12).toLocaleString()} MXN al año
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="text-slate-400 text-sm font-semibold mb-1">Generación diaria estimada</div>
              <div className="text-3xl font-bold text-amber-400">
                {generacion.toFixed(1)} <span className="text-lg text-slate-400">kWh/día</span>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="text-slate-400 text-sm font-semibold mb-1">Recuperas tu inversión en</div>
              <div className="text-3xl font-bold text-white">
                {roi} <span className="text-lg text-slate-400">años</span>
              </div>
              <div className="text-slate-500 text-xs mt-1">Después ahorras 100% por 15+ años más</div>
            </div>

            <a
              href="#cotizar"
              className="block w-full text-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-900 font-bold py-4 rounded-2xl transition-all shadow-lg shadow-amber-500/20"
            >
              Quiero esta cotización →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
