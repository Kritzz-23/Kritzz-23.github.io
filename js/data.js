/**
 * KRITIKA GIRI — PORTFOLIO DATA HUB
 * Real projects, tech stack, and experience for Kritzz-23
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Kritika Giri",
    role: "Full Stack & AI Engineer",
    tagline: "Building applied AI systems, intelligent platforms, and high-performance full stack web applications.",
    email: "girikritika30@gmail.com",
    githubUsername: "Kritzz-23",
    githubUrl: "https://github.com/Kritzz-23",
    linkedinUrl: "https://www.linkedin.com/in/kritika-giri-2320aa345/",
    location: "Kolkata, India",
    timezone: "IST (UTC+5:30)",
    status: "3rd-Year AIML Undergraduate & Open for High-Impact Roles",
    typewriterRoles: [
      "Full Stack & AI Engineer",
      "Applied Machine Learning Developer",
      "Python & NLP Specialist",
      "Modern Web Applications Craftsman",
      "Open Source Developer"
    ]
  },

  stats: {
    projectsCompleted: "10+",
    yearsExperience: "3rd Year",
    codeQuality: "99.9%",
    openSourceStars: "Active"
  },

  skills: [
    // Languages & AI / ML
    { name: "Python", category: "backend", level: 95, icon: "🐍", tags: ["OOP", "FastAPI", "Data Analysis", "AsyncIO"] },
    { name: "Machine Learning", category: "backend", level: 90, icon: "🤖", tags: ["Model Training", "Scikit-Learn", "Evaluation"] },
    { name: "NLP & Transformers", category: "backend", level: 88, icon: "📑", tags: ["Tokenization", "Text Classification", "NER"] },
    { name: "JavaScript (ES6+)", category: "frontend", level: 92, icon: "🟨", tags: ["Async/Await", "DOM", "SPA", "Event Loop"] },
    { name: "React.js", category: "frontend", level: 88, icon: "⚛️", tags: ["Components", "Hooks", "State", "Vite"] },
    { name: "HTML5 & CSS3", category: "frontend", level: 96, icon: "🌐", tags: ["Semantic HTML", "Flexbox/Grid", "Responsive", "Glassmorphism"] },
    { name: "SQL & Databases", category: "backend", level: 88, icon: "🗄️", tags: ["PostgreSQL", "SQLite", "Schema Design", "Queries"] },
    { name: "Git & GitHub", category: "devops", level: 94, icon: "🐙", tags: ["Version Control", "GitHub Pages", "Actions", "Workflows"] },
    { name: "Docker & Linux", category: "devops", level: 82, icon: "🐳", tags: ["Containers", "CLI", "Shell Scripting", "Deployments"] },
    { name: "REST APIs", category: "backend", level: 92, icon: "🔌", tags: ["API Design", "Postman", "CORS", "Authentication"] }
  ],

  projects: [
    {
      id: "ai-contract-risk-analyzer",
      title: "AI Contract Risk Analyzer",
      category: "fullstack",
      categoryLabel: "Python & NLP",
      stars: "Featured",
      image: "assets/images/project-devflow.jpg",
      description: "AI-assisted legal contract risk analysis platform utilizing Natural Language Processing (NLP) to detect liability loopholes, risky clauses, and high-exposure terms in real time.",
      stack: ["Python", "NLP", "Machine Learning", "Transformers", "FastAPI", "HTML5/CSS3"],
      demoUrl: "https://github.com/Kritzz-23/ai-contract-risk-analyzer",
      githubUrl: "https://github.com/Kritzz-23/ai-contract-risk-analyzer",
      overview: "Eliminates legal review bottlenecks by scanning non-disclosure agreements, master service agreements, and commercial contracts to flag non-standard clauses, unlimited liabilities, and critical compliance gaps.",
      architecture: "Engineered with a modular Python NLP pipeline featuring token classification, semantic risk clustering, and a fast response layer providing instant clause-level risk scores.",
      metrics: [
        "Accelerates document risk analysis by over 60%",
        "Categorizes liabilities across 15+ legal risk dimensions",
        "Designed with privacy-first zero persistence for sensitive contracts"
      ]
    },
    {
      id: "internintel-ai",
      title: "InternIntel AI",
      category: "fullstack",
      categoryLabel: "Full Stack & AI",
      stars: "Featured",
      image: "assets/images/project-novacommerce.jpg",
      description: "An intelligent platform empowering students to discover, track, and manage internship opportunities with automated skill matching and resume alignment diagnostics.",
      stack: ["Python", "JavaScript", "SQL", "REST API", "Tailwind CSS"],
      demoUrl: "https://github.com/Kritzz-23/InternIntel-AI",
      githubUrl: "https://github.com/Kritzz-23/InternIntel-AI",
      overview: "Bridges the student-to-internship gap by intelligently scraping, centralizing, and matching student technical competencies with emerging tech roles and deadlines.",
      architecture: "Relational database backend coupled with automated semantic extraction algorithms that score applicant compatibility against real-time job specifications.",
      metrics: [
        "Comprehensive tracking of internship deadlines and application status",
        "Automated semantic keyword compatibility scoring",
        "Sub-second client-side filtering and search"
      ]
    },
    {
      id: "sentinelai",
      title: "SentinelAI",
      category: "backend",
      categoryLabel: "Observability & AI",
      stars: "Featured",
      image: "assets/images/project-cloudmetrics.jpg",
      description: "AI-powered incident intelligence platform that ingests server logs, clusters error traces, and surfaces actionable insights for lightning-fast troubleshooting.",
      stack: ["Python", "Log Analytics", "Anomaly Detection", "Docker", "REST API"],
      demoUrl: "https://github.com/Kritzz-23/SentinelAI",
      githubUrl: "https://github.com/Kritzz-23/SentinelAI",
      overview: "Engineered to minimize downtime in distributed services by analyzing high-volume incident logs, grouping anomalous events, and generating prioritized root-cause summaries.",
      architecture: "Streamlined log ingestion pipeline with rule-based filters and clustering algorithms designed for low-latency operational telemetry.",
      metrics: [
        "Drastically decreases Mean Time to Resolution (MTTR) on production alerts",
        "Filters out up to 80% of repetitive log noise",
        "Lightweight, container-ready deployment footprint"
      ]
    },
    {
      id: "expense-tracker",
      title: "Smart Expense Tracker",
      category: "frontend",
      categoryLabel: "Web App / Finance",
      stars: "Featured",
      image: "assets/images/project-cloudmetrics.jpg",
      description: "A responsive, accessible personal finance web application for managing, categorizing, and tracking expenses with persistent client storage and real-time visualization.",
      stack: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Responsive UI"],
      demoUrl: "https://github.com/Kritzz-23/expense-tracker",
      githubUrl: "https://github.com/Kritzz-23/expense-tracker",
      overview: "A clean, modern financial dashboard providing individuals with immediate visibility into their spending patterns, recurring obligations, and monthly savings goals.",
      architecture: "Engineered with modular ES6 JavaScript, persistent local storage synchronization, and dynamic DOM updates with zero external bundle bloat.",
      metrics: [
        "100% offline-ready with instant persistent data retrieval",
        "Sub-10ms UI interaction latency",
        "Fully responsive layout optimized from mobile to ultra-wide displays"
      ]
    }
  ],

  experience: [
    {
      role: "B.Tech in Artificial Intelligence & Machine Learning (AIML)",
      company: "Undergraduate Degree — 3rd Year",
      period: "2023 — Present",
      location: "Kolkata, India",
      description: "Specializing in Natural Language Processing, Machine Learning, Data Structures, Algorithms, and Modern Web Architecture.",
      achievements: [
        "Architected SentinelAI and InternIntel AI as end-to-end applied engineering projects.",
        "Built AI Contract Risk Analyzer utilizing transformer models for legal clause triage.",
        "Active member of technical coding communities and open source repositories."
      ]
    },
    {
      role: "Full Stack & Applied ML Engineering",
      company: "Independent Projects & Open Source",
      period: "2023 — Present",
      location: "Kolkata, India (Open to Remote)",
      description: "Designing end-to-end software solutions ranging from responsive web dashboards to data analytics pipelines.",
      achievements: [
        "Deployed Smart Expense Tracker with local persistence and intuitive responsive UX.",
        "Developed REST APIs in Python and integrated client-side applications.",
        "Maintained version control best practices and automated deployments with GitHub."
      ]
    }
  ],

  terminalFiles: {
    "kritika.py": `# Kritika Giri — Full Stack & AI Engineer
class Engineer:
    def __init__(self):
        self.name = "Kritika Giri"
        self.location = "Kolkata, India"
        self.education = "3rd-year AIML Undergraduate"
        self.stack = ["Python", "Machine Learning", "NLP", "JavaScript", "React", "SQL", "Git"]

    def get_mission(self):
        return "Building intelligent applied AI systems and modern full-stack products."

    def contact(self):
        return {
            "email": "girikritika30@gmail.com",
            "github": "https://github.com/Kritzz-23",
            "linkedin": "https://www.linkedin.com/in/kritika-giri-2320aa345/"
        }

engineer = Engineer()
print(f"Ready to collaborate: {engineer.get_mission()}")`,

    "stack.json": `{
  "developer": "Kritika Giri",
  "handle": "@Kritzz-23",
  "specialization": "Full Stack & Applied AI Engineering",
  "languages": ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  "ai_ml": ["NLP", "Machine Learning", "Transformers", "Data Analytics"],
  "tools": ["Git", "GitHub Actions", "Docker", "VS Code", "Linux"],
  "focus": ["Clean Architecture", "Real-World Impact", "High Performance"]
}`,

    "contact.sh": `#!/bin/bash
# Contact Kritika Giri
echo "Sending ping to Kritika Giri (Kolkata, India)..."
echo "Email: girikritika30@gmail.com"
echo "GitHub: https://github.com/Kritzz-23"
echo "Status: Open for Full-Time, Internships & Impactful Collaborations!"`
  }
};
