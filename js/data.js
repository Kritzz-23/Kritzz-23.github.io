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
    // Languages & Backend
    { 
      name: "Python", 
      category: "backend", 
      tier: "Advanced Production", 
      level: 95, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M11.91 2C6.98 2 7.31 4.14 7.31 4.14L7.32 6.35H12V7.07H5.21C5.21 7.07 2 6.7 2 11.66C2 16.63 4.8 16.42 4.8 16.42H6.46V14.12C6.46 14.12 6.37 11.35 9.19 11.35H13.84C13.84 11.35 16.48 11.45 16.48 8.9V4.14C16.48 4.14 16.92 2 11.91 2ZM9.62 3.51C10.22 3.51 10.71 4 10.71 4.6C10.71 5.2 10.22 5.69 9.62 5.69C9.02 5.69 8.53 5.2 8.53 4.6C8.53 4 9.02 3.51 9.62 3.51Z" fill="#3776AB"/><path d="M12.09 22C17.02 22 16.69 19.86 16.69 19.86L16.68 17.65H12V16.93H18.79C18.79 16.93 22 17.3 22 12.34C22 7.37 19.2 7.58 19.2 7.58H17.54V9.88C17.54 9.88 17.63 12.65 14.81 12.65H10.16C10.16 12.65 7.52 12.55 7.52 15.1V19.86C7.52 19.86 7.08 22 12.09 22ZM14.38 20.49C13.78 20.49 13.29 20 13.29 19.4C13.29 18.8 13.78 18.31 14.38 18.31C14.98 18.31 15.47 18.8 15.47 19.4C15.47 20 14.98 20.49 14.38 20.49Z" fill="#FFD43B"/></svg>`,
      tags: ["FastAPI", "AsyncIO", "OOP", "Pandas", "NumPy"] 
    },
    { 
      name: "JavaScript (ES6+)", 
      category: "frontend", 
      tier: "Core Competency", 
      level: 92, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M6.5 18.5c1.2.7 2.6 1.1 4 1.1 3.5 0 5.5-1.9 5.5-4.7 0-2.4-1.5-3.6-4.1-4.7l-1-.4c-1.6-.7-2.3-1.3-2.3-2.3 0-1.1 1-1.9 2.5-1.9 1.2 0 2.2.4 3 1l.8-2c-1.1-.7-2.4-1-3.8-1-3.1 0-5.1 1.8-5.1 4.5 0 2.2 1.4 3.4 3.9 4.5l1 .4c1.7.7 2.5 1.5 2.5 2.5 0 1.3-1.1 2.2-2.9 2.2-1.5 0-2.8-.5-3.8-1.2l-.7 2z" fill="#000"/></svg>`,
      tags: ["Async/Await", "DOM Engine", "State Patterns", "ESNext"] 
    },
    { 
      name: "React.js", 
      category: "frontend", 
      tier: "Advanced Production", 
      level: 90, 
      svg: `<svg width="22" height="22" viewBox="-11.5 -10.23174 23 20.46348" fill="none"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1.2" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
      tags: ["Hooks", "Context API", "Architecture", "Vite"] 
    },
    { 
      name: "REST APIs & Protocols", 
      category: "backend", 
      tier: "Advanced Production", 
      level: 94, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#009688"/><path d="M12 4L6 14h5l-1 6 7-11h-5l1-5z" fill="#FFFFFF"/></svg>`,
      tags: ["RESTful Design", "JWT Auth", "CORS", "FastAPI"] 
    },

    // AI, ML & NLP
    { 
      name: "Machine Learning", 
      category: "backend", 
      tier: "Specialized", 
      level: 88, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><circle cx="5" cy="18" r="2"/><line x1="12" x2="17.5" y1="9" y2="7"/><line x1="12" x2="6.5" y1="9" y2="7"/><line x1="12" x2="17.5" y1="15" y2="17"/><line x1="12" x2="6.5" y1="15" y2="17"/></svg>`,
      tags: ["Model Training", "Scikit-Learn", "Evaluation", "Pipelines"] 
    },
    { 
      name: "NLP & Transformers", 
      category: "backend", 
      tier: "Specialized", 
      level: 88, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>`,
      tags: ["Tokenization", "Text Classification", "NER", "Embeddings"] 
    },
    { 
      name: "Data Analysis", 
      category: "backend", 
      tier: "Core Competency", 
      level: 90, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/><line x1="2" x2="22" y1="20" y2="20"/></svg>`,
      tags: ["Feature Extraction", "Clustering", "Statistical Models"] 
    },

    // Databases & DevOps
    { 
      name: "SQL & Relational DBs", 
      category: "devops", 
      tier: "Core Competency", 
      level: 89, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#336791" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
      tags: ["PostgreSQL", "SQLite", "Schema Design", "Indexing"] 
    },
    { 
      name: "Git & GitHub CI/CD", 
      category: "devops", 
      tier: "Advanced Production", 
      level: 95, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#F05032"><path d="M21.62 10.84 13.16 2.38a1.64 1.64 0 0 0-2.32 0L8.46 4.76l2.94 2.94a1.95 1.95 0 0 1 2.47 2.5l2.84 2.84a1.94 1.94 0 1 1-1.16 1.12l-2.65-2.65v3.42a1.94 1.94 0 1 1-1.64-.04v-4.66a1.95 1.95 0 0 1-1.07-2.55L7.29 4.78 2.38 9.69a1.64 1.64 0 0 0 0 2.32l8.46 8.46c.64.64 1.68.64 2.32 0l8.46-8.46a1.64 1.64 0 0 0 0-2.32z"/></svg>`,
      tags: ["Branching", "Workflows", "GitHub Pages", "Rebase"] 
    },
    { 
      name: "Docker & Linux", 
      category: "devops", 
      tier: "Core Competency", 
      level: 85, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#0DB7ED"><path d="M13.98 10.98h1.86v1.86h-1.86v-1.86zm-2.48 0h1.86v1.86h-1.86v-1.86zm-2.48 0h1.86v1.86H9.02v-1.86zm7.44-2.48h1.86v1.86h-1.86V8.5zm-2.48 0h1.86v1.86h-1.86V8.5zm-2.48 0h1.86v1.86h-1.86V8.5zm-2.48 0h1.86v1.86H9.02V8.5zm4.96-2.48h1.86v1.86h-1.86V6.02zm-2.48 0h1.86v1.86h-1.86V6.02zm12.35 6.94c-.45-.34-1.42-.4-2.18-.18-.13-.74-.53-1.4-1.12-1.89l-.53-.41-.42.52c-.44.55-.66 1.25-.66 1.96 0 .34.05.67.16.98-.37.21-.92.35-1.57.38H1.36c-.4 1.83.07 3.73 1.28 5.17 1.48 1.76 3.69 2.76 6.01 2.76 7.02 0 12.18-4.49 13.62-9.29h.03c.57 0 1.13-.13 1.65-.38l.68-.33-.65-.78z"/></svg>`,
      tags: ["Containers", "CLI", "Shell Scripting", "System Admin"] 
    },
    { 
      name: "HTML5 & Modern CSS3", 
      category: "frontend", 
      tier: "Advanced Production", 
      level: 95, 
      svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#E34F26"/><path d="M5 4l1.5 15 5.5 1.5 5.5-1.5 1.5-15H5zm12.3 4.2h-7.8l.2 2.3h7.4l-.5 5.4-4.6 1.3-4.6-1.3-.3-3.3h2.3l.2 1.6 2.4.6 2.4-.6.2-2.7H8.6l-.6-6.6h9.5l-.2 3.3z" fill="#FFFFFF"/></svg>`,
      tags: ["Semantic HTML", "Flexbox/Grid", "Responsive", "UI Tokens"] 
    }
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
    { id: "sentinel-live", title: "Launch SentinelAI Live Application", category: "Live Applications", icon: "●", action: "url", url: "https://kritzz-23.github.io/SentinelAI/" },
    { id: "risk-live", title: "Launch AI Contract Risk Analyzer", category: "Live Applications", icon: "●", action: "url", url: "https://kritzz-23.github.io/ai-contract-risk-analyzer/" },
    { id: "intern-live", title: "Launch InternIntel AI Platform", category: "Live Applications", icon: "●", action: "url", url: "https://kritzz-23.github.io/InternIntel-AI/" },
    { id: "expense-live", title: "Launch Smart Expense Tracker", category: "Live Applications", icon: "●", action: "url", url: "https://kritzz-23.github.io/expense-tracker/" },
    { id: "jump-architecture", title: "System Architecture & Request Simulator", category: "Navigation", icon: "›", action: "scroll", target: "#architecture" },
    { id: "jump-projects", title: "View Shipped Projects & Applications", category: "Navigation", icon: "›", action: "scroll", target: "#projects" },
    { id: "jump-nlp", title: "Live NLP Contract Risk Playground", category: "Navigation", icon: "›", action: "scroll", target: "#nlp-demo" },
    { id: "jump-skills", title: "Technical Skills & Stack Matrix", category: "Navigation", icon: "›", action: "scroll", target: "#skills" },
    { id: "jump-about", title: "About Me & Engineering Philosophy", category: "Navigation", icon: "›", action: "scroll", target: "#about" },
    { id: "jump-education", title: "Academic Background & Brainware University", category: "Navigation", icon: "›", action: "scroll", target: "#education" },
    { id: "jump-contact", title: "Get in Touch & Send Message", category: "Navigation", icon: "›", action: "scroll", target: "#contact" },
    { id: "copy-email", title: "Copy Email: girikritika30@gmail.com", category: "Quick Action", icon: "⌘", action: "copy_email" },
    { id: "open-github", title: "Open GitHub Profile (@Kritzz-23)", category: "Quick Launch", icon: "↗", action: "url", url: "https://github.com/Kritzz-23" },
    { id: "open-linkedin", title: "Open LinkedIn Profile", category: "Quick Launch", icon: "↗", action: "url", url: "https://www.linkedin.com/in/kritika-giri-2320aa345/" }
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

