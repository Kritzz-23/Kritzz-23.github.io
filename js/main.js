/**
 * KRITIKA GIRI — ENTERPRISE PORTFOLIO CORE ENGINE
 * Interactive Command Palette (Ctrl+K), NLP Risk Analyzer Playground,
 * System Architecture Pipeline Explorer, Terminal Simulator, and Theme Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursorGlow();
  initHeaderScroll();
  initThemeAndAccents();
  initTypewriter();
  initCommandPalette();
  initNLPPlayground();
  initArchitectureExplorer();
  initTerminal();
  initSkills();
  initProjects();
  initTimeline();
  initGitHubStats();
  initContactForm();
  initModals();
  initAudioEngine();
  updateLiveISTTime();
  setInterval(updateLiveISTTime, 30000);
});

/* ==========================================================================
   1. Interactive Cursor Glow
   ========================================================================== */
function initCursorGlow() {
  const cursorGlow = document.getElementById('cursor-glow');
  if (!cursorGlow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = '1';
  });

  window.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    cursorGlow.style.left = `${currentX}px`;
    cursorGlow.style.top = `${currentY}px`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

/* ==========================================================================
   2. Header & Scroll
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  }
}

/* ==========================================================================
   3. Theme & Accent Customizer
   ========================================================================== */
function initThemeAndAccents() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const accentBtn = document.getElementById('accent-btn');
  const accentMenu = document.getElementById('accent-menu');
  const accentOpts = document.querySelectorAll('.accent-opt');

  const savedTheme = localStorage.getItem('kg_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeIcon) themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  const savedAccent = localStorage.getItem('kg_accent') || 'violet';
  document.documentElement.setAttribute('data-accent', savedAccent);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('kg_theme', nextTheme);
      if (themeIcon) themeIcon.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
      playSynthTone('click');
      showToast(`Switched to ${nextTheme} mode`);
    });
  }

  if (accentBtn && accentMenu) {
    accentBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      accentMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      accentMenu.classList.remove('show');
    });

    accentOpts.forEach(opt => {
      opt.addEventListener('click', () => {
        const accent = opt.getAttribute('data-accent');
        document.documentElement.setAttribute('data-accent', accent);
        localStorage.setItem('kg_accent', accent);
        accentMenu.classList.remove('show');
        playSynthTone('accent');
        showToast(`Accent updated: ${accent.toUpperCase()}`);
      });
    });
  }
}

/* ==========================================================================
   4. Hero Typewriter Engine
   ========================================================================== */
