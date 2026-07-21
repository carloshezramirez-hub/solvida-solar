"use client";
import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = { dict: Dictionary; locale: Locale };

function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if ((window as unknown as Record<string, unknown>).gtag) {
    (window as unknown as Record<string, (...args: unknown[]) => void>).gtag("event", name, params);
  }
  if ((window as unknown as Record<string, unknown>).fbq) {
    (window as unknown as Record<string, (...args: unknown[]) => void>).fbq("trackCustom", name, params);
  }
}

const inputClass =
  "w-full bg-white border border-[#d1fae5] focus:border-[#16a34a] text-[#052e16] placeholder-[#86a990] rounded-xl px-4 py-3 outline-none transition-colors text-sm";
const labelClass = "block text-[#166534] text-sm font-semibold mb-1.5";
const selectClass =
  "w-full bg-white border border-[#d1fae5] focus:border-[#16a34a] text-[#052e16] rounded-xl px-4 py-3 outline-none transition-colors text-sm";

export default function Formulario({ dict, locale }: Props) {
  const f = dict.form;
  const formRef = useRef<HTMLFormElement>(null);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [privacyError, setPrivacyError] = useState("");

  const privacyLink = locale === "en" ? `/${locale}/privacy-policy` : `/${locale}/aviso-privacidad`;

  const onStart = useCallback(() => {
    if (!started) {
      setStarted(true);
      trackEvent("LeadFormStarted", { locale });
    }
  }, [started, locale]);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    setFileError("");
    if (!f) { setFile(null); return; }
    const allowed = ["application/pdf", "image/jpeg", "image/png", "image/heic"];
    if (!allowed.includes(f.type) && !f.name.toLowerCase().endsWith(".heic")) {
      setFileError(dict.form.validation.fileType);
      setFile(null);
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setFileError(dict.form.validation.fileSize);
      setFile(null);
      return;
    }
    setFile(f);
    trackEvent("CfeBillUploaded", { locale });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!privacyChecked) {
      setPrivacyError(f.validation.privacy);
      return;
    }
    setPrivacyError("");
    setLoading(true);
    setError("");

    const formEl = formRef.current!;
    const data = new FormData(formEl);
    data.set("locale", locale);
    data.set("source", "main-form");
    if (file) data.set("cfeBill", file);

    try {
      const res = await fetch("/api/lead", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      trackEvent("LeadFormSubmitted", { locale, source: "main-form" });
      setSent(true);
    } catch {
      setError(f.error);
    } finally {
      setLoading(false);
    }
  }

  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const msg = encodeURIComponent(dict.whatsapp.prefilledMessage);

  if (sent) {
    return (
      <section id="formulario" className="py-20 sm:py-28 bg-[#f0fdf4]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-[#052e16] mb-4">{f.success.heading}</h2>
            <p className="text-[#4b6a55] text-lg mb-2">{f.success.message}</p>
            <p className="text-[#86a990] text-sm mb-8">{f.success.note}</p>
            {wa && (
              <a
                href={`https://wa.me/${wa}?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.85L.057 23.928a.5.5 0 0 0 .614.614l6.079-1.471A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.793-.537-5.357-1.471l-.384-.226-3.603.872.871-3.604-.226-.383A9.949 9.949 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                {f.success.ctaWhatsapp}
              </a>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-20 sm:py-28 bg-[#f0fdf4]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052e16] mb-4">
            {f.heading}
          </h2>
          <p className="text-[#4b6a55] text-lg leading-relaxed">{f.subheading}</p>
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          onFocus={onStart}
          className="bg-white border border-[#d1fae5] rounded-3xl p-7 sm:p-10 space-y-5 shadow-sm"
        >
          {/* Honeypot */}
          <input type="text" name="website" className="sr-only" aria-hidden="true" tabIndex={-1} />
          <input type="hidden" name="locale" value={locale} />
          <input type="hidden" name="source" value="main-form" />

          {/* Name */}
          <div>
            <label className={labelClass} htmlFor="f-name">{f.name} *</label>
            <input id="f-name" name="name" required type="text" placeholder={f.namePlaceholder} className={inputClass} />
          </div>

          {/* WhatsApp + Email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass} htmlFor="f-wa">{f.whatsapp} *</label>
              <input id="f-wa" name="whatsapp" required type="tel" placeholder={f.whatsappPlaceholder} className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="f-email">{f.email}</label>
              <input id="f-email" name="email" type="email" placeholder={f.emailPlaceholder} className={inputClass} />
            </div>
          </div>

          {/* Preferred language */}
          <div>
            <label className={labelClass} htmlFor="f-lang">{f.preferredLanguage}</label>
            <select id="f-lang" name="preferredLanguage" defaultValue={locale} className={selectClass}>
              {f.preferredLanguageOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Postal + Neighborhood */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass} htmlFor="f-postal">{f.postalCode}</label>
              <input id="f-postal" name="postalCode" type="text" placeholder={f.postalCodePlaceholder} className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="f-nbhd">{f.neighborhood}</label>
              <input id="f-nbhd" name="neighborhood" type="text" placeholder={f.neighborhoodPlaceholder} className={inputClass} />
            </div>
          </div>

          {/* Ownership */}
          <div>
            <label className={labelClass} htmlFor="f-own">{f.ownership}</label>
            <select id="f-own" name="ownership" className={selectClass}>
              {f.ownershipOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Bill amount */}
          <div>
            <label className={labelClass} htmlFor="f-bill">{f.billAmount}</label>
            <select id="f-bill" name="billAmount" className={selectClass}>
              <option value="">{locale === "en" ? "Select…" : "Selecciona…"}</option>
              {f.billAmountOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Pool + AC */}
          <div className="grid sm:grid-cols-2 gap-6">
            <fieldset>
              <legend className={labelClass}>{f.pool}</legend>
              <div className="flex gap-4 mt-1">
                {f.yesNo.map((o) => (
                  <label key={o.value} className="flex items-center gap-2 cursor-pointer text-sm text-[#166534]">
                    <input type="radio" name="pool" value={o.value} defaultChecked={o.value === "no"} className="accent-[#16a34a]" />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className={labelClass}>{f.ac}</legend>
              <div className="flex gap-4 mt-1">
                {f.yesNo.map((o) => (
                  <label key={o.value} className="flex items-center gap-2 cursor-pointer text-sm text-[#166534]">
                    <input type="radio" name="ac" value={o.value} defaultChecked={o.value === "no"} className="accent-[#16a34a]" />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Timeline */}
          <div>
            <label className={labelClass} htmlFor="f-timeline">{f.timeline}</label>
            <select id="f-timeline" name="timeline" className={selectClass}>
              <option value="">{locale === "en" ? "Select…" : "Selecciona…"}</option>
              {f.timelineOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Payment */}
          <div>
            <label className={labelClass} htmlFor="f-pay">{f.payment}</label>
            <select id="f-pay" name="payment" className={selectClass}>
              <option value="">{locale === "en" ? "Select…" : "Selecciona…"}</option>
              {f.paymentOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* CFE bill upload */}
          <div>
            <label className={labelClass}>{f.uploadBill}</label>
            <div className="border-2 border-dashed border-[#d1fae5] rounded-xl p-5 text-center hover:border-[#86efac] transition-colors">
              <input
                type="file"
                name="cfeBillUpload"
                accept=".pdf,.jpg,.jpeg,.png,.heic"
                onChange={handleFile}
                className="hidden"
                id="f-file"
              />
              <label htmlFor="f-file" className="cursor-pointer">
                <svg className="w-8 h-8 text-[#86a990] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="block text-[#16a34a] text-sm font-semibold mb-1">{f.uploadBillButton}</span>
                {file ? (
                  <span className="text-[#166534] text-xs">{f.uploadBillSelected}: {file.name}</span>
                ) : (
                  <span className="text-[#86a990] text-xs">{f.uploadBillHelp}</span>
                )}
              </label>
            </div>
            {fileError && <p className="text-red-600 text-xs mt-1.5">{fileError}</p>}
          </div>

          {/* Privacy consent */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={privacyChecked}
                onChange={(e) => { setPrivacyChecked(e.target.checked); setPrivacyError(""); }}
                className="mt-0.5 accent-[#16a34a] flex-shrink-0"
              />
              <span className="text-[#4b6a55] text-xs leading-relaxed">
                {f.privacyConsent}{" "}
                <Link href={privacyLink} className="text-[#16a34a] hover:underline">
                  {f.privacyLink}
                </Link>
                .
              </span>
            </label>
            {privacyError && <p className="text-red-600 text-xs mt-1">{privacyError}</p>}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#16a34a] hover:bg-[#15803d] disabled:opacity-60 text-white font-semibold py-4 rounded-2xl text-base transition-colors shadow-md shadow-green-200"
          >
            {loading ? (locale === "en" ? "Sending…" : "Enviando…") : f.submit}
          </button>

          {wa && (
            <p className="text-center text-[#86a990] text-xs">
              {locale === "en" ? "Or send us a message on " : "O escríbenos directamente por "}
              <a
                href={`https://wa.me/${wa}?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("WhatsAppClicked", { locale, source: "form-footer" })}
                className="text-[#16a34a] hover:underline font-semibold"
              >
                WhatsApp
              </a>
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
