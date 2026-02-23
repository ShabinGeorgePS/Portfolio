import { FaReact, FaGithub, FaAws, FaPython, FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiMongodb,
  SiVercel,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGit,
  SiLinux,
} from "react-icons/si";

export const skills = [
  { name: "Spring Boot", icon: SiSpringboot, category: "backend", level: 90 },
  { name: "React.js", icon: FaReact, category: "frontend", level: 85 },
  { name: "Java", icon: FaJava, category: "languages", level: 92 },
  { name: "JavaScript", icon: SiJavascript, category: "languages", level: 85 },
  { name: "HTML5", icon: SiHtml5, category: "frontend", level: 90 },
  { name: "CSS3", icon: SiCss3, category: "frontend", level: 88 },
  { name: "MySQL", icon: SiMysql, category: "database", level: 85 },
  { name: "MongoDB", icon: SiMongodb, category: "database", level: 80 },
  { name: "REST API", icon: SiPostman, category: "backend", level: 88 },
  { name: "GitHub", icon: FaGithub, category: "tools", level: 88 },
  { name: "Docker", icon: SiDocker, category: "devops", level: 75 },
  { name: "Linux", icon: SiLinux, category: "tools", level: 80 },
  { name: "Vercel", icon: SiVercel, category: "devops", level: 85 },
  { name: "AWS (Basics)", icon: FaAws, category: "devops", level: 65 },
];

// Get skills grouped by category
export const getSkillsByCategory = () => {
  return {
    languages: skills.filter((s) => s.category === "languages"),
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    database: skills.filter((s) => s.category === "database"),
    tools: skills.filter((s) => s.category === "tools"),
    devops: skills.filter((s) => s.category === "devops"),
  };
};

// Get all skill categories
export const skillCategories = [
  { id: "languages", name: "Languages", color: "from-blue-600 to-blue-400" },
  { id: "frontend", name: "Frontend", color: "from-green-600 to-green-400" },
  { id: "backend", name: "Backend", color: "from-purple-600 to-purple-400" },
  { id: "database", name: "Database", color: "from-orange-600 to-orange-400" },
  { id: "tools", name: "Tools", color: "from-cyan-600 to-cyan-400" },
  { id: "devops", name: "DevOps", color: "from-red-600 to-red-400" },
];
