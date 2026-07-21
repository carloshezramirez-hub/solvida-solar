import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function getIP(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getIP(req);

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  // Honeypot check
  const honeypot = data.get("website");
  if (honeypot && String(honeypot).trim() !== "") {
    return NextResponse.json({ ok: true }); // silently drop
  }

  const name = String(data.get("name") || "").trim();
  const whatsapp = String(data.get("whatsapp") || "").trim();
  const email = String(data.get("email") || "").trim();
  const locale = String(data.get("locale") || "es").trim();
  const source = String(data.get("source") || "form").trim();

  // Basic validation
  if (!name || !whatsapp) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (name.length > 200 || whatsapp.length > 30 || email.length > 200) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  // Collect all fields
  const leadData: Record<string, string> = {
    name,
    whatsapp,
    email,
    locale,
    source,
    preferredLanguage: String(data.get("preferredLanguage") || locale),
    postalCode: String(data.get("postalCode") || ""),
    neighborhood: String(data.get("neighborhood") || ""),
    ownership: String(data.get("ownership") || ""),
    billAmount: String(data.get("billAmount") || ""),
    pool: String(data.get("pool") || ""),
    ac: String(data.get("ac") || ""),
    timeline: String(data.get("timeline") || ""),
    payment: String(data.get("payment") || ""),
    billFreq: String(data.get("billFreq") || ""),
    homeType: String(data.get("homeType") || ""),
    batteries: String(data.get("batteries") || ""),
    submittedAt: new Date().toISOString(),
    ip,
  };

  // Validate file if provided (don't store publicly accessible URL — just record presence)
  const file = data.get("cfeBill") as File | null;
  let fileInfo = "";
  if (file && file.size > 0) {
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large" }, { status: 400 });
    }
    const allowed = ["application/pdf", "image/jpeg", "image/png", "image/heic"];
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (!allowed.includes(file.type) && ext !== "heic") {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }
    fileInfo = `${file.name} (${Math.round(file.size / 1024)} KB)`;
    leadData.cfeBillFile = fileInfo;
    // In production: upload file to secure storage (S3, GCS, etc.)
    // Do NOT expose file URL publicly or log file contents
  }

  // Forward to CRM webhook if configured
  const crmWebhook = process.env.CRM_WEBHOOK_URL;
  let crmOk = false;
  if (crmWebhook) {
    try {
      const res = await fetch(crmWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
      crmOk = res.ok;
    } catch {
      // CRM failure doesn't lose lead
      console.warn("[lead] CRM webhook failed, lead saved locally");
    }
  }

  // Send email notification if configured
  const notifyEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  if (notifyEmail) {
    // In production: integrate with Resend, SendGrid, Postmark, etc.
    // Placeholder: log intent
    console.log(`[lead] New lead from ${name} (${whatsapp}) — notify: ${notifyEmail}`);
  }

  // Log lead (avoid logging file contents or sensitive bill data)
  console.log(
    `[lead] New lead: locale=${locale} source=${source} name=${name} wa=${whatsapp} ` +
    `pool=${leadData.pool} ac=${leadData.ac} bill=${leadData.billAmount} ` +
    `file=${fileInfo || "none"} crmOk=${crmOk}`
  );

  return NextResponse.json({ ok: true });
}
