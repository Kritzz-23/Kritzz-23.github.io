/**
 * KRITIKA GIRI — GRAVITY DESIGN MASTER ENGINE
 * Inspired by Awwwards Nominee (gravity-design.de)
 * Includes: 3D Cylindrical Orbit, Cursor Gravity, Big Bang Detonation,
 * N-Body Gravity Lab, and Procedural Web Audio Synth.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Audio Synthesizer Engine (Web Audio API)
  // --------------------------------------------------------------------------
  let audioCtx = null;
  let soundEnabled = false;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSynth(type) {
    if (!soundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;

      if (type === 'hover') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'click') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'orbit') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220 + Math.random() * 80, now);
        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'bigbang') {
        // Deep sub-bass boom + noise
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(32, now + 0.9);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

        // Filter
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.exponentialRampToValueAtTime(80, now + 0.9);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.9);
      }
    } catch (e) {
      // Audio fallback
    }
  }

  // --------------------------------------------------------------------------
  // 2. Magnetic Celestial Cursor
  // --------------------------------------------------------------------------
  function initMagneticCursor() {
    const dot = document.getElementById('cursor-dot');
    const follower = document.getElementById('cursor-follower');
    if (!dot || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }, { passive: true });

    function renderFollower() {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(renderFollower);
    }
    requestAnimationFrame(renderFollower);

    // Hover interactions
    const interactiveElements = 'a, button, .orbit-card, .contact-magnetic-pill';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveElements)) {
        document.body.classList.add('cursor-hover');
        playSynth('hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveElements)) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Hero Gravitational Particle Field (Cursor Gravity)
  // --------------------------------------------------------------------------
  function initHeroGravityCanvas() {
    const canvas = document.getElementById('hero-gravity-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    const particleCount = Math.min(220, Math.floor((width * height) / 6000));
    const particles = [];

    let mouse = {
      x: width / 2,
      y: height / 2,
      active: false
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    // Particle Object
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseRadius: Math.random() * 1.8 + 0.8,
        color: Math.random() > 0.3 ? '#B481F8' : '#4EECD5',
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    // Gravitational Shockwave on Click
    let shockwaves = [];
    canvas.addEventListener('click', (e) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 280,
        opacity: 0.8
      });
      playSynth('click');
    });

    function animate() {
      // Celestial subtle trail
      ctx.fillStyle = 'rgba(16, 16, 16, 0.22)';
      ctx.fillRect(0, 0, width, height);

      // Render shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(180, 129, 248, ${sw.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        sw.radius += 8;
        sw.opacity *= 0.94;
        if (sw.radius > sw.maxRadius || sw.opacity < 0.02) {
          shockwaves.splice(s, 1);
        }
      }

      // Gravitational center (Center of viewport or Cursor)
      const targetX = mouse.active ? mouse.x : width / 2;
      const targetY = mouse.active ? mouse.y : height / 2;
      const gravityStrength = mouse.active ? 1.2 : 0.4;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gravitational Attraction: F = G * M / (r^2 + epsilon)
        const dx = targetX - p.x;
        const dy = targetY - p.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        if (dist > 30 && dist < 700) {
          const force = (gravityStrength * 45) / (distSq + 1200);
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping / Friction
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Render Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      requestAnimationFrame(animate);
    }
    animate();
  }

  // --------------------------------------------------------------------------
  // 4. The 3D Project Orbit Engine (Perspective Cylindrical System)
  // --------------------------------------------------------------------------
  function init3DProjectOrbit() {
    const world = document.getElementById('orbit-world');
    const viewport = document.getElementById('orbit-viewport');
    const stage = document.getElementById('orbit');
    const viewToggle = document.getElementById('orbit-view-toggle');
    const modeLabel = document.getElementById('orbit-mode-label');
    const modeIcon = document.getElementById('orbit-mode-icon');
    const prevBtn = document.getElementById('orbit-prev-btn');
    const nextBtn = document.getElementById('orbit-next-btn');

    if (!world || !viewport || !PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

    const projects = PORTFOLIO_DATA.projects;
    const totalProjects = projects.length;
    const angleStep = 360 / totalProjects;
    const radius = Math.min(520, window.innerWidth * 0.42);

    let currentAngle = 0;
    let targetAngle = 0;
    let isDragging = false;
    let startX = 0;
    let velocity = 0;
    let isGalleryMode = false;

    // Render 3D Cards
    world.innerHTML = '';
    projects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'orbit-card';
      card.setAttribute('data-index', idx);
      card.setAttribute('data-id', proj.id);

      card.innerHTML = `
        <div class="orbit-card-media">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
        </div>
        <div class="orbit-card-overlay"></div>
        <div class="orbit-card-shade"></div>
        <div class="orbit-card-content">
          <div class="orbit-card-top">
            <span class="orbit-badge">${proj.orbitBadge || `SATELLITE 0${idx + 1}`}</span>
            ${proj.demoUrl && proj.demoUrl.includes('SentinelAI') ? '<span class="orbit-live-pill">● LIVE APP</span>' : ''}
          </div>
          <div class="orbit-card-bottom">
            <div class="orbit-card-category">${proj.categoryLabel || proj.category.toUpperCase()}</div>
            <h3 class="orbit-card-title">${proj.title}</h3>
            <p class="orbit-card-desc">${proj.description}</p>
            <div class="orbit-card-stack">
              ${proj.stack.slice(0, 3).map(s => `<span class="orbit-stack-pill">${s}</span>`).join('')}
            </div>
            <div class="orbit-card-action">
              <button class="orbit-btn-inspect open-modal-btn" data-id="${proj.id}">
                Inspect ↗
              </button>
              ${proj.demoUrl && proj.demoUrl.includes('SentinelAI') ? `
              <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="orbit-btn-live">
                Live App 🚀
              </a>` : ''}
            </div>
          </div>
        </div>
      `;

      world.appendChild(card);
    });

    const cards = world.querySelectorAll('.orbit-card');

    // Update 3D cylindrical card placement & dynamic depth of field
    function updateCardTransforms() {
      if (isGalleryMode) return;

      cards.forEach((card, idx) => {
        const baseAngle = idx * angleStep;
        const cardAngle = baseAngle + currentAngle;
        const rad = (cardAngle * Math.PI) / 180;

        // Position on 3D circle
        const x = Math.sin(rad) * radius;
        const z = Math.cos(rad) * radius;

        card.style.transform = `translate3d(${x}px, 0px, ${z}px) rotateY(${cardAngle}deg)`;

        // Distance / Angle Facing Camera (z is depth, positive is towards viewer)
        const normalizedCos = Math.cos(rad); // 1 = facing front, -1 = facing back
        const shade = card.querySelector('.orbit-card-shade');
        if (shade) {
          // Darken back-facing cards
          const shadeOpacity = Math.max(0, (1 - normalizedCos) * 0.45);
          shade.style.opacity = shadeOpacity.toFixed(2);
        }

        // Active front card highlights
        if (normalizedCos > 0.85) {
          card.classList.add('is-active-focus');
        } else {
          card.classList.remove('is-active-focus');
        }
      });
    }

    // Animation Loop with Inertia Deceleration
    function renderOrbit() {
      if (!isGalleryMode) {
        if (!isDragging) {
          currentAngle += velocity;
          velocity *= 0.94; // Friction damping

          // Subtle passive cosmic drift
          if (Math.abs(velocity) < 0.01) {
            velocity = 0;
            currentAngle += 0.04;
          }
        }
        updateCardTransforms();
      }
      requestAnimationFrame(renderOrbit);
    }
    requestAnimationFrame(renderOrbit);

    // Mouse & Touch Drag Listeners
    viewport.addEventListener('mousedown', (e) => {
      if (isGalleryMode || e.target.closest('button, a')) return;
      isDragging = true;
      startX = e.clientX;
      velocity = 0;
      initAudio();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging || isGalleryMode) return;
      const dx = e.clientX - startX;
      startX = e.clientX;
      velocity = dx * 0.15;
      currentAngle += velocity;
      if (Math.abs(dx) > 2) playSynth('orbit');
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Support
    viewport.addEventListener('touchstart', (e) => {
      if (isGalleryMode || e.target.closest('button, a')) return;
      isDragging = true;
      startX = e.touches[0].clientX;
      velocity = 0;
      initAudio();
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || isGalleryMode) return;
      const dx = e.touches[0].clientX - startX;
      startX = e.touches[0].clientX;
      velocity = dx * 0.18;
      currentAngle += velocity;
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Mouse Wheel Rotation
    viewport.addEventListener('wheel', (e) => {
      if (isGalleryMode) return;
      e.preventDefault();
      velocity += e.deltaY * 0.05;
      playSynth('orbit');
    }, { passive: false });

    // Arrow Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        velocity += angleStep * 0.35;
        playSynth('click');
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        velocity -= angleStep * 0.35;
        playSynth('click');
      });
    }

    // Toggle 3D Orbit vs Linear Gallery Mode
    if (viewToggle) {
      viewToggle.addEventListener('click', () => {
        isGalleryMode = !isGalleryMode;
        stage.classList.toggle('gallery-mode', isGalleryMode);
        if (isGalleryMode) {
          modeLabel.textContent = 'SWITCH TO 3D ORBIT VIEW';
          modeIcon.textContent = '🎞️';
        } else {
          modeLabel.textContent = 'SWITCH TO GALLERY VIEW';
          modeIcon.textContent = '🪐';
          updateCardTransforms();
        }
        playSynth('click');
      });
    }

    // Modal click trigger on cards
    world.addEventListener('click', (e) => {
      const inspectBtn = e.target.closest('.open-modal-btn');
      const card = e.target.closest('.orbit-card');
      if (inspectBtn) {
        const id = inspectBtn.getAttribute('data-id');
        openProjectModal(id);
      } else if (card && !e.target.closest('a, button')) {
        const id = card.getAttribute('data-id');
        openProjectModal(id);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. "THE BIG BANG" Interactive Engine
  // --------------------------------------------------------------------------
  function initBigBangEngine() {
    const canvas = document.getElementById('bigbang-canvas');
    const triggerBtn = document.getElementById('bigbang-trigger-btn');
    const heroBangBtn = document.getElementById('cta-bang-btn');
    const hudParticles = document.getElementById('hud-particles');
    const hudVelocity = document.getElementById('hud-velocity');
    const hudCycle = document.getElementById('hud-cycle');

    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    }, { passive: true });

    let bangParticles = [];
    let cycleCount = 1;
    let isDetonating = false;

    // Singularity Core Object
    const singularity = {
      x: width / 2,
      y: height / 2,
      radius: 14,
      pulse: 0
    };

    function triggerDetonation() {
      initAudio();
      playSynth('bigbang');
      isDetonating = true;
      cycleCount++;
      if (hudCycle) hudCycle.textContent = `#0${cycleCount}`;

      const totalBang = 850;
      if (hudParticles) hudParticles.textContent = totalBang.toLocaleString();
      if (hudVelocity) hudVelocity.textContent = `${(700 + Math.random() * 300).toFixed(0)} km/s`;

      bangParticles = [];
      const colors = ['#B481F8', '#4EECD5', '#FF6584', '#EDEBE6', '#F59E0B'];

      for (let i = 0; i < totalBang; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 14 + 2;
        bangParticles.push({
          x: width / 2,
          y: height / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2.2 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1.0,
          decay: Math.random() * 0.006 + 0.002
        });
      }
    }

    if (triggerBtn) triggerBtn.addEventListener('click', triggerDetonation);
    if (heroBangBtn) {
      heroBangBtn.addEventListener('click', () => {
        document.getElementById('bigbang').scrollIntoView({ behavior: 'smooth' });
        setTimeout(triggerDetonation, 600);
      });
    }

    canvas.addEventListener('click', triggerDetonation);

    function renderBigBang() {
      ctx.fillStyle = 'rgba(10, 10, 12, 0.28)';
      ctx.fillRect(0, 0, width, height);

      singularity.x = width / 2;
      singularity.y = height / 2;
      singularity.pulse += 0.05;

      // Draw Singularity Core
      const coreR = singularity.radius + Math.sin(singularity.pulse) * 3;
      ctx.beginPath();
      ctx.arc(singularity.x, singularity.y, coreR * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(180, 129, 248, 0.12)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(singularity.x, singularity.y, coreR, 0, Math.PI * 2);
      ctx.fillStyle = '#B481F8';
      ctx.shadowColor = '#B481F8';
      ctx.shadowBlur = 24;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Render Detonated Cosmic Particles
      for (let i = bangParticles.length - 1; i >= 0; i--) {
        const p = bangParticles[i];

        // Gravitational collapse back toward center
        const dx = singularity.x - p.x;
        const dy = singularity.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Slow down explosion, pull into spiral orbit
        p.vx *= 0.97;
        p.vy *= 0.97;

        if (dist > 20) {
          const gravity = 0.12;
          p.vx += (dx / dist) * gravity;
          p.vy += (dy / dist) * gravity;
          // Perpendicular spin force (creates galaxy spiral)
          p.vx += (-dy / dist) * 0.08;
          p.vy += (dx / dist) * 0.08;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        if (p.alpha <= 0) {
          bangParticles.splice(i, 1);
        }
      }

      requestAnimationFrame(renderBigBang);
    }
    renderBigBang();
  }

  // --------------------------------------------------------------------------
  // 6. "GRAVITY IS EVERYWHERE" Sandbox (N-Body Physics)
  // --------------------------------------------------------------------------
  function initGravityLab() {
    const canvas = document.getElementById('lab-canvas');
    const hudBodies = document.getElementById('lab-hud-bodies');
    const hudFps = document.getElementById('lab-hud-fps');
    const presetBtns = document.querySelectorAll('.lab-preset-btn');

    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    }, { passive: true });

    let bodies = [];
    const G = 0.8;

    function resetPreset(preset) {
      bodies = [];
      const cx = width / 2;
      const cy = height / 2;

      if (preset === 'binary') {
        // Two massive central stars + satellites
        bodies.push({ x: cx - 60, y: cy, vx: 0, vy: -1.2, mass: 140, radius: 10, color: '#B481F8' });
        bodies.push({ x: cx + 60, y: cy, vx: 0, vy: 1.2, mass: 140, radius: 10, color: '#4EECD5' });
        for (let i = 0; i < 18; i++) {
          const r = 140 + Math.random() * 120;
          const th = Math.random() * Math.PI * 2;
          const spd = Math.sqrt((G * 280) / r);
          bodies.push({
            x: cx + Math.cos(th) * r,
            y: cy + Math.sin(th) * r,
            vx: -Math.sin(th) * spd,
            vy: Math.cos(th) * spd,
            mass: 2,
            radius: 2.5,
            color: '#EDEBE6'
          });
        }
      } else if (preset === 'solar') {
        // Central Sun
        bodies.push({ x: cx, y: cy, vx: 0, vy: 0, mass: 350, radius: 16, color: '#FFB800' });
        // Concentric Planets
        const orbitalRadii = [60, 110, 170, 230, 290];
        orbitalRadii.forEach((r, idx) => {
          const th = (idx * Math.PI) / 2.5;
          const spd = Math.sqrt((G * 350) / r);
          bodies.push({
            x: cx + Math.cos(th) * r,
            y: cy + Math.sin(th) * r,
            vx: -Math.sin(th) * spd,
            vy: Math.cos(th) * spd,
            mass: 8,
            radius: 4.5,
            color: idx % 2 === 0 ? '#4EECD5' : '#B481F8'
          });
        });
      } else if (preset === 'chaos') {
        // Three equal mass bodies
        const d = 100;
        bodies.push({ x: cx, y: cy - d, vx: 1.1, vy: 0, mass: 160, radius: 9, color: '#FF6584' });
        bodies.push({ x: cx - d * 0.86, y: cy + d * 0.5, vx: -0.55, vy: -0.95, mass: 160, radius: 9, color: '#4EECD5' });
        bodies.push({ x: cx + d * 0.86, y: cy + d * 0.5, vx: -0.55, vy: 0.95, mass: 160, radius: 9, color: '#B481F8' });
      }
      if (hudBodies) hudBodies.textContent = bodies.length;
    }

    resetPreset('binary');

    // Preset button handlers
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const p = btn.getAttribute('data-preset');
        resetPreset(p);
        playSynth('click');
      });
    });

    // Click canvas to spawn celestial body
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = width / 2;
      const cy = height / 2;
      const r = Math.hypot(x - cx, y - cy);
      const spd = Math.sqrt((G * 200) / Math.max(50, r));
      const th = Math.atan2(y - cy, x - cx);

      bodies.push({
        x: x,
        y: y,
        vx: -Math.sin(th) * spd,
        vy: Math.cos(th) * spd,
        mass: 5,
        radius: 3.5,
        color: '#EDEBE6'
      });
      if (hudBodies) hudBodies.textContent = bodies.length;
      playSynth('hover');
    });

    let lastTime = performance.now();
    let frameCount = 0;

    function animateLab(now) {
      frameCount++;
      if (now - lastTime >= 1000) {
        if (hudFps) hudFps.textContent = frameCount;
        frameCount = 0;
        lastTime = now;
      }

      ctx.fillStyle = 'rgba(10, 10, 12, 0.22)';
      ctx.fillRect(0, 0, width, height);

      // N-Body Gravitational Computation
      const len = bodies.length;
      for (let i = 0; i < len; i++) {
        const bi = bodies[i];
        for (let j = i + 1; j < len; j++) {
          const bj = bodies[j];
          const dx = bj.x - bi.x;
          const dy = bj.y - bi.y;
          const distSq = dx * dx + dy * dy + 100; // Softening parameter
          const dist = Math.sqrt(distSq);
          const force = (G * bi.mass * bj.mass) / distSq;

          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          bi.vx += fx / bi.mass;
          bi.vy += fy / bi.mass;
          bj.vx -= fx / bj.mass;
          bj.vy -= fy / bj.mass;
        }
      }

      // Update & Draw Bodies
      for (let i = 0; i < len; i++) {
        const b = bodies[i];
        b.x += b.vx;
        b.y += b.vy;

        // Draw body
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = b.radius > 6 ? 16 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(animateLab);
    }
    requestAnimationFrame(animateLab);
  }

  // --------------------------------------------------------------------------
  // 7. Project Deep Dive Modal (Full Spec & Live Link)
  // --------------------------------------------------------------------------
  function openProjectModal(projectId) {
    if (!PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;
    const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!proj) return;

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-body-content');
    if (!modal || !content) return;

    initAudio();
    playSynth('click');

    content.innerHTML = `
      <div style="margin-bottom: 24px; border-radius: 16px; overflow: hidden; max-height: 360px; border: 1px solid var(--border);">
        <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
        ${proj.stack.map(s => `<span class="orbit-stack-pill" style="background: rgba(180,129,248,0.15); color: var(--accent); font-size: 0.78rem; padding: 4px 10px;">${s}</span>`).join('')}
      </div>
      <h3 style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--fg); margin-bottom: 12px; text-transform: uppercase;">
        ${proj.title}
      </h3>
      <p style="font-size: 1.05rem; color: var(--fg-muted); line-height: 1.6; margin-bottom: 24px;">
        ${proj.description}
      </p>

      <h4 style="font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px;">
        Architecture & System Design
      </h4>
      <p style="font-size: 0.95rem; color: var(--fg-dim); line-height: 1.6; margin-bottom: 24px;">
        ${proj.architecture}
      </p>

      <h4 style="font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent-cyan); margin-bottom: 8px;">
        Engineering Metrics & Real-World Impact
      </h4>
      <ul style="padding-left: 20px; margin-bottom: 32px; display: flex; flex-direction: column; gap: 8px; font-size: 0.95rem; color: var(--fg-muted);">
        ${proj.metrics.map(m => `<li>${m}</li>`).join('')}
      </ul>

      <div style="display: flex; gap: 14px; padding-top: 20px; border-top: 1px solid var(--border); flex-wrap: wrap;">
        ${proj.demoUrl && proj.demoUrl.includes('SentinelAI') ? `
        <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-gravity-primary" style="background: linear-gradient(135deg, #10B981, #06B6D4); color: #fff;">
          Launch Live Application 🚀
        </a>` : ''}
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-gravity-secondary">
          Open Repository on GitHub ⚡
        </a>
      </div>
    `;

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  }

  function initModalHandlers() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    if (!modal) return;

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        playSynth('click');
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

  // --------------------------------------------------------------------------
  // 8. Sound & Theme Toggles, Copy Email Toast
  // --------------------------------------------------------------------------
  function initHeaderControls() {
    const soundBtn = document.getElementById('sound-btn');
    const soundIcon = document.getElementById('sound-icon');
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = document.getElementById('theme-icon');
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('om-toast');

    // Sound toggle
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        initAudio();
        soundEnabled = !soundEnabled;
        soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
        soundBtn.classList.toggle('active', soundEnabled);
        if (soundEnabled) playSynth('click');
      });
    }

    // Theme toggle
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const nextTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        themeIcon.textContent = isDark ? '🌙' : '☀️';
        playSynth('click');
      });
    }

    // Email copy
    if (copyEmailBtn && toast) {
      copyEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = 'girikritika30@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          toast.textContent = `Copied ${email} to clipboard!`;
          toast.classList.add('show');
          playSynth('click');
          setTimeout(() => toast.classList.remove('show'), 3200);
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // Initialization
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initMagneticCursor();
    initHeroGravityCanvas();
    init3DProjectOrbit();
    initBigBangEngine();
    initGravityLab();
    initModalHandlers();
    initHeaderControls();
  });

})();
