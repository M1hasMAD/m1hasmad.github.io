import { PortfolioLanguage } from "./portfolio-ui.service";

export interface ProjectCaseStudy {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  metric: string;
  metricLabel: string;
  technologies: string[];
  overview: string;
  challengeTitle: string;
  challenge: string;
  contributionTitle: string;
  contribution: string;
  resultTitle: string;
  result: string;
  architectureTitle: string;
  architectureNote: string;
  architecture: string[];
  highlightsTitle: string;
  highlights: string[];
  confidentialityNote: string;
}

const caseStudies: Record<PortfolioLanguage, ProjectCaseStudy[]> = {
  es: [
    {
      slug: "crm-event-processing",
      number: "MISSION 001",
      category: "EXPERIENCIA PROFESIONAL",
      title: "CRM Event Processing",
      subtitle:
        "Procesamiento asíncrono de eventos de Salesforce y Bitrix24 mediante Apache Kafka.",
      organization: "FAANG School",
      period: "Jun 2024 — May 2026",
      metric: "700+",
      metricLabel: "eventos CRM por semana",
      technologies: [
        "Java 17",
        "Spring Boot",
        "Apache Kafka",
        "Salesforce",
        "Bitrix24",
        "REST APIs",
      ],
      overview:
        "Participé en el desarrollo de un flujo backend para automatizar el procesamiento de eventos procedentes de plataformas CRM. La solución utilizaba Apache Kafka para gestionar la comunicación orientada a eventos de forma asíncrona.",
      challengeTitle: "El reto",
      challenge:
        "Integrar eventos de Salesforce y Bitrix24 en los procesos de la plataforma y reducir la intervención manual en su tratamiento.",
      contributionTitle: "Mi contribución",
      contribution:
        "Trabajé en la parte backend del procesamiento de eventos utilizando Java, Spring Boot y Apache Kafka, dentro de una arquitectura orientada a eventos.",
      resultTitle: "Resultado",
      result:
        "El flujo automatizado permitía gestionar más de 700 eventos CRM semanales de Salesforce y Bitrix24 de forma asíncrona.",
      architectureTitle: "Flujo de integración",
      architectureNote:
        "Representación simplificada del flujo funcional; se omiten detalles internos de implementación.",
      architecture: [
        "Salesforce / Bitrix24",
        "Apache Kafka",
        "Procesamiento backend",
        "Flujos de plataforma",
      ],
      highlightsTitle: "Puntos clave",
      highlights: [
        "Más de 700 eventos CRM procesados semanalmente.",
        "Integración con Salesforce y Bitrix24.",
        "Procesamiento asíncrono mediante Apache Kafka.",
        "Desarrollo backend con Java 17 y Spring Boot.",
      ],
      confidentialityNote:
        "El código y los detalles internos del proyecto no se publican por tratarse de una plataforma privada.",
    },
    {
      slug: "ai-powered-search",
      number: "MISSION 002",
      category: "EXPERIENCIA PROFESIONAL",
      title: "AI-Powered Search",
      subtitle:
        "Indexación y búsqueda de más de 10.000 registros de webinars con Meilisearch.",
      organization: "FAANG School",
      period: "Jun 2024 — May 2026",
      metric: "−70%",
      metricLabel: "tiempo de búsqueda",
      technologies: [
        "Meilisearch",
        "Java",
        "Search Indexing",
        "AI-powered search",
      ],
      overview:
        "Participé en el diseño de una solución de búsqueda basada en Meilisearch para indexar y consultar un gran conjunto de registros relacionados con webinars.",
      challengeTitle: "El reto",
      challenge:
        "Facilitar la localización de información dentro de más de 10.000 registros y reducir el tiempo necesario para encontrar resultados relevantes.",
      contributionTitle: "Mi contribución",
      contribution:
        "Contribuí al desarrollo de la solución de indexación y búsqueda basada en Meilisearch, dentro de una iniciativa de búsqueda asistida por IA.",
      resultTitle: "Resultado",
      result:
        "La solución redujo el tiempo de búsqueda en un 70% y permitió trabajar con más de 10.000 registros de webinars.",
      architectureTitle: "Flujo de búsqueda",
      architectureNote:
        "Esquema conceptual de indexación y consulta; no representa componentes internos no documentados.",
      architecture: [
        "Registros de webinars",
        "Indexación",
        "Meilisearch",
        "Resultados de búsqueda",
      ],
      highlightsTitle: "Puntos clave",
      highlights: [
        "Más de 10.000 registros indexados.",
        "Reducción del 70% en el tiempo de búsqueda.",
        "Uso de Meilisearch para indexación y consulta.",
        "Solución de búsqueda asistida por IA.",
      ],
      confidentialityNote:
        "La descripción se limita a las tecnologías y resultados que puedo compartir públicamente.",
    },
    {
      slug: "microservices-platform",
      number: "MISSION 003",
      category: "PROYECTO DE BOOTCAMP",
      title: "Microservices Platform",
      subtitle:
        "Desarrollo de tres microservicios dentro de una plataforma de diez servicios.",
      organization: "CorporationX / FAANG School",
      period: "May 2023 — Nov 2023",
      metric: "3 / 10",
      metricLabel: "microservicios en mi ámbito",
      technologies: [
        "Java",
        "Apache Kafka",
        "Redis",
        "Redis Pub/Sub",
        "REST APIs",
        "Microservices",
      ],
      overview:
        "Proyecto formativo de una plataforma para startups, inspirada en productos como YouTube, Tinder y Discord. La arquitectura estaba compuesta por diez microservicios; mi trabajo se centró en tres de ellos.",
      challengeTitle: "El reto",
      challenge:
        "Desarrollar funcionalidades backend independientes dentro de una plataforma distribuida, manteniendo responsabilidades separadas y comunicación entre servicios.",
      contributionTitle: "Mi contribución",
      contribution:
        "Trabajé en News Feed, URL Shortener y Payment/Account. También desarrollé un sistema de notificaciones en tiempo real con Redis Pub/Sub y utilicé Redis como caché para reducir la latencia del acortador de URLs.",
      resultTitle: "Resultado",
      result:
        "Experiencia práctica en el desarrollo de tres microservicios, comunicación asíncrona, caching y funcionalidades relacionadas con pagos y cuentas.",
      architectureTitle: "Ámbito de los servicios",
      architectureNote:
        "La vista muestra los servicios en los que trabajé dentro de la plataforma de diez microservicios.",
      architecture: ["News Feed", "URL Shortener", "Payment / Account"],
      highlightsTitle: "Puntos clave",
      highlights: [
        "Participación en tres microservicios de una plataforma de diez.",
        "Notificaciones en tiempo real con Redis Pub/Sub.",
        "Caché Redis para reducir la latencia del URL Shortener.",
        "Servicio Payment/Account con auditoría de balances y cambio multidivisa.",
      ],
      confidentialityNote:
        "Proyecto realizado en el contexto de un bootcamp formativo.",
    },
    {
      slug: "developer-workflow-automation",
      number: "MISSION 004",
      category: "AUTOMATIZACIÓN",
      title: "Developer Workflow Automation",
      subtitle:
        "Integraciones entre GitHub, Jira y Notion para automatizar procesos y recopilar métricas",
      organization: "FAANG School",
      period: "Jun 2024 — May 2026",
      metric: "300+",
      metricLabel: "estudiantes monitorizados",
      technologies: [
        "GitHub Webhooks",
        "Jira",
        "Notion",
        "REST APIs",
        "Automation",
      ],
      overview:
        "Desarrollé y mantuve automatizaciones e integraciones para reducir tareas manuales y mejorar la visibilidad de la actividad de desarrollo en la plataforma educativa.",
      challengeTitle: "El reto",
      challenge:
        "Centralizar información de actividad de repositorios, facilitar el seguimiento del progreso y simplificar el onboarding y la gestión de accesos.",
      contributionTitle: "Mi contribución",
      contribution:
        "Configuré más de diez webhooks de GitHub, diseñé pipelines analíticos en Jira y automaticé la sincronización entre Notion y GitHub para gestionar invitaciones y accesos a repositorios.",
      resultTitle: "Resultado",
      result:
        "Se automatizaron tareas de onboarding y seguimiento de actividad para una plataforma con más de 300 estudiantes.",
      architectureTitle: "Flujo de automatización",
      architectureNote:
        "Vista de alto nivel de las integraciones y automatizaciones descritas.",
      architecture: [
        "GitHub Webhooks",
        "Jira Analytics",
        "Notion ↔ GitHub",
        "Métricas y accesos",
      ],
      highlightsTitle: "Puntos clave",
      highlights: [
        "Configuración de 10+ webhooks de GitHub.",
        "Seguimiento de actividad de más de 300 estudiantes.",
        "Pipelines analíticos y generación de métricas en Jira.",
        "Sincronización de invitaciones y permisos entre Notion y GitHub.",
      ],
      confidentialityNote:
        "Los ejemplos se describen a nivel funcional; no se incluyen datos privados de estudiantes ni configuración interna.",
    },
  ],
  en: [
    {
      slug: "crm-event-processing",
      number: "MISSION 001",
      category: "PROFESSIONAL EXPERIENCE",
      title: "CRM Event Processing",
      subtitle:
        "Asynchronous processing of Salesforce and Bitrix24 events using Apache Kafka.",
      organization: "FAANG School",
      period: "Jun 2024 — May 2026",
      metric: "700+",
      metricLabel: "CRM events per week",
      technologies: [
        "Java 17",
        "Spring Boot",
        "Apache Kafka",
        "Salesforce",
        "Bitrix24",
        "REST APIs",
      ],
      overview:
        "I contributed to a backend flow that automated the processing of events from CRM platforms. The solution used Apache Kafka to handle event-driven communication asynchronously.",
      challengeTitle: "The challenge",
      challenge:
        "Integrate events from Salesforce and Bitrix24 into platform workflows and reduce manual intervention in their processing.",
      contributionTitle: "My contribution",
      contribution:
        "I worked on the backend event-processing flow using Java, Spring Boot and Apache Kafka as part of an event-driven architecture.",
      resultTitle: "The result",
      result:
        "The automated flow handled more than 700 weekly CRM events from Salesforce and Bitrix24 asynchronously.",
      architectureTitle: "Integration flow",
      architectureNote:
        "A simplified view of the functional flow; internal implementation details are intentionally omitted.",
      architecture: [
        "Salesforce / Bitrix24",
        "Apache Kafka",
        "Backend processing",
        "Platform workflows",
      ],
      highlightsTitle: "Highlights",
      highlights: [
        "More than 700 CRM events processed weekly.",
        "Integrations with Salesforce and Bitrix24.",
        "Asynchronous processing using Apache Kafka.",
        "Backend development with Java 17 and Spring Boot.",
      ],
      confidentialityNote:
        "The code and internal project details are not published because the platform is private.",
    },
    {
      slug: "ai-powered-search",
      number: "MISSION 002",
      category: "PROFESSIONAL EXPERIENCE",
      title: "AI-Powered Search",
      subtitle:
        "Indexing and searching more than 10,000 webinar records with Meilisearch.",
      organization: "FAANG School",
      period: "Jun 2024 — May 2026",
      metric: "−70%",
      metricLabel: "search time",
      technologies: [
        "Meilisearch",
        "Java",
        "Search Indexing",
        "AI-powered search",
      ],
      overview:
        "I contributed to the design of a Meilisearch-based solution to index and query a large collection of webinar-related records.",
      challengeTitle: "The challenge",
      challenge:
        "Make information easier to find across more than 10,000 records and reduce the time needed to retrieve relevant results.",
      contributionTitle: "My contribution",
      contribution:
        "I contributed to the indexing and search solution built around Meilisearch as part of an AI-powered search initiative.",
      resultTitle: "The result",
      result:
        "The solution reduced search time by 70% and supported more than 10,000 webinar records.",
      architectureTitle: "Search flow",
      architectureNote:
        "A conceptual indexing and query flow; it does not describe undocumented internal components.",
      architecture: [
        "Webinar records",
        "Indexing",
        "Meilisearch",
        "Search results",
      ],
      highlightsTitle: "Highlights",
      highlights: [
        "More than 10,000 records indexed.",
        "70% reduction in search time.",
        "Meilisearch for indexing and querying.",
        "AI-powered search solution.",
      ],
      confidentialityNote:
        "This description is limited to technologies and outcomes that can be shared publicly.",
    },
    {
      slug: "microservices-platform",
      number: "MISSION 003",
      category: "BOOTCAMP PROJECT",
      title: "Microservices Platform",
      subtitle:
        "Development of three microservices within a ten-service platform.",
      organization: "CorporationX / FAANG School",
      period: "May 2023 — Nov 2023",
      metric: "3 / 10",
      metricLabel: "microservices in my scope",
      technologies: [
        "Java",
        "Apache Kafka",
        "Redis",
        "Redis Pub/Sub",
        "REST APIs",
        "Microservices",
      ],
      overview:
        "A training project for a startup platform inspired by products such as YouTube, Tinder and Discord. The architecture consisted of ten microservices; my work focused on three of them.",
      challengeTitle: "The challenge",
      challenge:
        "Build independent backend features within a distributed platform while keeping responsibilities separated and enabling service communication.",
      contributionTitle: "My contribution",
      contribution:
        "I worked on News Feed, URL Shortener and Payment/Account. I also built a real-time notification system with Redis Pub/Sub and used Redis caching to reduce URL Shortener latency.",
      resultTitle: "The result",
      result:
        "Hands-on experience developing three microservices, asynchronous communication, caching and payment/account-related features.",
      architectureTitle: "Services in scope",
      architectureNote:
        "The diagram shows the services I worked on within the ten-microservice platform.",
      architecture: ["News Feed", "URL Shortener", "Payment / Account"],
      highlightsTitle: "Highlights",
      highlights: [
        "Worked on three microservices in a ten-service platform.",
        "Real-time notifications with Redis Pub/Sub.",
        "Redis caching to reduce URL Shortener latency.",
        "Payment/Account service with balance auditing and multi-currency exchange.",
      ],
      confidentialityNote:
        "This project was completed as part of a training bootcamp.",
    },
    {
      slug: "developer-workflow-automation",
      number: "MISSION 004",
      category: "AUTOMATION",
      title: "Developer Workflow Automation",
      subtitle:
        "GitHub, Jira and Notion integrations to automate workflows and collect metrics",
      organization: "FAANG School",
      period: "Jun 2024 — May 2026",
      metric: "300+",
      metricLabel: "students monitored",
      technologies: [
        "GitHub Webhooks",
        "Jira",
        "Notion",
        "REST APIs",
        "Automation",
      ],
      overview:
        "I developed and maintained automations and integrations to reduce manual tasks and improve visibility into development activity across the educational platform.",
      challengeTitle: "The challenge",
      challenge:
        "Bring repository activity data together, make progress tracking easier and simplify onboarding and access management.",
      contributionTitle: "My contribution",
      contribution:
        "I configured more than ten GitHub webhooks, designed Jira analytics pipelines and automated Notion–GitHub synchronization for repository invitations and access.",
      resultTitle: "The result",
      result:
        "Onboarding and activity-tracking workflows were automated for a platform serving more than 300 students.",
      architectureTitle: "Automation flow",
      architectureNote:
        "A high-level view of the integrations and workflows described above.",
      architecture: [
        "GitHub Webhooks",
        "Jira Analytics",
        "Notion ↔ GitHub",
        "Metrics & access",
      ],
      highlightsTitle: "Highlights",
      highlights: [
        "Configured 10+ GitHub webhooks.",
        "Monitored development activity for 300+ students.",
        "Jira analytics pipelines and metric generation.",
        "Automated repository invitations and access synchronization between Notion and GitHub.",
      ],
      confidentialityNote:
        "Examples are described at a functional level; no private student data or internal configuration is included.",
    },
  ],
};

export function getProjectCaseStudy(
  language: PortfolioLanguage,
  slug: string,
): ProjectCaseStudy | undefined {
  return caseStudies[language].find((project) => project.slug === slug);
}

export function getProjectDirectory(
  language: PortfolioLanguage,
): Pick<ProjectCaseStudy, "slug" | "number" | "title">[] {
  return caseStudies[language].map(({ slug, number, title }) => ({
    slug,
    number,
    title,
  }));
}
