import aiStudySummarizerImage from "../assets/ai-study-summarizer.png";
import expenseImage from "../assets/expense.png";
import inquiryImage from "../assets/student.png";
import votingImage from "../assets/voting.png";
export const projects = [
  {
    id: "ai-study-summarizer",
    title: "AI Study Summarizer",
    description:
      "An AI-powered study tool that summarizes documents, generates flashcards, and creates practice MCQs from PDFs, DOCX, URLs, and more.",
    fullDescription:
      "A full-stack AI-powered study summarizer that supports multi-format document uploads (PDF, DOCX, PPTX, TXT, images with OCR) and web URLs. It leverages Google Gemini AI to generate concise summaries, smart flashcards for active recall, and practice MCQs with detailed explanations. Features secure JWT authentication, a modern dark neon UI, and responsive design.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Gemini AI"],
    category: "fullstack",
    features: [
      "Multi-format document upload (PDF, DOCX, PPTX, images)",
      "AI-powered smart summaries",
      "Auto-generated flashcards for active recall",
      "Practice MCQs with explanations",
      "Web URL content summarization",
      "JWT-based secure authentication",
    ],
    github: "https://github.com/ShabinGeorgePS/ai-study-summarizer.git",
    demo: "https://ai-study-summarizer-five.vercel.app/",
    image: aiStudySummarizerImage,
    imageAlt: "AI Study Summarizer Application",
    startDate: "2025-02",
    endDate: "2025-03",
    featured: true,
  },
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
    image: expenseImage,
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
    github: "https://github.com/ShabinGeorgePS/Student_inquiry_portal.git",
    demo: "#",
    image: inquiryImage,
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
    github: "https://github.com/ShabinGeorgePS/Online-voting-system.git",
    demo: "#",
    image: votingImage,
    imageAlt: "Online Voting System",
    startDate: "2023-05",
    endDate: "2023-09",
    featured: true,
  },
];
