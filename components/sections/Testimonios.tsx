"use client";
import { motion } from "framer-motion";

const testimonios = [
  {
    nombre: "María González",
    ciudad: "CDMX, Coyoacán",
    foto: "MG",
    color: "bg-rose-500",
    texto:
      "Antes pagaba $4,200 de CFE cada dos meses. Con SOLVIDA ahora pago menos de $200. La instalación fue en un solo día y la app es increíble. Totalmente recomendado.",
    ahorro: "$4,000 bimensual",
    sistema: "5 kW · 10 paneles",
    estrellas: 5,
  },
  {
    nombre: "Roberto Sánchez",
    ciudad: "Guadalajara, Jalisco",
    foto: "RS",
    color: "bg-blue-500",
    texto:
      "Tenía miedo de hacer la inversión pero me explicaron todo clarísimo. En 8 meses ya recuperé el 30% con el ahorro. El soporte post-instalación es excelente.",
    ahorro: "$2,800/mes",
    sistema: "3 kW · 6 paneles",
    estrellas: 5,
  },
  {
    nombre: "Familia Torres",
    ciudad: "Monterrey, NL",
    foto: "FT",
    color: "bg-amber-500",
    texto:
      "Instalamos 20 paneles para nuestra casa en zona residencial. El sistema de batería nos da tranquilidad en cortes de luz. CFE ahora nos debe a nosotros con la venta de excedentes.",
    ahorro: "$6,500/mes",
    sistema: "10 kW · 20 paneles",
    estrellas: 5,
  },
  {
    nombre: "Carlos Mendoza",
    ciudad: "Puebla, Pue.",
    foto: "CM",
    color: "bg-green-500",
    texto:
      "Mi negocio de carpintería usaba mucho equipo eléctrico. SOLVIDA nos hizo un sistema comercial personalizado. Ya ahorramos más de $50,000 en 6 meses.",
    ahorro: "$8,200/mes",
    sistema: "15 kW comercial",
    estrellas: 5,
  },
];

export default function Testimonios() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              clientes
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Más de 2,400 familias y negocios ya confían en SOLVIDA.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.estrellas }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.texto}&rdquo;
              </p>

              <div className="border-t border-slate-700 pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  >
                    {t.foto}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.nombre}</div>
                    <div className="text-slate-500 text-xs">{t.ciudad}</div>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2">
                  <div className="text-green-400 text-xs font-bold">Ahorrando {t.ahorro}</div>
                  <div className="text-slate-500 text-xs">{t.sistema}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
