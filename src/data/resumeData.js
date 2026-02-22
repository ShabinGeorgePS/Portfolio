/**
 * Resume/CV Data for display in modal viewer
 */

export const resumeData = {
  name: "Shabin George",
  title: "Full Stack Developer & Cloud Enthusiast",
  email: "shabin.george@example.com", // Update with your email
  phone: "+91 9876543210", // Update with your phone
  location: "India",
  summary:
    "Passionate Computer Science Engineering student with hands-on experience in full-stack web development, Java, Spring Boot, and cloud technologies. Proficient in building scalable applications and exploring ML and cybersecurity domains.",

  experience: [
    {
      id: 1,
      company: "Tech Company Name",
      role: "Full Stack Developer Intern",
      period: "Jun 2023 - Aug 2023",
      description:
        "Developed and maintained web applications using React and Spring Boot, implemented REST APIs, and contributed to database optimization.",
      highlights: [
        "Built responsive web interfaces using React and Tailwind CSS",
        "Developed REST APIs with Spring Boot and Java",
        "Optimized database queries improving performance by 40%",
        "Collaborated with cross-functional teams using Git and Agile methodology",
      ],
    },
    {
      id: 2,
      company: "Freelance Projects",
      role: "Full Stack Developer",
      period: "Jan 2023 - Present",
      description:
        "Designed and developed multiple web applications for clients, focusing on clean code and user experience.",
      highlights: [
        "Created 5+ full-stack applications from zero to production",
        "Implemented authentication and authorization systems",
        "Deployed applications on cloud platforms (AWS, Vercel)",
        "Maintained 95% code quality standards",
      ],
    },
  ],

  education: [
    {
      id: 1,
      school: "Sri Krishna College of Technology",
      degree: "B.Tech in Computer Science Engineering",
      period: "2022 - 2026",
      gpa: "8.2/10",
      description: "Currently in 3rd year, focusing on software development and cloud technologies.",
      highlights: [
        "Active member of coding club",
        "Participated in multiple hackathons",
        "Core subject expertise: DSA, Database Systems, Web Development",
      ],
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "GSAP"],
    },
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "REST APIs", "Node.js", "Express", "Python"],
    },
    {
      category: "Database",
      items: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Docker", "AWS", "Vercel", "Git", "CI/CD"],
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "VS Code", "Postman", "Docker", "Linux", "AWS CLI"],
    },
  ],

  certifications: [
    {
      id: 1,
      name: "Introduction to Penetration Testing",
      issuer: "Security Blue Team",
      date: "June 15, 2025",
      credentialId: "117131979",
      description: "Gained foundational understanding of ethical hacking, including assessment types, scopes, and core objectives.",
      credentialUrl: "",
    },
    {
      id: 2,
      name: "Computer Networks and Network Security",
      issuer: "IBM (Coursera)",
      date: "January 2, 2025",
      description: "Covered networking fundamentals, security concepts, protocols, threat prevention, and IBM cybersecurity practices.",
      credentialUrl: "https://coursera.org/verify/QP4KEQAH4WYT",
    },
    {
      id: 3,
      name: "Linux: File Management for DevOps",
      issuer: "Coursera Project Network",
      date: "May 20, 2024",
      description: "Hands-on project focused on Linux file system navigation, permissions, directory operations, and DevOps-oriented command-line workflows.",
      credentialUrl: "https://coursera.org/verify/MPAAXVWCS3QE",
    },
    
    
  ],

  projects: [
    {
      id: 1,
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with product catalog, shopping cart, and payment integration.",
      tech: ["React", "Spring Boot", "MySQL", "Stripe API"],
      link: "https://github.com/shabin-george/ecommerce",
    },
    {
      id: 2,
      name: "Real-time Chat Application",
      description:
        "WebSocket-based chat application with user authentication and message history.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com/shabin-george/chat-app",
    },
    {
      id: 3,
      name: "AI Task Manager",
      description: "Task management application with AI-powered task suggestions and categorization.",
      tech: ["React", "Python", "Flask", "PostgreSQL"],
      link: "https://github.com/shabin-george/ai-task-manager",
    },
  ],

  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Malayalam", proficiency: "Native" },
    { name: "Hindi", proficiency: "Intermediate" },
  ],

  socialLinks: [
    { platform: "GitHub", url: "https://github.com/shabin-george" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/shabin-george" },
    { platform: "Twitter", url: "https://twitter.com/shabin_george" },
    { platform: "Portfolio", url: "https://shabin-portfolio.vercel.app" },
  ],
};

export default resumeData;
