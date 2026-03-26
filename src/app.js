/**
 * app.js — Main app controller for CodeLaunch 码上出发
 */

import { initRouter, navigate, getCurrentRoute } from './router.js';
import { getState, setState, updateStreak } from './state.js';
import { setLanguage, getLanguage } from './i18n.js';
import { render as renderNav, init as initNav } from './components/nav.js';
import * as landing from './components/landing.js';
import * as dashboard from './components/dashboard.js';
import * as lesson from './components/lesson.js';
import * as glossary from './components/glossary.js';
import * as gallery from './components/gallery.js';
import * as career from './components/career.js';
import * as settings from './components/settings.js';

const components = { landing, dashboard, lesson, glossary, gallery, career, settings };

/* ── Page render callback ── */

function renderPage() {
  const route = getCurrentRoute();
  const { name, params } = route;

  // Render nav
  const navEl = document.getElementById('nav');
  if (navEl) {
    navEl.innerHTML = renderNav(name);
    initNav(navigate);
  }

  // Render matched component
  const appEl = document.getElementById('app');
  const component = components[name];
  if (appEl && component) {
    appEl.innerHTML = component.render(params);
    if (component.init) component.init(navigate);
  }

  // Scroll to top on route change
  window.scrollTo(0, 0);

  // Page transition animation
  if (appEl) {
    appEl.classList.remove('page-enter');
    // Force reflow so the class removal takes effect before re-adding
    void appEl.offsetWidth;
    appEl.classList.add('page-enter');
  }
}

/* ── Bootstrap ── */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Restore language
  const state = getState();
  setLanguage(state.language);

  // 2. Apply theme
  const theme = state.theme || 'light';
  document.documentElement.dataset.theme = theme;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // 3. Update streak
  updateStreak();

  // 4. Initialize router with render callback
  initRouter(renderPage);

  // 5. Re-render on language or theme change
  document.addEventListener('languageChanged', () => renderPage());
  document.addEventListener('themeChanged', () => renderPage());

  // 6. Redirect to dashboard if already started
  if (state.started && (!location.hash || location.hash === '#' || location.hash === '#/')) {
    navigate('/dashboard');
  }
});

/* ── Confetti ── */

function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const brandColors = [
    '#FF6B6B', // coral
    '#4ECDC4', // mint
    '#1A1A2E', // navy
    '#FFD93D', // gold
  ];

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * -1,
    vx: (Math.random() - 0.5) * 8,
    vy: Math.random() * 3 + 2,
    color: brandColors[Math.floor(Math.random() * brandColors.length)],
    size: Math.random() * 8 + 4,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.2,
  }));

  const gravity = 0.15;
  const startTime = performance.now();
  const duration = 3000;

  function animate(now) {
    const elapsed = now - startTime;
    if (elapsed > duration) {
      canvas.remove();
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.vy += gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - elapsed / duration);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

/* ── Toast ── */

function showToast(message, type = 'success') {
  const bgMap = {
    success: '#4ECDC4', // mint
    xp: '#FF6B6B',      // coral
    badge: '#FFD93D',    // gold
    streak: '#FF8C42',   // orange
  };

  // Create container if it doesn't exist
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed;top:20px;right:20px;z-index:10000;display:flex;flex-direction:column;gap:8px;pointer-events:none;';
    document.body.appendChild(container);
  }

  // Limit to 3 visible toasts — remove oldest if needed
  while (container.children.length >= 3) {
    container.removeChild(container.firstChild);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background:${bgMap[type] || bgMap.success};
    color:#1A1A2E;
    padding:12px 20px;
    border-radius:8px;
    font-weight:600;
    font-size:0.95rem;
    box-shadow:0 4px 12px rgba(0,0,0,0.15);
    transform:translateX(120%);
    transition:transform 0.3s ease, opacity 0.3s ease;
    pointer-events:auto;
    max-width:320px;
    word-break:break-word;
  `;
  toast.textContent = message;
  container.appendChild(toast);

  // Slide in
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(0)';
  });

  // Auto-dismiss after 4 seconds
  setTimeout(() => {
    toast.style.transform = 'translateX(120%)';
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 4000);
}

/* ── Expose globals ── */

window.triggerConfetti = triggerConfetti;
window.showToast = showToast;

export { triggerConfetti, showToast };
