import { PortfolioLanguage } from "./portfolio-ui.service";

export interface ProjectContent {
  slug: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  technologies: string[];
  challenge: string;
  contribution: string;
  result: string;
}

export interface PortfolioContent {
  navigation: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    stack: string;
    education: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    primary: string;
    secondary: string;
    viewCv: string;
    location: string;
    role: string;
    routeTitle: string;
    routeStart: string;
    routeExperience: string;
    routeProjects: string;
    routeEducation: string;
    routeDestination: string;
  };
  metrics: { label: string; caption: string }[];
  about: { eyebrow: string; title: string; paragraphs: string[]; link: string };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    details: string;
    caseStudy: string;
    challengeLabel: string;
    contributionLabel: string;
    resultLabel: string;
    items: ProjectContent[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: {
      role: string;
      company: string;
      period: string;
      description: string;
      highlights: string[];
    }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    groups: {
      code: string;
      title: string;
      description: string;
      items: string[];
    }[];
  };
  education: {
    eyebrow: string;
    title: string;
    items: {
      title: string;
      place: string;
      period: string;
      description: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
    downloadLabel: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    profileRole: string;
    availability: string;
    copyEmailLabel: string;
    copiedLabel: string;
    footer: string;
  };
}

const translations: Record<PortfolioLanguage, PortfolioContent> = {
  es: {
    navigation: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      stack: "Tecnologías",
      education: "Educación",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "SOFTWARE ENGINEER · FULL STACK DEVELOPER",
      title: "Mikhail Luchkin",
      tagline: "Construyendo soluciones digitales, del backend al frontend.",
      description:
        "Desarrollo aplicaciones web, APIs e integraciones entre sistemas, con especial atención a la arquitectura, la calidad del código y la experiencia de usuario.",
      primary: "Ver proyectos",
      secondary: "Descargar CV",
      viewCv: "Ver CV",
      location: "Madrid, España",
      role: "Backend-focused Full Stack Developer",
      routeTitle: "ENGINEERING FLIGHT LOG",
      routeStart: "PROFILE",
      routeExperience: "EXPERIENCE",
      routeProjects: "PROJECTS",
      routeEducation: "EDUCATION",
      routeDestination: "NEXT DESTINATION",
    },
    metrics: [
      { label: "700+", caption: "eventos CRM / semana" },
      { label: "10K+", caption: "registros indexados" },
      { label: "20+", caption: "consultas GraphQL migradas" },
      { label: "−70%", caption: "tiempo de búsqueda" },
    ],
    about: {
      eyebrow: "02 / SOBRE MÍ",
      title: "De la aviación al desarrollo de software",
      paragraphs: [
        "Soy desarrollador Full Stack con especial interés en el backend, las APIs y la integración de sistemas. Disfruto entendiendo cómo funcionan las aplicaciones de extremo a extremo y construyendo soluciones que sean útiles, claras y mantenibles.",
        "Mi primer camino formativo estuvo relacionado con la aviación. Esa etapa reforzó mi interés por los sistemas técnicos, el análisis y la precisión; hoy aplico esa misma curiosidad al desarrollo de software.",
      ],
      link: "Conocer mi experiencia",
    },
    projects: {
      eyebrow: "03 / PROYECTOS DESTACADOS",
      title: "Selected missions",
      intro:
        "Proyectos y soluciones en los que he participado, desde integraciones backend hasta automatización y búsqueda.",
      details: "Ver detalles técnicos",
      caseStudy: "Abrir caso de estudio",
      challengeLabel: "RETO",
      contributionLabel: "MI CONTRIBUCIÓN",
      resultLabel: "RESULTADO",
      items: [
        {
          slug: "crm-event-processing",
          number: "MISSION 001",
          category: "EXPERIENCIA PROFESIONAL",
          title: "CRM Event Processing",
          summary:
            "Procesamiento asíncrono de eventos de Salesforce y Bitrix24 mediante una arquitectura orientada a eventos.",
          metric: "700+",
          metricLabel: "eventos semanales",
          technologies: ["Java 17", "Spring Boot", "Apache Kafka", "CRM APIs"],
          challenge:
            "Integrar fuentes CRM externas y automatizar el procesamiento continuo de sus eventos.",
          contribution:
            "Desarrollo de la lógica backend y del flujo de procesamiento asíncrono utilizando Apache Kafka.",
          result:
            "Automatización del flujo de eventos, con más de 700 eventos procesados semanalmente.",
        },
        {
          slug: "ai-powered-search",
          number: "MISSION 002",
          category: "EXPERIENCIA PROFESIONAL",
          title: "AI-Powered Search",
          summary:
            "Solución de búsqueda basada en Meilisearch para indexar y consultar registros de webinars.",
          metric: "−70%",
          metricLabel: "tiempo de búsqueda",
          technologies: ["Meilisearch", "Java", "Search Indexing", "AI"],
          challenge:
            "Mejorar la localización de información dentro de un conjunto amplio de registros de webinars.",
          contribution:
            "Participación en el diseño de una solución de indexación y búsqueda para más de 10.000 registros.",
          result: "Reducción del tiempo de búsqueda en un 70%.",
        },
        {
          slug: "microservices-platform",
          number: "MISSION 003",
          category: "BOOTCAMP PROJECT",
          title: "Microservices Platform",
          summary:
            "Desarrollo de tres microservicios dentro de una plataforma compuesta por diez servicios.",
          metric: "3 / 10",
          metricLabel: "microservicios desarrollados",
          technologies: ["Java", "Kafka", "Redis", "REST APIs"],
          challenge:
            "Construir funcionalidades independientes dentro de una plataforma distribuida.",
          contribution:
            "Trabajo en News Feed, URL Shortener y Payment/Account, incluyendo comunicación asíncrona y caché.",
          result:
            "Experiencia práctica con separación de responsabilidades, comunicación entre servicios y arquitectura de microservicios.",
        },
        {
          slug: "developer-workflow-automation",
          number: "MISSION 004",
          category: "AUTOMATIZACIÓN",
          title: "Developer Workflow Automation",
          summary:
            "Integraciones entre GitHub, Jira y Notion para automatizar procesos y recopilar métricas.",
          metric: "300+",
          metricLabel: "estudiantes monitorizados",
          technologies: ["GitHub Webhooks", "Jira", "Notion", "REST APIs"],
          challenge:
            "Reducir tareas manuales y mejorar la visibilidad de la actividad de desarrollo.",
          contribution:
            "Implementación de webhooks, pipelines analíticos y sincronización de invitaciones y accesos.",
          result:
            "Flujos automatizados para onboarding y seguimiento de actividad de más de 300 estudiantes.",
        },
      ],
    },
    experience: {
      eyebrow: "04 / EXPERIENCIA",
      title: "Professional logbook",
      items: [
        {
          role: "Backend Developer / Software Engineer",
          company: "FAANG School",
          period: "Jun 2024 — May 2026",
          description:
            "Desarrollé servicios backend y APIs REST con Java 17 y Spring Boot, trabajando en persistencia de datos, integraciones CRM y automatización de flujos internos. Migré más de 20 consultas GraphQL y gestioné cambios del esquema de PostgreSQL con Liquibase.",
          highlights: [
            "Procesamiento de más de 700 eventos CRM semanales de Salesforce y Bitrix24 mediante flujos con Kafka.",
            "Automatización de métricas de repositorios y del onboarding con GitHub, Jira y Notion para más de 300 estudiantes.",
            "Indexación de más de 10.000 registros de webinars con Meilisearch, reduciendo el tiempo de búsqueda un 70%.",
          ],
        },
        {
          role: "Java Backend Developer — Bootcamp",
          company: "CorporationX / FAANG School",
          period: "May 2023 — Nov 2023",
          description:
            "Contribuí a una plataforma para startups basada en 10 microservicios, centrándome en News Feed, URL Shortener y Payment/Account. Trabajé con Kafka y Redis para la comunicación orientada a eventos, notificaciones y caché.",
          highlights: [
            "Implementé notificaciones en tiempo real mediante Redis Pub/Sub.",
            "Añadí caché con Redis para reducir la latencia de URL Shortener.",
            "Desarrollé funcionalidades de Payment/Account con auditoría de saldos y conversión multidivisa.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "05 / TECNOLOGÍAS",
      title: "Tecnologías que utilizo",
      intro:
        "Un mapa de mi stack tecnológico, organizado por las distintas capas del desarrollo de software.",
      note: "Tecnologías utilizadas en proyectos profesionales, proyectos formativos y aprendizaje práctico.",
      groups: [
        {
          code: "API",
          title: "APIs e integración",
          description: "Diseño, documentación y pruebas de APIs",
          items: [
            "REST APIs",
            "GraphQL",
            "gRPC",
            "Swagger / OpenAPI",
            "Postman",
          ],
        },
        {
          code: "UI",
          title: "Frontend",
          description: "Interfaces y aplicaciones web",
          items: [
            "JavaScript",
            "TypeScript",
            "React",
            "Angular",
            "HTML5",
            "CSS3",
            "Bootstrap",
          ],
        },
        {
          code: "SRV",
          title: "Backend Java",
          description: "Servicios, persistencia y ecosistema Spring",
          items: [
            "Java 17",
            "Spring Boot",
            "Spring MVC",
            "Spring Data JPA",
            "Spring Security",
            "Spring Batch",
            "Hibernate",
            "JDBC",
            "Liquibase",
            "Lombok",
            "Apache Log4j",
          ],
        },
        {
          code: "NET",
          title: ".NET y otros entornos backend",
          description: "Desarrollo de servicios y runtimes adicionales",
          items: [
            "C#",
            ".NET Core",
            ".NET Framework",
            "ASP.NET Core Web API",
            "Entity Framework Core",
            "LINQ",
            "AutoMapper",
            "Node.js",
            "Python",
            "Kotlin",
          ],
        },
        {
          code: "EVT",
          title: "Mensajería y arquitectura",
          description: "Comunicación asíncrona y sistemas distribuidos",
          items: [
            "Apache Kafka",
            "RabbitMQ",
            "Redis Pub/Sub",
            "Microservices",
            "Event-Driven Architecture",
          ],
        },
        {
          code: "DATA",
          title: "Datos y almacenamiento",
          description: "Bases de datos relacionales, NoSQL y almacenamiento",
          items: [
            "PostgreSQL",
            "MySQL",
            "Oracle SQL",
            "Azure SQL",
            "MongoDB",
            "Redis",
            "AWS S3",
          ],
        },
        {
          code: "QA",
          title: "Testing y calidad",
          description: "Pruebas automatizadas y prácticas de calidad",
          items: ["JUnit", "Mockito", "xUnit", "TDD / BDD"],
        },
        {
          code: "OPS",
          title: "Infraestructura y DevOps",
          description: "Contenedores, cloud y entrega continua",
          items: [
            "Docker",
            "Kubernetes",
            "AWS",
            "Jenkins",
            "GitHub Actions",
            "GitLab CI",
            "CI/CD",
          ],
        },
        {
          code: "DEV",
          title: "Herramientas e IA",
          description: "Entorno de desarrollo, colaboración y asistentes",
          items: [
            "Git",
            "GitHub",
            "GitLab",
            "Maven",
            "Gradle",
            "IntelliJ IDEA",
            "Eclipse",
            "Jira",
            "Notion",
            "ChatGPT",
            "Claude",
            "Cursor",
            "GitHub Copilot",
          ],
        },
      ],
    },
    education: {
      eyebrow: "06 / EDUCACIÓN",
      title: "Learning trajectory",
      items: [
        {
          title: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
          place: "Centro Formación Profesional Nelson",
          period: "2025 — 2027",
          description:
            "Formación práctica en desarrollo Full Stack: Java, Spring Boot, JavaScript, TypeScript, React, Angular, C#, .NET, Python y bases de datos SQL.",
        },
        {
          title: "Estudios en el ámbito de la aviación",
          place: "Formación técnica anterior",
          period: "Etapa anterior",
          description:
            "Una primera formación ligada a mi interés por la aviación y los sistemas técnicos.",
        },
      ],
    },
    contact: {
      eyebrow: "07 / CONTACTO",
      title: "¿Hablamos?",
      description:
        "Estoy abierto a nuevas oportunidades, proyectos interesantes y colaboraciones. Si quieres hablar sobre tecnología, desarrollo de software o una posible oportunidad, estaré encantado de escucharte.",
      button: "Enviar un email",
      downloadLabel: "Descargar CV",
      emailLabel: "EMAIL",
      githubLabel: "GITHUB",
      linkedinLabel: "LINKEDIN",
      locationLabel: "UBICACIÓN",
      profileRole: "Desarrollador Full Stack · Java",
      availability: "DISPONIBLE PARA NUEVAS OPORTUNIDADES",
      copyEmailLabel: "Copiar email",
      copiedLabel: "Copiado",
      footer: "Diseñado y desarrollado por Mikhail Luchkin.",
    },
  },
  en: {
    navigation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      stack: "Tech stack",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      eyebrow: "SOFTWARE ENGINEER · FULL STACK DEVELOPER",
      title: "Mikhail Luchkin",
      tagline: "Building digital solutions, from backend to frontend",
      description:
        "I build web applications, APIs and system integrations, with a focus on architecture, code quality and user experience.",
      primary: "Explore projects",
      secondary: "Download CV",
      viewCv: "View CV",
      location: "Madrid, Spain",
      role: "Backend-focused Full Stack Developer",
      routeTitle: "ENGINEERING FLIGHT LOG",
      routeStart: "PROFILE",
      routeExperience: "EXPERIENCE",
      routeProjects: "PROJECTS",
      routeEducation: "EDUCATION",
      routeDestination: "NEXT DESTINATION",
    },
    metrics: [
      { label: "700+", caption: "CRM events / week" },
      { label: "10K+", caption: "records indexed" },
      { label: "20+", caption: "GraphQL queries migrated" },
      { label: "−70%", caption: "search time" },
    ],
    about: {
      eyebrow: "02 / ABOUT ME",
      title: "From aviation to software development",
      paragraphs: [
        "I am a Full Stack Developer with a strong interest in backend development, APIs and system integration. I enjoy understanding how applications work end to end and building solutions that are useful, clear and maintainable.",
        "My earlier educational path was related to aviation. That experience strengthened my interest in technical systems, analysis and precision; today, I bring the same curiosity to software development.",
      ],
      link: "Explore my experience",
    },
    projects: {
      eyebrow: "03 / SELECTED PROJECTS",
      title: "Selected missions",
      intro:
        "Projects and solutions I have contributed to, from backend integrations to automation and search.",
      details: "View technical details",
      caseStudy: "Open full case study",
      challengeLabel: "CHALLENGE",
      contributionLabel: "MY CONTRIBUTION",
      resultLabel: "RESULT",
      items: [
        {
          slug: "crm-event-processing",
          number: "MISSION 001",
          category: "PROFESSIONAL EXPERIENCE",
          title: "CRM Event Processing",
          summary:
            "Asynchronous processing of Salesforce and Bitrix24 events using an event-driven architecture.",
          metric: "700+",
          metricLabel: "events per week",
          technologies: ["Java 17", "Spring Boot", "Apache Kafka", "CRM APIs"],
          challenge:
            "Integrate external CRM sources and automate the ongoing processing of their events.",
          contribution:
            "Backend development and asynchronous event-processing flows using Apache Kafka.",
          result:
            "An automated event flow processing more than 700 events per week.",
        },
        {
          slug: "ai-powered-search",
          number: "MISSION 002",
          category: "PROFESSIONAL EXPERIENCE",
          title: "AI-Powered Search",
          summary:
            "A Meilisearch-based solution for indexing and searching webinar records.",
          metric: "−70%",
          metricLabel: "search time",
          technologies: ["Meilisearch", "Java", "Search Indexing", "AI"],
          challenge:
            "Improve information retrieval across a large collection of webinar records.",
          contribution:
            "Contributed to the design of an indexing and search solution for more than 10,000 records.",
          result: "Reduced search time by 70%.",
        },
        {
          slug: "microservices-platform",
          number: "MISSION 003",
          category: "BOOTCAMP PROJECT",
          title: "Microservices Platform",
          summary:
            "Development of three microservices within a platform composed of ten services.",
          metric: "3 / 10",
          metricLabel: "microservices developed",
          technologies: ["Java", "Kafka", "Redis", "REST APIs"],
          challenge:
            "Build independent features within a distributed platform.",
          contribution:
            "Worked on News Feed, URL Shortener and Payment/Account, including asynchronous communication and caching.",
          result:
            "Practical experience with separation of concerns, service communication and microservice architecture.",
        },
        {
          slug: "developer-workflow-automation",
          number: "MISSION 004",
          category: "AUTOMATION",
          title: "Developer Workflow Automation",
          summary:
            "GitHub, Jira and Notion integrations to automate workflows and collect metrics.",
          metric: "300+",
          metricLabel: "students monitored",
          technologies: ["GitHub Webhooks", "Jira", "Notion", "REST APIs"],
          challenge:
            "Reduce manual work and improve visibility into development activity.",
          contribution:
            "Implemented webhooks, analytics pipelines and invitation/access synchronization.",
          result:
            "Automated onboarding and activity tracking workflows for more than 300 students.",
        },
      ],
    },
    experience: {
      eyebrow: "04 / EXPERIENCE",
      title: "Professional logbook",
      items: [
        {
          role: "Backend Developer / Software Engineer",
          company: "FAANG School",
          period: "Jun 2024 — May 2026",
          description:
            "Built backend services and REST APIs with Java 17 and Spring Boot, covering data persistence, CRM integrations and internal workflow automation. Migrated 20+ GraphQL queries and managed PostgreSQL schema changes with Liquibase.",
          highlights: [
            "Processed 700+ weekly CRM events from Salesforce and Bitrix24 through Kafka-based workflows.",
            "Automated repository metrics and onboarding workflows across GitHub, Jira and Notion for 300+ students.",
            "Indexed 10,000+ webinar records with Meilisearch, reducing search time by 70%.",
          ],
        },
        {
          role: "Java Backend Developer — Bootcamp",
          company: "CorporationX / FAANG School",
          period: "May 2023 — Nov 2023",
          description:
            "Contributed to a startup platform built around 10 microservices, focusing on News Feed, URL Shortener and Payment/Account. Worked with Kafka and Redis for event-driven communication, notifications and caching.",
          highlights: [
            "Implemented real-time notifications using Redis Pub/Sub.",
            "Added Redis caching to reduce URL Shortener latency.",
            "Developed Payment/Account functionality with balance auditing and multi-currency exchange.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "05 / TECHNOLOGIES",
      title: "Technologies I use",
      intro:
        "A map of my technology stack, organized by the different layers of software development.",
      note: "Technologies used across professional work, training projects and hands-on learning.",
      groups: [
        {
          code: "API",
          title: "APIs & Integration",
          description: "API design, documentation and testing",
          items: [
            "REST APIs",
            "GraphQL",
            "gRPC",
            "Swagger / OpenAPI",
            "Postman",
          ],
        },
        {
          code: "UI",
          title: "Frontend",
          description: "Web interfaces and client-side applications",
          items: [
            "JavaScript",
            "TypeScript",
            "React",
            "Angular",
            "HTML5",
            "CSS3",
            "Bootstrap",
          ],
        },
        {
          code: "SRV",
          title: "Java Backend",
          description: "Services, persistence and the Spring ecosystem",
          items: [
            "Java 17",
            "Spring Boot",
            "Spring MVC",
            "Spring Data JPA",
            "Spring Security",
            "Spring Batch",
            "Hibernate",
            "JDBC",
            "Liquibase",
            "Lombok",
            "Apache Log4j",
          ],
        },
        {
          code: "NET",
          title: ".NET & Other Backend Runtimes",
          description: "Service development and additional runtimes",
          items: [
            "C#",
            ".NET Core",
            ".NET Framework",
            "ASP.NET Core Web API",
            "Entity Framework Core",
            "LINQ",
            "AutoMapper",
            "Node.js",
            "Python",
            "Kotlin",
          ],
        },
        {
          code: "EVT",
          title: "Messaging & Architecture",
          description: "Asynchronous communication and distributed systems",
          items: [
            "Apache Kafka",
            "RabbitMQ",
            "Redis Pub/Sub",
            "Microservices",
            "Event-Driven Architecture",
          ],
        },
        {
          code: "DATA",
          title: "Data & Storage",
          description: "Relational databases, NoSQL and object storage",
          items: [
            "PostgreSQL",
            "MySQL",
            "Oracle SQL",
            "Azure SQL",
            "MongoDB",
            "Redis",
            "AWS S3",
          ],
        },
        {
          code: "QA",
          title: "Testing & Quality",
          description: "Automated testing and software quality practices",
          items: ["JUnit", "Mockito", "xUnit", "TDD / BDD"],
        },
        {
          code: "OPS",
          title: "Infrastructure & DevOps",
          description: "Containers, cloud and continuous delivery",
          items: [
            "Docker",
            "Kubernetes",
            "AWS",
            "Jenkins",
            "GitHub Actions",
            "GitLab CI",
            "CI/CD",
          ],
        },
        {
          code: "DEV",
          title: "Developer Tools & AI",
          description: "Development environments, collaboration and assistants",
          items: [
            "Git",
            "GitHub",
            "GitLab",
            "Maven",
            "Gradle",
            "IntelliJ IDEA",
            "Eclipse",
            "Jira",
            "Notion",
            "ChatGPT",
            "Claude",
            "Cursor",
            "GitHub Copilot",
          ],
        },
      ],
    },
    education: {
      eyebrow: "06 / EDUCATION",
      title: "Learning trajectory",
      items: [
        {
          title:
            "Higher Vocational Training in Web Application Development (DAW)",
          place: "Centro Formación Profesional Nelson",
          period: "2025 — 2027",
          description:
            "Practical Full Stack training: Java, Spring Boot, JavaScript, TypeScript, React, Angular, C#, .NET, Python and SQL databases.",
        },
        {
          title: "Aviation-related studies",
          place: "Previous technical education",
          period: "Previous stage",
          description:
            "An earlier educational path connected to my interest in aviation and technical systems.",
        },
      ],
    },
    contact: {
      eyebrow: "07 / CONTACT",
      title: "Let’s connect",
      description:
        "I am open to new opportunities, interesting projects and collaborations. Feel free to reach out if you would like to discuss technology, software development or a potential opportunity.",
      button: "Send an email",
      downloadLabel: "Download CV",
      emailLabel: "EMAIL",
      githubLabel: "GITHUB",
      linkedinLabel: "LINKEDIN",
      locationLabel: "LOCATION",
      profileRole: "Full Stack Developer · Software Engineer",
      availability: "OPEN TO NEW OPPORTUNITIES",
      copyEmailLabel: "Copy email",
      copiedLabel: "Copied",
      footer: "Designed and developed by Mikhail Luchkin.",
    },
  },
};

export function getPortfolioContent(
  language: PortfolioLanguage,
): PortfolioContent {
  return translations[language];
}
