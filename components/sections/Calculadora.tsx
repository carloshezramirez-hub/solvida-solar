"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };
type Stage = "form" | "result" | "capture";

function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if ((window as unknown as Record<string, unknown>).gtag) {
    (window as unknown as Record<string, (...args: unknown[]) => void>).gtag("event", name, params);
  }
  if ((window as unknown as Record<string, unknown>).fbq) {
    (window as unknown as Record<string, (...args: unknown[]) => void>).fbq("trackCustom", name, params);
  }
}

function estimateSystem(billAmount: number, freq: string, pool: string, ac: string): { kw: string; gen: string } {
  const monthly = freq === "bimonthly" ? billAmount / 2 : billAmount;
  let base = monthly / 400;
  if (pool === "yes") base += 1.5;
  if (ac === "yes") base += 1;
  const kw = Math.max(2, Math.min(20, base));
  const low = Math.max(2, kw - 1);
  const high = kw + 2;
  return {
    kw: `${low.toFixed(0)}–${high.toFixed(0)} kW`,
    gen: `${(low * 4.5).toFixed(1)}–${(high * 4.5).toFixed(1)} kWh/día`,
  };
}

/* ── Disclaimer banner ── */
function DisclaimerBanner({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-4 mb-8">
      <svg className="w-5 h-5 text-[#86efac] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p className="text-white font-semibold text-base mb-1">
          {locale === "en" ? "For reference only" : "Solo de referencia"}
        </p>
        <p className="text-[#86efac]/80 text-sm leading-relaxed">
          {locale === "en"
            ? "This estimate is a general illustration based on typical consumption patterns. It is not a quote, contract, or commitment of any kind. An actual proposal requires a site visit and analysis of your CFE bill."
            : "Esta estimación es una ilustración general basada en patrones de consumo típicos. No es una cotización, contrato ni compromiso de ningún tipo. Una propuesta real requiere una visita técnica y el análisis de tu recibo de CFE."}
        </p>
      </div>
    </div>
  );
}

