# ✨ Kritika Giri — Full Stack Developer Portfolio & GitHub Showcase

> A modern, responsive, high-performance portfolio website engineered for **GitHub Pages** hosting, featuring an interactive developer terminal, dynamic skills matrix, deep-dive project case studies, real-time GitHub activity hub, customizable themes, and built-in resume viewer.

---

## 🌟 Live Features & Highlights

- **⚡ Blazing Fast & Zero-Build**: Built with standard semantic HTML5, modern CSS3 variables & glassmorphism, and vanilla ES6+ JavaScript. No complex build tools or npm dependencies required—making it 100% plug-and-play for GitHub Pages.
- **🎨 Interactive Theme & Accent Engine**:
  - Light & Dark Obsidian mode toggling (with local storage persistence).
  - 4 Dynamic Accent Palettes (Cyber Violet, Neon Cyan, Matrix Green, Sunset Amber).
  - Ambient glowing mesh gradients with cursor spotlight tracking.
- **💻 Interactive Developer Code Terminal**:
  - Live tab switching between TypeScript code (`kritika.ts`), configuration (`stack.json`), and an interactive shell terminal.
  - Interactive terminal emulator responding to commands like `help`, `skills`, `projects`, `about`, `contact`, `clear`, and `whoami`.
- **🛠️ Dynamic Skills & Tech Stack Matrix**:
  - Filterable by discipline (*Frontend*, *Backend & DB*, *DevOps & Cloud*).
  - Instant live keyword search bar.
- **🚀 Featured Projects Showcase**:
  - Deep-dive architectural breakdown modals with system design notes, challenge/solution reviews, and key engineering metrics.
  - Direct links to GitHub repositories and live deployments.
- **📊 Real-Time GitHub Activity Hub**:
  - Live GitHub Stats, Top Languages, and Streak trackers.
  - Dynamic username switcher allowing instant preview for any GitHub username.
- **📄 Built-in Printable Resume Modal**:
  - Full CV layout styled for immediate viewing and 1-click printing/saving as PDF.
- **✉️ Interactive Contact Form**:
  - Instant field validation, tactile sound feedback (synthesized via Web Audio API), and 1-click email copy.

---

## 🚀 How to Deploy on GitHub Pages (In Under 2 Minutes)

Follow these steps to host your portfolio for free with your custom GitHub URL:

### Step 1: Create a GitHub Repository
1. Navigate to [github.com/new](https://github.com/new).
2. Set the repository name:
   - For a standard site: `kritika-portfolio` (will be hosted at `https://<your-username>.github.io/kritika-portfolio/`)
   - For your primary user site: `<your-username>.github.io` (will be hosted at `https://<your-username>.github.io/`)
3. Set visibility to **Public**.
4. Leave *Initialize with a README* unchecked (this repository already has one).

### Step 2: Push Your Code
Open PowerShell or your terminal inside this folder:
```powershell
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "feat: initial release of personal portfolio"

# 4. Set default branch to main
git branch -M main

# 5. Connect your remote repository (replace with your actual GitHub username)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/kritika-portfolio.git

# 6. Push
git push -u origin main
```

### Step 3: Activate GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) &rarr; **Pages** (in the left sidebar under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and folder `/(root)`
4. Click **Save**.
5. Wait about 30–60 seconds, and GitHub will display your live portfolio URL!

---

## 🎁 BONUS: Ready-to-Copy GitHub Profile README (`README.md`)

If you want a matching README for your special GitHub Profile repository (`github.com/<your-username>/<your-username>`), copy the markdown below:

```markdown
# Hi there, I'm Kritika Giri 👋

<p align="center">
  <img src="https://raw.githubusercontent.com/KritikaGiri/kritika-portfolio/main/assets/images/avatar.jpg" width="180" height="180" style="border-radius: 50%;" alt="Kritika Giri" />
</p>

<p align="center">
  <strong>Full Stack Developer & Software Engineer</strong><br>
  <em>Building resilient distributed web systems, scalable APIs, and modern digital experiences.</em>
</p>

<p align="center">
  <a href="https://github.com/KritikaGiri"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="mailto:girikritika30@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://linkedin.com/in/kritika-giri"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</p>

---

### ⚡ Quick About Me
- 🔭 Currently building: High-throughput cloud applications, microservices, and AI developer tools.
- 💡 Core Expertise: **TypeScript**, **React**, **Next.js**, **Node.js**, **Express**, **PostgreSQL**, **Redis**, and **Docker**.
- 💬 Ask me about: Full stack architecture, clean code practices, and web performance optimization.
- 📫 How to reach me: **[girikritika30@gmail.com](mailto:girikritika30@gmail.com)**

---

### 🛠️ Tech Stack & Arsenal

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React, Next.js, TypeScript, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, Redux, Zustand |
| **Backend** | Node.js, Express, Python, FastAPI, PostgreSQL, MongoDB, Redis, GraphQL, REST APIs |
| **DevOps & Cloud** | Docker, Git, GitHub Actions, AWS (S3/EC2), Linux, Nginx, CI/CD |

---

### 📊 GitHub Activity & Stats

<p align="center">
  <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=KritikaGiri&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=8b5cf6&icon_color=06b6d4" alt="Kritika's GitHub Stats" />
  <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=KritikaGiri&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=8b5cf6" alt="Top Languages" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=KritikaGiri&theme=tokyonight&hide_border=true&background=0d1117&ring=8b5cf6&fire=06b6d4" alt="GitHub Streak" />
</p>

---

<p align="center">
  ⭐ <em>"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra</em> ⭐
</p>
```

---

## 📁 Project Structure

```
kritika-portfolio/
│
├── index.html                   # Master entry point (Semantic HTML5, SEO optimized)
├── css/
│   └── styles.css               # Full design system, tokens, responsive layout & themes
├── js/
│   ├── data.js                  # Centralized structured data (projects, skills, bio)
│   └── main.js                  # Terminal simulator, typewriter, sound engine, modal manager
├── assets/
│   └── images/
│       ├── avatar.jpg           # High-resolution 3D developer avatar
│       ├── project-devflow.jpg  # DevFlow AI Workspace mockup
│       ├── project-cloudmetrics.jpg # Skyline Observability mockup
│       └── project-novacommerce.jpg # NovaCommerce storefront mockup
└── README.md                    # Deployment guide & profile template
```

---

## 📝 Customization Tips

- **Update Projects & Skills**: Edit `js/data.js` to change or add projects, skills, or timeline items.
- **Change Links or Bio**: In `js/data.js`, modify the `PORTFOLIO_DATA.profile` object.
- **Add Images**: Place any new project screenshots into `assets/images/` and update `image` in `js/data.js`.
