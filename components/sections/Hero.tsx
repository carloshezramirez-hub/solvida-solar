"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "95%", label: "Ahorro en CFE" },
  { value: "3 días", label: "Instalación" },
  { value: "25 años", label: "Garantía" },
  { value: "+2,400", label: "Familias con energía solar" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-600/5 to-[#0F172A]" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        style={{ background: "radial-gradient(ellipse at 80% 20%, #F59E0B 0%, transparent 60%)" }}
      />

      {/* Sun decoration */}
      <div className="absolute top-20 right-10 md:right-32 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-sm font-semibold">Energía solar para México</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Dile adiós a tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                recibo de CFE
              </span>
            </h1>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
              Instala paneles solares en tu hogar o negocio y ahorra hasta el{" "}
              <strong className="text-white">95% en electricidad</strong>. Financiamiento sin
              enganche, instalación en 3 días y garantía de 25 años.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cotizar"
                className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-900 font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 text-center"
              >
                Cotiza gratis ahora
              </a>
              <a
                href="#calculadora"
                className="border border-slate-600 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-full text-lg transition-all text-center"
              >
                Calcula tu ahorro
              </a>
            </div>
          </motion.div>

          {/* Visual panel illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Solar panel grid */}
              <div className="grid grid-cols-3 gap-3 p-6 bg-slate-800/50 rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-sm">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 relative overflow-hidden"
                  >
                    {/* Panel cells */}
                    <div className="absolute inset-1 grid grid-cols-4 gap-px">
                      {Array.from({ length: 12 }).map((_, j) => (
                        <div key={j} className="bg-blue-900/60 rounded-sm" />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent" />
                  </motion.div>
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-green-500 text-white rounded-2xl px-4 py-2 shadow-lg"
              >
                <div className="text-xs font-semibold">Ahorrando</div>
                <div className="text-xl font-extrabold">$3,200/mes</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-amber-400 text-slate-900 rounded-2xl px-4 py-2 shadow-lg"
              >
                <div className="text-xs font-bold">☀️ Hoy generando</div>
                <div className="text-xl font-extrabold">18.4 kWh</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800 pt-12"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-amber-400">{s.value}</div>
              <div className="text-slate-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
