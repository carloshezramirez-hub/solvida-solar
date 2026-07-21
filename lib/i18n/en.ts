import type { Dictionary } from "./es";

export const en: Dictionary = {
  locale: "en",
  meta: {
    title: "SOLVIDA | Solar Panels in San Miguel de Allende",
    titleTemplate: "%s | SOLVIDA Solar",
    description:
      "Residential solar panels in San Miguel de Allende. Free assessment, system sized to your usage, service in English and Spanish. Request your no-obligation evaluation.",
    keywords: [
      "solar panels San Miguel de Allende",
      "home solar installation San Miguel de Allende",
      "residential solar San Miguel de Allende",
      "solar company San Miguel de Allende",
      "solar panels for expats in Mexico",
      "English-speaking solar installer San Miguel de Allende",
      "reduce CFE bill San Miguel de Allende",
      "solar assessment San Miguel de Allende",
      "SOLVIDA solar",
      "solar energy Guanajuato",
      "solar panels Guanajuato Mexico",
    ],
    ogTitle: "SOLVIDA | Solar Panels in San Miguel de Allende",
    ogDescription:
      "Free solar assessment for homeowners in San Miguel de Allende. System sized to your usage, service in English and Spanish.",
  },
  topbar: {
    message: "Bilingual solar service for homeowners in San Miguel de Allende.",
    phone: "Call",
    whatsapp: "WhatsApp",
  },
  nav: {
    home: "Home",
    benefits: "Benefits",
    howItWorks: "How it works",
    options: "Solar options",
    faq: "FAQs",
    assessment: "Get an assessment",
    ctaNav: "Request an assessment",
    langLabel: "Language",
    langSwitch: "ES",
  },
  hero: {
    badge: "Local service · San Miguel de Allende, Gto.",
    heading: "Residential solar panels in San Miguel de Allende",
    subheading:
      "Reduce your dependence on the grid with a solar system designed around your home and electricity usage.",
    ctaPrimary: "Request a free assessment",
    ctaSecondary: "Send your bill on WhatsApp",
    trustLine: "Service in English and Spanish · No-obligation initial assessment",
  },
  problems: {
    heading: "Do any of these sound familiar?",
    subheading:
      "These are the main reasons homeowners in San Miguel de Allende contact us.",
    items: [
      {
        title: "High CFE electricity bills",
        desc: "Air conditioning, water heaters, pumps and appliances can generate consistently high electricity bills from CFE (Mexico's national utility).",
      },
      {
        title: "Pool pump and water system usage",
        desc: "Pool circulation and filtration pumps run continuously and represent a significant electrical load for many properties in the area.",
      },
      {
        title: "Frequent air conditioning use",
        desc: "Intensive climate control during warm months can significantly increase electricity consumption and monthly bills.",
      },
      {
        title: "Grid dependence",
        desc: "Power outages affect equipment, comfort and productivity inside the home — a challenge that solar can help address.",
      },
      {
        title: "Not sure what system my home needs",
        desc: "Without a technical assessment it's difficult to know how many panels, what type, and what specifications are right for your property.",
      },
      {
        title: "Looking for a clear, guided process",
        desc: "CFE interconnection, permits and the technical process can be complex without a reliable local contact.",
      },
    ],
    benefitsHeading: "What a solar assessment can include",
    benefits: [
      {
        title: "System sized to your actual usage",
        desc: "The design starts with your CFE bill analysis, location, roof orientation and property characteristics.",
      },
      {
        title: "Clear written proposal",
        desc: "Before committing, you'll receive a proposal with defined scope, equipment and terms.",
      },
      {
        title: "Production monitoring",
        desc: "Systems can include monitoring so you can track generation from your phone or computer.",
      },
      {
        title: "Equipment with identified warranties",
        desc: "Equipment and warranties are specified in the proposal so you know exactly what you're getting.",
      },
      {
        title: "Bilingual service",
        desc: "You can communicate in English or Spanish throughout the entire process.",
      },
      {
        title: "Guided process",
        desc: "From initial assessment through installation coordination and interconnection, you'll have a single point of contact.",
      },
    ],
  },
  calculator: {
    heading: "How much do you pay for electricity?",
    subheading:
      "Answer a few quick questions to estimate what type of solar system might work for your home.",
    fields: {
      billAmount: "Approximately how much is your CFE electricity bill?",
      billAmountPlaceholder: "Amount in Mexican pesos (MXN)",
      billFrequency: "How often do you receive the bill?",
      billFrequencyOptions: [
        { value: "monthly", label: "Monthly" },
        { value: "bimonthly", label: "Every two months (bimestral)" },
      ],
      homeType: "Type of property",
      homeTypeOptions: [
        { value: "house", label: "Single-family home" },
        { value: "apartment", label: "Apartment or condo" },
        { value: "ranch", label: "Ranch or estate" },
        { value: "other", label: "Other" },
      ],
      ownership: "Do you own the property?",
      ownershipOptions: [
        { value: "owner", label: "Yes, I own it" },
        { value: "tenant", label: "No, I rent" },
      ],
      pool: "Do you have a pool?",
      ac: "Do you have air conditioning?",
      roofType: "Roof type (if you know it)",
      roofTypeOptions: [
        { value: "flat", label: "Flat concrete roof (losa)" },
        { value: "pitched", label: "Pitched roof (tile or similar)" },
        { value: "terrace", label: "Terrace or rooftop" },
        { value: "unknown", label: "I'm not sure" },
      ],
      batteries: "Are you interested in battery backup?",
      yesNo: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "maybe", label: "Maybe" },
      ],
      postalCode: "Property zip code",
      postalCodePlaceholder: "e.g. 37700",
    },
    calculate: "See estimate",
    result: {
      heading: "Preliminary estimate",
      systemRange: "Indicative system size range",
      generationRange: "Estimated daily generation",
      disclaimer:
        "This is a preliminary estimate. Final system design depends on your CFE bill, location, shading, roof orientation, roof type, available structure and technical assessment.",
      nextStep: "Recommended next step",
      nextStepText:
        "Share your CFE electricity bill with us so we can prepare a personalized initial assessment.",
      ctaPrimary: "Request free assessment",
      ctaWhatsapp: "Continue on WhatsApp",
    },
    captureHeading: "Get your personalized assessment",
    captureSubheading: "Fill in your details and we'll be in touch.",
    name: "Name",
    namePlaceholder: "Your name",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "52 415 123 4567",
    email: "Email address",
    emailPlaceholder: "you@email.com",
    uploadBill: "Upload your CFE bill (optional)",
    uploadBillHelp:
      "Sharing your bill improves assessment accuracy. We accept PDF, JPG, PNG.",
    submit: "Request assessment →",
    privacy: "Your information is used only to prepare your solar assessment.",
  },
  scenarios: {
    heading: "Indicative solar scenarios",
    subheading:
      "No two solar systems are identical. Every proposal is designed based on actual usage, location and property conditions.",
    note: "The system is quoted on a custom basis after reviewing your CFE bill and site conditions.",
    cta: "Request an assessment",
    items: [
      {
        name: "Essential",
        nameEn: "Essential",
        ideal: "For homes with moderate electricity consumption",
        desc: "Properties with basic loads: lighting, common appliances and moderate daytime usage.",
        factors: [
          "CFE bill amount and tariff type",
          "Daytime usage profile",
          "Roof type and orientation",
          "Available structural capacity",
        ],
        custom: "Panel count and inverter type are determined during the technical assessment.",
      },
      {
        name: "High-consumption home",
        nameEn: "High-consumption home",
        ideal: "For larger homes, pumps or significant electrical equipment",
        desc: "Properties with multiple floors, water pumps, electric heating or intensive appliance use.",
        factors: [
          "Number and type of electrical loads",
          "Daytime and nighttime consumption profile",
          "Battery storage potential",
          "Existing electrical configuration",
        ],
        custom: "The design may include higher installed capacity or energy storage.",
        highlight: true,
      },
      {
        name: "Pool and climate-control home",
        nameEn: "Pool and climate-control home",
        ideal: "For properties with a pool, pumps or significant air conditioning",
        desc: "Homes with circulation pumps, filtration systems, climate control or multiple AC units.",
        factors: [
          "Pool pump and filtration system consumption",
          "Air conditioning unit capacity",
          "Daily hours of operation",
          "Available roof and terrace orientation",
        ],
        custom: "A full load profile analysis is conducted to size the system correctly.",
      },
    ],
  },
  howItWorks: {
    heading: "How the process works",
    subheading:
      "A clear, guided process adapted to the conditions of your San Miguel de Allende property.",
    steps: [
      {
        title: "Share your CFE electricity bill",
        desc: "Send us your most recent CFE bill via WhatsApp, email or through the assessment form.",
      },
      {
        title: "We review your usage and property location",
        desc: "We analyze the consumption recorded, tariff type, property location and basic site factors.",
      },
      {
        title: "Complete a short assessment call",
        desc: "We schedule a brief conversation to answer questions and gather any additional information before preparing a proposal.",
      },
      {
        title: "Schedule a site visit when required",
        desc: "For properties where a site inspection is needed, we coordinate a visit to confirm technical feasibility.",
      },
      {
        title: "Receive the system design and proposal",
        desc: "You'll receive a written proposal with the system design, equipment, scope and conditions.",
      },
      {
        title: "Coordinate installation, commissioning and interconnection",
        desc: "Once the proposal is accepted, we coordinate installation and the CFE interconnection process according to the contracted scope.",
      },
    ],
    interconnectionNote:
      "The scope of the CFE interconnection process is part of the proposal and may vary depending on project conditions. CFE sets its own timelines for approval.",
    cta: "Start your free assessment",
  },
  expats: {
    heading: "Solar guidance in Mexico, explained clearly",
    subheading:
      "We can guide you in English or Spanish through the full evaluation, design and installation process.",
    items: [
      {
        title: "Assistance understanding your CFE bill",
        desc: "If you're not familiar with Mexico's electricity system, we'll walk you through how the bill, tariff and interconnection scheme work.",
      },
      {
        title: "English-language communication",
        desc: "All communication, proposals and follow-up can be conducted in English or Spanish — your choice.",
      },
      {
        title: "Clear project scope and payment milestones",
        desc: "The proposal includes the project scope, equipment, warranties and payment terms in a clear written document.",
      },
      {
        title: "Photo and progress updates during installation",
        desc: "During installation you can receive photo updates and messages as agreed at the start of the project.",
      },
      {
        title: "Support for full-time and seasonal homeowners",
        desc: "We work with owners who live in San Miguel de Allende full-time and with those who visit seasonally.",
      },
      {
        title: "Coordination options for remote owners",
        desc: "If you're not currently in the city, we can explore which parts of the process can move forward remotely.",
      },
    ],
    cta: "Request an English assessment",
    ctaEs: "Solicitar evaluación en español",
  },
  whySolvida: {
    heading: "Why SOLVIDA",
    subheading: "Real differentiators for homeowners in San Miguel de Allende.",
    items: [
      {
        title: "Local focus on San Miguel de Allende",
        desc: "We specialize in residential properties in San Miguel de Allende and nearby communities.",
      },
      {
        title: "Bilingual service",
        desc: "English and Spanish throughout the assessment, proposal and project follow-up.",
      },
      {
        title: "Recommendations based on actual consumption",
        desc: "We don't offer generic packages. The system is designed from your CFE bill and property conditions.",
      },
      {
        title: "Clear written proposals",
        desc: "You receive a document with scope, equipment, warranties and terms before making any commitment.",
      },
      {
        title: "Technical coordination",
        desc: "We manage the technical chain: installation, configuration, commissioning and interconnection.",
      },
      {
        title: "Project follow-up",
        desc: "You have a single point of contact throughout the process, from assessment through system activation.",
      },
    ],
  },
  commitment: {
    heading: "What you can expect",
    subheading:
      "We're at an early stage. We don't have hundreds of installations to show you. What we can offer is an honest, clear process.",
    items: [
      {
        title: "Clear communication",
        desc: "We explain each step of the process and answer your questions before, during and after the assessment.",
      },
      {
        title: "Transparent assessment",
        desc: "If a solar system isn't viable for your property or usage, we'll tell you clearly.",
      },
      {
        title: "Scope in writing",
        desc: "You'll receive a proposal with defined scope before making any decision.",
      },
      {
        title: "Equipment identified in the proposal",
        desc: "Equipment, brands and warranties are specified in the document you receive.",
      },
      {
        title: "Estimated project schedule",
        desc: "We'll provide an indicative project timeline based on site conditions.",
      },
      {
        title: "Support throughout the process",
        desc: "You have access to a point of contact during assessment, design, installation and commissioning, subject to the contracted scope.",
      },
    ],
  },
  form: {
    heading: "Request your solar assessment",
    subheading:
      "Share your information and we'll be in touch to continue your evaluation.",
    name: "Name",
    namePlaceholder: "Your full name",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "52 415 123 4567",
    email: "Email address",
    emailPlaceholder: "you@email.com",
    preferredLanguage: "Preferred language",
    preferredLanguageOptions: [
      { value: "en", label: "English" },
      { value: "es", label: "Español" },
    ],
    postalCode: "Zip code",
    postalCodePlaceholder: "37700",
    neighborhood: "Neighborhood or community",
    neighborhoodPlaceholder: "e.g. Centro, Los Frailes, Atascadero…",
    ownership: "Do you own the property?",
    ownershipOptions: [
      { value: "yes", label: "Yes, I own it" },
      { value: "no", label: "No, I rent" },
      { value: "other", label: "Other" },
    ],
    billAmount: "Approximate CFE electricity bill amount",
    billAmountOptions: [
      { value: "under1000", label: "Under $1,000 MXN" },
      { value: "1000-2500", label: "$1,000 – $2,500 MXN" },
      { value: "2500-5000", label: "$2,500 – $5,000 MXN" },
      { value: "5000-10000", label: "$5,000 – $10,000 MXN" },
      { value: "over10000", label: "Over $10,000 MXN" },
    ],
    pool: "Do you have a pool?",
    ac: "Do you have air conditioning?",
    yesNo: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    timeline: "When are you looking to install?",
    timelineOptions: [
      { value: "asap", label: "As soon as possible" },
      { value: "1-3", label: "Within 1 to 3 months" },
      { value: "3-6", label: "Within 3 to 6 months" },
      { value: "exploring", label: "Just exploring for now" },
    ],
    payment: "Preferred payment method",
    paymentOptions: [
      { value: "cash", label: "Cash / full payment" },
      { value: "financing", label: "Financing" },
      { value: "unsure", label: "Not sure yet" },
    ],
    uploadBill: "Upload your CFE bill (optional)",
    uploadBillHelp:
      "Sharing your bill helps us prepare a more accurate assessment. PDF, JPG or PNG, maximum 10 MB.",
    uploadBillButton: "Choose file",
    uploadBillSelected: "File selected",
    privacyConsent:
      "I agree that SOLVIDA may use my information to prepare a solar assessment and contact me by WhatsApp, email or phone for follow-up. I have read the",
    privacyLink: "privacy policy",
    submit: "Request free assessment",
    honeypot: "Leave this field empty",
    success: {
      heading: "Thank you for your request",
      message:
        "We'll review your information and contact you to continue your solar assessment.",
      ctaWhatsapp: "Continue on WhatsApp",
      note: "We don't promise a specific response time, but we'll do our best to reach out soon.",
    },
    error:
      "There was a problem submitting your request. Please try again or contact us directly on WhatsApp.",
    validation: {
      required: "This field is required",
      email: "Please enter a valid email address",
      phone: "Please enter a valid number with country code",
      fileSize: "File must be under 10 MB",
      fileType: "Only PDF, JPG, PNG or HEIC files are accepted",
      privacy: "You must accept the privacy policy to continue",
    },
  },
  faq: {
    heading: "Frequently asked questions",
    subheading: "Direct answers about the process and what to expect.",
    cta: "Have another question?",
    ctaLink: "Message us on WhatsApp",
    items: [
      {
        q: "How much does it cost to install solar panels in San Miguel de Allende?",
        a: "The cost of a residential solar system depends on the system size, selected equipment and site conditions. We don't publish fixed prices because each project is quoted based on actual property consumption. Request a free assessment and we'll prepare a personalized proposal.",
      },
      {
        q: "How do you determine how many panels I need?",
        a: "Panel count is determined by analyzing your CFE bill, tariff type, consumption profile, roof orientation, shading and available structure. That's why we ask for the bill before making any recommendation.",
      },
      {
        q: "Do you need to see my CFE electricity bill?",
        a: "Yes. The bill is the starting point for any assessment. It contains consumption data, tariff type and billing period information we use to size the system.",
      },
      {
        q: "Can I install solar panels if I have a pool?",
        a: "Yes. Properties with pools typically have significant electrical loads from circulation and filtration pumps. That consumption is part of the analysis and may affect the recommended system size.",
      },
      {
        q: "What happens on cloudy or rainy days?",
        a: "Solar panels generate electricity with diffuse light, though at lower output than on sunny days. San Miguel de Allende has a favorable solar resource for most of the year, though production varies by season.",
      },
      {
        q: "Does the system work during a power outage?",
        a: "A grid-tied system (without battery backup) automatically disconnects during a power outage for safety reasons. To have power during outages, you need a system with batteries and the right architecture. This is analyzed during the assessment.",
      },
      {
        q: "Do I need batteries?",
        a: "Not necessarily. Batteries provide backup power during outages and allow you to use solar energy at night, but they increase the system cost. If you're interested in this option, we include it in the analysis.",
      },
      {
        q: "What warranties come with the equipment?",
        a: "Warranties depend on the equipment manufacturers selected. The proposal will specify what warranties apply to the panels, inverter and other components.",
      },
      {
        q: "How does CFE interconnection work?",
        a: "Interconnection is the process by which your solar system connects to CFE's grid. It enables net metering (medición neta), where surplus energy you generate is credited to your electricity bill. The process requires meeting CFE's requirements, and CFE sets its own timelines for approval.",
      },
      {
        q: "Do you service properties outside San Miguel de Allende?",
        a: "Our main focus is San Miguel de Allende and nearby communities. Contact us to confirm service availability for your neighborhood or area.",
      },
      {
        q: "Can you provide service in English?",
        a: "Yes. We provide full service in English and Spanish throughout the process: initial assessment, follow-up call, proposal and project coordination.",
      },
      {
        q: "Can I coordinate the project if I'm not in Mexico?",
        a: "Yes, several stages of the process can move forward remotely. The site visit and installation require access to the property, but we can explore how to coordinate that based on your situation.",
      },
      {
        q: "Do you offer financing?",
        a: "We're exploring financing options. The proposal will outline available payment alternatives at the time of your assessment.",
      },
    ],
  },
  serviceArea: {
    heading: "Service area",
    subheading:
      "We serve residential properties in San Miguel de Allende and nearby communities.",
    neighborhoods: [
      "Centro",
      "Los Frailes",
      "Atascadero",
      "Zirándaro",
      "Ventanas",
      "Otomí",
      "Malanquín",
      "Alcocer",
      "Independencia",
      "Nearby communities",
    ],
    note: "Contact us to confirm service availability for your neighborhood or community.",
    cta: "Check availability",
  },
  footer: {
    tagline: "Solar panels for homeowners in San Miguel de Allende.",
    navTitle: "Navigation",
    navLinks: [
      { label: "Benefits", href: "#beneficios" },
      { label: "How it works", href: "#como-funciona" },
      { label: "Solar options", href: "#escenarios" },
      { label: "FAQs", href: "#faq" },
      { label: "Get an assessment", href: "#formulario" },
    ],
    contactTitle: "Contact",
    legalTitle: "Legal",
    legalLinks: [
      { label: "Privacy policy", href: "/en/privacy-policy" },
      { label: "Terms of use", href: "/en/terms-of-use" },
    ],
    rightsReserved: "All rights reserved.",
    serviceArea: "San Miguel de Allende, Gto. · Mexico",
    bilingual: "Service in English and Spanish",
  },
  whatsapp: {
    ariaLabel: "Contact via WhatsApp",
    prefilledMessage:
      "Hi, I own a property in San Miguel de Allende and would like a solar assessment. My approximate CFE bill is $",
  },
  thankYou: {
    heading: "Thank you for your request",
    message:
      "We'll review your information and contact you to continue your solar assessment.",
    nextStep: "Next step",
    nextStepText:
      "A member of the SOLVIDA team will review your request and contact you to coordinate the initial assessment.",
    ctaWhatsapp: "Continue on WhatsApp now",
    ctaHome: "Back to home",
    note: "If you'd prefer not to wait, send us a message directly on WhatsApp.",
  },
  campaign: {
    cfeAssessment: {
      badge: "CFE bill analysis",
      heading: "Is your CFE electricity bill higher than it should be?",
      subheading:
        "Share your bill and we'll analyze your usage to estimate whether a solar system could help reduce your grid dependence.",
      cta: "Analyze my bill now",
    },
    mainEs: {
      badge: "San Miguel de Allende · Free assessment",
      heading: "Residential solar panels in San Miguel de Allende",
      subheading:
        "System designed around your home usage and property conditions. Service in English and Spanish.",
      cta: "Request free assessment",
    },
  },
};
