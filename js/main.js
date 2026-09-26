/**
 * KRITIKA GIRI — PORTFOLIO CORE ENGINE
 * Interactive behaviors, terminal simulator, project modals, theme switcher & sound engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursorGlow();
  initHeaderScroll();
  initThemeAndAccents();
  initTypewriter();
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
   1. Interactive Cursor Spotlight
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

  function animateSpotlight() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    cursorGlow.style.left = `${currentX}px`;
    cursorGlow.style.top = `${currentY}px`;
    requestAnimationFrame(animateSpotlight);
  }
  requestAnimationFrame(animateSpotlight);
}

/* ==========================================================================
   2. Header Scroll & Mobile Nav
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
    highlightActiveNav();
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      mobileToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        mobileToggle.classList.remove('active');
      });
    });
  }

  function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (targetLink) {
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(l => l.classList.remove('active'));
          targetLink.classList.add('active');
        }
      }
    });
  }
}

/* ==========================================================================
   3. Theme Modes & Accent Switcher
   ========================================================================== */
function initThemeAndAccents() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const accentBtn = document.getElementById('accent-btn');
  const accentMenu = document.getElementById('accent-menu');
  const accentOpts = document.querySelectorAll('.accent-opt');

  // Load saved theme
  const savedTheme = localStorage.getItem('kg_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Load saved accent
  const savedAccent = localStorage.getItem('kg_accent') || 'violet';
  document.documentElement.setAttribute('data-accent', savedAccent);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('kg_theme', nextTheme);
      updateThemeIcon(nextTheme);
      playSynthTone('click');
      showToast(`Switched to ${nextTheme} mode`);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Accent Switcher Dropdown
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
        showToast(`Accent palette updated: ${accent.toUpperCase()}`);
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
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 95;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   5. Interactive Code Terminal
   ========================================================================== */
function initTerminal() {
  const tabs = document.querySelectorAll('.term-tab');
  const codeContentElem = document.getElementById('terminal-code-display');
  const termShellPane = document.getElementById('term-shell-pane');
  const termHistory = document.getElementById('term-history');
  const termInput = document.getElementById('term-input');
  const copyBtn = document.getElementById('term-copy-btn');

  let activeTab = 'kritika.ts';

  function renderTabContent() {
    if (activeTab === 'terminal') {
      if (codeContentElem) codeContentElem.style.display = 'none';
      if (termShellPane) termShellPane.style.display = 'block';
      if (termInput) termInput.focus();
    } else {
      if (termShellPane) termShellPane.style.display = 'none';
      if (codeContentElem) {
        codeContentElem.style.display = 'block';
        const rawCode = PORTFOLIO_DATA.terminalFiles[activeTab] || '';
        codeContentElem.innerHTML = formatSyntax(rawCode, activeTab);
      }
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.getAttribute('data-tab');
      renderTabContent();
      playSynthTone('tab');
    });
  });

  renderTabContent();

  // Copy Code Button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeToCopy = PORTFOLIO_DATA.terminalFiles[activeTab] || 'Kritika Giri - Full Stack Developer';
      navigator.clipboard.writeText(codeToCopy).then(() => {
        showToast(`Copied ${activeTab} to clipboard!`);
        playSynthTone('copy');
      });
    });
  }

  // Interactive Terminal Shell
  if (termInput && termHistory) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = termInput.value.trim();
        if (!cmd) return;
        executeTerminalCommand(cmd);
        termInput.value = '';
        termHistory.scrollTop = termHistory.scrollHeight;
      }
    });
  }

  function executeTerminalCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase();
    const entry = document.createElement('div');
    entry.className = 'term-entry';

    const cmdLine = `<div class="term-input-row"><span class="term-prompt">visitor@kritika:~$</span> <span>${escapeHtml(rawCmd)}</span></div>`;
    let responseHtml = '';

    switch (cmd) {
      case 'help':
        responseHtml = `
          <div style="color: #38bdf8; margin: 4px 0;">Available commands:</div>
          <div>  <span style="color: #34d399;">skills</span>     - View primary technology stack</div>
          <div>  <span style="color: #34d399;">projects</span>   - List featured production projects</div>
          <div>  <span style="color: #34d399;">about</span>      - Short bio & philosophy</div>
          <div>  <span style="color: #34d399;">contact</span>    - Show direct contact channels</div>
          <div>  <span style="color: #34d399;">deploy</span>     - Open GitHub Pages deployment guide</div>
          <div>  <span style="color: #34d399;">clear</span>      - Clean up terminal screen</div>
          <div>  <span style="color: #34d399;">whoami</span>     - Inspect current session</div>
        `;
        break;

      case 'skills':
        responseHtml = `
          <div style="color: #a78bfa;">Frontend:</div> React, Next.js, TypeScript, Tailwind CSS, HTML5/CSS3, Redux<br>
          <div style="color: #38bdf8;">Backend:</div> Node.js, Express, FastAPI, Python, PostgreSQL, MongoDB, Redis<br>
          <div style="color: #34d399;">DevOps:</div> Docker, Git, GitHub Actions, AWS, Linux, CI/CD
        `;
        break;

      case 'projects':
        responseHtml = `
          <div>1. <strong style="color: #a78bfa;">DevFlow:</strong> AI Collaborative Real-Time Workspace</div>
          <div>2. <strong style="color: #38bdf8;">Skyline:</strong> Cloud Observability & Telemetry Platform</div>
          <div>3. <strong style="color: #fbbf24;">NovaCommerce:</strong> Headless E-Commerce & Stripe Engine</div>
          <div>4. <strong style="color: #34d399;">PulseEngine:</strong> High-Throughput Distributed API Gateway</div>
          <div style="margin-top: 6px; color: #94a3b8;">Scroll down to "Projects" section for interactive cards.</div>
        `;
        break;

      case 'about':
        responseHtml = `<div>${PORTFOLIO_DATA.profile.tagline} Focused on crafting resilient systems and polished user experiences.</div>`;
        break;

      case 'contact':
        responseHtml = `
          <div>Email: <a href="mailto:${PORTFOLIO_DATA.profile.email}" style="color: #38bdf8;">${PORTFOLIO_DATA.profile.email}</a></div>
          <div>GitHub: <a href="${PORTFOLIO_DATA.profile.githubUrl}" target="_blank" style="color: #34d399;">${PORTFOLIO_DATA.profile.githubUrl}</a></div>
        `;
        break;

      case 'deploy':
        openDeploymentModal();
        responseHtml = `<div>Opened GitHub Pages Deployment Guide modal.</div>`;
        break;

      case 'clear':
        termHistory.innerHTML = '';
        return;

      case 'whoami':
        responseHtml = `<div>guest@visitor-host (Welcome! You are exploring Kritika Giri's engineering portfolio).</div>`;
        break;

      case 'date':
        responseHtml = `<div>${new Date().toUTCString()}</div>`;
        break;

      default:
        responseHtml = `<div style="color: #ef4444;">Command not found: "${escapeHtml(rawCmd)}". Type <span style="color: #34d399;">help</span> for available commands.</div>`;
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
    // TypeScript syntax highlight simple parser
    const escaped = escapeHtml(raw);
    const highlighted = escaped
      .replace(/\b(class|readonly|public|string|export|default|new|return)\b/g, '<span class="syn-keyword">$1</span>')
      .replace(/(\/\/.+)/g, '<span class="syn-comment">$1</span>')
      .replace(/(".*?")/g, '<span class="syn-string">$1</span>')
      .replace(/\b(Engineer)\b/g, '<span class="syn-type">$1</span>');
    return `<pre><code>${highlighted}</code></pre>`;
  }
}

