export type Lang = "en" | "pt" | "es"

export interface ServiceCardTranslation {
  icon: string
  title: string
  description: string
  tags: string[]
}

export interface ProjectTranslation {
  category: string
  title: string
  description: string
  type: string
}

export interface ProcessStepTranslation {
  title: string
  description: string
}

export interface Translation {
  nav: {
    services: string
    work: string
    process: string
    hire: string
  }
  hero: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    cta1: string
    cta2: string
    scroll: string
  }
  stats: {
    projects: string
    experience: string
    stacks: string
    satisfaction: string
  }
  services: {
    tag: string
    titleLine1: string
    titleLine2: string
    desc: string
    cards: ServiceCardTranslation[]
  }
  portfolio: {
    tag: string
    titleLine1: string
    titleLine2: string
    desc: string
    projects: ProjectTranslation[]
  }
  process: {
    tag: string
    titleLine1: string
    titleLine2: string
    desc: string
    steps: ProcessStepTranslation[]
  }
  cta: {
    tag: string
    titleLine1: string
    titleLine2: string
    desc: string
  }
  footer: string
}

const en: Translation = {
  nav: {
    services: "Services",
    work: "Work",
    process: "Process",
    hire: "Hire Me",
  },
  hero: {
    eyebrow: "Available for new projects · Full-Stack Developer",
    titleLine1: "I Build Pages",
    titleLine2: "That Convert.",
    subtitle:
      "Full-stack developer specializing in high-converting landing pages, complete sales funnels, and modern web applications — built with Next.js, TypeScript, Supabase, and direct response principles.",
    cta1: "See My Work",
    cta2: "Let's Talk →",
    scroll: "scroll",
  },
  stats: {
    projects: "Projects Delivered",
    experience: "Years Experience",
    stacks: "Tech Stacks",
    satisfaction: "% Satisfaction",
  },
  services: {
    tag: "// what i do",
    titleLine1: "Full-Stack Funnel",
    titleLine2: "Development",
    desc: "From pixel-perfect landing pages to complete sales funnels and complex web applications — I handle the full stack.",
    cards: [
      {
        icon: "🎯",
        title: "Sales Landing Pages",
        description:
          "High-converting pages built around direct response principles. Strategic copy structure, visual hierarchy, and CTA placement engineered to sell.",
        tags: ["DR Marketing", "Lead Gen", "Product Sales"],
      },
      {
        icon: "🔄",
        title: "Complete Sales Funnels",
        description:
          "VSL pages, order forms, upsell/downsell flows, and thank you pages. Full funnel architecture that maximizes LTV on every visitor.",
        tags: ["VSL", "Upsell", "Downsell", "Order Bump"],
      },
      {
        icon: "🏢",
        title: "Institutional Websites",
        description:
          "Modern, responsive websites for businesses, clinics, schools, and service providers — built from scratch with Next.js and Vercel.",
        tags: ["Corporate", "E-commerce", "Responsive"],
      },
      {
        icon: "⚙️",
        title: "Web Applications",
        description:
          "Custom software, dashboards, and platforms — from tournament management systems to membership portals. Next.js + Supabase.",
        tags: ["Next.js", "TypeScript", "Supabase"],
      },
    ],
  },
  portfolio: {
    tag: "// selected work",
    titleLine1: "Projects Built",
    titleLine2: "for Real Results",
    desc: "Real projects across different industries, each with a full tech stack and clear purpose. Images coming soon.",
    projects: [
      {
        category: "Institutional · Education",
        title: "UNIENF — Nursing School",
        description:
          "Complete institutional website for a nursing education company. Course listings, dynamic content, responsive layout, and a professional visual identity built entirely from scratch.",
        type: "institutional website",
      },
      {
        category: "Web Application · Sports",
        title: "BlackBelt BJJ",
        description:
          "Full championship management platform for Jiu-Jitsu tournaments. Athlete registration, bracket generation, real-time scoring, payment processing, and results — all integrated in one system.",
        type: "web application",
      },
      {
        category: "Institutional · Technology",
        title: "TH Tecnologia",
        description:
          "Institutional website for a tech company. Custom form API integration, responsive design, modern UI, and optimized deployment on Vercel for maximum performance and reliability.",
        type: "institutional website",
      },
      {
        category: "Landing Pages · Multi-Niche",
        title: "Professional Landing Pages",
        description:
          "High-converting landing pages across multiple niches — psychologists, architects, lawyers, and engineers. Each page tailored to the audience, offer, and specific conversion goal.",
        type: "landing pages",
      },
      {
        category: "Sales Funnel · Direct Response",
        title: "Digital Product Funnels",
        description:
          "Complete sales funnels for the Brazilian digital market — VSL pages, upsell, downsell, order bump, and thank you pages. Built on proven DR copy structures that convert.",
        type: "sales funnel",
      },
      {
        category: "E-commerce · Product Pages",
        title: "E-commerce & Product Sales",
        description:
          "Product sales pages and e-commerce sites for physical and digital goods. Fast-loading, mobile-first, and optimized for maximum conversion at every step of the purchase flow.",
        type: "e-commerce",
      },
    ],
  },
  process: {
    tag: "// how i work",
    titleLine1: "Clean Process,",
    titleLine2: "Real Delivery",
    desc: "No unnecessary back-and-forth. A clear, efficient process that respects your time and ships on schedule.",
    steps: [
      {
        title: "Discovery & Alignment",
        description:
          "We define the goal, audience, offer, and the exact conversion action the page needs to drive before anything is built.",
      },
      {
        title: "Strategy & Structure",
        description:
          "Page architecture planned around DR principles — headline, hook, social proof, offer, CTA — before a single line of code is written.",
      },
      {
        title: "Development",
        description:
          "Clean, fast, mobile-first code. Every detail crafted to reduce friction and guide the visitor toward conversion.",
      },
      {
        title: "Delivery & Support",
        description:
          "Final files or live deployment, plus revision support. You launch with confidence and full control.",
      },
    ],
  },
  cta: {
    tag: "// ready to start?",
    titleLine1: "Let's Build Something",
    titleLine2: "That Sells.",
    desc: "Available for landing pages, funnels, and full-stack projects. Fast turnaround. Real results.",
  },
  footer: "<leo.dev /> · Landing Pages & Full-Stack Development · © 2025",
}

