import type { Project, SkillCategory, TimelineItem, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Fin-TAP — Stock Price Prediction",
    description:
      "An ML-powered system that predicts stock prices using LSTM time-series analysis with high accuracy.",
    longDescription:
      "Fin-TAP is a machine learning project focused on predicting stock prices using Long Short-Term Memory (LSTM) neural networks. The model ingests historical stock market data, applies feature engineering techniques, and generates short-term price forecasts. Built with Python and integrated data preprocessing pipelines using Pandas and Scikit-Learn.",
    tags: ["Python", "LSTM", "Pandas", "Scikit-Learn", "TensorFlow"],
    category: "ai",
    github: "https://github.com/BaranSafa",
    featured: true,
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: 2,
    title: "Brain Tumor MRI Recognition",
    description:
      "CNN-based deep learning model for automated brain tumor detection from MRI scans using Xception architecture.",
    longDescription:
      "A deep learning pipeline that classifies brain MRI images to detect and categorize tumors. Leverages the Xception convolutional architecture with transfer learning, achieving high precision on unseen medical imaging data. The project includes preprocessing, augmentation, training, and evaluation stages, designed for real-world clinical applicability.",
    tags: ["Python", "Keras", "CNN", "Xception", "Medical Imaging"],
    category: "ai",
    github: "https://github.com/BaranSafa",
    featured: true,
    gradient: "from-pink-600 to-rose-600",
  },
  {
    id: 3,
    title: "Dynamic Blog Platform",
    description:
      "Full-stack blog platform with authentication, CRUD operations, and a rich content management backend.",
    longDescription:
      "A feature-complete dynamic blog system built with PHP and MySQL. Supports user registration and login, post creation, editing, and deletion, comment moderation, and a responsive frontend. Designed with MVC-inspired structure to ensure clean separation of concerns and maintainability.",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    category: "web",
    github: "https://github.com/BaranSafa",
    featured: true,
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    id: 4,
    title: "Portfolio v1",
    description:
      "First generation personal portfolio built with React and Vite, featuring glassmorphism and particle effects.",
    longDescription:
      "The first version of my personal portfolio site, built using React and Vite. Features an animated particle background, glassmorphic UI elements, a radar chart for skills visualization, and an integrated AI-powered chatbot (DevBot). Deployed to Netlify.",
    tags: ["React", "Framer Motion", "Recharts", "tsParticles"],
    category: "web",
    github: "https://github.com/BaranSafa",
    featured: false,
    gradient: "from-amber-500 to-orange-600",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    color: "#a855f7",
    gradient: "from-violet-500 to-purple-700",
    skills: [
      { name: "Python", level: 90 },
      { name: "TensorFlow / Keras", level: 78 },
      { name: "CNN & Deep Learning", level: 80 },
      { name: "Scikit-Learn", level: 80 },
      { name: "LSTM Networks", level: 75 },
      { name: "Data Analysis (Pandas)", level: 82 },
    ],
  },
  {
    title: "Web Development",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React.js", level: 80 },
      { name: "JavaScript / TypeScript", level: 75 },
      { name: "HTML & CSS", level: 85 },
      { name: "Next.js", level: 65 },
      { name: "PHP", level: 65 },
      { name: "REST APIs", level: 70 },
    ],
  },
  {
    title: "Databases & Tools",
    color: "#10b981",
    gradient: "from-emerald-500 to-green-700",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 60 },
      { name: "C# / .NET", level: 70 },
      { name: "Docker (basics)", level: 50 },
      { name: "Linux CLI", level: 65 },
    ],
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "2022 — Present",
    title: "Istanbul Topkapı University",
    subtitle: "Computer Engineering (English) · Full Scholarship",
    description:
      "4th-year student studying Computer Engineering in English. Recipient of a full scholarship. Focused on AI, machine learning, and full-stack development projects.",
    type: "education",
  },
  {
    period: "2021 — 2025",
    title: "Accounting Office",
    subtitle: "Office Staff · Part-time",
    description:
      "Handled invoice data entry, document tracking, and client file management. Developed strong attention to detail, organizational skills, and time management in a professional environment.",
    type: "experience",
  },
  {
    period: "2018 — 2022",
    title: "Ümraniye Center Anatolian High School",
    subtitle: "Science Track",
    description:
      "Graduated from the science track with a focus on mathematics and natural sciences. Developed an early interest in computers and programming.",
    type: "education",
  },
];

export const stats = [
  { label: "Years Coding", value: 4, suffix: "+" },
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "ML Models Trained", value: 5, suffix: "+" },
  { label: "Motivation", value: 100, suffix: "%" },
];

export const personalInfo = {
  name: "Baran Safa Taşkın",
  title: "Computer Engineering Student",
  taglines: [
    "AI & Machine Learning Developer",
    "Full-Stack Web Developer",
    "Open Source Contributor",
    "Deep Learning Enthusiast",
  ],
  email: "baransafataskin@gmail.com",
  phone: "+90 552 258 64 36",
  location: "Ümraniye / İstanbul, Turkey",
  github: "https://github.com/BaranSafa",
  linkedin: "https://linkedin.com/in/baransafataskin",
  bio: "I'm a 4th-year Computer Engineering student at Istanbul Topkapı University, studying on a full scholarship. I'm passionate about building intelligent systems and elegant web experiences — from training deep learning models for medical imaging to crafting responsive, performant web apps.",
  quote:
    "Programming isn't about what you know — it's about what you can figure out.",
  interests: ["Traveling", "Fitness", "Running", "Learning"],
};
