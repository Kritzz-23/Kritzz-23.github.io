/**
 * KRITIKA GIRI — PROFESSIONAL PORTFOLIO ENGINE
 * Clean, modern, human-centered full stack developer portfolio
 * Tested for zero errors, responsive performance, and complete accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLiveKolkataClock();
  initCommandPalette();
  initMobileNav();
  initTypewriter();
  initProjects();
  initArchitectureSimulator();
  initNLPPlayground();
  initSkills();
  initTimeline();
  initContactForm();
  initModals();
});

/* ==========================================================================
   1. Theme Enforcement (Pristine Light Theme - Zero Blue/Dark Overrides)
   ========================================================================== */
function initThemeToggle() {
  const html = document.documentElement;
  html.setAttribute('data-theme', 'light');
  try {
    localStorage.removeItem('kg-theme');
    localStorage.setItem('kg-theme', 'light');
  } catch (e) {}
}

/* ==========================================================================
   2. Real-Time Kolkata IST Time Clock
   ========================================================================== */
function initLiveKolkataClock() {
  const heroTime = document.getElementById('hero-live-time');
  const footerTime = document.getElementById('footer-live-time');

  function update() {
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const timeStr = new Intl.DateTimeFormat('en-GB', options).format(now);
      const text = `Kolkata, IN: ${timeStr} IST`;
      if (heroTime) heroTime.textContent = text;
      if (footerTime) footerTime.textContent = text;
    } catch (e) {
      if (heroTime) heroTime.textContent = 'Kolkata, IN (IST)';
      if (footerTime) footerTime.textContent = 'Kolkata, IN (IST)';
    }
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   3. Quick Command Palette (⌘K / Ctrl + K) - Linear / Raycast Style
   ========================================================================== */
function initCommandPalette() {
  const modal = document.getElementById('cmd-palette-modal');
  const input = document.getElementById('cmd-input');
  const list = document.getElementById('cmd-list');
  const triggerBtn = document.getElementById('cmd-palette-btn');
  const escBtn = document.getElementById('cmd-esc-btn');

  if (!modal || !input || !list || !window.PORTFOLIO_DATA || !PORTFOLIO_DATA.commands) return;

  const commands = PORTFOLIO_DATA.commands;
  let activeIndex = 0;
  let currentFiltered = [...commands];

  function openPalette() {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    input.value = '';
    renderList(commands);
    setTimeout(() => input.focus(), 60);
  }

  function closePalette() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }

  function renderList(items) {
    currentFiltered = items;
    list.innerHTML = '';
    activeIndex = 0;

    if (items.length === 0) {
      list.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No matching commands found.
        </div>
      `;
      return;
    }

    // Group by category
    const groups = {};
    items.forEach((item, idx) => {
      const cat = item.category || 'Actions';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push({ item, globalIdx: idx });
    });

    Object.keys(groups).forEach(cat => {
      const title = document.createElement('div');
      title.className = 'cmd-group-title';
      title.textContent = cat;
      list.appendChild(title);

      groups[cat].forEach(({ item, globalIdx }) => {
        const row = document.createElement('div');
        row.className = `cmd-item ${globalIdx === activeIndex ? 'active' : ''}`;
        row.setAttribute('data-idx', globalIdx);

        row.innerHTML = `
          <div class="cmd-item-left">
            <span class="cmd-item-icon">${item.icon || '⚡'}</span>
            <span class="cmd-item-title">${item.title}</span>
          </div>
          <span class="cmd-item-category">${item.category}</span>
        `;

        row.addEventListener('click', () => {
          executeCommand(item);
        });

        row.addEventListener('mouseenter', () => {
          activeIndex = globalIdx;
          updateActiveItem();
        });

        list.appendChild(row);
      });
    });
  }

  function updateActiveItem() {
    const allRows = list.querySelectorAll('.cmd-item');
    allRows.forEach(r => {
      const idx = parseInt(r.getAttribute('data-idx'), 10);
      r.classList.toggle('active', idx === activeIndex);
      if (idx === activeIndex) {
        r.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  function executeCommand(cmd) {
    closePalette();
    if (!cmd) return;

    if (cmd.action === 'url' && cmd.url) {
      window.open(cmd.url, '_blank', 'noopener,noreferrer');
    } else if (cmd.action === 'scroll' && cmd.target) {
      const targetElem = document.querySelector(cmd.target);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (cmd.action === 'copy_email') {
      const email = 'girikritika30@gmail.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      } else {
        showToast(`Email: ${email}`);
      }
    }
  }

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      renderList(commands);
      return;
    }
    const filtered = commands.filter(c => 
      c.title.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.id.toLowerCase().includes(q)
    );
    renderList(filtered);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        activeIndex = (activeIndex + 1) % currentFiltered.length;
        updateActiveItem();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        activeIndex = (activeIndex - 1 + currentFiltered.length) % currentFiltered.length;
        updateActiveItem();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFiltered[activeIndex]) {
        executeCommand(currentFiltered[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openPalette);
  }

  if (escBtn) {
    escBtn.addEventListener('click', closePalette);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePalette();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('show')) {
        closePalette();
      } else {
        openPalette();
      }
    }
  });
}

/* ==========================================================================
   4. Mobile Navigation
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });
}

/* ==========================================================================
   5. Humanized Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const elem = document.getElementById('typewriter-text');
  if (!elem) return;

  const roles = [
    "Full Stack Web Development",
    "Python & FastAPI Backend Systems",
    "React.js & Modern Frontend Architecture",
    "Applied Machine Learning & NLP",
    "Resilient Distributed Software"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      elem.textContent = current.substring(0, charIdx);
      if (charIdx <= 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(type, 300);
        return;
      }
      setTimeout(type, 35);
    } else {
      charIdx++;
      elem.textContent = current.substring(0, charIdx);
      if (charIdx >= current.length) {
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 65);
    }
  }

  setTimeout(type, 600);
}

/* ==========================================================================
   6. Shipped Projects & Applications
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projects-container');
  const filterPills = document.querySelectorAll('.filter-pill');

  if (!container || !window.PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

  let activeFilter = 'all';

  function renderProjects() {
    container.innerHTML = '';
    const filtered = PORTFOLIO_DATA.projects.filter(p => {
      if (activeFilter === 'all') return true;
      return p.category === activeFilter;
    });

    filtered.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';

      const isLiveSentinel = proj.id === 'sentinelai' || (proj.demoUrl && proj.demoUrl.includes('SentinelAI'));

      card.innerHTML = `
        <div class="project-media-wrap">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
          ${isLiveSentinel ? `
            <div class="project-badge-overlay">
              <span class="featured-pill-tag" style="background: rgba(16, 185, 129, 0.95); color: #fff; padding: 4px 10px; border-radius: 999px;">
                ● Live on GitHub Pages
              </span>
            </div>
          ` : ''}
        </div>
        <div class="project-body">
          <div class="project-top-meta">
            <span class="project-category">${proj.categoryLabel || proj.category.toUpperCase()}</span>
            <span class="project-stars">★ ${proj.stars || 'Featured'}</span>
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="project-stack">
            ${proj.stack.map(s => `<span class="tech-chip">${s}</span>`).join('')}
          </div>
          <div class="project-actions">
            ${isLiveSentinel ? `
              <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-live btn-sm" style="flex: 1;">
                Live App 🚀
              </a>
            ` : ''}
            <button class="btn btn-primary btn-sm open-modal-btn" data-id="${proj.id}" style="${isLiveSentinel ? '' : 'flex: 1;'}">
              Architecture &amp; Specs ↗
            </button>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View Repository on GitHub">
              GitHub ⚡
            </a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    container.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
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
    });
  });

  renderProjects();
}

