export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="text-2xl font-extrabold mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="text-amber-400">SOL</span>
              <span className="text-white">VIDA</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Energía solar para México. Más de 2,400 familias y negocios ahorran con nosotros.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {["#calculadora", "#paquetes", "#como-funciona", "#beneficios", "#faq", "#cotizar"].map((h) => (
                <li key={h}>
                  <a href={h} className="hover:text-amber-400 transition-colors capitalize">
                    {h.replace("#", "").replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li>📧 contacto@solvida.mx</li>
              <li>📞 800-SOLVIDA</li>
              <li>🌐 Ciudad de México · Nacional</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {["Facebook", "Instagram", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-slate-600 hover:text-amber-400 text-sm transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <span>© {new Date().getFullYear()} SOLVIDA Solar. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