function initTypewriter() {
  const typewriterElem = document.getElementById('typewriter-text');
  if (!typewriterElem) return;

  const roles = PORTFOLIO_DATA.profile.typewriterRoles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 85;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   5. COMMAND PALETTE (Ctrl + K / Cmd + K)
   ========================================================================== */
function initCommandPalette() {
  const paletteBackdrop = document.getElementById('cmd-palette-backdrop');
  const paletteInput = document.getElementById('cmd-palette-input');
  const paletteList = document.getElementById('cmd-palette-list');
  const openCmdBtns = document.querySelectorAll('.cmd-palette-btn');

  if (!paletteBackdrop || !paletteInput || !paletteList) return;

  const commands = [
    { category: "Navigation", title: "Go to About & Bio", icon: "👤", action: () => scrollToSection('about') },
    { category: "Navigation", title: "Go to NLP Risk Analyzer Demo", icon: "⚡", action: () => scrollToSection('nlp-demo') },
    { category: "Navigation", title: "Go to Technical Arsenal", icon: "🛠️", action: () => scrollToSection('skills') },
    { category: "Navigation", title: "Go to Featured Projects", icon: "🚀", action: () => scrollToSection('projects') },
    { category: "Navigation", title: "Go to Architecture Pipeline", icon: "🔬", action: () => scrollToSection('arch-flow') },
    { category: "Navigation", title: "Go to Education & Standing", icon: "🎓", action: () => scrollToSection('experience') },
    { category: "Navigation", title: "Go to GitHub Hub", icon: "🐙", action: () => scrollToSection('github-stats') },
    { category: "Navigation", title: "Go to Contact", icon: "✉️", action: () => scrollToSection('contact') },

    { category: "Projects", title: "AI Contract Risk Analyzer (Deep Dive)", icon: "📑", action: () => openProjectDetailModal('ai-contract-risk-analyzer') },
    { category: "Projects", title: "InternIntel AI (Deep Dive)", icon: "🎯", action: () => openProjectDetailModal('internintel-ai') },
    { category: "Projects", title: "SentinelAI (Deep Dive)", icon: "🛡️", action: () => openProjectDetailModal('sentinelai') },
    { category: "Projects", title: "Smart Expense Tracker (Deep Dive)", icon: "💰", action: () => openProjectDetailModal('expense-tracker') },

    { category: "Actions", title: "View Printable CV / Resume", icon: "📄", action: () => document.getElementById('open-resume-btn')?.click() },
    { category: "Actions", title: "Copy Email Address", icon: "📋", action: () => document.getElementById('copy-email-btn')?.click() },
    { category: "Actions", title: "Toggle Light / Dark Mode", icon: "🌓", action: () => document.getElementById('theme-toggle')?.click() },
    { category: "External", title: "Open GitHub Profile (Kritzz-23)", icon: "↗", action: () => window.open(PORTFOLIO_DATA.profile.githubUrl, '_blank') },
    { category: "External", title: "Open LinkedIn Profile", icon: "↗", action: () => window.open(PORTFOLIO_DATA.profile.linkedinUrl, '_blank') }
  ];

  let selectedIndex = 0;
  let currentFiltered = [...commands];

  function openPalette() {
    paletteBackdrop.classList.add('show');
    paletteInput.value = '';
    renderItems(commands);
    paletteInput.focus();
    playSynthTone('modal');
  }

  function closePalette() {
    paletteBackdrop.classList.remove('show');
  }

  function renderItems(items) {
    currentFiltered = items;
    selectedIndex = 0;
    paletteList.innerHTML = '';

    if (items.length === 0) {
      paletteList.innerHTML = `<div style="text-align: center; color: var(--text-dim); padding: 25px;">No matching commands found.</div>`;
      return;
    }

    let lastCategory = '';
    items.forEach((item, idx) => {
      if (item.category !== lastCategory) {
        lastCategory = item.category;
        const grp = document.createElement('div');
        grp.className = 'cmd-group-label';
        grp.textContent = item.category;
        paletteList.appendChild(grp);
      }

      const el = document.createElement('div');
      el.className = `cmd-item ${idx === 0 ? 'selected' : ''}`;
      el.innerHTML = `
        <div class="cmd-item-left">
          <span>${item.icon}</span>
          <span class="cmd-item-title">${item.title}</span>
        </div>
        <span class="cmd-item-shortcut">Select ↵</span>
      `;
      el.addEventListener('click', () => {
        closePalette();
        item.action();
      });
      paletteList.appendChild(el);
    });
  }

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (paletteBackdrop.classList.contains('show')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && paletteBackdrop.classList.contains('show')) {
      closePalette();
    }
  });

  paletteInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = commands.filter(c => 
      c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
    );
    renderItems(filtered);
  });

  paletteInput.addEventListener('keydown', (e) => {
    const renderedItems = paletteList.querySelectorAll('.cmd-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % renderedItems.length;
      updateSelection(renderedItems);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + renderedItems.length) % renderedItems.length;
      updateSelection(renderedItems);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFiltered[selectedIndex]) {
        closePalette();
        currentFiltered[selectedIndex].action();
      }
    }
  });

  function updateSelection(items) {
    items.forEach((it, i) => {
      it.classList.toggle('selected', i === selectedIndex);
      if (i === selectedIndex) it.scrollIntoView({ block: 'nearest' });
    });
  }

  openCmdBtns.forEach(b => b.addEventListener('click', openPalette));

  paletteBackdrop.addEventListener('click', (e) => {
    if (e.target === paletteBackdrop) closePalette();
  });

  function scrollToSection(id) {
    const s = document.getElementById(id);
    if (s) s.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   6. ADVANCED FEATURE: Interactive NLP Contract Risk Analyzer Playground
   ========================================================================== */
function initNLPPlayground() {
  const clauseBtns = document.querySelectorAll('.clause-chip-btn');
  const textarea = document.getElementById('nlp-clause-input');
  const analyzeBtn = document.getElementById('nlp-run-btn');
  const resultsCard = document.getElementById('nlp-results-card');
  const metricCategory = document.getElementById('nlp-res-category');
  const metricScore = document.getElementById('nlp-res-score');
  const highlightedBox = document.getElementById('nlp-res-highlighted');
  const remediationBox = document.getElementById('nlp-res-remediation');

  if (!textarea || !analyzeBtn || !resultsCard) return;

  const samples = PORTFOLIO_DATA.nlpPlayground.samples;
  let activeSample = 'indemnity';

  function loadSample(key) {
    activeSample = key;
    clauseBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-sample') === key);
    });
    if (samples[key]) {
      textarea.value = samples[key].text;
    }
  }

  clauseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sampleKey = btn.getAttribute('data-sample');
      loadSample(sampleKey);
      playSynthTone('tab');
    });
  });

  // Default load
  loadSample('indemnity');

  analyzeBtn.addEventListener('click', () => {
    const userText = textarea.value.trim();
    if (!userText) return;

    analyzeBtn.disabled = true;
    analyzeBtn.textContent = 'Running Transformer Inference... ⚡';
    playSynthTone('click');

    setTimeout(() => {
      analyzeBtn.disabled = false;
      analyzeBtn.textContent = 'Analyze Risk Pipeline ⚡';

      const data = samples[activeSample] || samples.indemnity;
      metricCategory.textContent = data.category;
      metricScore.textContent = data.riskLabel;
      metricScore.className = `res-metric-val ${data.riskLevel}`;

      let highlightedHtml = escapeHtml(userText);
      data.flaggedTokens.forEach(token => {
        const regex = new RegExp(`(${escapeRegex(token)})`, 'gi');
        highlightedHtml = highlightedHtml.replace(regex, '<span class="token-high-risk">$1</span>');
      });

      highlightedBox.innerHTML = highlightedHtml;
      remediationBox.textContent = data.remediation;
      resultsCard.classList.add('show');
      playSynthTone('success');
    }, 650);
  });

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

