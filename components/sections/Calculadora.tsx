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
  let base = monthly / 400; // rough kWh / pesos ratio
  if (pool === "yes") base += 1.5;
  if (ac === "yes") base += 1;
  const kw = Math.max(2, Math.min(20, base));
  const low = Math.max(2, kw - 1);
  const high = kw + 2;
  const genLow = (low * 4.5).toFixed(1);
  const genHigh = (high * 4.5).toFixed(1);
  return { kw: `${low.toFixed(0)}–${high.toFixed(0)} kW`, gen: `${genLow}–${genHigh} kWh/día` };
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
    const result = estimateSystem(amt, billFreq, pool, ac);
    setEstimate(result);
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

  return (
    <section id="calculadora" className="py-20 sm:py-28 bg-[#1C1917]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {c.heading}
          </h2>
          <p className="text-[#A8A29E] text-lg max-w-xl mx-auto">{c.subheading}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {stage === "form" && (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleCalculate}
              className="bg-[#292524] border border-[#44403C] rounded-3xl p-8 grid sm:grid-cols-2 gap-6"
              onClick={() => trackEvent("CalculatorStarted", { locale })}
            >
              {/* Bill amount */}
              <div className="sm:col-span-2">
                <label className="block text-[#E7E1D5] text-sm font-semibold mb-2">
                  {c.fields.billAmount} *
                </label>
                <input
                  required
                  type="number"
                  min={1}
                  placeholder={c.fields.billAmountPlaceholder}
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                  className="w-full bg-[#1C1917] border border-[#44403C] focus:border-[#D97706] text-white placeholder-[#78716C] rounded-xl px-4 py-3 outline-none transition-colors"
                />
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-[#E7E1D5] text-sm font-semibold mb-2">
                  {c.fields.billFrequency}
                </label>
                <select
                  value={billFreq}
                  onChange={(e) => setBillFreq(e.target.value)}
                  className="w-full bg-[#1C1917] border border-[#44403C] focus:border-[#D97706] text-white rounded-xl px-4 py-3 outline-none transition-colors"
                >
                  {c.fields.billFrequencyOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* Home type */}
              <div>
                <label className="block text-[#E7E1D5] text-sm font-semibold mb-2">
                  {c.fields.homeType}
                </label>
                <select
                  value={homeType}
                  onChange={(e) => setHomeType(e.target.value)}
                  className="w-full bg-[#1C1917] border border-[#44403C] focus:border-[#D97706] text-white rounded-xl px-4 py-3 outline-none transition-colors"
                >
                  {c.fields.homeTypeOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* Ownership */}
              <div>
                <label className="block text-[#E7E1D5] text-sm font-semibold mb-2">
                  {c.fields.ownership}
                </label>
                <select
                  value={ownership}
                  onChange={(e) => setOwnership(e.target.value)}
                  className="w-full bg-[#1C1917] border border-[#44403C] focus:border-[#D97706] text-white rounded-xl px-4 py-3 outline-none transition-colors"
                >
                  {c.fields.ownershipOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* Pool */}
              <div>
                <p className="text-[#E7E1D5] text-sm font-semibold mb-3">{c.fields.pool}</p>
                <div className="flex gap-4">
                  {c.fields.yesNo.map((o) => (
                    <label key={o.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="pool"
                        value={o.value}
                        checked={pool === o.value}
                        onChange={() => setPool(o.value)}
                        className="accent-[#D97706]"
                      />
                      <span className="text-[#A8A29E] text-sm">{o.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* AC */}
              <div>
                <p className="text-[#E7E1D5] text-sm font-semibold mb-3">{c.fields.ac}</p>
                <div className="flex gap-4">
                  {c.fields.yesNo.map((o) => (
                    <label key={o.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="ac"
                        value={o.value}
                        checked={ac === o.value}
                        onChange={() => setAc(o.value)}
                        className="accent-[#D97706]"
                      />
                      <span className="text-[#A8A29E] text-sm">{o.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Roof type */}
              <div>
                <label className="block text-[#E7E1D5] text-sm font-semibold mb-2">
                  {c.fields.roofType}
                </label>
                <select
                  value={roofType}
                  onChange={(e) => setRoofType(e.target.value)}
                  className="w-full bg-[#1C1917] border border-[#44403C] focus:border-[#D97706] text-white rounded-xl px-4 py-3 outline-none transition-colors"
                >
                  {c.fields.roofTypeOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* Batteries */}
              <div>
                <p className="text-[#E7E1D5] text-sm font-semibold mb-3">{c.fields.batteries}</p>
                <div className="flex gap-4 flex-wrap">
                  {c.fields.yesNo.concat([{ value: "maybe", label: locale === "en" ? "Maybe" : "Quizás" }]).map((o) => (
                    <label key={o.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="batteries"
                        value={o.value}
                        checked={batteries === o.value}
                        onChange={() => setBatteries(o.value)}
                        className="accent-[#D97706]"
                      />
                      <span className="text-[#A8A29E] text-sm">{o.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Postal code */}
              <div>
                <label className="block text-[#E7E1D5] text-sm font-semibold mb-2">
                  {c.fields.postalCode}
                </label>
                <input
                  type="text"
                  placeholder={c.fields.postalCodePlaceholder}
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full bg-[#1C1917] border border-[#44403C] focus:border-[#D97706] text-white placeholder-[#78716C] rounded-xl px-4 py-3 outline-none transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-semibold py-4 rounded-2xl text-base transition-colors"
                >
                  {c.calculate}
                </button>
              </div>
            </motion.form>
          )}

          {stage === "result" && estimate && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-[#292524] border border-[#44403C] rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">{c.result.heading}</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1C1917] rounded-2xl p-5">
                  <p className="text-[#78716C] text-xs font-semibold mb-1 uppercase tracking-wide">{c.result.systemRange}</p>
                  <p className="text-2xl font-extrabold text-[#D97706]">{estimate.kw}</p>
                </div>
                <div className="bg-[#1C1917] rounded-2xl p-5">
                  <p className="text-[#78716C] text-xs font-semibold mb-1 uppercase tracking-wide">{c.result.generationRange}</p>
                  <p className="text-2xl font-extrabold text-white">{estimate.gen}</p>
                </div>
              </div>

              <div className="bg-[#FEF3C7]/10 border border-[#D97706]/20 rounded-xl p-4 mb-6">
                <p className="text-[#A8A29E] text-sm leading-relaxed">{c.result.disclaimer}</p>
              </div>

              <p className="text-[#A8A29E] text-sm mb-2 font-semibold">{c.result.nextStep}</p>
              <p className="text-[#78716C] text-sm mb-6">{c.result.nextStepText}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setStage("capture")}
                  className="flex-1 bg-[#D97706] hover:bg-[#B45309] text-white font-semibold py-3.5 rounded-2xl transition-colors text-sm"
                >
                  {c.result.ctaPrimary}
                </button>
                {wa && (
                  <a
                    href={`https://wa.me/${wa}?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#44403C] hover:border-[#D97706] text-[#E7E1D5] hover:text-[#D97706] font-semibold py-3.5 rounded-2xl transition-colors text-sm text-center"
                  >
                    {c.result.ctaWhatsapp}
                  </a>
                )}
              </div>
              <button
                onClick={() => setStage("form")}
                className="mt-4 text-[#78716C] hover:text-[#A8A29E] text-sm underline"
              >
                {locale === "en" ? "← Recalculate" : "← Recalcular"}
              </button>
            </motion.div>
          )}

          {stage === "capture" && (
            <motion.div
              key="capture"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-[#292524] border border-[#44403C] rounded-3xl p-8"
            >
              {capSent ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-[#D97706]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{dict.form.success.heading}</h3>
                  <p className="text-[#A8A29E] mb-6">{dict.form.success.message}</p>
                  {wa && (
                    <a
                      href={`https://wa.me/${wa}?text=${msg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
                    >
                      {dict.form.success.ctaWhatsapp}
                    </a>
                  )}
                </div>
              ) : (
                <form onSubmit={handleCapture} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-4">{c.captureHeading}</h3>
                  <div>
                    <label className="block text-[#E7E1D5] text-sm font-semibold mb-1.5">{c.name} *</label>
                    <input required value={capName} onChange={(e) => setCapName(e.target.value)}
                      placeholder={c.namePlaceholder}
                      className="w-full bg-[#1C1917] border border-[#44403C] focus:border-[#D97706] text-white placeholder-[#78716C] rounded-xl px-4 py-3 outline-none transition-colors" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#E7E1D5] text-sm font-semibold mb-1.5">{c.whatsapp} *</label>
                      <input required value={capWa} onChange={(e) => setCapWa(e.target.value)}
                        placeholder={c.whatsappPlaceholder}
                        className="w-full bg-[#1C1917] border border-[#44403C] focus:border-[#D97706] text-white placeholder-[#78716C] rounded-xl px-4 py-3 outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[#E7E1D5] text-sm font-semibold mb-1.5">{c.email}</label>
                      <input type="email" value={capEmail} onChange={(e) => setCapEmail(e.target.value)}
                        placeholder={c.emailPlaceholder}
                        className="w-full bg-[#1C1917] border border-[#44403C] focus:border-[#D97706] text-white placeholder-[#78716C] rounded-xl px-4 py-3 outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#E7E1D5] text-sm font-semibold mb-1.5">{c.uploadBill}</label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.heic"
                      onChange={(e) => setCapFile(e.target.files?.[0] || null)}
                      className="w-full text-[#A8A29E] text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#D97706] file:text-white file:cursor-pointer file:font-semibold hover:file:bg-[#B45309]"
                    />
                    <p className="text-[#78716C] text-xs mt-1.5">{c.uploadBillHelp}</p>
                  </div>
                  <p className="text-[#78716C] text-xs">{c.privacy}</p>
                  <button type="submit" disabled={capLoading}
                    className="w-full bg-[#D97706] hover:bg-[#B45309] disabled:opacity-60 text-white font-semibold py-4 rounded-2xl transition-colors">
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
