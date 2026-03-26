// ============================================
// CodeLaunch — Lesson Viewer Component
// ============================================

import { t, getLanguage } from '../i18n.js';
import { getState, addXP, unlockBadge, completeLesson } from '../state.js';
import { getCurriculum } from '../content/curriculum.js';

// ── Helpers ──

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function bilingual(zh, en) {
  return `
    <span class="lesson-zh">${zh}</span>
    <span class="lesson-en">${en}</span>
  `;
}

// ── Section Renderers ──

function renderTextSection(section) {
  return `
    <div class="lesson-section lesson-section--text animate-slide-up">
      <p class="lesson-text-zh">${section.zh}</p>
      <p class="lesson-text-en">${section.en}</p>
    </div>
  `;
}

function renderConceptSection(section) {
  return `
    <div class="lesson-section lesson-section--concept animate-slide-up">
      <div class="concept-card">
        <div class="concept-term">${escapeHtml(section.term)}</div>
        <p class="concept-zh">${section.zh}</p>
        <p class="concept-en">${section.en}</p>
      </div>
    </div>
  `;
}

function renderStepsSection(section) {
  // Support both { steps: [{zh,en}] } and { zh: string[], en: string[] }
  let steps;
  if (section.steps) {
    steps = section.steps;
  } else if (Array.isArray(section.zh)) {
    steps = section.zh.map((zhText, i) => ({
      zh: zhText,
      en: (section.en && section.en[i]) || ''
    }));
  } else {
    steps = [];
  }

  const stepsHtml = steps.map((step, i) => `
    <li class="step-item">
      <span class="step-number">${i + 1}</span>
      <div class="step-content">
        <p class="step-zh">${step.zh}</p>
        <p class="step-en">${step.en}</p>
      </div>
    </li>
  `).join('');

  return `
    <div class="lesson-section lesson-section--steps animate-slide-up">
      ${section.title ? `<h3 class="section-title">${bilingual(section.title.zh, section.title.en)}</h3>` : ''}
      <ol class="step-list">${stepsHtml}</ol>
    </div>
  `;
}