/* ==========================================================================
   7. ADVANCED FEATURE: Interactive System Architecture Flow Explorer
   ========================================================================== */
function initArchitectureExplorer() {
  const nodes = document.querySelectorAll('.pipeline-node');
  const titleElem = document.getElementById('arch-node-title');
  const descElem = document.getElementById('arch-node-desc');
  const latencyElem = document.getElementById('arch-node-latency');

  if (!nodes.length || !titleElem || !descElem) return;

  const pipeline = PORTFOLIO_DATA.architecturePipeline;

  nodes.forEach((node, index) => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const data = pipeline[index];
      if (data) {
        titleElem.textContent = data.title;
        descElem.textContent = data.desc;
        if (latencyElem) latencyElem.textContent = `Processing Time: ~${data.latency}`;
        playSynthTone('tab');
      }
    });
  });
}

/* ==========================================================================
   8. Interactive Code Terminal
   ========================================================================== */
function initTerminal() {
  const tabs = document.querySelectorAll('.term-tab');
  const codeDisplay = document.getElementById('terminal-code-display');
  const shellPane = document.getElementById('term-shell-pane');
  const termHistory = document.getElementById('term-history');
  const termInput = document.getElementById('term-input');
  const copyBtn = document.getElementById('term-copy-btn');

  let activeTab = 'kritika.py';

  function renderTab() {
    if (activeTab === 'terminal') {
      if (codeDisplay) codeDisplay.style.display = 'none';
      if (shellPane) shellPane.style.display = 'block';
      if (termInput) termInput.focus();
    } else {
      if (shellPane) shellPane.style.display = 'none';
      if (codeDisplay) {
        codeDisplay.style.display = 'block';
        const raw = PORTFOLIO_DATA.terminalFiles[activeTab] || '';
        codeDisplay.innerHTML = formatSyntax(raw, activeTab);
      }
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.getAttribute('data-tab');
      renderTab();
      playSynthTone('tab');
    });
  });

  renderTab();

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = PORTFOLIO_DATA.terminalFiles[activeTab] || '';
      navigator.clipboard.writeText(code).then(() => {
        showToast(`Copied ${activeTab} to clipboard!`);
        playSynthTone('copy');
      });
    });
  }

  if (termInput && termHistory) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = termInput.value.trim();
        if (!cmd) return;
        executeCmd(cmd);
        termInput.value = '';
        termHistory.scrollTop = termHistory.scrollHeight;
      }
    });
  }

  function executeCmd(rawCmd) {
    const cmd = rawCmd.toLowerCase();
    const entry = document.createElement('div');
    entry.className = 'term-entry';

    const cmdLine = `<div class="term-input-row"><span class="term-prompt">visitor@kritika:~$</span> <span>${escapeHtml(rawCmd)}</span></div>`;
    let responseHtml = '';

    switch (cmd) {
      case 'help':
        responseHtml = `
          <div style="color: #38bdf8;">Available commands:</div>
          <div>  <span style="color: #34d399;">skills</span>     - Inspect technology stack & competencies</div>
          <div>  <span style="color: #34d399;">projects</span>   - View featured applied AI & web systems</div>
          <div>  <span style="color: #34d399;">education</span>  - Academic standing & degree details</div>
          <div>  <span style="color: #34d399;">contact</span>    - Direct communication channels</div>
          <div>  <span style="color: #34d399;">clear</span>      - Clean up terminal output</div>
        `;
        break;

      case 'skills':
        responseHtml = `
          <div style="color: #38bdf8;">AI & ML:</div> Python, NLP, Transformers, Model Evaluation, Data Analytics<br>
          <div style="color: #a78bfa;">Web & Systems:</div> JavaScript (ES6+), React.js, FastAPI, SQL, Docker, Git
        `;
        break;

      case 'projects':
        responseHtml = `
          <div>1. <strong style="color: #a78bfa;">AI Contract Risk Analyzer:</strong> NLP Legal Risk Classifier</div>
          <div>2. <strong style="color: #38bdf8;">InternIntel AI:</strong> Intelligent Internship Opportunity Matching</div>
          <div>3. <strong style="color: #34d399;">SentinelAI:</strong> Incident Intelligence & Log Telemetry</div>
          <div>4. <strong style="color: #fbbf24;">Smart Expense Tracker:</strong> Persistent Client Finance Platform</div>
        `;
        break;

      case 'education':
        responseHtml = `<div>B.Tech in Computer Science & Engineering (AI & ML) — Brainware University, Kolkata (CGPA: 8.54/10).</div>`;
        break;

      case 'contact':
        responseHtml = `
          <div>Email: <a href="mailto:${PORTFOLIO_DATA.profile.email}" style="color: #38bdf8;">${PORTFOLIO_DATA.profile.email}</a></div>
          <div>GitHub: <a href="${PORTFOLIO_DATA.profile.githubUrl}" target="_blank" style="color: #34d399;">${PORTFOLIO_DATA.profile.githubUrl}</a></div>
          <div>LinkedIn: <a href="${PORTFOLIO_DATA.profile.linkedinUrl}" target="_blank" style="color: #a78bfa;">${PORTFOLIO_DATA.profile.linkedinUrl}</a></div>
        `;
        break;

      case 'clear':
        termHistory.innerHTML = '';
        return;

      default:
        responseHtml = `<div style="color: #ef4444;">Command not found: "${escapeHtml(rawCmd)}". Type <span style="color: #34d399;">help</span> for commands.</div>`;
        break;
    }

    entry.innerHTML = cmdLine + `<div class="term-output" style="margin-top: 4px; padding-left: 12px; border-left: 2px solid rgba(255,255,255,0.1);">${responseHtml}</div>`;
    termHistory.appendChild(entry);
    playSynthTone('type');
  }

  function formatSyntax(raw, filename) {
    if (filename.endsWith('.json')) {
      return `<pre><code>${raw
        .replace(/(".*?")(?=:)/g, '<span class="syn-prop">$1</span>')
        .replace(/(:\s*)(".*?")/g, '$1<span class="syn-string">$2</span>')
        .replace(/(:\s*)(\[.*?\])/gs, '$1<span class="syn-var">$2</span>')
      }</code></pre>`;
    }
    const escaped = escapeHtml(raw);
    const highlighted = escaped
      .replace(/\b(class|def|return|self|import|from|print)\b/g, '<span class="syn-keyword">$1</span>')
      .replace(/(#.+)/g, '<span class="syn-comment">$1</span>')
      .replace(/(".*?")/g, '<span class="syn-string">$1</span>')
      .replace(/\b(Engineer)\b/g, '<span class="syn-type">$1</span>');
    return `<pre><code>${highlighted}</code></pre>`;
  }
}

/* ==========================================================================
   9. Skills Matrix
   ========================================================================== */
function initSkills() {
  const container = document.getElementById('skills-grid-container');
  const searchInput = document.getElementById('skills-search');
  const filterBtns = document.querySelectorAll('.skills-filter-nav .filter-btn');
  if (!container) return;

  let activeCategory = 'all';
  let searchQuery = '';

  function renderSkills() {
    container.innerHTML = '';

    const filtered = PORTFOLIO_DATA.skills.filter(s => {
      const matchCat = activeCategory === 'all' || s.category === activeCategory;
      const matchSearch = s.name.toLowerCase().includes(searchQuery) ||
        s.tags.some(t => t.toLowerCase().includes(searchQuery));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 40px;">No skills match "${escapeHtml(searchQuery)}"</div>`;
      return;
    }

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <div class="skill-card-top">
          <div class="skill-meta">
            <div class="skill-icon-wrap">${skill.icon}</div>
            <div>
              <div class="skill-name">${skill.name}</div>
              <div class="skill-category-badge">${skill.category.toUpperCase()}</div>
            </div>
          </div>
          <div class="skill-level-percent">${skill.level}%</div>
        </div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
        </div>
        <div class="skill-tags">
          ${skill.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      `;
      container.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      renderSkills();
      playSynthTone('click');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderSkills();
    });
  }

  renderSkills();
}

/* ==========================================================================
   10. Featured Projects Showcase
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projects-grid-container');
  const filterPills = document.querySelectorAll('.project-pill');
  if (!container) return;

  let activeFilter = 'all';

  function renderProjects() {
    container.innerHTML = '';

    const filtered = PORTFOLIO_DATA.projects.filter(p => {
      if (activeFilter === 'all') return true;
      return p.category === activeFilter;
    });

    filtered.forEach(proj => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-image-box">
          <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy">
          <div class="project-overlay-badges">
            <span class="badge-featured">${proj.categoryLabel}</span>
          </div>
        </div>
        <div class="project-body">
          <div class="project-top-meta">
            <span class="project-category">${proj.category.toUpperCase()}</span>
            <span class="project-stars">★ ${proj.stars}</span>
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="project-stack">
            ${proj.stack.map(s => `<span class="tech-chip">${s}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="btn btn-primary btn-sm open-project-modal-btn" data-project-id="${proj.id}">
              Deep Dive & Arch ↗
            </button>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              View Repository ⚡
            </a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    container.querySelectorAll('.open-project-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-project-id');
        openProjectDetailModal(id);
      });
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter');
      renderProjects();
      playSynthTone('click');
    });
  });

  renderProjects();
}

