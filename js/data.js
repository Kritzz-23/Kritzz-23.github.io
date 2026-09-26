/**
 * KRITIKA GIRI — ENTERPRISE & APPLIED AI DATA HUB
 * Centralized data for projects, skills, NLP playground, and architecture pipelines
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Kritika Giri",
    role: "Full Stack Developer",
    tagline: "Building resilient full-stack web applications, scalable backend APIs, and modern digital experiences.",
    email: "girikritika30@gmail.com",
    githubUsername: "Kritzz-23",
    githubUrl: "https://github.com/Kritzz-23",
    linkedinUrl: "https://www.linkedin.com/in/kritika-giri-2320aa345/",
    location: "Kolkata, India",
    educationBrief: "Computer Science & Engineering · Brainware University (CGPA 8.54)",
    timezone: "IST (UTC+5:30)",
    status: "Open for Full-Time Roles, Internships & High-Impact Contracts",
    typewriterRoles: [
      "Full Stack Developer",
      "Full Stack Software Engineer",
      "React & Python Web Specialist",
      "Backend & Scalable API Architect",
      "Modern Web Applications Craftsman"
    ]
  },

  stats: {
    cgpa: "8.54",
    repos: "4+",
    reliability: "99.9%",
    gradYear: "2027"
  },

  skills: [
    // Python & AI / ML
    { name: "Python", category: "backend", level: 96, icon: "🐍", tags: ["OOP", "AsyncIO", "FastAPI", "Pandas", "NumPy"] },
    { name: "Machine Learning", category: "backend", level: 91, icon: "🤖", tags: ["Model Training", "Scikit-Learn", "Evaluation", "Pipelines"] },
    { name: "NLP & Transformers", category: "backend", level: 89, icon: "📑", tags: ["Tokenization", "Text Classification", "NER", "Embeddings"] },
    { name: "Data Analysis", category: "backend", level: 90, icon: "📊", tags: ["Feature Extraction", "Clustering", "Statistical Modeling"] },

    // Frontend & Web
    { name: "JavaScript (ES6+)", category: "frontend", level: 93, icon: "🟨", tags: ["Async/Await", "DOM", "State Management", "ESNext"] },
    { name: "React.js", category: "frontend", level: 89, icon: "⚛️", tags: ["Hooks", "Context API", "Component Architecture", "Vite"] },
    { name: "HTML5 & Modern CSS3", category: "frontend", level: 97, icon: "🌐", tags: ["Semantic HTML", "Flexbox/Grid", "Responsive", "Glassmorphism"] },

    // DevOps & Systems
    { name: "SQL & Relational DBs", category: "devops", level: 89, icon: "🗄️", tags: ["PostgreSQL", "SQLite", "Schema Design", "Indexing"] },
    { name: "Git & GitHub CI/CD", category: "devops", level: 95, icon: "🐙", tags: ["Branching", "Workflows", "GitHub Pages", "Rebase"] },
    { name: "REST APIs & Protocols", category: "backend", level: 94, icon: "🔌", tags: ["API Design", "Postman", "CORS", "Authentication"] },
    { name: "Docker & Linux", category: "devops", level: 84, icon: "🐳", tags: ["Containers", "CLI", "Shell Scripting", "System Administration"] }
  ],

  projects: [
    {
      id: "ai-contract-risk-analyzer",
      title: "AI Contract Risk Analyzer",
      category: "fullstack",
      categoryLabel: "NLP / Machine Learning",
      stars: "Featured",
      image: "assets/images/project-devflow.jpg",
      description: "Applied AI legal risk platform utilizing Natural Language Processing (NLP) to detect high-liability clauses, unbounded indemnities, and critical compliance vulnerabilities in commercial contracts.",
      stack: ["Python", "NLP", "Machine Learning", "Transformers", "FastAPI", "HTML5/CSS3"],
      demoUrl: "https://github.com/Kritzz-23/ai-contract-risk-analyzer",
      githubUrl: "https://github.com/Kritzz-23/ai-contract-risk-analyzer",
      overview: "Traditional contract review is sluggish and prone to human oversight. This tool ingests commercial agreements, executes sentence-level tokenization, classifies clauses into 15+ liability categories, and highlights high-risk phrasing with automated remediation advice.",
      architecture: "Engineered with a Python NLP processing pipeline utilizing contextual token classification, clause similarity clustering, and interactive web visualization.",
      metrics: [
        "Accelerates document legal review by over 60%",
        "Contextual risk classification across 15+ liability dimensions",
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
      description: "An intelligent platform designed to help students discover, manage, and match internship opportunities through automated text parsing, semantic skill matching, and deadline tracking.",
      stack: ["Python", "JavaScript", "SQL", "REST API", "Tailwind CSS"],
      demoUrl: "https://github.com/Kritzz-23/InternIntel-AI",
      githubUrl: "https://github.com/Kritzz-23/InternIntel-AI",
      overview: "Bridges the technical student-to-internship gap by intelligently organizing internship postings, scoring applicant skill profiles against role expectations, and organizing application lifecycles.",
      architecture: "Relational database backend coupled with automated semantic extraction algorithms that score applicant compatibility against real-time job specifications.",
      metrics: [
        "Tracks hundreds of opportunities with automated status updates",
        "Semantic keyword matching yielding instant compatibility scores",
        "Sub-second client-side search and filtering"
      ]
    },
    {
      id: "sentinelai",
      title: "SentinelAI",
      category: "backend",
      categoryLabel: "Observability & AI",
      stars: "Featured",
      image: "assets/images/project-cloudmetrics.jpg",
      description: "AI-powered incident intelligence platform that ingests server logs, clusters error traces, and surfaces actionable diagnostic insights for accelerated engineering triage.",
      stack: ["Python", "Log Analytics", "Anomaly Detection", "Docker", "REST API"],
      demoUrl: "https://github.com/Kritzz-23/SentinelAI",
      githubUrl: "https://github.com/Kritzz-23/SentinelAI",
      overview: "Engineered to drastically cut Mean Time to Resolution (MTTR) in distributed server clusters. It correlates high-frequency error traces, filters ambient log noise, and highlights anomalous failure paths.",
      architecture: "Streamlined log ingestion pipeline with rule-based filters and clustering algorithms designed for low-latency operational telemetry.",
      metrics: [
        "Reduces debugging MTTR by identifying recurrent anomaly clusters",
        "Suppresses up to 80% of repetitive ambient log noise",
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
      description: "A responsive, accessible personal finance web application for managing, categorizing, and tracking personal expenses with client-side persistent storage and real-time visualization.",
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

  // Interactive Live NLP Playground Data
  nlpPlayground: {
    samples: {
      indemnity: {
        title: "Unlimited Indemnity",
        text: "Vendor shall indemnify, defend, and hold harmless Client from and against any and all claims, demands, liabilities, damages, losses, costs, and expenses without limitation, arising out of or related to any act, omission, or performance hereunder.",
        category: "Indemnification & Unlimited Liability",
        riskScore: 94,
        riskLevel: "high-risk",
        riskLabel: "CRITICAL RISK (94/100)",
        flaggedTokens: ["indemnify, defend, and hold harmless", "without limitation", "any and all claims"],
        remediation: "Recommended Counter-Clause: Cap liability to fees paid during the preceding 12-month period and restrict indemnification to gross negligence or willful misconduct."
      },
      noncompete: {
        title: "Restrictive Non-Compete",
        text: "Contractor agrees that during the term of this Agreement and for a period of five (5) consecutive years following termination, Contractor shall not directly or indirectly consult for, invest in, or provide services to any competitor in the global technology marketplace.",
        category: "Restrictive Covenants & Non-Compete",
        riskScore: 68,
        riskLevel: "med-risk",
        riskLabel: "ELEVATED RISK (68/100)",
        flaggedTokens: ["five (5) consecutive years", "directly or indirectly consult for", "global technology marketplace"],
        remediation: "Recommended Counter-Clause: Reduce duration to twelve (12) months maximum and narrow geographic restriction to immediate client-servicing regions."
      },
      confidentiality: {
        title: "Standard NDA",
        text: "Receiving Party agrees to preserve the confidentiality of Disclosing Party's Proprietary Information using the same standard of care it uses for its own confidential records, for a duration of two (2) years from disclosure.",
        category: "Mutual Confidentiality",
        riskScore: 18,
        riskLevel: "low-risk",
        riskLabel: "LOW RISK (18/100)",
        flaggedTokens: ["same standard of care", "two (2) years from disclosure"],
        remediation: "Clause complies with standard commercial benchmarks and poses minimal operational exposure."
      }
    }
  },

  // Interactive Architecture Pipeline Nodes
  architecturePipeline: [
    {
      id: "ingest",
      title: "Document Ingestion",
      latency: "12ms",
      desc: "Raw document ingestion (PDF, Word, Plaintext) with regex normalization, token stream extraction, and layout-preserving sentence splitting."
    },
    {
      id: "tokenize",
      title: "Subword Tokenizer",
      latency: "6ms",
      desc: "Byte-Pair Encoding (BPE) subword tokenization with attention masking, padding sequences to fixed model context windows."
    },
    {
      id: "embed",
      title: "Transformer Encoder",
      latency: "26ms",
      desc: "Multi-layer self-attention transformer encoder generating high-dimensional contextual embeddings across legal token matrices."
    },
    {
      id: "classify",
      title: "Multi-Head Classifier",
      latency: "18ms",
      desc: "Multi-head dense classification layers categorizing clauses across 15+ liability dimensions (Indemnity, Termination, Warranty, IP)."
    },
    {
      id: "remediate",
      title: "Risk Scoring & Triage",
      latency: "8ms",
      desc: "Calculates overall contract risk index (0–100), highlights high-exposure phrase spans, and generates proposed counter-remedies."
    }
  ],

  experience: [
    {
      role: "B.Tech in Artificial Intelligence & Machine Learning (AIML)",
      company: "Brainware University",
      period: "2023 — Present (3rd Year)",
      location: "Kolkata, India",
      description: "Undergraduate degree focusing on Natural Language Processing, Machine Learning, Data Structures & Algorithms, and Distributed Web Engineering.",
      achievements: [
        "Academic Standing: CGPA 8.54 / 10 across completed semesters.",
        "Architected AI Contract Risk Analyzer, SentinelAI, and InternIntel AI as applied systems.",
        "Active contributor to technical workshops, coding challenges, and open source development."
      ]
    },
    {
      role: "Full Stack & Applied ML Engineering",
      company: "Independent Projects & Open Source",
      period: "2023 — Present",
      location: "Kolkata, India (Remote Ready)",
      description: "Architecting end-to-end applications combining Python analytics backends with modern client interfaces.",
      achievements: [
        "Engineered Smart Expense Tracker with zero-dependency persistent local state.",
        "Built RESTful microservice architectures utilizing FastAPI, Node.js, and SQL.",
        "Maintained strict Git hygiene, CI/CD automated deployment pipelines, and semantic versioning."
      ]
    }
  ],

  terminalFiles: {
    "kritika.py": `# Kritika Giri — Applied AI & Full Stack Engineer
class Engineer:
    def __init__(self):
        self.name = "Kritika Giri"
        self.university = "Brainware University, Kolkata"
        self.cgpa = 8.54
        self.specialization = "Artificial Intelligence & Machine Learning (AIML)"
        self.stack = ["Python", "Transformers", "NLP", "JavaScript", "React", "SQL", "Git"]

    def get_mission(self):
        return "Designing resilient distributed software and applied artificial intelligence solutions."

    def get_contact_channels(self):
        return {
            "email": "girikritika30@gmail.com",
            "github": "https://github.com/Kritzz-23",
            "linkedin": "https://www.linkedin.com/in/kritika-giri-2320aa345/",
            "portfolio": "https://kritzz-23.github.io/"
        }

engineer = Engineer()
print(f"Status: Ready for high-impact roles (CGPA {engineer.cgpa})")`,

    "stack.json": `{
  "developer": "Kritika Giri",
  "handle": "@Kritzz-23",
  "education": {
    "institution": "Brainware University",
    "degree": "B.Tech CSE (AI & ML)",
    "cgpa": "8.54 / 10",
    "year": "3rd Year (Graduation 2027)"
  },
  "core_competencies": {
    "languages": ["Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
    "ai_and_ml": ["Natural Language Processing", "Transformers", "Model Training", "Data Analytics"],
    "web_and_systems": ["FastAPI", "React", "REST APIs", "Git", "Docker", "Linux"]
  }
}`,

    "contact.sh": `#!/bin/bash
# Contact Kritika Giri (Kolkata, India)
echo "Candidate: Kritika Giri (@Kritzz-23)"
echo "Education: Brainware University (CGPA 8.54)"
echo "Email: girikritika30@gmail.com"
echo "Portfolio: https://kritzz-23.github.io/"
echo "Available for Summer 2025/2026 roles & collaborations."`
  }
};