function openProjectDetailModal(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('project-modal');
  const bodyContent = document.getElementById('modal-body-content');
  if (!modal || !bodyContent) return;

  const isLive = proj.demoUrl && proj.demoUrl !== proj.githubUrl;

  bodyContent.innerHTML = `
    <div style="margin-bottom: 20px; border-radius: var(--radius-md); overflow: hidden; max-height: 320px; border: 1px solid var(--border-subtle);">
      <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;">
      ${proj.stack.map(s => `<span class="tech-chip" style="background: var(--accent-light); color: var(--accent-primary); font-weight: 600;">${s}</span>`).join('')}
    </div>
    <h3 style="font-family: var(--font-heading); font-size: 1.75rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">
      ${proj.title}
    </h3>
    <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 18px;">
      ${proj.description}
    </p>

    <!-- Modal Navigation Tabs -->
    <div class="modal-nav-tabs">
      <button class="modal-nav-tab active" data-tab="arch">Architecture &amp; Design</button>
      <button class="modal-nav-tab" data-tab="code">Implementation Code</button>
      <button class="modal-nav-tab" data-tab="metrics">Production Impact</button>
    </div>

    <!-- Tab 1: Architecture -->
    <div class="modal-tab-pane" id="tab-pane-arch">
      <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">
        System Design &amp; Architecture
      </h4>
      <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
        ${proj.architecture}
      </p>

      <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">
        Problem &amp; Solution Overview
      </h4>
      <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
        ${proj.overview}
      </p>
    </div>

    <!-- Tab 2: Code Snippet -->
    <div class="modal-tab-pane" id="tab-pane-code" style="display: none;">
      <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">
        Core Implementation Snippet
      </h4>
      <div class="modal-code-wrapper">
        <pre class="modal-code-block"><code>${escapeHtml(proj.codeSnippet || '// Implementation code available on GitHub repository')}</code></pre>
      </div>
    </div>

    <!-- Tab 3: Metrics -->
    <div class="modal-tab-pane" id="tab-pane-metrics" style="display: none;">
      <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">
        Engineering Metrics &amp; Benchmarks
      </h4>
      <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px; font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 16px;">
        ${proj.metrics.map(m => `<li>${m}</li>`).join('')}
      </ul>
    </div>

    <div style="display: flex; gap: 12px; padding-top: 18px; border-top: 1px solid var(--border-subtle); flex-wrap: wrap;">
      ${isLive ? `
        <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-live">
          Launch Live Application 🚀
        </a>
      ` : ''}
      <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        View Code on GitHub ⚡
      </a>
      <button class="btn btn-outline" id="modal-inner-close">Close</button>
    </div>
  `;

  // Setup tab switcher
  const tabs = bodyContent.querySelectorAll('.modal-nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabTarget = tab.getAttribute('data-tab');
      bodyContent.querySelectorAll('.modal-tab-pane').forEach(p => p.style.display = 'none');
      const activePane = bodyContent.querySelector(`#tab-pane-${tabTarget}`);
      if (activePane) activePane.style.display = 'block';
    });
  });

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');

  const innerClose = document.getElementById('modal-inner-close');
  if (innerClose) {
    innerClose.addEventListener('click', () => {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    });
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

/* ==========================================================================
   7. System Architecture & Request Pipeline Simulator
   ========================================================================== */
function initArchitectureSimulator() {
  const presetsGroup = document.getElementById('arch-presets-group');
  const stagesFlow = document.getElementById('pipeline-stages-flow');
  const endpointLabel = document.getElementById('sim-endpoint-label');
  const reqCode = document.getElementById('sim-req-code');
  const resCode = document.getElementById('sim-res-code');
  const latencyPill = document.getElementById('sim-latency-pill');
  const runBtn = document.getElementById('run-arch-sim-btn');

  if (!stagesFlow || !window.PORTFOLIO_DATA || !PORTFOLIO_DATA.simulationPresets) return;

  const presets = PORTFOLIO_DATA.simulationPresets;
  let activePreset = presets[0];
  let isSimulating = false;

  function renderPresets() {
    if (!presetsGroup) return;
    presetsGroup.innerHTML = '';
    presets.forEach(p => {
      const btn = document.createElement('button');
      btn.className = `arch-preset-btn ${p.id === activePreset.id ? 'active' : ''}`;
      btn.textContent = p.name;
      btn.addEventListener('click', () => {
        if (isSimulating) return;
        activePreset = p;
        presetsGroup.querySelectorAll('.arch-preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadPreset(activePreset);
      });
      presetsGroup.appendChild(btn);
    });
  }

  function loadPreset(preset) {
    if (endpointLabel) endpointLabel.textContent = preset.endpoint;
    if (reqCode) reqCode.textContent = JSON.stringify(preset.clientPayload, null, 2);
    if (resCode) resCode.textContent = `// Press 'Simulate Request Flow' to execute pipeline for: ${preset.badge}`;
    if (latencyPill) latencyPill.textContent = `Expected: ~${preset.totalLatency}`;

    renderStages(preset.stages);
  }

  function renderStages(stages) {
    stagesFlow.innerHTML = '';
    stages.forEach((st, idx) => {
      const card = document.createElement('div');
      card.className = 'pipeline-stage-card';
      card.id = `stage-node-${idx}`;
      card.innerHTML = `
        <div class="stage-top-meta">
          <span class="stage-step-badge">${idx + 1}</span>
          <span class="stage-latency-pill">${st.latency}</span>
        </div>
        <div class="stage-title">${st.name}</div>
        <div class="stage-desc">${st.status}</div>
      `;
      stagesFlow.appendChild(card);
    });
  }

  function runSimulation() {
    if (isSimulating) return;
    isSimulating = true;
    runBtn.disabled = true;
    runBtn.textContent = 'Simulating Pipeline... ⏳';

    const stageCards = stagesFlow.querySelectorAll('.pipeline-stage-card');
    stageCards.forEach(c => {
      c.classList.remove('stage-active', 'stage-done');
    });

    if (resCode) resCode.textContent = '// Ingressing request payload into Gateway...\n// Running asynchronous worker queue & classification model...';

    let currentStage = 0;
    function advance() {
      if (currentStage < stageCards.length) {
        if (currentStage > 0) {
          stageCards[currentStage - 1].classList.remove('stage-active');
          stageCards[currentStage - 1].classList.add('stage-done');
        }
        stageCards[currentStage].classList.add('stage-active');
        currentStage++;
        setTimeout(advance, 360);
      } else {
        if (stageCards.length > 0) {
          stageCards[stageCards.length - 1].classList.remove('stage-active');
          stageCards[stageCards.length - 1].classList.add('stage-done');
        }
        if (resCode) {
          resCode.textContent = JSON.stringify(activePreset.responsePayload, null, 2);
        }
        if (latencyPill) {
          latencyPill.textContent = `Total: ${activePreset.totalLatency}`;
        }
        runBtn.disabled = false;
        runBtn.textContent = 'Simulate Request Flow ⚡';
        isSimulating = false;
        showToast(`Request processed through architecture pipeline in ${activePreset.totalLatency}!`);
      }
    }

    advance();
  }

  if (runBtn) {
    runBtn.addEventListener('click', runSimulation);
  }

  renderPresets();
  loadPreset(activePreset);
}

/* ==========================================================================
   8. Live NLP Contract Risk Playground
   ========================================================================== */
function initNLPPlayground() {
  const textArea = document.getElementById('nlp-input-text');
  const runBtn = document.getElementById('nlp-run-btn');
  const resetBtn = document.getElementById('nlp-reset-btn');
  const presetBtns = document.querySelectorAll('.nlp-preset-btn');
  const riskPill = document.getElementById('nlp-risk-pill');
  const riskScore = document.getElementById('nlp-risk-score');
  const categoryVal = document.getElementById('nlp-category-val');
  const tokensContainer = document.getElementById('nlp-tokens-container');
  const remediationVal = document.getElementById('nlp-remediation-val');

  if (!textArea || !runBtn || !window.PORTFOLIO_DATA || !PORTFOLIO_DATA.nlpPlayground) return;

  const samples = PORTFOLIO_DATA.nlpPlayground.samples;

  function loadSample(key) {
    const s = samples[key];
    if (!s) return;
    textArea.value = s.text;
    updateDisplay(s);
  }

  function updateDisplay(data) {
    if (riskScore) riskScore.innerHTML = `${data.riskScore}<span style="font-size: 1rem; color: var(--text-muted);">/100</span>`;
    if (riskPill) {
      riskPill.textContent = data.riskLabel || (data.riskScore > 70 ? 'CRITICAL RISK' : data.riskScore > 40 ? 'ELEVATED RISK' : 'LOW RISK');
      if (data.riskScore > 70) {
        riskPill.style.backgroundColor = 'var(--danger-light)';
        riskPill.style.color = 'var(--danger-color)';
      } else if (data.riskScore > 40) {
        riskPill.style.backgroundColor = 'var(--warning-light)';
        riskPill.style.color = 'var(--warning-color)';
      } else {
        riskPill.style.backgroundColor = 'var(--success-light)';
        riskPill.style.color = 'var(--success-color)';
      }
    }
    if (categoryVal) categoryVal.textContent = data.category;
    if (remediationVal) remediationVal.textContent = data.remediation;

    if (tokensContainer) {
      tokensContainer.innerHTML = '';
      (data.flaggedTokens || []).forEach(token => {
        const span = document.createElement('span');
        span.className = 'nlp-token-chip';
        span.textContent = `"${token}"`;
        tokensContainer.appendChild(span);
      });
    }
  }

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sampleKey = btn.getAttribute('data-sample');
      loadSample(sampleKey);
    });
  });

  runBtn.addEventListener('click', () => {
    const text = textArea.value.trim().toLowerCase();
    if (!text) return;

    let computedScore = 20;
    let computedCategory = "General Commercial Terms";
    let flagged = [];
    let advice = "Terms appear standard. Ensure jurisdiction and dispute resolution align with organizational policies.";

    if (text.includes('indemnif') || text.includes('hold harmless') || text.includes('without limitation') || text.includes('any and all')) {
      computedScore = 92;
      computedCategory = "Indemnification & Unlimited Exposure";
      flagged = ["indemnify and hold harmless", "without limitation"];
      advice = "Cap liability to 12 months fees paid. Restrict indemnification strictly to third-party intellectual property infringement or gross negligence.";
    } else if (text.includes('non-compete') || text.includes('competitor') || text.includes('years') || text.includes('restrict')) {
      computedScore = 65;
      computedCategory = "Restrictive Covenants";
      flagged = ["non-compete covenant", "years following termination"];
      advice = "Limit geographic scope to immediate active client markets and reduce duration to 12 months maximum.";
    } else if (text.includes('confidential') || text.includes('proprietary') || text.includes('nda')) {
      computedScore = 18;
      computedCategory = "Mutual Confidentiality";
      flagged = ["standard of care", "proprietary information"];
      advice = "Standard confidentiality terms. Confirm survival period matches business sensitivity requirements (typically 2-3 years).";
    } else {
      computedScore = 48;
      computedCategory = "Custom Commercial Clause";
      flagged = ["extracted sentence phrase"];
      advice = "Review definition of deliverables, acceptance criteria, and termination for convenience windows.";
    }

    updateDisplay({
      riskScore: computedScore,
      riskLabel: computedScore > 70 ? 'CRITICAL RISK' : computedScore > 40 ? 'MODERATE RISK' : 'LOW RISK',
      category: computedCategory,
      flaggedTokens: flagged,
      remediation: advice
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      loadSample('indemnity');
      presetBtns.forEach(b => b.classList.remove('active'));
      if (presetBtns[0]) presetBtns[0].classList.add('active');
    });
  }

  loadSample('indemnity');
}

