"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CTAForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  }

  return (
    <section id="cotizar" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-600/5 to-transparent" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Tu cotización{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              100% gratis
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Sin compromiso. Un experto te contacta en menos de 2 horas.
          </p>
        </motion.div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/10 border border-green-500/30 rounded-3xl p-12 text-center"
          >
            <div className="text-6xl mb-4">☀️</div>
            <h3 className="text-2xl font-extrabold text-white mb-2">¡Listo! Te contactamos pronto</h3>
            <p className="text-slate-400">
              Un asesor SOLVIDA te llamará en las próximas 2 horas para diseñar tu sistema ideal.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">Nombre *</label>
                <input
                  required
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-slate-700/50 border border-slate-600 focus:border-amber-400 text-white placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">Teléfono *</label>
                <input
                  required
                  type="tel"
                  placeholder="55 1234 5678"
                  className="w-full bg-slate-700/50 border border-slate-600 focus:border-amber-400 text-white placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2">Correo electrónico *</label>
              <input
                required
                type="email"
                placeholder="tu@correo.com"
                className="w-full bg-slate-700/50 border border-slate-600 focus:border-amber-400 text-white placeholder-slate-500 rounded-xl px-4 py-3 outline-none transition-colors"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  Pago mensual de CFE
                </label>
                <select className="w-full bg-slate-700/50 border border-slate-600 focus:border-amber-400 text-white rounded-xl px-4 py-3 outline-none transition-colors">
                  <option value="">Selecciona</option>
                  <option>Menos de $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>Más de $10,000</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">Estado</label>
                <select className="w-full bg-slate-700/50 border border-slate-600 focus:border-amber-400 text-white rounded-xl px-4 py-3 outline-none transition-colors">
                  <option value="">Selecciona</option>
                  <option>Ciudad de México</option>
                  <option>Jalisco</option>
                  <option>Nuevo León</option>
                  <option>Puebla</option>
                  <option>Estado de México</option>
                  <option>Querétaro</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2">
                Tipo de propiedad
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["Casa", "Negocio", "Industria"].map((t) => (
                  <label key={t} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="tipo" value={t} className="accent-amber-400" />
                    <span className="text-slate-300 text-sm">{t}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 disabled:opacity-70 text-slate-900 font-bold py-4 rounded-2xl text-lg transition-all shadow-lg shadow-amber-500/25"
            >
              {loading ? "Enviando..." : "Quiero mi cotización gratis →"}
            </button>

            <p className="text-center text-slate-500 text-xs">
              Al enviar aceptas que un asesor SOLVIDA te contacte. Sin spam, sin compromiso.
            </p>
          </motion.form>
        )}

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs"
        >
          <span className="flex items-center gap-1.5">🔒 Datos 100% seguros</span>
          <span className="flex items-center gap-1.5">✅ Sin enganche</span>
          <span className="flex items-center gap-1.5">⚡ Respuesta en 2 horas</span>
          <span className="flex items-center gap-1.5">🏆 Certificados ANES</span>
        </motion.div>
      </div>
    </section>
  );
}
