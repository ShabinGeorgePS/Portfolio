export const projects = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A full-stack application to manage personal expenses with CRUD operations, monthly reports, budget alerts, and charts.",
    fullDescription:
      "A comprehensive expense tracking application with CRUD operations, monthly financial reports, smart budget alerts, and data visualization with Chart.js. Users can categorize expenses, set budgets, and analyze spending patterns.",
    tech: ["React", "Spring Boot", "MySQL", "REST API", "Chart.js"],
    category: "fullstack",
    features: [
      "Add, edit, delete expenses",
      "Monthly expense reports",
      "Budget management and alerts",
      "Data visualization with charts",
      "Expense categorization",
    ],
    github: "https://github.com/dharshan-krishnan/expense-tracker",
    demo: "https://expense-tracker-wine-tau.vercel.app/",
    image: "/assets/expense-tracker.png", // USER NOTE: Please place your attached image in public/assets/expense-tracker.png
    imageAlt: "Expense Tracker Application",
    startDate: "2023-06",
    endDate: "2023-08",
    featured: true,
  },
  {
    id: "inquiry-portal",
    title: "Inquiry Portal (REST API)",
    description:
      "A smart student inquiry and response portal with automated replies, virtual counselling, and issue tracking.",
    fullDescription:
      "A comprehensive student inquiry management system featuring automated response capabilities, virtual counselling support, and complete issue tracking. The system helps educational institutions manage student inquiries efficiently.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    category: "backend",
    features: [
      "Student inquiry management",
      "Automated response system",
      "Virtual counselling module",
      "Issue tracking and resolution",
      "Admin dashboard",
    ],
    github: "https://github.com/ShabinGeorgePS/inquiry-portal",
    demo: "#",
    image: "https://via.placeholder.com/600x350?text=Inquiry+Portal",
    imageAlt: "Inquiry Portal System",
    startDate: "2023-04",
    endDate: "2023-07",
    featured: true,
  },
  {
    id: "voting-system",
    title: "Online Voting System",
    description:
      "A secure voting platform supporting poll creation, voting, results visualization, and duplicate vote prevention.",
    fullDescription:
      "A secure and reliable online voting system with complete poll management, real-time results visualization, and advanced security features to prevent duplicate votes and ensure data integrity.",
    tech: ["React", "Spring Boot", "MySQL", "REST API"],
    category: "fullstack",
    features: [
      "Secure poll creation",
      "Real-time voting",
      "Results visualization",
      "Duplicate vote prevention",
      "Access control and authentication",
    ],
    github: "https://github.com/ShabinGeorgePS/online-voting-system",
    demo: "#",
    image: "https://via.placeholder.com/600x350?text=Voting+System",
    imageAlt: "Online Voting System",
    startDate: "2023-05",
    endDate: "2023-09",
    featured: true,
  },
];
