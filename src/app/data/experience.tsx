import ExperienceHighlight from "../sections/Atoms/ExperienceHighlight";

export const experienceData = [
  {
    title: "Frontend Engineer", // [cite: 15]
    company: "TCOG", // [cite: 15]
    location: "Lagos, Nigeria (Remote)", // [cite: 2, 15]
    startDate: "Aug 2025", // [cite: 15]
    endDate: "Present", // [cite: 15]
    description: "Contract Role", // [cite: 15]
    achievements: [
      <li>
        Spearheaded the design and implementation of a scalable Atomic Component
        Architecture in <ExperienceHighlight value="React" /> and{" "}
        <ExperienceHighlight value="TypeScript" />, directly resulting in a 20%
        reduction in development cycle time.
      </li>, // [cite: 16]
      <li>
        Optimized data retrieval pipelines by integrating highly efficient{" "}
        <ExperienceHighlight value="RESTful APIs" />, yielding measurable gains
        in application responsiveness and reducing user-facing latency.
      </li>, // [cite: 17]
      <li>
        Mandated and implemented the <ExperienceHighlight value="Git Flow" />{" "}
        branching strategy, significantly improving team collaboration and
        minimizing merge conflicts across development cycles.
      </li>, // [cite: 19]
    ],
  },
  {
    title: "Software Engineer", // [cite: 20]
    company: "Contigo", // [cite: 20]
    location: "Lagos, Nigeria (Remote)", // [cite: 2, 20]
    startDate: "July 2025", // [cite: 20]
    endDate: "Sept 2025", // [cite: 20]
    description: "Contract Role", // [cite: 20]
    achievements: [
      <li>
        Drove more than 85% increase in site visibility by strategically
        configuring and optimizing{" "}
        <ExperienceHighlight value="Google Analytics" /> and Google Search
        Console for improved <ExperienceHighlight value="SEO" />.
      </li>, // [cite: 21]
      <li>
        Developed automation scripts for{" "}
        <ExperienceHighlight value="AI-driven" /> page generation and sitemap
        creation, streamlining SEO workflows and boosting accurate search engine
        indexing.
      </li>, // [cite: 22]
      <li>
        Configured and owned the production deployment environment, ensuring
        application scalability and high uptime through an optimized{" "}
        <ExperienceHighlight value="hosting setup" />.
      </li>, // [cite: 23]
    ],
  },
  {
    title: "Backend Engineer", //
    company: "Pristine", //
    location: "Lagos, Nigeria (Remote)", // [cite: 2, 24]
    startDate: "Oct 2023", //  (Corrected from typo 2024-2024 based on reverse chronology)
    endDate: "Feb 2024", //
    description: "Contract Role", //
    achievements: [
      <li>
        Architected and delivered highly scalable backend microservices using{" "}
        <ExperienceHighlight value="Nest.js" /> and{" "}
        <ExperienceHighlight value="TypeScript" />, establishing a standard for
        cleaner, maintainable code.
      </li>, // [cite: 25]
      <li>
        Drove the strategic adoption of <ExperienceHighlight value="GraphQL" />{" "}
        APIs, achieving an 80% improvement in data retrieval efficiency compared
        to legacy REST endpoints.
      </li>, // [cite: 26]
      <li>
        Owned the CI/CD pipeline on <ExperienceHighlight value="AWS EC2" /> and
        containerized applications with <ExperienceHighlight value="Docker" />,
        implementing automated, secure deployment processes with Nginx.
      </li>, // [cite: 27, 28]
    ],
  },
];
