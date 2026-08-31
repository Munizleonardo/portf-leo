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

export interface SkillCategoryTranslation {
  title: string
  items: string[]
}

export interface LanguageSkillTranslation {
  name: string
  level: string
}

export interface EducationTranslation {
  degree: string
  period: string
}

export interface ExperienceJobTranslation {
  company: string
  role: string
  bullets: string[]
  tech: string[]
  featured: boolean
}

export interface Translation {
  nav: {
    about: string
    skills: string
    work: string
    experience: string
    hire: string
  }
  hero: {
    eyebrow: string
    /** Headline line 1 (before the persistent "Full-Stack"). */
    titleLead: string
    /** Headline tail (after "Full-Stack"). */
    titleTail: string
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
  about: {
    tag: string
    titleLine1: string
    titleLine2: string
    bio: string[]
    locationLabel: string
    location: string
    availability: string
    languagesLabel: string
    languages: LanguageSkillTranslation[]
    educationLabel: string
    education: EducationTranslation[]
  }
  skills: {
    tag: string
    titleLine1: string
    titleLine2: string
    desc: string
    categories: SkillCategoryTranslation[]
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
  experience: {
    tag: string
    titleLine1: string
    titleLine2: string
    desc: string
    earlierLabel: string
    jobs: ExperienceJobTranslation[]
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
    about: "About",
    skills: "Skills",
    work: "Work",
    experience: "Experience",
    hire: "Hire Me",
  },
  hero: {
    eyebrow: "Available for new projects · Full-Stack Developer",
    titleLead: "I Build",
    titleTail: "Digital Products.",
    subtitle:
      "Full-stack developer crafting landing pages, institutional websites, web applications, and complete sales funnels — end to end, from interface to database, integrations, and deploy. Powered by Next.js, TypeScript, Node.js, and Supabase.",
    cta1: "See My Work",
    cta2: "Let's Talk →",
    scroll: "scroll",
  },
  stats: {
    projects: "Projects Delivered",
    experience: "Years Experience",
    stacks: "Core Tech Stacks",
    satisfaction: "Client Satisfaction",
  },
  about: {
    tag: "Who I Am",
    titleLine1: "Behind the",
    titleLine2: "Code",
    bio: [
      "I'm a full-stack developer building landing pages, institutional websites, and web applications end to end — from the interface down to the database, integrations, and deploy.",
      "My path into development came through IT support, coordination, and technical operations before moving into full-time engineering — which shapes how I work: I care about production readiness, clean code, and clear communication as much as I care about shipping fast. I've delivered projects for clients in Brazil and Europe.",
    ],
    locationLabel: "Location",
    location: "Santa Catarina, Brazil",
    availability: "Available for new projects",
    languagesLabel: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Advanced" },
      { name: "Spanish", level: "Basic" },
    ],
    educationLabel: "Education",
    education: [
      { degree: "Software Engineering", period: "2025 — 2028" },
      { degree: "Business Administration", period: "2019 — 2023" },
    ],
  },
  skills: {
    tag: "Tech Stack",
    titleLine1: "Skills &",
    titleLine2: "Tools",
    desc: "The languages, frameworks, and tools I use to take a project from a blank file to a production deploy.",
    categories: [
      {
        title: "Front-End",
        items: ["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "ShadCN/UI"],
      },
      {
        title: "Back-End",
        items: ["Node.js", "REST APIs", "Webhooks", "Server Actions", "External Integrations"],
      },
      {
        title: "Database",
        items: ["Supabase (Auth & RLS)", "PostgreSQL", "MySQL"],
      },
      {
        title: "Versioning",
        items: ["Git", "GitHub", "Pull Requests", "Code Review"],
      },
      {
        title: "Deploy & Automation",
        items: ["Vercel", "N8N"],
      },
      {
        title: "Artificial Intelligence",
        items: ["Claude", "Cursor", "Codex"],
      },
      {
        title: "Tools & Platforms",
        items: ["Figma", "Slack", "Hostinger", "GoDaddy", "RedTrack", "Vturb", "Gather"],
      },
      {
        title: "Operating Systems",
        items: ["Windows", "Linux", "iOS"],
      },
    ],
  },
  services: {
    tag: "What I Do",
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
    tag: "Selected Work",
    titleLine1: "Projects Built",
    titleLine2: "for Real Results",
    desc: "Real projects across different industries — the stack, the scope, and the purpose behind each one.",
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
        category: "Landing Page · Barbershop",
        title: "Ytamar Barbershop",
        description:
          "High-converting landing page for a barbershop — services, haircut gallery, team, and location, with a direct WhatsApp booking CTA. Built with Next.js and TypeScript, mobile-first and tuned for fast loading and SEO.",
        type: "landing page",
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
  experience: {
    tag: "Career Path",
    titleLine1: "Professional",
    titleLine2: "Experience",
    desc: "From technical support and IT coordination to full-stack engineering — a career built on hands-on production experience.",
    earlierLabel: "Earlier Experience",
    jobs: [
      {
        company: "Parks Company",
        role: "Full-Stack Developer",
        bullets: [
          "Built landing pages, institutional websites, and web applications for clients across different niches.",
          "Developed front-end and full-stack solutions using React, Next.js, Node.js, TypeScript, and JavaScript.",
          "Modeled, built, and maintained databases using Supabase.",
          "Implemented forms with validation and data persistence, and integrated external APIs and services.",
          "Applied Clean Code principles and continuous refactoring; versioned all work with Git and GitHub, including PR reviews.",
        ],
        tech: ["React", "Next.js", "Node.js", "TypeScript", "Supabase", "Vercel", "Git"],
        featured: true,
      },
      {
        company: "Grupo Impetus",
        role: "Full-Stack Developer",
        bullets: [
          "Built landing pages, institutional websites, and web applications across the full stack with HTML, CSS, JavaScript, TypeScript, and Next.js.",
          "Implemented modern, reusable, and scalable interfaces focused on performance and maintainability.",
          "Created and maintained automation workflows in N8N and integrated compliance platforms.",
          "Analyzed and maintained the company's database and internal store; tracked clicks and sales with RedTrack across campaigns.",
          "Applied Clean Code and continuous refactoring; managed daily demands via Slack and Monday, deployed via Hostinger.",
          "Maintained and customized WordPress-based sites.",
        ],
        tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Node.js", "N8N", "RedTrack", "WordPress", "Hostinger"],
        featured: true,
      },
      {
        company: "TH Tecnologia",
        role: "IT Coordinator",
        bullets: [
          "Coordinated HR and customer service operations, including partner onboarding and offboarding.",
          "Ran internal and external training sessions and led internal audits of service processes.",
          "Provided Windows and iOS technical support, plus internal and external company support.",
          "Built and maintained the company's website.",
        ],
        tech: [],
        featured: false,
      },
      {
        company: "Mosaic Sistemas",
        role: "Technical Support",
        bullets: [
          "Managed client and partner data using internal control software.",
          "Analyzed documents for company registration and provided remote support to resolve client issues.",
          "Ran training sessions for clients and partners; built project presentations tracking client progress.",
          "Provided Windows and SQL support.",
        ],
        tech: [],
        featured: false,
      },
      {
        company: "Jubarte Conveniência",
        role: "Administrative Assistant",
        bullets: [
          "Handled financial organization, credit card reconciliation, and payroll/overtime calculations.",
          "Automated internal processes and managed supplier and partner contracts.",
          "Controlled inventory, pricing, and expiration dates using internal software; handled resale purchase orders.",
          "Provided internal and external technical support.",
        ],
        tech: [],
        featured: false,
      },
    ],
  },
  process: {
    tag: "How I Work",
    titleLine1: "Engineering Process,",
    titleLine2: "Real Delivery",
    desc: "A lean, predictable engineering process. Every phase has explicit deliverables and acceptance criteria, so there is no rework and no surprise on the timeline — from requirements gathering to a monitored production deploy.",
    steps: [
      {
        title: "Discovery & Requirements",
        description:
          "I map the business goal, target audience, user journey, and success metrics, then translate them into functional and non-functional requirements: needed integrations, the data model, authentication and permission rules, performance budget, and technical constraints — documented before anything is estimated.",
      },
      {
        title: "Architecture & Planning",
        description:
          "Stack decisions, component architecture, routing, and the database schema (Supabase / PostgreSQL) with its RLS policies. API contracts, third-party integrations, screen states, edge cases, and acceptance criteria are specified up front so implementation is execution, not guesswork.",
      },
      {
        title: "Development",
        description:
          "Implementation in TypeScript with Next.js and Node.js — typed, component-driven, mobile-first code. Server actions and REST/webhook integrations, form validation and error handling, accessible semantic markup, and everything versioned in Git through reviewed pull requests with continuous refactoring.",
      },
      {
        title: "QA & Performance",
        description:
          "End-to-end review of every flow: happy paths and edge cases, loading and empty and error states, and responsive behaviour across breakpoints. Accessibility pass and performance tuning against Core Web Vitals — image optimization, code-splitting, and caching.",
      },
      {
        title: "Deploy & Support",
        description:
          "Continuous deployment on Vercel with environment variables, custom domain, and basic observability (logs and error tracking) in place. Handover with documentation, plus revision support so you go live with full control of the codebase.",
      },
    ],
  },
  cta: {
    tag: "Ready to Start?",
    titleLine1: "Let's Build Something",
    titleLine2: "That Sells.",
    desc: "Available for landing pages, funnels, and full-stack projects. Fast turnaround. Real results.",
  },
  footer: "Leonardo Muniz — Full-Stack Development · © 2026",
}

const pt: Translation = {
  nav: {
    about: "Sobre",
    skills: "Skills",
    work: "Trabalhos",
    experience: "Experiência",
    hire: "Contrate-me",
  },
  hero: {
    eyebrow: "Disponível para novos projetos · Desenvolvedor Full-Stack",
    titleLead: "Eu Construo Produtos",
    titleTail: "Completos.",
    subtitle:
      "Desenvolvedor full-stack que cria landing pages, sites institucionais, aplicações web e funis de vendas completos — do front-end ao banco de dados, integrações e deploy. Com Next.js, TypeScript, Node.js e Supabase em cada projeto.",
    cta1: "Ver Meus Trabalhos",
    cta2: "Vamos Conversar →",
    scroll: "rolar",
  },
  stats: {
    projects: "Projetos Entregues",
    experience: "Anos de Experiência",
    stacks: "Stacks Principais",
    satisfaction: "de Satisfação",
  },
  about: {
    tag: "Quem eu sou",
    titleLine1: "Por Trás do",
    titleLine2: "Código",
    bio: [
      "Sou desenvolvedor full-stack e construo landing pages, sites institucionais e aplicações web de ponta a ponta — da interface ao banco de dados, integrações e deploy.",
      "Cheguei ao desenvolvimento passando por suporte técnico, coordenação de TI e operações técnicas antes de migrar para a engenharia em tempo integral — isso molda como eu trabalho: me importo tanto com ambiente de produção e código limpo quanto com entregar rápido. Já entreguei projetos para clientes no Brasil e na Europa.",
    ],
    locationLabel: "Localização",
    location: "Santa Catarina, Brasil",
    availability: "Disponível para novos projetos",
    languagesLabel: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Avançado" },
      { name: "Espanhol", level: "Básico" },
    ],
    educationLabel: "Formação",
    education: [
      { degree: "Engenharia de Software", period: "2025 — 2028" },
      { degree: "Administração", period: "2019 — 2023" },
    ],
  },
  skills: {
    tag: "Stack técnico",
    titleLine1: "Skills &",
    titleLine2: "Ferramentas",
    desc: "As linguagens, frameworks e ferramentas que uso para levar um projeto do zero até o deploy em produção.",
    categories: [
      {
        title: "Front-End",
        items: ["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "ShadCN/UI"],
      },
      {
        title: "Back-End",
        items: ["Node.js", "API Rest", "Webhooks", "Server Actions", "Integrações Externas"],
      },
      {
        title: "Banco de Dados",
        items: ["Supabase (Auth & RLS)", "PostgreSQL", "MySQL"],
      },
      {
        title: "Versionamento",
        items: ["Git", "GitHub", "Pull Requests", "Code Review"],
      },
      {
        title: "Deploy & Automação",
        items: ["Vercel", "N8N"],
      },
      {
        title: "Inteligência Artificial",
        items: ["Claude", "Cursor", "Codex"],
      },
      {
        title: "Ferramentas & Plataformas",
        items: ["Figma", "Slack", "Hostinger", "GoDaddy", "RedTrack", "Vturb", "Gather"],
      },
      {
        title: "Sistemas Operacionais",
        items: ["Windows", "Linux", "iOS"],
      },
    ],
  },
  services: {
    tag: "O que eu faço",
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
    tag: "Trabalho selecionado",
    titleLine1: "Projetos Construídos",
    titleLine2: "para Resultados Reais",
    desc: "Projetos reais em diferentes setores — o stack, o escopo e o propósito por trás de cada um.",
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
        category: "Landing Page · Barbearia",
        title: "Ytamar Barbershop",
        description:
          "Landing page de alta conversão para uma barbearia — serviços, galeria de cortes, equipe e localização, com CTA direto de agendamento pelo WhatsApp. Construída em Next.js e TypeScript, mobile-first e otimizada para carregamento rápido e SEO.",
        type: "landing page",
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
  experience: {
    tag: "Trajetória",
    titleLine1: "Experiência",
    titleLine2: "Profissional",
    desc: "Do suporte técnico e coordenação de TI até a engenharia full-stack — uma carreira construída com experiência real de produção.",
    earlierLabel: "Experiências Anteriores",
    jobs: [
      {
        company: "Parks Company",
        role: "Desenvolvedor Full-Stack",
        bullets: [
          "Desenvolvimento de landing pages, sites institucionais e aplicações web para clientes de diferentes nichos.",
          "Criação de soluções front-end e full-stack utilizando React, Next.js, Node.js, TypeScript e JavaScript.",
          "Modelagem, criação e manutenção de bancos de dados utilizando Supabase.",
          "Implementação de formulários com validação e persistência de dados, além de integração com APIs e serviços externos.",
          "Aplicação de Clean Code e refatoração contínua; versionamento com Git e GitHub, incluindo revisão de Pull Requests.",
        ],
        tech: ["React", "Next.js", "Node.js", "TypeScript", "Supabase", "Vercel", "Git"],
        featured: true,
      },
      {
        company: "Grupo Impetus",
        role: "Desenvolvedor Full-Stack",
        bullets: [
          "Desenvolvimento full-stack de landing pages, sites institucionais e aplicações web com HTML, CSS, JavaScript, TypeScript e Next.js.",
          "Implementação de interfaces modernas, reutilizáveis e escaláveis, com foco em performance e manutenção.",
          "Criação e manutenção de workflows de automação no N8N e integração de plataformas de compliance.",
          "Análise e manutenção do banco de dados e da loja interna da empresa; trackeamento de cliques e vendas com RedTrack nas campanhas.",
          "Aplicação de Clean Code e refatoração contínua; gestão de demandas via Slack e Monday, deploy via Hostinger.",
          "Manutenção e customização de sites em WordPress.",
        ],
        tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Node.js", "N8N", "RedTrack", "WordPress", "Hostinger"],
        featured: true,
      },
      {
        company: "TH Tecnologia",
        role: "Coordenador de TI",
        bullets: [
          "Coordenação de RH e atendimento ao cliente, incluindo habilitação e desabilitação de parceiros.",
          "Realização de treinamentos internos e externos e auditoria interna dos processos de atendimento.",
          "Suporte técnico Windows e iOS, além de suporte interno e externo da empresa.",
          "Criação e manutenção do site da empresa.",
        ],
        tech: [],
        featured: false,
      },
      {
        company: "Mosaic Sistemas",
        role: "Suporte Técnico",
        bullets: [
          "Gestão de dados de clientes e parceiros utilizando software interno de controle.",
          "Análise de documentos para cadastro de empresas e suporte remoto para resolução de problemas.",
          "Realização de treinamentos para clientes e parceiros; criação de apresentações de evolução de clientes.",
          "Suporte Windows e SQL.",
        ],
        tech: [],
        featured: false,
      },
      {
        company: "Jubarte Conveniência",
        role: "Assistente Administrativo",
        bullets: [
          "Organização financeira, conciliação de cartões de crédito e apuração de horas extras e folha de pagamento.",
          "Automatização de processos internos e controle contratual de fornecedores e parceiros.",
          "Controle de estoque, preços e validades via software interno; responsável por pedidos de revenda.",
          "Suporte técnico interno e externo da empresa.",
        ],
        tech: [],
        featured: false,
      },
    ],
  },
  process: {
    tag: "Como eu trabalho",
    titleLine1: "Processo de Engenharia,",
    titleLine2: "Entrega Real",
    desc: "Um processo de engenharia enxuto e previsível. Cada etapa tem entregáveis e critérios de aceite explícitos, então não há retrabalho nem surpresa no prazo — do levantamento de requisitos ao deploy monitorado em produção.",
    steps: [
      {
        title: "Descoberta & Requisitos",
        description:
          "Mapeio o objetivo de negócio, o público, a jornada do usuário e as métricas de sucesso, e traduzo tudo em requisitos funcionais e não-funcionais: integrações necessárias, modelo de dados, regras de autenticação e permissão, orçamento de performance e restrições técnicas — documentados antes de qualquer estimativa.",
      },
      {
        title: "Arquitetura & Planejamento",
        description:
          "Definição da stack, da arquitetura de componentes, do roteamento e do schema do banco (Supabase / PostgreSQL) com suas políticas de RLS. Contratos de API, integrações de terceiros, estados de tela, casos de borda e critérios de aceite especificados antes da primeira linha de código.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Implementação em TypeScript com Next.js e Node.js — código tipado, componentizado e mobile-first. Server actions e integrações REST/webhook, validação de formulários e tratamento de erros, marcação semântica e acessível, tudo versionado no Git com Pull Requests revisados e refatoração contínua.",
      },
      {
        title: "QA & Performance",
        description:
          "Revisão ponta a ponta de cada fluxo: caminhos felizes e casos de borda, estados de carregamento, vazio e erro, e comportamento responsivo em todos os breakpoints. Passagem de acessibilidade e ajuste de performance com base nos Core Web Vitals — otimização de imagens, code-splitting e cache.",
      },
      {
        title: "Deploy & Suporte",
        description:
          "Deploy contínuo na Vercel com variáveis de ambiente, domínio próprio e observabilidade básica (logs e rastreio de erros) configurados. Entrega com documentação, além de suporte a revisões para você subir com controle total da base de código.",
      },
    ],
  },
  cta: {
    tag: "Pronto para começar?",
    titleLine1: "Vamos Construir Algo",
    titleLine2: "Que Vende.",
    desc: "Disponível para landing pages, funis e projetos full-stack. Entrega rápida. Resultados reais.",
  },
  footer: "Leonardo Muniz — Desenvolvimento Full-Stack · © 2026",
}

const es: Translation = {
  nav: {
    about: "Sobre Mí",
    skills: "Skills",
    work: "Trabajos",
    experience: "Experiencia",
    hire: "Contrátame",
  },
  hero: {
    eyebrow: "Disponible para nuevos proyectos · Desarrollador Full-Stack",
    titleLead: "Construyo Productos",
    titleTail: "Completos.",
    subtitle:
      "Desarrollador full-stack que crea landing pages, sitios institucionales, aplicaciones web y embudos de ventas completos — de principio a fin, desde la interfaz hasta la base de datos, integraciones y despliegue. Con Next.js, TypeScript, Node.js y Supabase en cada proyecto.",
    cta1: "Ver Mi Trabajo",
    cta2: "Hablemos →",
    scroll: "scroll",
  },
  stats: {
    projects: "Proyectos Entregados",
    experience: "Años de Experiencia",
    stacks: "Stacks Principales",
    satisfaction: "de Satisfacción",
  },
  about: {
    tag: "Quién soy",
    titleLine1: "Detrás del",
    titleLine2: "Código",
    bio: [
      "Soy desarrollador full-stack y construyo landing pages, sitios institucionales y aplicaciones web de principio a fin — desde la interfaz hasta la base de datos, integraciones y despliegue.",
      "Llegué al desarrollo pasando por soporte técnico, coordinación de TI y operaciones técnicas antes de dedicarme por completo a la ingeniería — esto define cómo trabajo: me importa tanto el entorno de producción y el código limpio como entregar rápido. Ya entregué proyectos para clientes en Brasil y Europa.",
    ],
    locationLabel: "Ubicación",
    location: "Santa Catarina, Brasil",
    availability: "Disponible para nuevos proyectos",
    languagesLabel: "Idiomas",
    languages: [
      { name: "Portugués", level: "Nativo" },
      { name: "Inglés", level: "Avanzado" },
      { name: "Español", level: "Básico" },
    ],
    educationLabel: "Formación",
    education: [
      { degree: "Ingeniería de Software", period: "2025 — 2028" },
      { degree: "Administración", period: "2019 — 2023" },
    ],
  },
  skills: {
    tag: "Stack técnico",
    titleLine1: "Skills &",
    titleLine2: "Herramientas",
    desc: "Los lenguajes, frameworks y herramientas que uso para llevar un proyecto desde cero hasta el despliegue en producción.",
    categories: [
      {
        title: "Front-End",
        items: ["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "ShadCN/UI"],
      },
      {
        title: "Back-End",
        items: ["Node.js", "API REST", "Webhooks", "Server Actions", "Integraciones Externas"],
      },
      {
        title: "Base de Datos",
        items: ["Supabase (Auth & RLS)", "PostgreSQL", "MySQL"],
      },
      {
        title: "Versionado",
        items: ["Git", "GitHub", "Pull Requests", "Code Review"],
      },
      {
        title: "Despliegue & Automatización",
        items: ["Vercel", "N8N"],
      },
      {
        title: "Inteligencia Artificial",
        items: ["Claude", "Cursor", "Codex"],
      },
      {
        title: "Herramientas & Plataformas",
        items: ["Figma", "Slack", "Hostinger", "GoDaddy", "RedTrack", "Vturb", "Gather"],
      },
      {
        title: "Sistemas Operativos",
        items: ["Windows", "Linux", "iOS"],
      },
    ],
  },
  services: {
    tag: "Qué hago",
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
    tag: "Trabajo seleccionado",
    titleLine1: "Proyectos Construidos",
    titleLine2: "para Resultados Reales",
    desc: "Proyectos reales en diferentes industrias — el stack, el alcance y el propósito detrás de cada uno.",
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
        category: "Landing Page · Barbería",
        title: "Ytamar Barbershop",
        description:
          "Landing page de alta conversión para una barbería — servicios, galería de cortes, equipo y ubicación, con CTA directo de reserva por WhatsApp. Construida con Next.js y TypeScript, mobile-first y optimizada para carga rápida y SEO.",
        type: "landing page",
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
  experience: {
    tag: "Trayectoria",
    titleLine1: "Experiencia",
    titleLine2: "Profesional",
    desc: "Del soporte técnico y la coordinación de TI a la ingeniería full-stack — una carrera construida con experiencia real de producción.",
    earlierLabel: "Experiencias Anteriores",
    jobs: [
      {
        company: "Parks Company",
        role: "Desarrollador Full-Stack",
        bullets: [
          "Desarrollo de landing pages, sitios institucionales y aplicaciones web para clientes de diferentes nichos.",
          "Creación de soluciones front-end y full-stack utilizando React, Next.js, Node.js, TypeScript y JavaScript.",
          "Modelado, creación y mantenimiento de bases de datos utilizando Supabase.",
          "Implementación de formularios con validación y persistencia de datos, e integración de APIs y servicios externos.",
          "Aplicación de Clean Code y refactorización continua; versionado con Git y GitHub, incluyendo revisión de Pull Requests.",
        ],
        tech: ["React", "Next.js", "Node.js", "TypeScript", "Supabase", "Vercel", "Git"],
        featured: true,
      },
      {
        company: "Grupo Impetus",
        role: "Desarrollador Full-Stack",
        bullets: [
          "Desarrollo full-stack de landing pages, sitios institucionales y aplicaciones web con HTML, CSS, JavaScript, TypeScript y Next.js.",
          "Implementación de interfaces modernas, reutilizables y escalables, con foco en rendimiento y mantenimiento.",
          "Creación y mantenimiento de workflows de automatización en N8N e integración de plataformas de compliance.",
          "Análisis y mantenimiento de la base de datos y de la tienda interna de la empresa; seguimiento de clics y ventas con RedTrack en las campañas.",
          "Aplicación de Clean Code y refactorización continua; gestión de tareas vía Slack y Monday, despliegue vía Hostinger.",
          "Mantenimiento y personalización de sitios en WordPress.",
        ],
        tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Node.js", "N8N", "RedTrack", "WordPress", "Hostinger"],
        featured: true,
      },
      {
        company: "TH Tecnologia",
        role: "Coordinador de TI",
        bullets: [
          "Coordinación de RH y atención al cliente, incluyendo habilitación y deshabilitación de socios.",
          "Realización de capacitaciones internas y externas y auditoría interna de los procesos de atención.",
          "Soporte técnico Windows e iOS, además de soporte interno y externo de la empresa.",
          "Creación y mantenimiento del sitio web de la empresa.",
        ],
        tech: [],
        featured: false,
      },
      {
        company: "Mosaic Sistemas",
        role: "Soporte Técnico",
        bullets: [
          "Gestión de datos de clientes y socios utilizando software interno de control.",
          "Análisis de documentos para registro de empresas y soporte remoto para resolución de problemas.",
          "Realización de capacitaciones para clientes y socios; creación de presentaciones de evolución de clientes.",
          "Soporte Windows y SQL.",
        ],
        tech: [],
        featured: false,
      },
      {
        company: "Jubarte Conveniência",
        role: "Asistente Administrativo",
        bullets: [
          "Organización financiera, conciliación de tarjetas de crédito y cálculo de horas extra y nómina.",
          "Automatización de procesos internos y control contractual de proveedores y socios.",
          "Control de inventario, precios y vencimientos vía software interno; responsable de pedidos de reventa.",
          "Soporte técnico interno y externo de la empresa.",
        ],
        tech: [],
        featured: false,
      },
    ],
  },
  process: {
    tag: "Cómo trabajo",
    titleLine1: "Proceso de Ingeniería,",
    titleLine2: "Entrega Real",
    desc: "Un proceso de ingeniería ágil y previsible. Cada fase tiene entregables y criterios de aceptación explícitos, así que no hay retrabajo ni sorpresas en el plazo — desde el relevamiento de requisitos hasta un despliegue monitoreado en producción.",
    steps: [
      {
        title: "Descubrimiento & Requisitos",
        description:
          "Mapeo el objetivo de negocio, el público, el recorrido del usuario y las métricas de éxito, y lo traduzco en requisitos funcionales y no funcionales: integraciones necesarias, modelo de datos, reglas de autenticación y permisos, presupuesto de rendimiento y restricciones técnicas — documentados antes de cualquier estimación.",
      },
      {
        title: "Arquitectura & Planificación",
        description:
          "Decisiones de stack, arquitectura de componentes, enrutamiento y esquema de base de datos (Supabase / PostgreSQL) con sus políticas de RLS. Contratos de API, integraciones de terceros, estados de pantalla, casos límite y criterios de aceptación especificados antes de la primera línea de código.",
      },
      {
        title: "Desarrollo",
        description:
          "Implementación en TypeScript con Next.js y Node.js — código tipado, basado en componentes y mobile-first. Server actions e integraciones REST/webhook, validación de formularios y manejo de errores, marcado semántico y accesible, todo versionado en Git con pull requests revisados y refactorización continua.",
      },
      {
        title: "QA & Rendimiento",
        description:
          "Revisión de extremo a extremo de cada flujo: caminos felices y casos límite, estados de carga, vacío y error, y comportamiento responsivo en todos los breakpoints. Pasada de accesibilidad y ajuste de rendimiento según los Core Web Vitals — optimización de imágenes, code-splitting y caché.",
      },
      {
        title: "Despliegue & Soporte",
        description:
          "Despliegue continuo en Vercel con variables de entorno, dominio propio y observabilidad básica (logs y seguimiento de errores) configurados. Entrega con documentación, más soporte de revisiones para que lances con control total del código.",
      },
    ],
  },
  cta: {
    tag: "¿Listo para empezar?",
    titleLine1: "Construyamos Algo",
    titleLine2: "Que Vende.",
    desc: "Disponible para landing pages, embudos y proyectos full-stack. Entrega rápida. Resultados reales.",
  },
  footer: "Leonardo Muniz — Desarrollo Full-Stack · © 2026",
}

export const translations: Record<Lang, Translation> = { en, pt, es }
