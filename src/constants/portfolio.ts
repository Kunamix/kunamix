import erpPage from "@/assets/portfolio/1.webp";
import empPage from "@/assets/portfolio/2.webp";
import quizApp from "@/assets/portfolio/3.webp"

export const portfolioData = {
  portfolioIntro: {
    title: "Our Work",
    subtitle: "Showcasing our latest projects and successful deliveries",
    description:
      "Take a look at some of the enterprise-grade solutions we've built for educational institutions and organizations.",
  },
  projects: [
    {
      id: "college-erp",
      title: "College ERP System",
      description:
        "Comprehensive Enterprise Resource Planning system for college management including student records, attendance, fee management, timetable scheduling, and academic performance tracking.",
      category: "Enterprise Solution",
      technologies: ["Electron.js", "Golang", "PostgreSQL", "Prisma", "Typescript"],
      image: erpPage,
      link: "",
      featured: true,
      confidential: true,
    },
    {
      id: "employment-portal",
      title: "Employment Portal",
      description:
        "Full-featured employment management portal for organizations with job posting, applicant tracking system, interview scheduling, candidate management, and HR analytics dashboard.",
      category: "Web Application",
      technologies: ["React", "Firebase", "Redux", "Tailwind CSS", "Chart.js"],
      image: empPage,
      link: "",
      featured: true,
      confidential: true,
    },
    {
      id: "online-quiz-app",
      title: "Online Quiz & Exam Platform",
      description:
        "Complete exam management system with quiz creation, automated grading, real-time monitoring, result analytics, question bank management, and anti-cheating mechanisms.",
      category: "Education Platform",
      technologies: ["React Native", "PostgreSQL", "Nodejs", "Express", "TypeScript"],
      image: quizApp,
      link: "",
      featured: true,
      confidential: false,
    },
  ],
};
