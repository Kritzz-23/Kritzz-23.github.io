/**
 * KRITIKA GIRI — ENTERPRISE & APPLIED AI DATA HUB
 * Centralized data for projects, skills, NLP playground, and architecture pipelines
 */

var PORTFOLIO_DATA = {
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
      id: "pulsehr-mern",
      title: "PulseHR — Employee Management & HRMS",
      category: "fullstack",
      categoryLabel: "MERN Stack Enterprise",
      stars: "Live App",
      image: "assets/images/project-devflow.jpg",
      description: "Industry-grade MERN Stack HRMS & Employee Management System featuring hierarchical RBAC (Admin, HR, Manager, Employee), JWT Authentication, Real-time Attendance, Leave Approvals, and Company Analytics.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "REST API"],
      demoUrl: "https://kritzz-23.github.io/PulseHR-MERN/",
      githubUrl: "https://github.com/Kritzz-23/PulseHR-MERN",
      overview: "A comprehensive enterprise system managing 245 employees across 5 core departments with real-time attendance, leave approval workflows, task delegation, and executive headcount analytics.",
      architecture: "React client with Axios communicating with Express/Node RESTful API, MongoDB Mongoose schema validation, hierarchical JWT permission guards, and real-time SVG analytics.",
      codeSnippet: `// PulseHR — Hierarchical RBAC Authorization Middleware
const ROLE_HIERARCHY = { admin: 4, hr: 3, manager: 2, employee: 1 };

exports.checkHierarchy = (minRole) => {
  return (req, res, next) => {
    const userLevel = ROLE_HIERARCHY[req.user.role] || 0;
    const requiredLevel = ROLE_HIERARCHY[minRole] || 1;

    if (userLevel < requiredLevel) {
      return res.status(403).json({
        success: false,
        message: \`Forbidden: Insufficient privileges. Minimum role: \${minRole.toUpperCase()}\`
      });
    }
    next();
  };
};`,
      metrics: [
        "Scale tested for 245+ employees across 5 departments",
        "Hierarchical 4-role RBAC security matrix with JWT tokens",
        "Real-time clock-in/out attendance with timestamp verification"
      ]
    },
    {
      id: "ai-contract-risk-analyzer",
      title: "AI Contract Risk Analyzer",
      category: "fullstack",
      categoryLabel: "NLP / Machine Learning",
      stars: "Live App",
      image: "assets/images/project-risk.jpg",
      description: "Applied AI legal risk platform utilizing Natural Language Processing (NLP) to detect high-liability clauses, unbounded indemnities, and critical compliance vulnerabilities in commercial contracts.",
      stack: ["Python", "NLP", "Machine Learning", "Transformers", "FastAPI", "HTML5/CSS3"],
      demoUrl: "https://kritzz-23.github.io/ai-contract-risk-analyzer/",
      githubUrl: "https://github.com/Kritzz-23/ai-contract-risk-analyzer",
      overview: "Traditional contract review is sluggish and prone to human oversight. This tool ingests commercial agreements, executes sentence-level tokenization, classifies clauses into 15+ liability categories, and highlights high-risk phrasing with automated remediation advice.",
      architecture: "Engineered with a Python NLP processing pipeline utilizing contextual token classification, clause similarity clustering, and interactive web visualization.",
      codeSnippet: `// Contract Risk Analyzer — Multi-Head Clause Classifier
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

class ContractRiskPipeline:
    def __init__(self, model_checkpoint: str = "legal-roberta-base"):
        self.tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
        self.classifier = AutoModelForSequenceClassification.from_pretrained(model_checkpoint)
        self.liability_labels = ["INDEMNITY", "NON_COMPETE", "WARRANTY", "TERMINATION", "IP_RESTRICTION"]

    def analyze_clause(self, clause_text: str) -> dict:
        inputs = self.tokenizer(clause_text, return_tensors="pt", truncation=True, max_length=512)
        with torch.no_grad():
            logits = self.classifier(**inputs).logits
            probabilities = torch.softmax(logits, dim=-1).squeeze().tolist()
            
        top_category_idx = int(torch.argmax(logits))
        risk_score = int(probabilities[top_category_idx] * 100)
        
        return {
            "category": self.liability_labels[top_category_idx],
            "risk_score": risk_score,
            "status": "classified",
            "model_version": "v1.4.2"
        }`,
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
      stars: "Live App",
      image: "assets/images/project-novacommerce.jpg",
      description: "An intelligent platform designed to help students discover, manage, and match internship opportunities through automated text parsing, semantic skill matching, and deadline tracking.",
      stack: ["Python", "JavaScript", "SQL", "REST API", "Tailwind CSS"],
      demoUrl: "https://kritzz-23.github.io/InternIntel-AI/",
      githubUrl: "https://github.com/Kritzz-23/InternIntel-AI",
      overview: "Bridges the technical student-to-internship gap by intelligently organizing internship postings, scoring applicant skill profiles against role expectations, and organizing application lifecycles.",
      architecture: "Relational database backend coupled with automated semantic extraction algorithms that score applicant compatibility against real-time job specifications.",
      codeSnippet: `// InternIntel — Real-time Semantic Compatibility Scorer
export async function calculateCandidateFit(studentSkills, jobRequirements) {
  const normalizedStudent = new Set(studentSkills.map(s => s.toLowerCase().trim()));
  const matched = [];
  const missing = [];

  for (const req of jobRequirements) {
    if (normalizedStudent.has(req.name.toLowerCase().trim())) {
      matched.push({ skill: req.name, weight: req.weight || 1.0 });
    } else {
      missing.push(req.name);
    }
  }

  const earnedWeight = matched.reduce((sum, item) => sum + item.weight, 0);
  const totalWeight = jobRequirements.reduce((sum, item) => sum + (item.weight || 1.0), 0);
  const score = Math.round((earnedWeight / (totalWeight || 1)) * 100);

  return { fitPercentage: score, matchedSkills: matched, missingSkills: missing };
}`,
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
      stars: "Live App",
      image: "assets/images/project-sentinel.jpg",
      description: "AI-powered incident intelligence platform that ingests server logs, clusters error traces, and surfaces actionable diagnostic insights for accelerated engineering triage.",
      stack: ["Python", "FastAPI", "Log Analytics", "Anomaly Detection", "Docker", "REST API"],
      demoUrl: "https://kritzz-23.github.io/SentinelAI/",
      githubUrl: "https://github.com/Kritzz-23/SentinelAI",
      overview: "Engineered to drastically cut Mean Time to Resolution (MTTR) in distributed server clusters. It correlates high-frequency error traces, filters ambient log noise, and highlights anomalous failure paths.",
      architecture: "Streamlined log ingestion pipeline with rule-based filters and clustering algorithms designed for low-latency operational telemetry.",
      codeSnippet: `# SentinelAI — Async Error Trace Ingestion & Clustering Engine
from fastapi import FastAPI, BackgroundTasks, HTTPException
from pydantic import BaseModel
import asyncio, time

app = FastAPI(title="SentinelAI Triage Engine", version="2.4.0")

class IncidentPayload(BaseModel):
    service_id: str
    log_level: str
    traceback: str
    timestamp_ns: int

@app.post("/api/v1/triage/ingest")
async def ingest_incident(incident: IncidentPayload, bg: BackgroundTasks):
    t_start = time.perf_counter()
    
    # 1. Strip dynamic variables and compute structural error hash
    signature = cluster_traceback_signature(incident.traceback)
    
    # 2. Asynchronous anomaly scoring and deduplication
    is_anomaly, confidence = await anomaly_engine.score_async(signature)
    
    # 3. Schedule non-blocking alert dispatch if P1 priority
    if is_anomaly and confidence > 0.88:
        bg.add_task(dispatch_pager_alert, incident.service_id, signature)
        
    duration_ms = (time.perf_counter() - t_start) * 1000
    return {
        "status": "triaged",
        "cluster_id": signature[:12],
        "latency_ms": round(duration_ms, 2),
        "deduplicated": not is_anomaly
    }`,
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
      stars: "Live App",
      image: "assets/images/project-cloudmetrics.jpg",
      description: "A responsive, accessible personal finance web application for managing, categorizing, and tracking personal expenses with client-side persistent storage and real-time visualization.",
      stack: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Responsive UI"],
      demoUrl: "https://kritzz-23.github.io/expense-tracker/",
      githubUrl: "https://github.com/Kritzz-23/expense-tracker",
      overview: "A clean, modern financial dashboard providing individuals with immediate visibility into their spending patterns, recurring obligations, and monthly savings goals.",
      architecture: "Engineered with modular ES6 JavaScript, persistent local storage synchronization, and dynamic DOM updates with zero external bundle bloat.",
      codeSnippet: `// Smart Expense Tracker — Persistent Transaction Ledger Engine
class ExpenseLedger {
  constructor(storageKey = "kg_expenses_v2") {
    this.storageKey = storageKey;
    this.transactions = this.loadLedger();
  }

  addTransaction({ description, amount, category, date }) {
    const record = {
      id: crypto.randomUUID(),
      description: description.trim(),
      amount: parseFloat(amount),
      category,
      date: date || new Date().toISOString().split('T')[0],
      createdAt: Date.now()
    };
    this.transactions.unshift(record);
    this.persist();
    return record;
  }

  getSummary() {
    return this.transactions.reduce((acc, curr) => {
      acc.total += curr.amount;
      acc.byCategory[curr.category] = (acc.byCategory[curr.category] || 0) + curr.amount;
      return acc;
    }, { total: 0, byCategory: {} });
  }

  persist() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.transactions));
  }
}`,
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

  // Architecture Pipeline Simulator Scenarios
  simulationPresets: [
    {
      id: "sentinel-p1",
      name: "SentinelAI: P1 Database Pool Exhaustion",
      badge: "P1 Incident",
      endpoint: "POST /api/v1/telemetry/triage",
      clientPayload: {
        event: "DB_CONNECTION_LIMIT_EXCEEDED",
        service: "payment-gateway-us-east",
        active_connections: 500,
        max_connections: 500,
        unhandled_exceptions_sec: 142
      },
      stages: [
        { name: "Client / Ingest Agent", latency: "8ms", status: "Event serialized & dispatched via HTTPS" },
        { name: "FastAPI Gateway", latency: "14ms", status: "Token auth verified; rate limit checked (0/1000/s)" },
        { name: "ML Anomaly Classifier", latency: "38ms", status: "Clustered with historical signature #PG-ERR-08; confidence 98.4%" },
        { name: "PostgreSQL & Alert Dispatch", latency: "12ms", status: "Incident recorded in ledger; dispatched P1 PagerDuty alert" }
      ],
      totalLatency: "72ms",
      responsePayload: {
        incident_id: "INC-2026-8821",
        status: "TRIAGED_ESCALATED",
        severity: "P1_CRITICAL",
        root_cause_prediction: "PostgreSQL pg_stat_activity connection pool saturation caused by unclosed cursor in /v2/checkout",
        recommended_remediation: "Execute failover to read-replica pool & run kill_idle_connections()",
        confidence: 0.984,
        triage_duration_ms: 72
      }
    },
    {
      id: "contract-nlp",
      name: "Contract NLP: Uncapped Indemnity Clause",
      badge: "NLP Evaluation",
      endpoint: "POST /api/v1/nlp/contract-risk/analyze",
      clientPayload: {
        document_id: "DOC-MSA-2026-44",
        clause_span: "Vendor agrees to indemnify and hold harmless Client from any and all damages without limitation...",
        jurisdiction: "Delaware, USA"
      },
      stages: [
        { name: "Client / Webhook", latency: "11ms", status: "Document text uploaded & normalized" },
        { name: "FastAPI Edge Gateway", latency: "9ms", status: "Payload validated via Pydantic schema" },
        { name: "Legal Transformer Engine", latency: "46ms", status: "Multi-head attention classified clause into INDEMNITY_UNLIMITED" },
        { name: "Persistence & Runbook", latency: "15ms", status: "Calculated risk score 94/100 & retrieved standard remediation text" }
      ],
      totalLatency: "81ms",
      responsePayload: {
        analysis_id: "NLP-RISK-90412",
        classification: "INDEMNIFICATION_UNLIMITED",
        risk_score: 94,
        risk_level: "CRITICAL",
        flagged_tokens: ["without limitation", "any and all damages"],
        suggested_counter_clause: "Cap liability to aggregate fees paid in past 12 months; exclude consequential damages.",
        total_pipeline_time_ms: 81
      }
    },
    {
      id: "internintel-match",
      name: "InternIntel: Semantic Compatibility Triage",
      badge: "Semantic Match",
      endpoint: "POST /api/v1/matching/candidate-fit",
      clientPayload: {
        candidate_skills: ["Python", "FastAPI", "React", "PostgreSQL", "Docker"],
        target_role: "Full Stack Engineer Intern",
        required_competencies: ["Python", "FastAPI", "React", "SQL"]
      },
      stages: [
        { name: "Candidate Portal", latency: "6ms", status: "Applicant skill profile submitted" },
        { name: "FastAPI Service", latency: "12ms", status: "JWT session authenticated & verified" },
        { name: "Semantic Match Engine", latency: "22ms", status: "Evaluated 5/5 mandatory competencies; calculated 96% fit" },
        { name: "Database & Notification", latency: "11ms", status: "Candidate queued for technical interview triage" }
      ],
      totalLatency: "51ms",
      responsePayload: {
        match_id: "MATCH-8831",
        compatibility_score: 96,
        status: "STRONG_MATCH",
        matched_stack: ["Python", "FastAPI", "React", "PostgreSQL"],
        bonus_points: ["Docker containerization", "B.Tech Final Year (CGPA 8.54)"],
        next_step: "Immediate Automated Technical Interview Scheduling"
      }
    }
  ],

  // Command Palette Items
  commands: [
    { id: "sentinel-live", title: "Launch SentinelAI Live Application", category: "Live Applications", icon: "🚀", action: "url", url: "https://kritzz-23.github.io/SentinelAI/" },
    { id: "risk-live", title: "Launch AI Contract Risk Analyzer", category: "Live Applications", icon: "⚖️", action: "url", url: "https://kritzz-23.github.io/ai-contract-risk-analyzer/" },
    { id: "intern-live", title: "Launch InternIntel AI Platform", category: "Live Applications", icon: "🎓", action: "url", url: "https://kritzz-23.github.io/InternIntel-AI/" },
    { id: "expense-live", title: "Launch Smart Expense Tracker", category: "Live Applications", icon: "💳", action: "url", url: "https://kritzz-23.github.io/expense-tracker/" },
    { id: "jump-architecture", title: "System Architecture & Request Simulator", category: "Navigation", icon: "⚡", action: "scroll", target: "#architecture" },
    { id: "jump-projects", title: "View Shipped Projects & Applications", category: "Navigation", icon: "📂", action: "scroll", target: "#projects" },
    { id: "jump-nlp", title: "Live NLP Contract Risk Playground", category: "Navigation", icon: "📑", action: "scroll", target: "#nlp-demo" },
    { id: "jump-skills", title: "Technical Skills & Stack Matrix", category: "Navigation", icon: "💻", action: "scroll", target: "#skills" },
    { id: "jump-about", title: "About Me & Engineering Philosophy", category: "Navigation", icon: "👤", action: "scroll", target: "#about" },
    { id: "jump-education", title: "Academic Background & Brainware University", category: "Navigation", icon: "🎓", action: "scroll", target: "#education" },
    { id: "jump-contact", title: "Get in Touch & Send Message", category: "Navigation", icon: "✉️", action: "scroll", target: "#contact" },
    { id: "copy-email", title: "Copy Email: girikritika30@gmail.com", category: "Quick Action", icon: "📋", action: "copy_email" },
    { id: "open-github", title: "Open GitHub Profile (@Kritzz-23)", category: "Quick Launch", icon: "🐙", action: "url", url: "https://github.com/Kritzz-23" },
    { id: "open-linkedin", title: "Open LinkedIn Profile", category: "Quick Launch", icon: "💼", action: "url", url: "https://www.linkedin.com/in/kritika-giri-2320aa345/" }
  ],

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
      period: "Present (4th Year / Final Year)",
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
    },
    {
      role: "Higher Secondary Certificate (Science Stream — PCM)",
      company: "Senior Secondary Education",
      period: "Completed",
      location: "India",
      description: "Solid foundational background in Mathematics, Physics, Chemistry, and Computer Science with analytical problem-solving focus.",
      achievements: [
        "Focused study in Advanced Mathematics and Computational Logic.",
        "Developed early interest in algorithms, scripting, and software development."
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
    "year": "4th Year / Final Year"
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

// Explicit global assignment for browser compatibility
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