function renderTerminalSection(section, index) {
  // On mobile we render inline; on desktop this goes to the right panel.
  // We render a mobile-only version here and a desktop version in the terminal panel.
  return `
    <div class="lesson-section lesson-section--terminal-inline show-mobile animate-slide-up">
      <div class="terminal-block" data-terminal-index="${index}">
        <div class="terminal-block__header">
          <span class="terminal-block__dots">
            <span class="terminal-dot red"></span>
            <span class="terminal-dot yellow"></span>
            <span class="terminal-dot green"></span>
          </span>
          <span class="terminal-block__title">Terminal</span>
          <button class="terminal-copy-btn" data-command="${escapeHtml(section.command)}" title="${t('lesson_copyCode')}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="copy-label">${t('lesson_copyCode')}</span>
          </button>
        </div>
        <div class="terminal-block__body">
          <div class="terminal-prompt"><span class="terminal-prompt__symbol">$</span> <span class="terminal-prompt__cmd">${escapeHtml(section.command)}</span></div>
          ${section.output ? `<div class="terminal-output-text">${Array.isArray(section.output) ? section.output.map(l => escapeHtml(l)).join('\n') : escapeHtml(section.output)}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderQuizSection(section, sectionIndex) {
  // Support both single question (from curriculum) and array of questions
  const questions = section.questions || [section];
  const lang = getLanguage();

  const questionsHtml = questions.map((q, qi) => {
    const opts = q.options || {};
    const optsArr = Array.isArray(opts) ? opts : (opts[lang] || opts.zh || []);
    const optionsHtml = optsArr.map((opt, oi) => `
      <button class="quiz-option" data-section="${sectionIndex}" data-question="${qi}" data-option="${oi}" data-correct="${q.correctIndex}">
        <span class="quiz-option__letter">${String.fromCharCode(65 + oi)}</span>
        <span class="quiz-option__text">${typeof opt === 'object' ? bilingual(opt.zh, opt.en) : opt}</span>
      </button>
    `).join('');

    const questionText = q.question || q.text || { zh: '', en: '' };

    return `
      <div class="quiz-question" data-section="${sectionIndex}" data-question="${qi}">
        <h4 class="quiz-question__title">
          <span class="quiz-icon">&#x1F4DD;</span>
          ${bilingual(questionText.zh, questionText.en)}
        </h4>
        <div class="quiz-options">${optionsHtml}</div>
        <div class="quiz-explanation" style="display:none;">
          ${q.explanation ? bilingual(q.explanation.zh, q.explanation.en) : ''}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="lesson-section lesson-section--quiz animate-slide-up">
      <div class="quiz-header">
        <span class="quiz-badge">${t('lesson_quiz')}</span>
      </div>
      ${questionsHtml}
    </div>
  `;
}

function renderTipSection(section) {
  return `
    <div class="lesson-section lesson-section--tip animate-slide-up">
      <div class="callout callout--tip">
        <span class="callout__icon">&#x1F4A1;</span>
        <div class="callout__content">
          <p class="callout__zh">${section.zh}</p>
          <p class="callout__en">${section.en}</p>
        </div>
      </div>
    </div>
  `;
}

function renderWarningSection(section) {
  return `
    <div class="lesson-section lesson-section--warning animate-slide-up">
      <div class="callout callout--warning">
        <span class="callout__icon">&#x26A0;&#xFE0F;</span>
        <div class="callout__content">
          <p class="callout__zh">${section.zh}</p>
          <p class="callout__en">${section.en}</p>
        </div>
      </div>
    </div>
  `;
}

function renderImageSection(section) {
  return `
    <div class="lesson-section lesson-section--image animate-slide-up">
      <div class="image-placeholder">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.4">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <p class="image-placeholder__text">${bilingual(section.zh || section.description, section.en || section.description)}</p>
      </div>
    </div>
  `;
}

// ── Terminal Panel (desktop right side) ──

function renderTerminalPanel(sections) {
  const terminalSections = sections
    .map((s, i) => ({ ...(s.content || s), _index: i, type: s.type }))
    .filter(s => s.type === 'terminal');

  if (terminalSections.length === 0) {
    return `
      <div class="terminal-panel__empty">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.3;margin-bottom:12px">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        <p style="color:#8B949E;font-size:13px;text-align:center;">
          &#x672C;&#x8BFE;&#x7EC8;&#x7AEF;&#x793A;&#x4F8B;&#x5C06;&#x663E;&#x793A;&#x5728;&#x8FD9;&#x91CC;
          <br><span style="font-size:11px;opacity:0.6;">Terminal examples for this lesson will appear here</span>
        </p>
      </div>
    `;
  }

  const blocksHtml = terminalSections.map(section => `
    <div class="terminal-block" data-terminal-index="${section._index}">
      <div class="terminal-block__copy-row">
        <button class="terminal-copy-btn" data-command="${escapeHtml(section.command)}" title="${t('lesson_copyCode')}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span class="copy-label">${t('lesson_copyCode')}</span>
        </button>
      </div>
      <div class="terminal-prompt"><span class="terminal-prompt__symbol">$</span> <span class="terminal-prompt__cmd">${escapeHtml(section.command)}</span></div>
      ${section.output ? `<div class="terminal-output-text">${Array.isArray(section.output) ? section.output.map(l => escapeHtml(l)).join('\n') : escapeHtml(section.output)}</div>` : ''}
    </div>
  `).join('');

  return blocksHtml;
}

// ── Main Render ──

export function render(params) {
  const day = parseInt(params.day, 10);
  const lesson = getCurriculum(day);

  if (!lesson) {
    return `
      <div class="lesson-page" style="padding:80px 20px;text-align:center;">
        <h2 style="color:var(--text);">&#x8BFE;&#x7A0B;&#x672A;&#x627E;&#x5230; / Lesson not found</h2>
        <p style="color:var(--text-muted);margin-top:12px;">Day ${day}</p>
        <a href="#/dashboard" style="color:var(--coral);margin-top:20px;display:inline-block;">${t('common_back')}</a>
      </div>
    `;
  }

  const state = getState();
  const isCompleted = state.completedLessons.includes(day);
  const totalSections = lesson.sections.length;
  const terminalCount = lesson.sections.filter(s => s.type === 'terminal').length;

  // Build content sections
  let sectionIndex = 0;
  const contentHtml = lesson.sections.map((section, i) => {
    const c = section.content || section;
    switch (section.type) {
      case 'text':     return renderTextSection(c);
      case 'concept':  return renderConceptSection(c);
      case 'steps':    return renderStepsSection(c);
      case 'terminal': return renderTerminalSection(c, i);
      case 'quiz':     return renderQuizSection(c, i);
      case 'tip':      return renderTipSection(c);
      case 'warning':  return renderWarningSection(c);
      case 'image':    return renderImageSection(c);
      default:         return '';
    }
  }).join('');

  // Terminal panel content
  const terminalPanelHtml = renderTerminalPanel(lesson.sections);

  return `
    <div class="lesson-page" data-day="${day}">

      <!-- Progress Bar -->
      <div class="lesson-progress-bar" id="lesson-progress-bar">
        <div class="lesson-progress-bar__fill" id="lesson-progress-fill" style="width:0%"></div>
      </div>

      <!-- Header -->
      <div class="lesson-header">
        <div class="lesson-header__inner">
          <a href="#/dashboard" class="lesson-back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </a>
          <div class="lesson-header__text">
            <span class="lesson-day-badge">Day ${day}</span>
            <h1 class="lesson-title">
              <span class="lesson-title__zh">${lesson.title.zh}</span>
              <span class="lesson-title__en">${lesson.title.en}</span>
            </h1>
          </div>
          ${isCompleted ? '<span class="lesson-completed-badge">&#x2705;</span>' : ''}
        </div>
      </div>

      <!-- Split Layout -->
      <div class="lesson-layout">

        <!-- Left: Content Panel -->
        <div class="lesson-content" id="lesson-content">
          ${contentHtml}
        </div>

        <!-- Right: Terminal Panel (desktop only) -->
        <div class="lesson-terminal-panel hide-mobile" id="lesson-terminal-panel">
          <div class="terminal-panel-wrapper">
            <div class="terminal-panel__topbar">
              <span class="terminal-panel__dots">
                <span class="terminal-dot red"></span>
                <span class="terminal-dot yellow"></span>
                <span class="terminal-dot green"></span>
              </span>
              <span class="terminal-panel__label">Terminal</span>
            </div>
            <div class="terminal-panel__body" id="terminal-panel-body">
              ${terminalPanelHtml}
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Navigation -->
      <div class="lesson-bottom-nav">
        <div class="lesson-bottom-nav__inner">
          ${day > 1 ? `
            <button class="lesson-nav-btn lesson-nav-btn--prev" data-nav="prev">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              ${t('lesson_prevLesson')}
            </button>
          ` : '<div></div>'}

          ${!isCompleted ? `
            <button class="lesson-nav-btn lesson-nav-btn--complete" id="btn-mark-complete" data-day="${day}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              ${t('lesson_markComplete')}
            </button>
          ` : `
            <span class="lesson-completed-label">&#x2705; ${t('lesson_markComplete')}</span>
          `}

          ${day < 14 ? `
            <button class="lesson-nav-btn lesson-nav-btn--next" data-nav="next">
              ${t('lesson_nextLesson')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          ` : '<div></div>'}
        </div>
      </div>

    </div>

    <style>
      /* ============================================
         Lesson Page Styles
         ============================================ */

      .lesson-page {
        min-height: 100vh;
        background: var(--bg);
        padding-top: 0;
      }

      /* ── Progress Bar ── */

      .lesson-progress-bar {
        position: fixed;
        top: 56px;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--border);
        z-index: 45;
      }

      .lesson-progress-bar__fill {
        height: 100%;
        background: linear-gradient(90deg, var(--coral), var(--coral-light));
        transition: width 0.3s ease;
        border-radius: 0 2px 2px 0;
      }

      /* ── Header ── */

      .lesson-header {
        padding: 80px 20px 24px;
        background: var(--bg);
        border-bottom: 1px solid var(--border);
      }

      .lesson-header__inner {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .lesson-back-link {
        color: var(--text-muted);
        transition: color var(--transition);
        flex-shrink: 0;
      }

      .lesson-back-link:hover {
        color: var(--coral);
      }

      .lesson-day-badge {
        display: inline-block;
        background: var(--coral);
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        padding: 2px 10px;
        border-radius: var(--radius-full);
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-bottom: 6px;
      }

      .lesson-title {
        margin: 0;
        line-height: 1.3;
      }

      .lesson-title__zh {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text);
      }

      .lesson-title__en {
        display: block;
        font-size: 0.95rem;
        font-weight: 400;
        color: var(--text-muted);
        margin-top: 2px;
      }

      .lesson-completed-badge {
        font-size: 24px;
        margin-left: auto;
        flex-shrink: 0;
      }

      /* ── Split Layout ── */

      .lesson-layout {
        display: flex;
        max-width: 1200px;
        margin: 0 auto;
        gap: 0;
        min-height: calc(100vh - 200px);
      }

      .lesson-content {
        flex: 0 0 60%;
        max-width: 60%;
        padding: 32px 32px 120px;
        overflow-y: auto;
      }

      .lesson-terminal-panel {
        flex: 0 0 40%;
        max-width: 40%;
        padding: 32px 24px 32px 0;
      }

      .terminal-panel-wrapper {
        position: sticky;
        top: 80px;
        max-height: calc(100vh - 120px);
        overflow-y: auto;
        border-radius: var(--radius);
        background: #0D1117;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      }

      /* ── Terminal Panel Chrome ── */

      .terminal-panel__topbar {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 16px;
        border-bottom: 1px solid #21262D;
        background: #161B22;
        border-radius: var(--radius) var(--radius) 0 0;
      }

      .terminal-panel__dots {
        display: flex;
        gap: 6px;
      }

      .terminal-panel__label {
        font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
        font-size: 12px;
        color: #8B949E;
        margin-left: 4px;
      }

      .terminal-panel__body {
        padding: 16px;
        font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
        font-size: 13px;
        line-height: 1.7;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .terminal-panel__empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 200px;
        padding: 32px;
      }

      /* ── Terminal Block ── */

      .terminal-block {
        position: relative;
      }

      .terminal-block__copy-row {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 4px;
      }

      .terminal-copy-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.1);
        color: #8B949E;
        font-size: 11px;
        padding: 3px 8px;
        border-radius: 4px;
        cursor: pointer;
        transition: all var(--transition);
        font-family: inherit;
      }

      .terminal-copy-btn:hover {
        background: rgba(255,255,255,0.12);
        color: #C9D1D9;
      }

      .terminal-copy-btn.copied {
        color: var(--mint);
        border-color: var(--mint);
      }

      .terminal-prompt {
        color: #C9D1D9;
        white-space: pre-wrap;
        word-break: break-all;
      }

      .terminal-prompt__symbol {
        color: var(--mint);
        user-select: none;
      }

      .terminal-prompt__cmd {
        color: #39FF14;
      }

      .terminal-output-text {
        color: #8B949E;
        white-space: pre-wrap;
        word-break: break-all;
        margin-top: 4px;
        padding-left: 16px;
      }

      /* ── Inline Terminal (mobile) ── */

      .lesson-section--terminal-inline .terminal-block {
        background: #0D1117;
        border-radius: var(--radius);
        overflow: hidden;
        box-shadow: 0 4px 16px rgba(0,0,0,0.3);
      }

      .lesson-section--terminal-inline .terminal-block__header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        background: #161B22;
        border-bottom: 1px solid #21262D;
      }

      .lesson-section--terminal-inline .terminal-block__dots {
        display: flex;
        gap: 6px;
      }

      .lesson-section--terminal-inline .terminal-block__title {
        font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
        font-size: 11px;
        color: #8B949E;
      }

      .lesson-section--terminal-inline .terminal-copy-btn {
        margin-left: auto;
      }

      .lesson-section--terminal-inline .terminal-block__body {
        padding: 14px 16px;
        font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
        font-size: 13px;
        line-height: 1.7;
      }

      /* ── Section base ── */

      .lesson-section {
        margin-bottom: 28px;
      }

      .section-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text);
        margin-bottom: 14px;
      }

      /* ── Text Section ── */

      .lesson-text-zh {
        font-size: 1.05rem;
        line-height: 1.8;
        color: var(--text);
        margin-bottom: 6px;
      }

      .lesson-text-en {
        font-size: 0.88rem;
        line-height: 1.6;
        color: var(--text-muted);
      }

      /* ── Bilingual helpers ── */

      .lesson-zh {
        color: var(--text);
      }

      .lesson-en {
        display: block;
        font-size: 0.85em;
        color: var(--text-muted);
        margin-top: 2px;
      }

      /* ── Concept Card ── */

      .concept-card {
        background: var(--cream);
        border: 1px solid var(--border);
        border-left: 4px solid var(--coral);
        border-radius: var(--radius);
        padding: 20px 24px;
      }

      [data-theme="dark"] .concept-card {
        background: var(--bg-card);
      }

      .concept-term {
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--coral);
        margin-bottom: 10px;
        padding: 4px 10px;
        background: rgba(255, 107, 74, 0.08);
        border-radius: var(--radius-sm);
        display: inline-block;
      }

      .concept-zh {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--text);
        margin-bottom: 6px;
      }

      .concept-en {
        font-size: 0.85rem;
        line-height: 1.5;
        color: var(--text-muted);
      }

      /* ── Steps List ── */

      .step-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .step-item {
        display: flex;
        gap: 14px;
        align-items: flex-start;
      }

      .step-number {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--coral);
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2px;
      }

      .step-content {
        flex: 1;
      }

      .step-zh {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--text);
        margin-bottom: 4px;
      }

      .step-en {
        font-size: 0.83rem;
        line-height: 1.5;
        color: var(--text-muted);
      }

      /* ── Callout Boxes (Tip / Warning) ── */

      .callout {
        display: flex;
        gap: 14px;
        padding: 16px 20px;
        border-radius: var(--radius);
        align-items: flex-start;
      }

      .callout__icon {
        font-size: 22px;
        flex-shrink: 0;
        line-height: 1;
        margin-top: 2px;
      }

      .callout__content {
        flex: 1;
      }

      .callout__zh {
        font-size: 0.95rem;
        line-height: 1.7;
        color: var(--text);
        margin-bottom: 4px;
      }

      .callout__en {
        font-size: 0.82rem;
        line-height: 1.5;
        color: var(--text-muted);
      }

      .callout--tip {
        background: #FEF9E7;
        border: 1px solid #F4D35E;
      }

      [data-theme="dark"] .callout--tip {
        background: rgba(244, 211, 94, 0.08);
        border-color: rgba(244, 211, 94, 0.2);
      }

      .callout--warning {
        background: #FEF0EF;
        border: 1px solid #E74C3C;
      }

      [data-theme="dark"] .callout--warning {
        background: rgba(231, 76, 60, 0.08);
        border-color: rgba(231, 76, 60, 0.2);
      }

      /* ── Quiz ── */

      .quiz-header {
        margin-bottom: 16px;
      }

      .quiz-badge {
        display: inline-block;
        background: var(--coral);
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        padding: 4px 14px;
        border-radius: var(--radius-full);
      }

      .quiz-question {
        margin-bottom: 20px;
        padding: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
      }

      .quiz-question__title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text);
        margin-bottom: 14px;
        display: flex;
        gap: 8px;
        align-items: flex-start;
      }

      .quiz-icon {
        flex-shrink: 0;
        font-size: 18px;
      }

      .quiz-options {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .quiz-option {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: var(--bg);
        border: 2px solid var(--border);
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: all var(--transition);
        text-align: left;
        font-size: 14px;
        color: var(--text);
        font-family: inherit;
        width: 100%;
      }

      .quiz-option:hover:not(.quiz-option--answered) {
        border-color: var(--coral);
        background: var(--bg-card-hover);
      }

      .quiz-option__letter {
        flex-shrink: 0;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--border);
        color: var(--text-secondary);
        font-size: 12px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all var(--transition);
      }

      .quiz-option--correct {
        border-color: var(--mint) !important;
        background: rgba(78, 205, 196, 0.08) !important;
        cursor: default;
      }

      .quiz-option--correct .quiz-option__letter {
        background: var(--mint);
        color: #fff;
      }

      .quiz-option--wrong {
        border-color: #E74C3C !important;
        background: rgba(231, 76, 60, 0.06) !important;
        cursor: default;
        animation: shake 0.4s ease;
      }

      .quiz-option--wrong .quiz-option__letter {
        background: #E74C3C;
        color: #fff;
      }

      .quiz-option--answered {
        pointer-events: none;
      }

      .quiz-option--dimmed {
        opacity: 0.5;
        pointer-events: none;
      }

      .quiz-explanation {
        margin-top: 12px;
        padding: 12px 16px;
        background: rgba(78, 205, 196, 0.06);
        border-radius: var(--radius-sm);
        border-left: 3px solid var(--mint);
        font-size: 0.9rem;
        line-height: 1.6;
        animation: slideUp 0.3s ease;
      }

      /* ── Image Placeholder ── */

      .image-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        background: var(--bg-card);
        border: 2px dashed var(--border);
        border-radius: var(--radius);
        text-align: center;
      }

      .image-placeholder__text {
        margin-top: 12px;
        font-size: 0.9rem;
        color: var(--text-muted);
      }

      /* ── Bottom Navigation ── */

      .lesson-bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--bg-card);
        border-top: 1px solid var(--border);
        padding: 12px 20px;
        z-index: 40;
        box-shadow: 0 -4px 16px var(--shadow);
      }

      .lesson-bottom-nav__inner {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .lesson-nav-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 10px 18px;
        border-radius: var(--radius-sm);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all var(--transition);
        border: none;
        font-family: inherit;
      }

      .lesson-nav-btn--prev,
      .lesson-nav-btn--next {
        background: var(--bg);
        color: var(--text);
        border: 1px solid var(--border);
      }

      .lesson-nav-btn--prev:hover,
      .lesson-nav-btn--next:hover {
        border-color: var(--coral);
        color: var(--coral);
      }

      .lesson-nav-btn--complete {
        background: var(--coral);
        color: #fff;
        padding: 10px 28px;
        box-shadow: 0 4px 14px rgba(255, 107, 74, 0.3);
      }

      .lesson-nav-btn--complete:hover {
        background: var(--coral-light);
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(255, 107, 74, 0.4);
      }

      .lesson-completed-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--mint);
      }

      /* ============================================
         Responsive — Mobile
         ============================================ */

      @media (max-width: 900px) {
        .lesson-layout {
          flex-direction: column;
        }

        .lesson-content {
          flex: 1 1 auto;
          max-width: 100%;
          padding: 24px 16px 120px;
        }

        .lesson-terminal-panel {
          display: none !important;
        }

        .lesson-section--terminal-inline {
          display: block !important;
        }

        .lesson-title__zh {
          font-size: 1.25rem;
        }

        .lesson-header {
          padding: 72px 16px 20px;
        }

        .lesson-bottom-nav__inner {
          flex-wrap: wrap;
          justify-content: center;
        }

        .lesson-nav-btn {
          font-size: 13px;
          padding: 8px 14px;
        }

        .lesson-nav-btn--complete {
          order: -1;
          width: 100%;
          justify-content: center;
          margin-bottom: 8px;
        }
      }

      @media (min-width: 901px) {
        .lesson-section--terminal-inline {
          display: none !important;
        }
      }

      /* ── Stagger animation delays ── */
      .lesson-section:nth-child(1) { animation-delay: 0s; }
      .lesson-section:nth-child(2) { animation-delay: 0.05s; }
      .lesson-section:nth-child(3) { animation-delay: 0.1s; }
      .lesson-section:nth-child(4) { animation-delay: 0.15s; }
      .lesson-section:nth-child(5) { animation-delay: 0.2s; }
      .lesson-section:nth-child(6) { animation-delay: 0.25s; }
      .lesson-section:nth-child(7) { animation-delay: 0.3s; }
      .lesson-section:nth-child(8) { animation-delay: 0.35s; }
    </style>
  `;
}

// ── Init ──

export function init(navigate) {
  const page = document.querySelector('.lesson-page');
  if (!page) return;

  const day = parseInt(page.dataset.day, 10);
  const lesson = getCurriculum(day);
  if (!lesson) return;

  // ── Quiz answer clicks ──
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionIdx = parseInt(btn.dataset.section, 10);
      const questionIdx = parseInt(btn.dataset.question, 10);
      const optionIdx = parseInt(btn.dataset.option, 10);

      const section = lesson.sections[sectionIdx];
      if (!section || section.type !== 'quiz') return;

      const sectionContent = section.content || section;
      const question = sectionContent.questions ? sectionContent.questions[questionIdx] : sectionContent;
      if (!question) return;

      // Get all options for this question
      const questionEl = btn.closest('.quiz-question');
      if (!questionEl) return;
      const allOptions = questionEl.querySelectorAll('.quiz-option');

      // Check if already answered
      if (questionEl.dataset.answered === 'true') return;

      const correctIdx = question.correctIndex != null ? question.correctIndex : parseInt(btn.dataset.correct, 10);
      const isCorrect = optionIdx === correctIdx;

      if (isCorrect) {
        btn.classList.add('correct', 'quiz-option--answered');
        questionEl.dataset.answered = 'true';

        // Dim other options
        allOptions.forEach(o => {
          if (o !== btn) o.classList.add('quiz-option--dimmed', 'quiz-option--answered');
        });

        // Add XP
        addXP(25);
        if (window.showToast) {
          window.showToast(t('lesson_quiz_correct') + ' +25 XP', 'xp');
        }

        // Show explanation
        const explanation = questionEl.querySelector('.quiz-explanation');
        if (explanation && explanation.textContent.trim()) {
          explanation.style.display = 'block';
        }
      } else {
        btn.classList.add('wrong');
        setTimeout(() => {
          btn.classList.remove('wrong');
        }, 600);
      }
    });
  });

  // ── Copy button clicks ──
  document.querySelectorAll('.terminal-copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const command = btn.dataset.command;
      if (!command) return;

      try {
        await navigator.clipboard.writeText(command);
      } catch {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = command;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      const label = btn.querySelector('.copy-label');
      const originalText = label ? label.textContent : '';
      if (label) label.textContent = t('lesson_copied');
      btn.classList.add('copied');

      setTimeout(() => {
        if (label) label.textContent = originalText;
        btn.classList.remove('copied');
      }, 2000);
    });
  });

  // ── Mark complete ──
  const completeBtn = document.getElementById('btn-mark-complete');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const lessonDay = parseInt(completeBtn.dataset.day, 10);

      // Complete the lesson
      completeLesson(lessonDay);

      // Add XP
      const xpAmount = lesson.xp || 50;
      addXP(xpAmount);

      // Show XP toast
      if (window.showToast) {
        window.showToast(t('toast_lesson_complete', { xp: xpAmount }), 'xp');
      }

      // Check for badge
      if (lesson.badge) {
        const isNew = unlockBadge(lesson.badge);
        if (isNew) {
          if (window.triggerConfetti) window.triggerConfetti();
          if (window.showToast) {
            const badgeName = t('badge_' + lesson.badge) || lesson.badge;
            setTimeout(() => {
              window.showToast(t('toast_badge_unlocked', { badge: badgeName }), 'badge');
            }, 500);
          }
        }
      }

      // Check first lesson badge
      const state = getState();
      if (state.completedLessons.length === 1) {
        const isNew = unlockBadge('first_lesson');
        if (isNew) {
          if (window.triggerConfetti) window.triggerConfetti();
          if (window.showToast) {
            setTimeout(() => {
              window.showToast(t('toast_badge_unlocked', { badge: t('badge_first_lesson') }), 'badge');
            }, 1000);
          }
        }
      }

      // Re-render to update UI
      navigate('/lesson/' + lessonDay);
    });
  }

  // ── Previous / Next navigation ──
  document.querySelectorAll('.lesson-nav-btn[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const direction = btn.dataset.nav;
      if (direction === 'prev' && day > 1) {
        navigate('/lesson/' + (day - 1));
      } else if (direction === 'next' && day < 14) {
        navigate('/lesson/' + (day + 1));
      }
    });
  });

  // ── Scroll progress tracking ──
  const contentEl = document.getElementById('lesson-content');
  const progressFill = document.getElementById('lesson-progress-fill');

  if (contentEl && progressFill) {
    function updateScrollProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      progressFill.style.width = (progress * 100) + '%';
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
  }
}
