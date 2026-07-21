export const es = {
  locale: "es",
  meta: {
    title: "SOLVIDA | Paneles Solares en San Miguel de Allende",
    titleTemplate: "%s | SOLVIDA Solar",
    description:
      "Paneles solares residenciales en San Miguel de Allende. Evaluación gratuita, sistema diseñado según tu consumo, atención en español e inglés. Solicita tu diagnóstico sin compromiso.",
    keywords: [
      "paneles solares San Miguel de Allende",
      "instalación paneles solares San Miguel de Allende",
      "energía solar residencial San Miguel de Allende",
      "paneles solares casa Guanajuato",
      "reducir recibo CFE San Miguel de Allende",
      "cotización paneles solares San Miguel de Allende",
      "solar fotovoltaico San Miguel de Allende",
      "diagnóstico solar San Miguel de Allende",
      "SOLVIDA solar",
      "energía solar Guanajuato",
      "evaluar sistema solar San Miguel de Allende",
    ],
    ogTitle: "SOLVIDA | Paneles Solares en San Miguel de Allende",
    ogDescription:
      "Evaluación solar gratuita para propietarios en San Miguel de Allende. Sistema diseñado según tu consumo, atención en español e inglés.",
  },
  topbar: {
    message: "Atención bilingüe para propietarios en San Miguel de Allende.",
    phone: "Llamar",
    whatsapp: "WhatsApp",
  },
  nav: {
    home: "Inicio",
    benefits: "Beneficios",
    howItWorks: "Cómo funciona",
    options: "Opciones",
    faq: "Preguntas",
    assessment: "Solicitar evaluación",
    ctaNav: "Solicita una evaluación",
    langLabel: "Idioma",
    langSwitch: "EN",
  },
  hero: {
    badge: "Servicio local · San Miguel de Allende, Gto.",
    heading: "Paneles solares para hogares en San Miguel de Allende",
    subheading:
      "Reduce tu dependencia de la red eléctrica con un sistema diseñado de acuerdo con el consumo y las características de tu propiedad.",
    ctaPrimary: "Solicita un diagnóstico gratuito",
    ctaSecondary: "Enviar recibo por WhatsApp",
    trustLine: "Atención en español e inglés · Evaluación inicial sin compromiso",
  },
  problems: {
    heading: "¿Te identificas con alguna de estas situaciones?",
    subheading:
      "Los propietarios en San Miguel de Allende nos contactan principalmente por estas razones.",
    items: [
      {
        title: "Recibos de CFE elevados",
        desc: "El consumo eléctrico de aires acondicionados, calentadores, bombas y electrodomésticos puede generar recibos altos de forma sostenida.",
      },
      {
        title: "Consumo por bombas o alberca",
        desc: "Las bombas de agua y sistemas de alberca operan de forma continua y representan una carga eléctrica significativa.",
      },
      {
        title: "Aire acondicionado frecuente",
        desc: "El uso intensivo de climatización durante temporadas cálidas incrementa considerablemente el consumo.",
      },
      {
        title: "Dependencia de la red",
        desc: "Los cortes de luz afectan la operación de equipos, el confort y la productividad dentro del hogar.",
      },
      {
        title: "Dificultad para saber qué sistema necesito",
        desc: "Sin un análisis técnico es difícil saber cuántos paneles, de qué tipo y con qué características requiere tu propiedad.",
      },
      {
        title: "Quiero un proceso claro y acompañado",
        desc: "La interconexión con CFE, los trámites y el proceso técnico pueden ser complejos sin un interlocutor de confianza.",
      },
    ],
    benefitsHeading: "Qué puede incluir una evaluación solar",
    benefits: [
      {
        title: "Sistema dimensionado según tu consumo",
        desc: "El diseño parte del análisis de tu recibo de CFE, ubicación, orientación y características de la propiedad.",
      },
      {
        title: "Estimación clara y por escrito",
        desc: "Antes de comprometerte recibirás una propuesta con alcance, equipos y condiciones definidas.",
      },
      {
        title: "Monitoreo de producción",
        desc: "Los sistemas pueden incluir monitoreo para revisar la generación desde tu dispositivo.",
      },
      {
        title: "Equipamiento con garantías identificadas",
        desc: "Los equipos y sus garantías se especifican en la propuesta para que sepas exactamente qué estás contratando.",
      },
      {
        title: "Atención bilingüe",
        desc: "Puedes comunicarte en español o en inglés durante todo el proceso.",
      },
      {
        title: "Proceso acompañado",
        desc: "Desde la evaluación inicial hasta la coordinación de instalación e interconexión, tendrás un punto de contacto.",
      },
    ],
  },
  calculator: {
    heading: "¿Cuánto pagas de luz?",
    subheading:
      "Responde unas preguntas rápidas para estimar el tipo de sistema que podría funcionar para tu hogar.",
    fields: {
      billAmount: "¿Cuánto pagas aproximadamente de CFE?",
      billAmountPlaceholder: "Importe en pesos MXN",
      billFrequency: "¿Con qué frecuencia recibes el recibo?",
      billFrequencyOptions: [
        { value: "monthly", label: "Mensual" },
        { value: "bimonthly", label: "Bimestral (cada 2 meses)" },
      ],
      homeType: "Tipo de vivienda",
      homeTypeOptions: [
        { value: "house", label: "Casa independiente" },
        { value: "apartment", label: "Departamento" },
        { value: "ranch", label: "Rancho o finca" },
        { value: "other", label: "Otro" },
      ],
      ownership: "¿Es tu propiedad?",
      ownershipOptions: [
        { value: "owner", label: "Soy propietario" },
        { value: "tenant", label: "Rento la propiedad" },
      ],
      pool: "¿Tienes alberca?",
      ac: "¿Tienes aire acondicionado?",
      roofType: "Tipo de techo (si lo sabes)",
      roofTypeOptions: [
        { value: "flat", label: "Losa plana" },
        { value: "pitched", label: "Inclinado (tejas o similar)" },
        { value: "terrace", label: "Terraza o azotea" },
        { value: "unknown", label: "No lo sé" },
      ],
      batteries: "¿Te interesa incluir baterías para respaldo?",
      yesNo: [
        { value: "yes", label: "Sí" },
        { value: "no", label: "No" },
        { value: "maybe", label: "Quizás" },
      ],
      postalCode: "Código postal de la propiedad",
      postalCodePlaceholder: "Ej. 37700",
    },
    calculate: "Ver estimación",
    result: {
      heading: "Estimación preliminar",
      systemRange: "Rango orientativo del sistema",
      generationRange: "Generación diaria estimada",
      disclaimer:
        "Esta es una estimación preliminar. El diseño final depende del recibo de CFE, ubicación, sombras, orientación, tipo de techo, estructura disponible y evaluación técnica.",
      nextStep: "Siguiente paso recomendado",
      nextStepText:
        "Comparte tu recibo de CFE con nosotros para preparar una evaluación inicial personalizada.",
      ctaPrimary: "Solicitar evaluación gratuita",
      ctaWhatsapp: "Continuar por WhatsApp",
    },
    captureHeading: "Recibe tu evaluación personalizada",
    captureSubheading: "Completa tus datos para que podamos contactarte.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "55 1234 5678",
    email: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    uploadBill: "Sube tu recibo de CFE (opcional)",
    uploadBillHelp:
      "Compartir tu recibo mejora la precisión de la evaluación. Aceptamos PDF, JPG, PNG.",
    submit: "Solicitar evaluación →",
    privacy: "Tus datos se usan únicamente para preparar tu evaluación solar.",
  },
  scenarios: {
    heading: "Escenarios orientativos",
    subheading:
      "No existe un sistema solar idéntico para todos los hogares. Cada propuesta se diseña según el consumo real, la ubicación y las características de la propiedad.",
    note: "El sistema se cotiza de forma personalizada después de revisar tu recibo de CFE y las condiciones del sitio.",
    cta: "Solicitar diagnóstico",
    items: [
      {
        name: "Esencial",
        nameEn: "",
        ideal: "Para viviendas con consumo eléctrico moderado",
        desc: "Hogares con cargas básicas: iluminación, electrodomésticos comunes y consumo diurno moderado.",
        factors: [
          "Importe del recibo de CFE",
          "Horario de consumo",
          "Tipo y orientación del techo",
          "Disponibilidad estructural",
        ],
        custom: "El número de paneles y el tipo de inversor se determinan en la evaluación técnica.",
      },
      {
        name: "Hogar de alto consumo",
        nameEn: "",
        ideal: "Para casas grandes, bombas o equipos eléctricos significativos",
        desc: "Propiedades con múltiples pisos, bomba de agua, calefacción eléctrica o uso intensivo de electrodomésticos.",
        factors: [
          "Número y tipo de cargas",
          "Perfil de consumo diurno y nocturno",
          "Posibilidad de baterías",
          "Configuración eléctrica existente",
        ],
        custom: "El diseño puede incluir más potencia instalada o almacenamiento de energía.",
        highlight: true,
      },
      {
        name: "Hogar con alberca o climatización",
        nameEn: "",
        ideal: "Para propiedades con alberca, bombas o aire acondicionado relevante",
        desc: "Casas con bombas de circulación, sistemas de filtración, climatización de espacios o múltiples unidades de AC.",
        factors: [
          "Consumo de la bomba y el sistema de alberca",
          "Potencia de los equipos de climatización",
          "Horas de operación diarias",
          "Orientación disponible en techos y terrazas",
        ],
        custom: "Se analiza el perfil completo de cargas para dimensionar correctamente el sistema.",
      },
    ],
  },
  howItWorks: {
    heading: "Cómo funciona el proceso",
    subheading:
      "Un proceso claro, acompañado y adaptado a las condiciones de tu propiedad en San Miguel de Allende.",
    steps: [
      {
        title: "Compartes tu recibo de CFE",
        desc: "Nos envías tu recibo de CFE más reciente por WhatsApp, correo o a través del formulario.",
      },
      {
        title: "Revisamos tu consumo y ubicación",
        desc: "Analizamos el consumo registrado, el tipo de tarifa, la ubicación de la propiedad y factores básicos del sitio.",
      },
      {
        title: "Realizamos una llamada de evaluación",
        desc: "Coordinamos una conversación breve para resolver dudas y complementar la información antes de preparar una propuesta.",
      },
      {
        title: "Coordinamos una visita técnica cuando sea necesaria",
        desc: "Para propiedades donde se requiere revisar el sitio, coordinamos una visita para confirmar la viabilidad técnica.",
      },
      {
        title: "Presentamos diseño y propuesta",
        desc: "Recibirás una propuesta por escrito con el diseño del sistema, los equipos, el alcance y las condiciones.",
      },
      {
        title: "Coordinamos instalación, puesta en marcha e interconexión",
        desc: "Una vez aceptada la propuesta, coordinamos la instalación y el proceso de interconexión con CFE según el alcance contratado.",
      },
    ],
    interconnectionNote:
      "El alcance del trámite de interconexión con CFE forma parte de la propuesta y puede variar según las condiciones del proyecto. CFE establece sus propios tiempos para autorización.",
    cta: "Iniciar evaluación gratuita",
  },
  expats: {
    heading: "Un proceso claro para propietarios nacionales y extranjeros",
    subheading:
      "Podemos acompañarte en español o en inglés durante toda la evaluación, diseño e instalación.",
    items: [
      {
        title: "Orientación sobre CFE y facturación eléctrica",
        desc: "Si no estás familiarizado con el sistema eléctrico en México, te explicamos cómo funciona el recibo, la tarifa y el esquema de interconexión.",
      },
      {
        title: "Comunicación en el idioma que prefieras",
        desc: "Toda la comunicación, la propuesta y el seguimiento pueden realizarse en español o en inglés.",
      },
      {
        title: "Alcance y condiciones por escrito",
        desc: "La propuesta incluye el alcance del proyecto, los equipos, las garantías y los pagos en un documento claro.",
      },
      {
        title: "Actualizaciones durante el proyecto",
        desc: "Durante la instalación puedes recibir actualizaciones por foto o mensaje según lo que acordemos.",
      },
      {
        title: "Atención para propietarios permanentes y de temporada",
        desc: "Trabajamos con propietarios que viven permanentemente en San Miguel de Allende y con quienes visitan la propiedad por temporadas.",
      },
      {
        title: "Coordinación a distancia cuando sea posible",
        desc: "Si no estás actualmente en la ciudad, podemos explorar qué partes del proceso pueden avanzar a distancia.",
      },
    ],
    cta: "Solicitar evaluación en inglés",
    ctaEs: "Solicitar evaluación en español",
  },
  whySolvida: {
    heading: "Por qué SOLVIDA",
    subheading: "Diferenciadores reales para propietarios en San Miguel de Allende.",
    items: [
      {
        title: "Enfoque local en San Miguel de Allende",
        desc: "Nos especializamos en propiedades residenciales en San Miguel de Allende y comunidades cercanas.",
      },
      {
        title: "Atención bilingüe",
        desc: "Español e inglés durante toda la evaluación, propuesta y seguimiento.",
      },
      {
        title: "Recomendaciones basadas en consumo real",
        desc: "No ofrecemos paquetes genéricos. El sistema se diseña a partir de tu recibo de CFE y las características de tu propiedad.",
      },
      {
        title: "Propuestas claras",
        desc: "Recibirás un documento con alcance, equipos, garantías y condiciones antes de comprometerte.",
      },
      {
        title: "Coordinación técnica",
        desc: "Gestionamos la cadena técnica: instalación, configuración, puesta en marcha e interconexión.",
      },
      {
        title: "Seguimiento durante el proyecto",
        desc: "Tienes un punto de contacto durante todo el proceso, desde la evaluación hasta la activación.",
      },
    ],
  },
  commitment: {
    heading: "Nuestro compromiso contigo",
    subheading:
      "Estamos en una etapa inicial. No tenemos cientos de instalaciones que mostrarte. Lo que sí podemos ofrecerte es un proceso honesto y claro.",
    items: [
      {
        title: "Comunicación clara",
        desc: "Te explicamos cada paso del proceso y respondemos tus preguntas antes, durante y después de la evaluación.",
      },
      {
        title: "Evaluación transparente",
        desc: "Si el sistema solar no es viable para tu propiedad o consumo, te lo decimos con claridad.",
      },
      {
        title: "Alcance por escrito",
        desc: "Recibirás una propuesta con el alcance definido antes de tomar cualquier decisión.",
      },
      {
        title: "Equipos identificados en la propuesta",
        desc: "Los equipos, marcas y garantías se especifican en el documento que recibirás.",
      },
      {
        title: "Calendario estimado",
        desc: "Te daremos un calendario orientativo del proyecto según las condiciones del sitio.",
      },
      {
        title: "Acompañamiento durante el proceso",
        desc: "Tienes acceso a un punto de contacto durante la evaluación, diseño, instalación y puesta en marcha, sujeto al alcance contratado.",
      },
    ],
  },
  form: {
    heading: "Solicita tu diagnóstico solar",
    subheading:
      "Comparte tu información y nos pondremos en contacto para continuar con tu evaluación.",
    name: "Nombre",
    namePlaceholder: "Tu nombre completo",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "52 415 123 4567",
    email: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    preferredLanguage: "Idioma preferido",
    preferredLanguageOptions: [
      { value: "es", label: "Español" },
      { value: "en", label: "Inglés / English" },
    ],
    postalCode: "Código postal",
    postalCodePlaceholder: "37700",
    neighborhood: "Colonia o comunidad",
    neighborhoodPlaceholder: "Ej. Centro, Los Frailes, Atascadero…",
    ownership: "¿Eres propietario de la vivienda?",
    ownershipOptions: [
      { value: "yes", label: "Sí, soy propietario" },
      { value: "no", label: "No, rento" },
      { value: "other", label: "Otro" },
    ],
    billAmount: "Importe aproximado del recibo de CFE",
    billAmountOptions: [
      { value: "under1000", label: "Menos de $1,000 MXN" },
      { value: "1000-2500", label: "$1,000 – $2,500 MXN" },
      { value: "2500-5000", label: "$2,500 – $5,000 MXN" },
      { value: "5000-10000", label: "$5,000 – $10,000 MXN" },
      { value: "over10000", label: "Más de $10,000 MXN" },
    ],
    pool: "¿Tienes alberca?",
    ac: "¿Tienes aire acondicionado?",
    yesNo: [
      { value: "yes", label: "Sí" },
      { value: "no", label: "No" },
    ],
    timeline: "¿Cuándo te interesaría instalar?",
    timelineOptions: [
      { value: "asap", label: "Lo antes posible" },
      { value: "1-3", label: "En 1 a 3 meses" },
      { value: "3-6", label: "En 3 a 6 meses" },
      { value: "exploring", label: "Solo estoy investigando" },
    ],
    payment: "Método de pago preferido",
    paymentOptions: [
      { value: "cash", label: "Pago de contado" },
      { value: "financing", label: "Financiamiento" },
      { value: "unsure", label: "Aún no lo sé" },
    ],
    uploadBill: "Sube tu recibo de CFE (opcional)",
    uploadBillHelp:
      "Compartir tu recibo nos ayuda a preparar una evaluación más precisa. PDF, JPG o PNG, máximo 10 MB.",
    uploadBillButton: "Seleccionar archivo",
    uploadBillSelected: "Archivo seleccionado",
    privacyConsent:
      "Acepto que SOLVIDA use mis datos para prepararme una evaluación solar y que me contacten por WhatsApp, correo o teléfono para dar seguimiento. He leído el",
    privacyLink: "aviso de privacidad",
    submit: "Solicitar evaluación gratuita",
    honeypot: "Deja este campo vacío",
    success: {
      heading: "Gracias por tu solicitud",
      message:
        "Revisaremos tu información y nos pondremos en contacto para continuar con tu evaluación solar.",
      ctaWhatsapp: "Continuar por WhatsApp",
      note: "No prometemos un tiempo de respuesta específico, pero haremos el esfuerzo de contactarte pronto.",
    },
    error:
      "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo o contáctanos directamente por WhatsApp.",
    validation: {
      required: "Este campo es obligatorio",
      email: "Ingresa un correo electrónico válido",
      phone: "Ingresa un número válido con código de país",
      fileSize: "El archivo no debe superar los 10 MB",
      fileType: "Solo se aceptan PDF, JPG, PNG o HEIC",
      privacy: "Debes aceptar el aviso de privacidad para continuar",
    },
  },
  faq: {
    heading: "Preguntas frecuentes",
    subheading: "Respuestas directas sobre el proceso y lo que puedes esperar.",
    cta: "¿Tienes otra pregunta?",
    ctaLink: "Escríbenos por WhatsApp",
    items: [
      {
        q: "¿Cuánto cuesta instalar paneles solares en San Miguel de Allende?",
        a: "El costo de un sistema solar residencial depende del tamaño del sistema, los equipos seleccionados y las condiciones del sitio. No publicamos precios fijos porque cada proyecto se cotiza según el consumo real de la propiedad. Solicita una evaluación gratuita y prepararemos una propuesta personalizada.",
      },
      {
        q: "¿Cómo saben cuántos paneles necesito?",
        a: "El número de paneles se determina a partir del análisis del recibo de CFE, el tipo de tarifa, el perfil de consumo, la orientación del techo, las sombras y la estructura disponible. Por eso pedimos el recibo antes de dar cualquier recomendación.",
      },
      {
        q: "¿Necesitan revisar mi recibo de CFE?",
        a: "Sí. El recibo es el punto de partida de cualquier evaluación. Contiene información sobre el consumo, la tarifa y el periodo de facturación que usamos para dimensionar el sistema.",
      },
      {
        q: "¿Puedo instalar paneles si tengo alberca?",
        a: "Sí. Las propiedades con alberca suelen tener cargas eléctricas importantes por las bombas de circulación y filtración. Ese consumo forma parte del análisis y puede cambiar el tamaño del sistema recomendado.",
      },
      {
        q: "¿Qué pasa en días nublados o de lluvia?",
        a: "Los paneles solares generan energía con luz difusa, aunque con menor producción que en días soleados. San Miguel de Allende tiene un recurso solar favorable durante gran parte del año, aunque la producción varía según la estación.",
      },
      {
        q: "¿El sistema funciona durante un apagón?",
        a: "Un sistema conectado a la red (sin batería) se desconecta automáticamente durante un corte de luz por razones de seguridad. Para tener energía durante apagones es necesario un sistema con baterías y la arquitectura adecuada. Esto se analiza en la evaluación.",
      },
      {
        q: "¿Necesito baterías?",
        a: "No necesariamente. Las baterías ofrecen respaldo durante apagones y permiten usar la energía generada de noche, pero incrementan el costo del sistema. Si te interesa esta opción, lo incluimos en el análisis.",
      },
      {
        q: "¿Qué garantías tiene el equipo?",
        a: "Las garantías dependen de los fabricantes de los equipos seleccionados. En la propuesta te indicamos qué garantías aplican para los paneles, el inversor y otros componentes.",
      },
      {
        q: "¿Cómo funciona la interconexión con CFE?",
        a: "La interconexión es el proceso mediante el cual tu sistema solar se conecta a la red de CFE. Permite el esquema de medición neta (net metering), donde los excedentes de energía que generas se acreditan en tu recibo. El trámite requiere cumplir con los requisitos de CFE, y los tiempos de aprobación los define CFE.",
      },
      {
        q: "¿Atienden propiedades fuera de San Miguel de Allende?",
        a: "Nuestro enfoque principal es San Miguel de Allende y comunidades cercanas. Contáctanos para confirmar disponibilidad de servicio en tu colonia o comunidad.",
      },
      {
        q: "¿Pueden atenderme en inglés?",
        a: "Sí. Atendemos en español e inglés durante todo el proceso: evaluación inicial, llamada de seguimiento, propuesta y coordinación del proyecto.",
      },
      {
        q: "¿Puedo coordinar el proyecto si no estoy en México?",
        a: "Sí es posible avanzar en varias etapas del proceso a distancia. La visita técnica al sitio y la instalación requieren acceso a la propiedad, pero podemos explorar cómo coordinar eso según tu situación.",
      },
      {
        q: "¿Ofrecen financiamiento?",
        a: "Estamos explorando opciones de financiamiento. En la propuesta te indicaremos las alternativas de pago disponibles en el momento de tu evaluación.",
      },
    ],
  },
  serviceArea: {
    heading: "Área de servicio",
    subheading:
      "Atendemos propiedades residenciales en San Miguel de Allende y comunidades cercanas.",
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
      "Comunidades cercanas",
    ],
    note: "Confirma la disponibilidad de servicio para tu colonia o comunidad.",
    cta: "Verificar disponibilidad",
  },
  footer: {
    tagline: "Paneles solares para propietarios en San Miguel de Allende.",
    navTitle: "Navegación",
    navLinks: [
      { label: "Beneficios", href: "#beneficios" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Opciones", href: "#escenarios" },
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Solicitar evaluación", href: "#formulario" },
    ],
    contactTitle: "Contacto",
    legalTitle: "Legal",
    legalLinks: [
      { label: "Aviso de privacidad", href: "/es/aviso-privacidad" },
      { label: "Términos de uso", href: "/es/terminos-de-uso" },
    ],
    rightsReserved: "Todos los derechos reservados.",
    serviceArea: "San Miguel de Allende, Gto. · México",
    bilingual: "Servicio en español e inglés",
  },
  whatsapp: {
    ariaLabel: "Contactar por WhatsApp",
    prefilledMessage:
      "Hola, vivo en San Miguel de Allende y me interesa una evaluación para paneles solares. Mi recibo aproximado de CFE es de $",
  },
  thankYou: {
    heading: "Gracias por tu solicitud",
    message:
      "Revisaremos tu información y nos pondremos en contacto para continuar con tu evaluación solar.",
    nextStep: "Próximo paso",
    nextStepText:
      "Un miembro del equipo SOLVIDA revisará tu solicitud y te contactará para coordinar la evaluación inicial.",
    ctaWhatsapp: "Continuar por WhatsApp ahora",
    ctaHome: "Volver al inicio",
    note: "Si prefieres no esperar, escríbenos directamente por WhatsApp.",
  },
  campaign: {
    cfeAssessment: {
      badge: "Análisis de recibo CFE",
      heading: "¿Tu recibo de CFE es más alto de lo que debería?",
      subheading:
        "Comparte tu recibo y analizamos tu consumo para estimar si un sistema solar podría ayudarte a reducir tu dependencia de la red eléctrica.",
      cta: "Analizar mi recibo ahora",
    },
    mainEs: {
      badge: "San Miguel de Allende · Evaluación gratuita",
      heading: "Paneles solares residenciales en San Miguel de Allende",
      subheading:
        "Sistema diseñado según el consumo y características de tu hogar. Atención en español e inglés.",
      cta: "Solicitar evaluación gratuita",
    },
  },
};

export type Dictionary = typeof es;
