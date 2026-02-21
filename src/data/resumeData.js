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
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialUrl: "https://example.com",
    },
    {
      id: 2,
      name: "Java Programming Specialization",
      issuer: "Coursera",
      date: "2023",
      credentialUrl: "https://example.com",
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      credentialUrl: "https://example.com",
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
