import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiShadcnui } from "react-icons/si";
// -------------backend
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiTypeorm } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
// --------------deployment
import { SiHeroku } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiRender } from "react-icons/si";

export const frontendTechnologies = [
  { id: 1, text: "HTML5", Icon: TiHtml5 },
  { id: 2, text: "CSS3", Icon: FaCss3Alt },
  { id: 3, text: "JavaScript (ES6+)", Icon: SiJavascript },
  { id: 4, text: "TypeScript", Icon: BiLogoTypescript },
  { id: 5, text: "React", Icon: FaReact },
  { id: 6, text: "Next", Icon: RiNextjsFill },
  { id: 7, text: "Tailwind", Icon: TbBrandTailwind },
  { id: 8, text: "Socket.io-Client", Icon: TbBrandSocketIo },
  { id: 9, text: "MUI", Icon: "MUI" },
  { id: 9, text: "Shad UI", Icon: SiShadcnui },
];

export const backendTechnologies = [
  { id: 1, text: "Node.js", Icon: FaNodeJs },
  { id: 2, text: "Express.js", Icon: SiExpress },
  { id: 3, text: "Socket.io", Icon: TbBrandSocketIo },
  { id: 4, text: "MongoDB", Icon: SiMongodb },
  { id: 5, text: "PostgreSQL", Icon: BiLogoPostgresql },
  { id: 6, text: "Prisma", Icon: SiPrisma },
  { id: 7, text: "TypeScript", Icon: BiLogoTypescript },
  { id: 8, text: "JWT (for authentication)", Icon: `JWT` },
  { id: 9, text: "Type ORM", Icon: SiTypeorm },
  { id: 10, text: "Django", Icon: SiDjango },
  { id: 11, text: "Python", Icon: FaPython },
  { id: 12, text: "SQLite", Icon: SiSqlite },
];

export const deploymentTechnologies = [
  { id: 1, text: "Heroku", Icon: SiHeroku },
  { id: 2, text: "Netlify", Icon: `FaGitAlt` },
  { id: 3, text: "Vercel", Icon: SiVercel },
  { id: 4, text: "Render", Icon: SiRender },
];
