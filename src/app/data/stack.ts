export type StackCategory =
  | "BACKEND"
  | "FRONTEND"
  | "DEVOPS"
  | "VERSION CONTROL"
  | "AUTOMATION";

export interface StackItem {
  title: string;
  description: string;
  category: StackCategory;
  tags: string[];
}

export const Stacks: StackItem[] = [
  {
    title: "NestJS",
    description:
      "Architecting scalable, modular microservices with robust server-side logic and TypeScript efficiency.",
    category: "BACKEND",
    tags: ["CURRENT FOCUS"],
  },
  {
    title: "React",
    description:
      "Building performant, component-driven UIs with complex state management and seamless user experiences.",
    category: "FRONTEND",
    tags: ["ACTIVE"],
  },
  {
    title: "PostgreSQL",
    description:
      "Advanced schema design and performance tuning for high-concurrency data storage and relational integrity.",
    category: "BACKEND",
    tags: ["CORE"],
  },
  {
    title: "AWS",
    description:
      "Designing resilient cloud infrastructure with automated CI/CD pipelines and high availability serverless patterns.",
    category: "DEVOPS",
    tags: ["ACTIVE", "CLOUD"],
  },
  {
    title: "TypeScript",
    description:
      "Developing type-safe, maintainable codebases with advanced patterns for enterprise-scale applications.",
    category: "BACKEND",
    tags: ["CORE"],
  },
  {
    title: "Node.js",
    description:
      "High-performance server-side development leveraging asynchronous patterns and extensive ecosystem.",
    category: "BACKEND",
    tags: ["CORE"],
  },
  {
    title: "GraphQL",
    description:
      "Designing efficient, strongly-typed APIs that optimize data retrieval and improve developer experience.",
    category: "BACKEND",
    tags: ["API"],
  },
  {
    title: "Docker",
    description:
      "Containerizing applications to ensure consistent environments and streamlined deployment workflows.",
    category: "DEVOPS",
    tags: ["INFRA"],
  },
  {
    title: "Python",
    description:
      "Developing high-performance, scalable applications with a focus on backend development.",
    category: "BACKEND",
    tags: ["CORE"],
  },
  {
    title: "RabbitMQ",
    description:
      "Architecting scalable, modular microservices with robust server-side logic and TypeScript efficiency.",
    category: "BACKEND",
    tags: ["CORE"],
  },
  {
    title: "Redis",
    description:
      "Architecting scalable, modular microservices with robust server-side logic and TypeScript efficiency.",
    category: "BACKEND",
    tags: ["CURRENT FOCUS"],
  },
  {
    title: "Kubernetes",
    description:
      "Architecting scalable, modular microservices with robust server-side logic and TypeScript efficiency.",
    category: "DEVOPS",
    tags: ["CURRENT FOCUS"],
  },
  {
    title: "Tailwind CSS",
    description:
      "Crafting modern, responsive designs with utility-first CSS for rapid and consistent UI development.",
    category: "FRONTEND",
    tags: ["DESIGN"],
  },
  {
    title: "MongoDB",
    description:
      "Managing flexible, document-oriented data structures for high-velocity application requirements.",
    category: "BACKEND",
    tags: ["DATABASE"],
  },
  {
    title: "N8N",
    description:
      "Automating workflows and integrating systems with a powerful, open-source automation platform.",
    category: "AUTOMATION",
    tags: ["CURRENT FOCUS"],
  },
  {
    title: "Git",
    description:
      "Version control system for tracking changes in source code during software development.",
    category: "VERSION CONTROL",
    tags: ["CORE"],
  },
  {
    title: "GitHub",
    description:
      "Web-based platform for version control and collaboration using Git.",
    category: "VERSION CONTROL",
    tags: ["CORE"],
  },
];