function openProjectDetailModal(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('proj-modal-title');
  const modalBody = document.getElementById('proj-modal-body');

  modalTitle.textContent = proj.title;
  modalBody.innerHTML = `
    <div style="margin-bottom: 20px; border-radius: var(--radius-md); overflow: hidden; max-height: 320px;">
      <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px;">
      ${proj.stack.map(s => `<span class="tech-chip" style="background: rgba(139,92,246,0.15); color: var(--accent-primary);">${s}</span>`).join('')}
    </div>
    <h4 style="color: var(--text-main); font-size: 1.15rem; margin-bottom: 8px;">Architecture & System Design</h4>
    <p style="margin-bottom: 20px;">${proj.architecture}</p>

    <h4 style="color: var(--text-main); font-size: 1.15rem; margin-bottom: 8px;">Problem & Solution Overview</h4>
    <p style="margin-bottom: 20px;">${proj.overview}</p>

    <h4 style="color: var(--text-main); font-size: 1.15rem; margin-bottom: 8px;">Engineering Metrics & Impact</h4>
    <ul style="padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 6px;">
      ${proj.metrics.map(m => `<li>${m}</li>`).join('')}
    </ul>

    <div style="display: flex; gap: 14px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
      <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        Open Repository on GitHub
      </a>
      <button class="btn btn-secondary btn-sm close-modal-btn">Close</button>
    </div>
  `;

  modal.classList.add('show');
  playSynthTone('modal');

  modal.querySelector('.close-modal-btn').addEventListener('click', () => {
    modal.classList.remove('show');
  });
}