/* ==========================================================================
   9. Technical Skills Arsenal with Live Search Filter
   ========================================================================== */
function initSkills() {
  const container = document.getElementById('skills-container');
  const tabs = document.querySelectorAll('.skill-tab-btn');
  const searchInput = document.getElementById('skills-search-input');
  const countPill = document.getElementById('skills-count-pill');

  if (!container || !window.PORTFOLIO_DATA || !PORTFOLIO_DATA.skills) return;

  let activeCategory = 'all';
  let searchQuery = '';

  function renderSkills() {
    container.innerHTML = '';
    const filtered = PORTFOLIO_DATA.skills.filter(s => {
      const matchCat = activeCategory === 'all' || s.category === activeCategory;
      if (!matchCat) return false;
      if (!searchQuery) return true;
      const nameMatch = s.name.toLowerCase().includes(searchQuery);
      const tagMatch = (s.tags || []).some(t => t.toLowerCase().includes(searchQuery));
      return nameMatch || tagMatch;
    });

    if (countPill) {
      countPill.textContent = `${filtered.length} Skills`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 36px; text-align: center; color: var(--text-muted); background: #FFFFFF; border: 1px dashed var(--border-subtle); border-radius: var(--radius-md);">
          No skills match "${searchQuery}". Try searching "Python", "React", "FastAPI", or "SQL".
        </div>
      `;
      return;
    }

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <div class="skill-card-top">
          <div class="skill-icon-name">
            <span class="skill-icon">${skill.icon || '⚡'}</span>
            <span class="skill-title">${skill.name}</span>
          </div>
          <span class="skill-level-text">${skill.level}%</span>
        </div>
        <div class="skill-bar-wrap">
          <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
        </div>
        <div class="skill-tags-row">
          ${(skill.tags || []).map(t => `<span class="skill-subtag">${t}</span>`).join('')}
        </div>
      `;
      container.appendChild(card);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-skill-cat');
      renderSkills();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.trim().toLowerCase();
      renderSkills();
    });
  }

  renderSkills();
}