const pt: Translation = {
  nav: {
    services: "Serviços",
    work: "Trabalhos",
    process: "Processo",
    hire: "Contrate-me",
  },
  hero: {
    eyebrow: "Disponível para novos projetos · Desenvolvedor Full-Stack",
    titleLine1: "Eu Crio Páginas",
    titleLine2: "Que Convertem.",
    subtitle:
      "Desenvolvedor full-stack especializado em landing pages de alta conversão, funis de vendas completos e aplicações web modernas — construídos com Next.js, TypeScript, Supabase e princípios de resposta direta.",
    cta1: "Ver Meus Trabalhos",
    cta2: "Vamos Conversar →",
    scroll: "rolar",
  },
  stats: {
    projects: "Projetos Entregues",
    experience: "Anos de Experiência",
    stacks: "Stacks de Tecnologia",
    satisfaction: "% de Satisfação",
  },
  services: {
    tag: "// o que eu faço",
    titleLine1: "Desenvolvimento Full-Stack",
    titleLine2: "de Funis",
    desc: "De landing pages pixel-perfeitas a funis de vendas completos e aplicações web complexas — eu cuido do stack completo.",
    cards: [
      {
        icon: "🎯",
        title: "Landing Pages de Vendas",
        description:
          "Páginas de alta conversão construídas sobre princípios de resposta direta. Estrutura de copy estratégica, hierarquia visual e posicionamento de CTAs projetados para vender.",
        tags: ["Marketing DR", "Geração de Leads", "Venda de Produtos"],
      },
      {
        icon: "🔄",
        title: "Funis de Vendas Completos",
        description:
          "Páginas VSL, formulários de pedido, fluxos de upsell/downsell e páginas de obrigado. Arquitetura de funil completa que maximiza o LTV em cada visitante.",
        tags: ["VSL", "Upsell", "Downsell", "Order Bump"],
      },
      {
        icon: "🏢",
        title: "Sites Institucionais",
        description:
          "Sites modernos e responsivos para empresas, clínicas, escolas e prestadores de serviço — construídos do zero com Next.js e Vercel.",
        tags: ["Corporativo", "E-commerce", "Responsivo"],
      },
      {
        icon: "⚙️",
        title: "Aplicações Web",
        description:
          "Softwares personalizados, dashboards e plataformas — de sistemas de gerenciamento de torneios a portais de membros. Next.js + Supabase.",
        tags: ["Next.js", "TypeScript", "Supabase"],
      },
    ],
  },
  portfolio: {
    tag: "// trabalho selecionado",
    titleLine1: "Projetos Construídos",
    titleLine2: "para Resultados Reais",
    desc: "Projetos reais em diferentes setores, cada um com stack tecnológico completo e propósito claro. Imagens em breve.",
    projects: [
      {
        category: "Institucional · Educação",
        title: "UNIENF — Escola de Enfermagem",
        description:
          "Site institucional completo para uma empresa de educação em enfermagem. Listagem de cursos, conteúdo dinâmico, layout responsivo e identidade visual profissional construída do zero.",
        type: "site institucional",
      },
      {
        category: "Aplicação Web · Esportes",
        title: "BlackBelt BJJ",
        description:
          "Plataforma completa de gestão de campeonatos de Jiu-Jitsu. Cadastro de atletas, geração de chaves, pontuação em tempo real, processamento de pagamentos e resultados — tudo integrado em um sistema.",
        type: "aplicação web",
      },
      {
        category: "Institucional · Tecnologia",
        title: "TH Tecnologia",
        description:
          "Site institucional para uma empresa de tecnologia. Integração de API de formulário personalizado, design responsivo, UI moderna e deploy otimizado na Vercel para máxima performance.",
        type: "site institucional",
      },
      {
        category: "Landing Pages · Multi-Nicho",
        title: "Landing Pages Profissionais",
        description:
          "Landing pages de alta conversão em múltiplos nichos — psicólogos, arquitetos, advogados e engenheiros. Cada página adaptada ao público, oferta e objetivo de conversão específico.",
        type: "landing pages",
      },
      {
        category: "Funil de Vendas · Resposta Direta",
        title: "Funis de Produtos Digitais",
        description:
          "Funis de vendas completos para o mercado digital brasileiro — páginas VSL, upsell, downsell, order bump e páginas de obrigado. Construídos sobre estruturas de copy de DR comprovadas.",
        type: "funil de vendas",
      },
      {
        category: "E-commerce · Páginas de Produto",
        title: "E-commerce & Venda de Produtos",
        description:
          "Páginas de vendas de produtos e sites de e-commerce para produtos físicos e digitais. Carregamento rápido, mobile-first e otimizados para máxima conversão em cada etapa do fluxo de compra.",
        type: "e-commerce",
      },
    ],
  },
  process: {
    tag: "// como eu trabalho",
    titleLine1: "Processo Limpo,",
    titleLine2: "Entrega Real",
    desc: "Sem vai-e-vem desnecessário. Um processo claro e eficiente que respeita seu tempo e entrega no prazo.",
    steps: [
      {
        title: "Descoberta & Alinhamento",
        description:
          "Definimos o objetivo, o público, a oferta e a ação de conversão exata que a página precisa gerar antes de qualquer coisa ser construída.",
      },
      {
        title: "Estratégia & Estrutura",
        description:
          "Arquitetura da página planejada com base nos princípios de DR — headline, gancho, prova social, oferta, CTA — antes de uma única linha de código ser escrita.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Código limpo, rápido e mobile-first. Cada detalhe elaborado para reduzir atrito e guiar o visitante em direção à conversão.",
      },
      {
        title: "Entrega & Suporte",
        description:
          "Arquivos finais ou deploy ao vivo, além de suporte a revisões. Você lança com confiança e controle total.",
      },
    ],
  },
  cta: {
    tag: "// pronto para começar?",
    titleLine1: "Vamos Construir Algo",
    titleLine2: "Que Vende.",
    desc: "Disponível para landing pages, funis e projetos full-stack. Entrega rápida. Resultados reais.",
  },
  footer: "<leo.dev /> · Landing Pages & Desenvolvimento Full-Stack · © 2025",
}

