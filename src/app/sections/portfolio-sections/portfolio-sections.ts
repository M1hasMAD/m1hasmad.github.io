import { Component, computed, inject, signal } from "@angular/core";
import { PortfolioUiService } from "../../core/services/portfolio-ui.service";
import { getPortfolioContent } from "../../core/services/portfolio-content";
import { ProjectNavigationService } from "../../core/services/project-navigation.service";

interface SkillVisual {
  mark: string;
  icon?: string;
}

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SKILL_VISUALS: Record<string, SkillVisual> = {
  "REST APIs": {
    mark: "API",
    icon: "images/brands/rest-api.svg",
  },
  GraphQL: { mark: "GQL", icon: `${DEVICON}/graphql/graphql-plain.svg` },
  gRPC: {
    mark: "RPC",
    icon: "images/brands/custom/grpc.svg",
  },
  "Swagger / OpenAPI": {
    mark: "API",
    icon: `${DEVICON}/swagger/swagger-original.svg`,
  },
  Postman: { mark: "P", icon: `${DEVICON}/postman/postman-original.svg` },
  JavaScript: {
    mark: "JS",
    icon: `${DEVICON}/javascript/javascript-original.svg`,
  },
  TypeScript: {
    mark: "TS",
    icon: `${DEVICON}/typescript/typescript-original.svg`,
  },
  React: { mark: "R", icon: `${DEVICON}/react/react-original.svg` },
  Angular: { mark: "A", icon: `${DEVICON}/angular/angular-original.svg` },
  HTML5: { mark: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
  CSS3: { mark: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
  Bootstrap: { mark: "B", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
  "Java 17": { mark: "J", icon: `${DEVICON}/java/java-original.svg` },
  "Spring Boot": { mark: "S", icon: `${DEVICON}/spring/spring-original.svg` },
  "Spring MVC": { mark: "S", icon: `${DEVICON}/spring/spring-original.svg` },
  "Spring Data JPA": {
    mark: "JPA",
    icon: `${DEVICON}/spring/spring-original.svg`,
  },
  "Spring Security": {
    mark: "SEC",
    icon: `${DEVICON}/spring/spring-original.svg`,
  },
  "Spring Batch": { mark: "B", icon: `${DEVICON}/spring/spring-original.svg` },
  Hibernate: { mark: "H", icon: `${DEVICON}/hibernate/hibernate-original.svg` },
  JDBC: { mark: "J", icon: `${DEVICON}/java/java-original.svg` },
  Liquibase: {
    mark: "LB",
    icon: "images/brands/custom/liquibase.svg",
  },
  Lombok: {
    mark: "L",
    icon: "images/brands/custom/lombok.svg",
  },
  "Apache Log4j": {
    mark: "LOG",
    icon: "images/brands/custom/apache-log4j.svg",
  },
  "C#": { mark: "C#", icon: `${DEVICON}/csharp/csharp-original.svg` },
  ".NET Core": {
    mark: ".N",
    icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
  },
  ".NET Framework": {
    mark: ".N",
    icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
  },
  "ASP.NET Core Web API": {
    mark: "API",
    icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
  },
  "Entity Framework Core": {
    mark: "EF",
    icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
  },
  LINQ: {
    mark: "LQ",
    icon: "images/brands/custom/linq.svg",
  },
  AutoMapper: {
    mark: "AM",
    icon: "images/brands/custom/automapper.svg",
  },
  "Node.js": { mark: "N", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  Python: { mark: "Py", icon: `${DEVICON}/python/python-original.svg` },
  Kotlin: { mark: "K", icon: `${DEVICON}/kotlin/kotlin-original.svg` },
  "Apache Kafka": {
    mark: "K",
    icon: `${DEVICON}/apachekafka/apachekafka-original.svg`,
  },
  RabbitMQ: { mark: "RMQ", icon: `${DEVICON}/rabbitmq/rabbitmq-original.svg` },
  "Redis Pub/Sub": { mark: "R", icon: `${DEVICON}/redis/redis-original.svg` },
  Microservices: {
    mark: "MS",
    icon: "images/brands/custom/microservices.svg",
  },
  "Event-Driven Architecture": {
    mark: "EDA",
    icon: "images/brands/custom/event-driven-architecture.svg",
  },
  PostgreSQL: {
    mark: "PG",
    icon: `${DEVICON}/postgresql/postgresql-original.svg`,
  },
  MySQL: { mark: "MY", icon: `${DEVICON}/mysql/mysql-original.svg` },
  "Oracle SQL": { mark: "ORA", icon: `${DEVICON}/oracle/oracle-original.svg` },
  "Azure SQL": { mark: "AZ", icon: `${DEVICON}/azure/azure-original.svg` },
  MongoDB: { mark: "MDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
  Redis: { mark: "R", icon: `${DEVICON}/redis/redis-original.svg` },
  "AWS S3": {
    mark: "S3",
    icon: `${DEVICON}/amazonwebservices/amazonwebservices-original.svg`,
  },
  JUnit: { mark: "J5", icon: `${DEVICON}/junit/junit-original.svg` },
  Mockito: {
    mark: "M",
    icon: "images/brands/custom/mockito.svg",
  },
  xUnit: {
    mark: "xU",
    icon: "images/brands/custom/xunit.svg",
  },
  "TDD / BDD": {
    mark: "TDD",
    icon: "images/brands/custom/tdd-bdd.svg",
  },
  Docker: { mark: "D", icon: `${DEVICON}/docker/docker-original.svg` },
  Kubernetes: {
    mark: "K8s",
    icon: `${DEVICON}/kubernetes/kubernetes-plain.svg`,
  },
  AWS: {
    mark: "AWS",
    icon: `${DEVICON}/amazonwebservices/amazonwebservices-original.svg`,
  },
  Jenkins: { mark: "J", icon: `${DEVICON}/jenkins/jenkins-original.svg` },
  "GitHub Actions": {
    mark: "GH",
    icon: `${DEVICON}/githubactions/githubactions-original.svg`,
  },
  "GitLab CI": { mark: "GL", icon: `${DEVICON}/gitlab/gitlab-original.svg` },
  "CI/CD": {
    mark: "CI",
    icon: `${DEVICON}/githubactions/githubactions-original.svg`,
  },
  Git: { mark: "G", icon: `${DEVICON}/git/git-original.svg` },
  GitHub: { mark: "GH", icon: `${DEVICON}/github/github-original.svg` },
  GitLab: { mark: "GL", icon: `${DEVICON}/gitlab/gitlab-original.svg` },
  Maven: { mark: "M", icon: `${DEVICON}/maven/maven-original.svg` },
  Gradle: { mark: "G", icon: `${DEVICON}/gradle/gradle-original.svg` },
  "IntelliJ IDEA": {
    mark: "IJ",
    icon: `${DEVICON}/intellij/intellij-original.svg`,
  },
  Eclipse: { mark: "E", icon: `${DEVICON}/eclipse/eclipse-original.svg` },
  Jira: { mark: "J", icon: `${DEVICON}/jira/jira-original.svg` },
  Notion: {
    mark: "N",
    icon: `${DEVICON}/notion/notion-original.svg`,
  },

  ChatGPT: {
    mark: "AI",
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/icons/openai.svg",
  },

  Claude: {
    mark: "CL",
    icon: `${DEVICON}/claude/claude-original.svg`,
  },

  Cursor: {
    mark: "CU",
    icon: `${DEVICON}/cursor/cursor-original.svg`,
  },
  "GitHub Copilot": {
    mark: "GH",
    icon: `${DEVICON}/github/github-original.svg`,
  },
};

@Component({
  selector: "ml-portfolio-sections",
  standalone: true,
  templateUrl: "./portfolio-sections.html",
  styleUrl: "./portfolio-sections.scss",
})
export class PortfolioSectionsComponent {
  readonly ui = inject(PortfolioUiService);
  readonly copy = computed(() => getPortfolioContent(this.ui.language()));
  readonly projectNavigation = inject(ProjectNavigationService);
  readonly cvPath = computed(() =>
    this.ui.language() === "es" ? "cv/cv-es.pdf" : "cv/cv-en.pdf",
  );
  readonly cvFilename = computed(() =>
    this.ui.language() === "es"
      ? "Mikhail-Luchkin-CV-ES.pdf"
      : "Mikhail-Luchkin-CV-EN.pdf",
  );

  skillVisual(name: string): SkillVisual {
    return SKILL_VISUALS[name] ?? { mark: name.slice(0, 3).toUpperCase() };
  }

  onSkillIconError(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.hidden = true;
    const fallback = image.previousElementSibling as HTMLElement | null;
    if (fallback) fallback.hidden = false;
  }
  readonly emailCopied = signal(false);

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText("m.lchkn.dev@gmail.com");
      this.emailCopied.set(true);
      window.setTimeout(() => this.emailCopied.set(false), 1800);
    } catch {
      this.emailCopied.set(false);
    }
  }

  openProject(event: MouseEvent, slug: string): void {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    this.projectNavigation.openProject(slug);
  }
}