export default function Calculadora({ dict, locale }: Props) {
  const c = dict.calculator;
  const [stage, setStage] = useState<Stage>("form");
  const [billAmount, setBillAmount] = useState("");
  const [billFreq, setBillFreq] = useState("bimonthly");
  const [homeType, setHomeType] = useState("house");
  const [ownership, setOwnership] = useState("owner");
  const [pool, setPool] = useState("no");
  const [ac, setAc] = useState("no");
  const [roofType, setRoofType] = useState("unknown");
  const [batteries, setBatteries] = useState("maybe");
  const [postalCode, setPostalCode] = useState("");
  const [estimate, setEstimate] = useState<{ kw: string; gen: string } | null>(null);

  const [capName, setCapName] = useState("");
  const [capWa, setCapWa] = useState("");
  const [capEmail, setCapEmail] = useState("");
  const [capFile, setCapFile] = useState<File | null>(null);
  const [capSent, setCapSent] = useState(false);
  const [capLoading, setCapLoading] = useState(false);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const amt = parseFloat(billAmount.replace(/[^0-9.]/g, ""));
    if (!amt) return;
    setEstimate(estimateSystem(amt, billFreq, pool, ac));
    setStage("result");
    trackEvent("CalculatorCompleted", { locale, billFreq, pool, ac, homeType });
  }

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault();
    setCapLoading(true);
    try {
      const fd = new FormData();
      fd.append("name", capName);
      fd.append("whatsapp", capWa);
      fd.append("email", capEmail);
      fd.append("source", "calculator");
      fd.append("locale", locale);
      fd.append("billAmount", billAmount);
      fd.append("billFreq", billFreq);
      fd.append("homeType", homeType);
      fd.append("pool", pool);
      fd.append("ac", ac);
      fd.append("batteries", batteries);
      fd.append("postalCode", postalCode);
      if (capFile) fd.append("cfeBill", capFile);
      await fetch("/api/lead", { method: "POST", body: fd });
      trackEvent("LeadFormSubmitted", { locale, source: "calculator" });
      if (capFile) trackEvent("CfeBillUploaded", { locale });
      setCapSent(true);
    } finally {
      setCapLoading(false);
    }
  }

  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(dict.whatsapp.prefilledMessage);

  /* Bigger inputs for 50+ users — min-height enforced by globals.css */
  const inputCls = "w-full bg-[#052e16] border border-[#1a5c38] focus:border-[#16a34a] text-white placeholder-[#4b6a55] rounded-xl px-4 py-3 outline-none transition-colors text-base";
  const labelCls = "block text-white/90 font-semibold mb-2 text-base";
  const radioLabelCls = "flex items-center gap-3 cursor-pointer text-[#86efac]/80 text-base py-1";

  return (
    <section id="calculadora" className="py-20 sm:py-28 bg-[#052e16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#86efac] text-sm font-semibold uppercase tracking-widest mb-3">
            {locale === "en" ? "Reference Simulator" : "Simulador de Referencia"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{c.heading}</h2>
          <p className="text-[#86efac]/70 text-lg max-w-xl mx-auto leading-relaxed">{c.subheading}</p>
        </motion.div>

        <AnimatePresence mode="wait">

          {/* ── Stage: form ────────────────────────── */}
          {stage === "form" && (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <DisclaimerBanner locale={locale} />

              <form
                onSubmit={handleCalculate}
                className="bg-[#0a3020] border border-[#1a5c38] rounded-3xl p-7 sm:p-10 grid sm:grid-cols-2 gap-7"
                onClick={() => trackEvent("CalculatorStarted", { locale })}
              >
                {/* Bill amount */}
                <div className="sm:col-span-2">
                  <label className={labelCls}>{c.fields.billAmount} *</label>
                  <input
                    required
                    type="number"
                    min={1}
                    placeholder={c.fields.billAmountPlaceholder}
                    value={billAmount}
                    onChange={(e) => setBillAmount(e.target.value)}
                    className={inputCls}
                  />
                  <p className="text-[#86efac]/50 text-sm mt-2">
                    {locale === "en" ? "Enter the total amount shown on your electricity bill" : "Ingresa el monto total que aparece en tu recibo de CFE"}
                  </p>
                </div>

                {/* Frequency */}
                <div>
                  <label className={labelCls}>{c.fields.billFrequency}</label>
                  <select value={billFreq} onChange={(e) => setBillFreq(e.target.value)} className={inputCls}>
                    {c.fields.billFrequencyOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                {/* Home type */}
                <div>
                  <label className={labelCls}>{c.fields.homeType}</label>
                  <select value={homeType} onChange={(e) => setHomeType(e.target.value)} className={inputCls}>
                    {c.fields.homeTypeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                {/* Ownership */}
                <div>
                  <label className={labelCls}>{c.fields.ownership}</label>
                  <select value={ownership} onChange={(e) => setOwnership(e.target.value)} className={inputCls}>
                    {c.fields.ownershipOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                {/* Roof type */}
                <div>
                  <label className={labelCls}>{c.fields.roofType}</label>
                  <select value={roofType} onChange={(e) => setRoofType(e.target.value)} className={inputCls}>
                    {c.fields.roofTypeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                {/* Pool */}
                <div>
                  <p className={labelCls}>{c.fields.pool}</p>
                  <div className="flex gap-6 mt-1">
                    {c.fields.yesNo.map((o) => (
                      <label key={o.value} className={radioLabelCls}>
                        <input type="radio" name="pool" value={o.value} checked={pool === o.value} onChange={() => setPool(o.value)} className="accent-[#16a34a] w-5 h-5" />
                        {o.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* AC */}
                <div>
                  <p className={labelCls}>{c.fields.ac}</p>
                  <div className="flex gap-6 mt-1">
                    {c.fields.yesNo.map((o) => (
                      <label key={o.value} className={radioLabelCls}>
                        <input type="radio" name="ac" value={o.value} checked={ac === o.value} onChange={() => setAc(o.value)} className="accent-[#16a34a] w-5 h-5" />
                        {o.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Batteries */}
                <div>
                  <p className={labelCls}>{c.fields.batteries}</p>
                  <div className="flex gap-6 flex-wrap mt-1">
                    {c.fields.yesNo.concat([{ value: "maybe", label: locale === "en" ? "Not sure" : "No lo sé" }]).map((o) => (
                      <label key={o.value} className={radioLabelCls}>
                        <input type="radio" name="batteries" value={o.value} checked={batteries === o.value} onChange={() => setBatteries(o.value)} className="accent-[#16a34a] w-5 h-5" />
                        {o.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Postal code */}
                <div>
                  <label className={labelCls}>{c.fields.postalCode}</label>
                  <input type="text" placeholder={c.fields.postalCodePlaceholder} value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className={inputCls} />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button type="submit" className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-5 rounded-2xl text-lg transition-colors shadow-lg shadow-green-900/40">
                    {c.calculate}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* ── Stage: result ──────────────────────── */}
          {stage === "result" && estimate && (
            <motion.div key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="bg-[#0a3020] border border-[#1a5c38] rounded-3xl p-7 sm:p-10">

              {/* Demo disclaimer — prominent at top of results */}
              <div className="flex items-start gap-3 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-5 py-4 mb-8">
                <svg className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-yellow-200 text-base leading-relaxed">
                  {locale === "en"
                    ? "These figures are for reference only — not a quote or commitment. Your real system size depends on a technical site visit and a detailed review of your electricity bill."
                    : "Estas cifras son solo de referencia — no son una cotización ni un compromiso. El tamaño real del sistema depende de una visita técnica y el análisis detallado de tu recibo de CFE."}
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">{c.result.heading}</h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                <div className="bg-[#052e16] rounded-2xl p-6">
                  <p className="text-[#86efac]/60 text-sm font-semibold mb-2 uppercase tracking-wide">{c.result.systemRange}</p>
                  <p className="text-3xl font-extrabold text-[#86efac]">{estimate.kw}</p>
                </div>
                <div className="bg-[#052e16] rounded-2xl p-6">
                  <p className="text-[#86efac]/60 text-sm font-semibold mb-2 uppercase tracking-wide">{c.result.generationRange}</p>
                  <p className="text-3xl font-extrabold text-white">{estimate.gen}</p>
                </div>
              </div>

              <div className="bg-[#16a34a]/10 border border-[#16a34a]/30 rounded-xl p-5 mb-7">
                <p className="text-[#86efac]/80 text-base leading-relaxed">{c.result.disclaimer}</p>
              </div>

              <p className="text-white font-semibold text-lg mb-2">{c.result.nextStep}</p>
              <p className="text-[#86efac]/70 text-base mb-7 leading-relaxed">{c.result.nextStepText}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setStage("capture")}
                  className="flex-1 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-4 rounded-2xl transition-colors text-base shadow-lg shadow-green-900/40">
                  {c.result.ctaPrimary}
                </button>
                {wa && (
                  <a href={`https://wa.me/${wa}?text=${msg}`} target="_blank" rel="noopener noreferrer"
                    className="flex-1 border-2 border-[#1a5c38] hover:border-[#86efac] text-[#86efac] hover:text-white font-bold py-4 rounded-2xl transition-colors text-base text-center">
                    {c.result.ctaWhatsapp}
                  </a>
                )}
              </div>
              <button onClick={() => setStage("form")}
                className="mt-5 text-[#86efac]/50 hover:text-[#86efac] text-base underline">
                {locale === "en" ? "← Start over" : "← Volver a calcular"}
              </button>
            </motion.div>
          )}

          {/* ── Stage: capture ─────────────────────── */}
          {stage === "capture" && (
            <motion.div key="capture" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="bg-[#0a3020] border border-[#1a5c38] rounded-3xl p-7 sm:p-10">
              {capSent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-[#16a34a]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-[#86efac]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{dict.form.success.heading}</h3>
                  <p className="text-[#86efac]/70 text-lg mb-7 leading-relaxed">{dict.form.success.message}</p>
                  {wa && (
                    <a href={`https://wa.me/${wa}?text=${msg}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
                      {dict.form.success.ctaWhatsapp}
                    </a>
                  )}
                </div>
              ) : (
                <form onSubmit={handleCapture} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-5">{c.captureHeading}</h3>
                  <div>
                    <label className={labelCls}>{c.name} *</label>
                    <input required value={capName} onChange={(e) => setCapName(e.target.value)} placeholder={c.namePlaceholder} className={inputCls} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>{c.whatsapp} *</label>
                      <input required value={capWa} onChange={(e) => setCapWa(e.target.value)} placeholder={c.whatsappPlaceholder} className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>{c.email}</label>
                      <input type="email" value={capEmail} onChange={(e) => setCapEmail(e.target.value)} placeholder={c.emailPlaceholder} className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>{c.uploadBill}</label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png,.heic"
                      onChange={(e) => setCapFile(e.target.files?.[0] || null)}
                      className="w-full text-[#86efac]/70 text-base file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:bg-[#16a34a] file:text-white file:cursor-pointer file:font-semibold hover:file:bg-[#15803d]" />
                    <p className="text-[#86efac]/50 text-sm mt-2">{c.uploadBillHelp}</p>
                  </div>
                  <p className="text-[#86efac]/50 text-sm leading-relaxed">{c.privacy}</p>
                  <button type="submit" disabled={capLoading}
                    className="w-full bg-[#16a34a] hover:bg-[#15803d] disabled:opacity-60 text-white font-bold py-5 rounded-2xl transition-colors text-lg shadow-lg">
                    {capLoading ? "..." : c.submit}
                  </button>
                </form>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