const es: Translation = {
  nav: {
    services: "Servicios",
    work: "Trabajos",
    process: "Proceso",
    hire: "Contrátame",
  },
  hero: {
    eyebrow: "Disponible para nuevos proyectos · Desarrollador Full-Stack",
    titleLine1: "Creo Páginas",
    titleLine2: "Que Convierten.",
    subtitle:
      "Desarrollador full-stack especializado en landing pages de alta conversión, embudos de ventas completos y aplicaciones web modernas — construidas con Next.js, TypeScript, Supabase y principios de respuesta directa.",
    cta1: "Ver Mi Trabajo",
    cta2: "Hablemos →",
    scroll: "scroll",
  },
  stats: {
    projects: "Proyectos Entregados",
    experience: "Años de Experiencia",
    stacks: "Stacks Tecnológicos",
    satisfaction: "% de Satisfacción",
  },
  services: {
    tag: "// qué hago",
    titleLine1: "Desarrollo Full-Stack",
    titleLine2: "de Embudos",
    desc: "Desde landing pages pixel-perfect hasta embudos de ventas completos y aplicaciones web complejas — me encargo del stack completo.",
    cards: [
      {
        icon: "🎯",
        title: "Landing Pages de Ventas",
        description:
          "Páginas de alta conversión construidas sobre principios de respuesta directa. Estructura de copy estratégica, jerarquía visual y posicionamiento de CTAs diseñados para vender.",
        tags: ["Marketing DR", "Generación de Leads", "Venta de Productos"],
      },
      {
        icon: "🔄",
        title: "Embudos de Ventas Completos",
        description:
          "Páginas VSL, formularios de pedido, flujos de upsell/downsell y páginas de gracias. Arquitectura de embudo completa que maximiza el LTV en cada visitante.",
        tags: ["VSL", "Upsell", "Downsell", "Order Bump"],
      },
      {
        icon: "🏢",
        title: "Sitios Web Institucionales",
        description:
          "Sitios web modernos y responsivos para empresas, clínicas, escuelas y proveedores de servicios — construidos desde cero con Next.js y Vercel.",
        tags: ["Corporativo", "E-commerce", "Responsivo"],
      },
      {
        icon: "⚙️",
        title: "Aplicaciones Web",
        description:
          "Software personalizado, dashboards y plataformas — desde sistemas de gestión de torneos hasta portales de membresías. Next.js + Supabase.",
        tags: ["Next.js", "TypeScript", "Supabase"],
      },
    ],
  },
  portfolio: {
    tag: "// trabajo seleccionado",
    titleLine1: "Proyectos Construidos",
    titleLine2: "para Resultados Reales",
    desc: "Proyectos reales en diferentes industrias, cada uno con stack tecnológico completo y propósito claro. Imágenes próximamente.",
    projects: [
      {
        category: "Institucional · Educación",
        title: "UNIENF — Escuela de Enfermería",
        description:
          "Sitio web institucional completo para una empresa de educación en enfermería. Listado de cursos, contenido dinámico, diseño responsivo e identidad visual profesional construida desde cero.",
        type: "sitio web institucional",
      },
      {
        category: "Aplicación Web · Deportes",
        title: "BlackBelt BJJ",
        description:
          "Plataforma completa de gestión de campeonatos de Jiu-Jitsu. Registro de atletas, generación de brackets, puntuación en tiempo real, procesamiento de pagos y resultados — todo integrado en un sistema.",
        type: "aplicación web",
      },
      {
        category: "Institucional · Tecnología",
        title: "TH Tecnologia",
        description:
          "Sitio web institucional para una empresa tecnológica. Integración de API de formulario personalizado, diseño responsivo, UI moderna y deployment optimizado en Vercel para máximo rendimiento.",
        type: "sitio web institucional",
      },
      {
        category: "Landing Pages · Multi-Nicho",
        title: "Landing Pages Profesionales",
        description:
          "Landing pages de alta conversión en múltiples nichos — psicólogos, arquitectos, abogados e ingenieros. Cada página adaptada al público, oferta y objetivo de conversión específico.",
        type: "landing pages",
      },
      {
        category: "Embudo de Ventas · Respuesta Directa",
        title: "Embudos de Productos Digitales",
        description:
          "Embudos de ventas completos para el mercado digital — páginas VSL, upsell, downsell, order bump y páginas de agradecimiento. Construidos sobre estructuras de copy DR probadas que convierten.",
        type: "embudo de ventas",
      },
      {
        category: "E-commerce · Páginas de Producto",
        title: "E-commerce & Venta de Productos",
        description:
          "Páginas de ventas de productos y sitios de e-commerce para bienes físicos y digitales. Carga rápida, mobile-first y optimizados para máxima conversión en cada etapa del flujo de compra.",
        type: "e-commerce",
      },
    ],
  },
  process: {
    tag: "// cómo trabajo",
    titleLine1: "Proceso Limpio,",
    titleLine2: "Entrega Real",
    desc: "Sin idas y vueltas innecesarias. Un proceso claro y eficiente que respeta tu tiempo y entrega según lo programado.",
    steps: [
      {
        title: "Descubrimiento & Alineación",
        description:
          "Definimos el objetivo, el público, la oferta y la acción de conversión exacta que la página necesita generar antes de que se construya nada.",
      },
      {
        title: "Estrategia & Estructura",
        description:
          "Arquitectura de página planificada en torno a principios DR — titular, gancho, prueba social, oferta, CTA — antes de escribir una sola línea de código.",
      },
      {
        title: "Desarrollo",
        description:
          "Código limpio, rápido y mobile-first. Cada detalle elaborado para reducir la fricción y guiar al visitante hacia la conversión.",
      },
      {
        title: "Entrega & Soporte",
        description:
          "Archivos finales o deployment en vivo, más soporte de revisiones. Lanzas con confianza y control total.",
      },
    ],
  },
  cta: {
    tag: "// ¿listo para empezar?",
    titleLine1: "Construyamos Algo",
    titleLine2: "Que Vende.",
    desc: "Disponible para landing pages, embudos y proyectos full-stack. Entrega rápida. Resultados reales.",
  },
  footer: "<leo.dev /> · Landing Pages & Desarrollo Full-Stack · © 2025",
}

export const translations: Record<Lang, Translation> = { en, pt, es }