/* ==========================================================================
   11. Education & Milestones Timeline
   ========================================================================== */
function initTimeline() {
  const container = document.getElementById('timeline-items-container');
  if (!container) return;

  PORTFOLIO_DATA.experience.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-meta">
          <div>
            <h3 class="timeline-role">${item.role}</h3>
            <div class="timeline-org">${item.company} &bull; <span style="color: var(--text-dim);">${item.location}</span></div>
          </div>
          <span class="timeline-date">${item.period}</span>
        </div>
        <div class="timeline-content">
          <p>${item.description}</p>
          <ul>
            ${item.achievements.map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

/* ==========================================================================
   12. GitHub Activity Hub
   ========================================================================== */
function initGitHubStats() {
  const statCards = document.querySelectorAll('.gh-stat-card img');
  const username = PORTFOLIO_DATA.profile.githubUsername;

  statCards.forEach(img => {
    const type = img.getAttribute('data-stat-type');
    if (type === 'stats') {
      img.src = `https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=8b5cf6&icon_color=06b6d4`;
    } else if (type === 'languages') {
      img.src = `https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=8b5cf6`;
    } else if (type === 'streak') {
      img.src = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0d1117&ring=8b5cf6&fire=06b6d4`;
    }
  });
}

/* ==========================================================================
   13. Contact & Copy Tools
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
        showToast('Email address copied to clipboard!');
        playSynthTone('copy');
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('sender-subject').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !message) return;

      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = `🎉 Thank you, <strong>${escapeHtml(name)}</strong>! Launching email client to dispatch to <strong>${PORTFOLIO_DATA.profile.email}</strong>...`;
        feedback.style.display = 'block';
      }

      playSynthTone('success');
      showToast('Opening email client...');

      const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry - ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    });
  }
}

/* ==========================================================================
   14. Modals
   ========================================================================== */
function initModals() {
  const openResumeBtn = document.getElementById('open-resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  const deployGuideBtn = document.getElementById('open-deploy-guide-btn');
  const deployModal = document.getElementById('deploy-modal');
  const allModals = document.querySelectorAll('.modal-backdrop');

  if (openResumeBtn && resumeModal) {
    openResumeBtn.addEventListener('click', () => {
      resumeModal.classList.add('show');
      playSynthTone('modal');
    });
  }

  if (deployGuideBtn && deployModal) {
    deployGuideBtn.addEventListener('click', () => {
      deployModal.classList.add('show');
      playSynthTone('modal');
    });
  }

  allModals.forEach(m => {
    const closeBtn = m.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => m.classList.remove('show'));
    m.addEventListener('click', (e) => {
      if (e.target === m) m.classList.remove('show');
    });
  });

  const printResumeBtn = document.getElementById('print-resume-btn');
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => window.print());
  }
}

/* ==========================================================================
   15. Audio Feedback Generator
   ========================================================================== */
let audioCtx = null;
let soundEnabled = false;

function initAudioEngine() {
  const soundToggle = document.getElementById('sound-toggle');
  const soundIcon = document.getElementById('sound-icon');

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundIcon) soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
      showToast(soundEnabled ? 'Audio feedback enabled' : 'Audio muted');
      if (soundEnabled && !audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (soundEnabled) playSynthTone('click');
    });
  }
}

function playSynthTone(type) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'tab') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.07);
    } else if (type === 'type') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320 + Math.random() * 80, now);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.03);
    } else if (type === 'modal' || type === 'accent') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.12);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'copy' || type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.setValueAtTime(1050, now + 0.08);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.start(now);
      osc.stop(now + 0.16);
    }
  } catch (err) {}
}

/* ==========================================================================
   16. Utilities
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function updateLiveISTTime() {
  const elem = document.getElementById('live-time-display');
  if (!elem) return;
  try {
    const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true };
    const istTime = new Intl.DateTimeFormat([], options).format(new Date());
    elem.textContent = `${istTime} IST (UTC+5:30) • Active & Available`;
  } catch (e) {
    elem.textContent = 'IST (UTC+5:30) • Active & Available';
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