/* ==========================================================================
   6. Skills Matrix & Live Search
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
   7. Featured Projects Showcase & Modals
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
            <span class="badge-featured badge-arch">${proj.categoryLabel}</span>
          </div>
        </div>
        <div class="project-body">
          <div class="project-top-meta">
            <span class="project-category">${proj.category.toUpperCase()}</span>
            <span class="project-stars">★ ${proj.stars} stars</span>
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
              GitHub ⚡
            </a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Attach click events to modal buttons
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
        View Repository on GitHub
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
   8. Experience Timeline
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
   9. GitHub Stats & Activity Live Hub
   ========================================================================== */
function initGitHubStats() {
  const ghInput = document.getElementById('gh-custom-username');
  const ghUpdateBtn = document.getElementById('gh-update-btn');
  const statCards = document.querySelectorAll('.gh-stat-card img');
  const profileLink = document.getElementById('gh-profile-link');
  const displayedUser = document.getElementById('gh-displayed-username');

  let currentUsername = PORTFOLIO_DATA.profile.githubUsername;

  function updateCards(username) {
    currentUsername = username;
    if (displayedUser) displayedUser.textContent = `@${username}`;
    if (profileLink) profileLink.href = `https://github.com/${username}`;

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

  if (ghUpdateBtn && ghInput) {
    ghUpdateBtn.addEventListener('click', () => {
      const val = ghInput.value.trim();
      if (val) {
        updateCards(val);
        showToast(`GitHub cards updated for: @${val}`);
        playSynthTone('click');
      }
    });

    ghInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        ghUpdateBtn.click();
      }
    });
  }

  updateCards(currentUsername);
}

/* ==========================================================================
   10. Interactive Contact Form & Copy Tools
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

      if (!name || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
      }

      // Show immediate pleasant confirmation
      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = `🎉 Thank you, <strong>${escapeHtml(name)}</strong>! Opening your email client to dispatch to <strong>${PORTFOLIO_DATA.profile.email}</strong>...`;
        feedback.style.display = 'block';
      }

      playSynthTone('success');
      showToast('Opening email client...');

      // Trigger mailto link with encoded message
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry - ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    });
  }
}

/* ==========================================================================
   11. Modals (Resume & Deployment Guide)
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
      openDeploymentModal();
    });
  }

  allModals.forEach(m => {
    const closeBtn = m.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        m.classList.remove('show');
      });
    }

    m.addEventListener('click', (e) => {
      if (e.target === m) {
        m.classList.remove('show');
      }
    });
  });

  // Print resume
  const printResumeBtn = document.getElementById('print-resume-btn');
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function openDeploymentModal() {
  const deployModal = document.getElementById('deploy-modal');
  if (deployModal) {
    deployModal.classList.add('show');
    playSynthTone('modal');
  }
}

/* ==========================================================================
   12. Subtle Web Audio Tone Generator
   ========================================================================== */
let audioCtx = null;
let soundEnabled = false;

function initAudioEngine() {
  const soundToggle = document.getElementById('sound-toggle');
  const soundIcon = document.getElementById('sound-icon');

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundIcon) {
        soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
      }
      showToast(soundEnabled ? 'Interactive audio feedback enabled' : 'Audio muted');
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
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'tab') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'type') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320 + Math.random() * 80, now);
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'modal' || type === 'accent') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.12);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'copy' || type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.setValueAtTime(1050, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    }
  } catch (err) {
    // Audio context not allowed without prior interaction or unsupported
  }
}

/* ==========================================================================
   13. Utilities
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