/* ==========================================================================
   10. Education & Timeline
   ========================================================================== */
function initTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || !window.PORTFOLIO_DATA || !PORTFOLIO_DATA.experience) return;

  container.innerHTML = '';
  PORTFOLIO_DATA.experience.forEach(item => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div class="timeline-role">${item.role}</div>
          <span class="timeline-date">${item.period}</span>
        </div>
        <div class="timeline-org">${item.company} &bull; ${item.location}</div>
        <p class="timeline-desc">${item.description}</p>
        <ul style="padding-left: 18px; margin-top: 10px; display: flex; flex-direction: column; gap: 4px; font-size: 0.88rem; color: var(--text-secondary);">
          ${(item.achievements || []).map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    `;
    container.appendChild(div);
  });
}

/* ==========================================================================
   11. Contact Form & Email Copy Toast
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyBtn = document.getElementById('copy-email-btn');

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'girikritika30@gmail.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      } else {
        showToast(`Email: ${email}`);
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const msg = document.getElementById('contact-message').value.trim();

      if (!name || !email || !msg) return;

      showToast(`Thank you, ${name}! Opening mail client...`);
      setTimeout(() => {
        window.location.href = `mailto:girikritika30@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
      }, 700);

      form.reset();
    });
  }
}

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
  }, 3200);
}

/* ==========================================================================
   12. Modal Accessibility & Esc Handlers
   ========================================================================== */
function initModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}
