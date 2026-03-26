// ============================================
// CodeLaunch 码上出发 — Landing Page Component
// ============================================

import { t } from '../i18n.js';
import { setState } from '../state.js';

// --- 14-Day Curriculum Data ---
const days = [
  { day: 1,  zh: '认识 Claude Code',      en: 'Meet Claude Code',        desc_zh: '安装、配置、第一次对话', desc_en: 'Install, configure, first conversation' },
  { day: 2,  zh: '你的第一个网页',         en: 'Your First Webpage',      desc_zh: '用AI生成 HTML 页面', desc_en: 'Generate an HTML page with AI' },
  { day: 3,  zh: '让页面变好看',           en: 'Make It Beautiful',       desc_zh: '学习 CSS 基础样式', desc_en: 'Learn CSS basics for styling' },
  { day: 4,  zh: '响应式设计',             en: 'Responsive Design',       desc_zh: '适配手机和电脑屏幕', desc_en: 'Adapt for mobile & desktop' },
  { day: 5,  zh: 'JavaScript 入门',        en: 'Intro to JavaScript',     desc_zh: '让页面动起来', desc_en: 'Add interactivity' },
  { day: 6,  zh: '表单与用户输入',         en: 'Forms & Input',           desc_zh: '收集和处理数据', desc_en: 'Collect and handle data' },
  { day: 7,  zh: '部署上线！',             en: 'Deploy It!',              desc_zh: '让全世界看到你的作品', desc_en: 'Share your work with the world' },
  { day: 8,  zh: '个人作品集',             en: 'Portfolio Site',          desc_zh: '打造你的在线名片', desc_en: 'Build your online resume' },
  { day: 9,  zh: '待办事项 App',           en: 'Todo App',                desc_zh: '经典项目实战', desc_en: 'Classic project in practice' },
  { day: 10, zh: '天气查询 App',           en: 'Weather App',             desc_zh: '学习调用 API', desc_en: 'Learn to call APIs' },
  { day: 11, zh: '数据可视化',             en: 'Data Visualization',      desc_zh: '用图表展示数据', desc_en: 'Display data with charts' },
  { day: 12, zh: 'AI 聊天界面',            en: 'AI Chat Interface',       desc_zh: '搭建智能对话页面', desc_en: 'Build a smart chat UI' },
  { day: 13, zh: '测试与优化',             en: 'Test & Optimize',         desc_zh: '让项目更专业', desc_en: 'Make your project professional' },
  { day: 14, zh: '毕业项目发布',           en: 'Ship Your Project',       desc_zh: '完成并分享你的作品', desc_en: 'Finish and share your creation' },
];

// --- Testimonials Data ---
const testimonials = [
  {
    name: '张明宇',
    school: 'UCLA',
    avatar: '明',
    color: '#FF6B4A',
    zh: '之前觉得编程好难，学了两周竟然真的做出了自己的网站！面试的时候展示给recruiter看，直接拿到了实习offer。',
    en: 'I thought coding was impossible. After two weeks I actually built my own website! Showed it at an interview and landed an internship offer.',
  },
  {
    name: '李思琪',
    school: 'NYU',
    avatar: '琪',
    color: '#4ECDC4',
    zh: '全中文教程太友好了，英文术语也有对照。现在我能用 Claude Code 快速搭建原型，省了好多时间。',
    en: 'The bilingual tutorials are so friendly. Now I can rapidly prototype with Claude Code and save so much time.',
  },
  {
    name: '王浩然',
    school: 'University of Toronto',
    avatar: '浩',
    color: '#6C63FF',
    zh: '作为商科生，我以为写代码跟我无关。现在我能自己做数据看板，同学都来找我帮忙。',
    en: 'As a business major, I never thought I\'d code. Now I build my own dashboards and classmates ask me for help.',
  },
];

/**
 * Renders the full landing page HTML.
 */
export function render() {
  return `
<!-- Custom styles for landing page animations -->
<style>
  @keyframes gradientShift {
    0%   { background-position: 0% 50%; }
    25%  { background-position: 50% 100%; }
    50%  { background-position: 100% 50%; }
    75%  { background-position: 50% 0%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%      { transform: translateY(-12px); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0; }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pulse-glow {
    0%, 100% { text-shadow: 0 0 20px rgba(255,107,74,0.3), 0 0 60px rgba(255,107,74,0.1); }
    50%      { text-shadow: 0 0 30px rgba(255,107,74,0.5), 0 0 80px rgba(255,107,74,0.2); }
  }
  @keyframes typing-cursor {
    0%, 100% { border-right-color: #4ECDC4; }
    50%      { border-right-color: transparent; }
  }
  @keyframes spinner {
    0%   { content: '⠋'; }
    14%  { content: '⠙'; }
    28%  { content: '⠹'; }
    42%  { content: '⠸'; }
    56%  { content: '⠼'; }
    70%  { content: '⠴'; }
    84%  { content: '⠦'; }
    100% { content: '⠋'; }
  }
  .hero-gradient {
    background: linear-gradient(135deg, #FF6B4A 0%, #1A1A2E 40%, #4ECDC4 70%, #FF6B4A 100%);
    background-size: 300% 300%;
    animation: gradientShift 12s ease infinite;
  }
  .glow-text {
    animation: pulse-glow 3s ease-in-out infinite;
  }
  .float-anim {
    animation: float 6s ease-in-out infinite;
  }
  .fade-in-up {
    animation: fadeInUp 0.8s ease-out both;
  }
  .fade-in-up-delay-1 { animation-delay: 0.2s; }
  .fade-in-up-delay-2 { animation-delay: 0.4s; }
  .fade-in-up-delay-3 { animation-delay: 0.6s; }
  .terminal-cursor::after {
    content: '█';
    animation: blink 1s step-end infinite;
    color: #4ECDC4;
    margin-left: 2px;
  }
  .card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
  }
  .cta-btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .cta-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(255,107,74,0.4);
  }
  .cta-btn:active {
    transform: scale(0.98);
  }
  .timeline-line {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #FF6B4A, #4ECDC4);
    transform: translateY(-50%);
    z-index: 0;
    border-radius: 2px;
  }
  .day-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .day-card:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 8px 24px rgba(255,107,74,0.18);
    border-color: #FF6B4A;
  }
  .terminal-line {
    opacity: 0;
    transform: translateX(-10px);
  }
  .terminal-line.visible {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  .stat-number {
    font-variant-numeric: tabular-nums;
  }
  .pricing-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
  }
  .scroll-container {
    scrollbar-width: thin;
    scrollbar-color: #FF6B4A transparent;
  }
  .scroll-container::-webkit-scrollbar {
    height: 6px;
  }
  .scroll-container::-webkit-scrollbar-track {
    background: transparent;
  }
  .scroll-container::-webkit-scrollbar-thumb {
    background: #FF6B4A;
    border-radius: 3px;
  }
</style>

<!-- ===================== HERO SECTION ===================== -->
<section class="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Decorative floating shapes -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl float-anim"></div>
    <div class="absolute bottom-32 right-16 w-48 h-48 bg-white/5 rounded-full blur-2xl float-anim" style="animation-delay: -2s;"></div>
    <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg float-anim" style="animation-delay: -4s;"></div>
  </div>

  <div class="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
    <!-- Left: Text Content -->
    <div class="text-center md:text-left">
      <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight glow-text fade-in-up">
        两周，从零到发布。
      </h1>
      <p class="mt-4 text-2xl md:text-3xl text-white/70 font-light fade-in-up fade-in-up-delay-1">
        Two weeks. Zero to shipped.
      </p>
      <p class="mt-6 text-lg text-white/60 leading-relaxed max-w-lg fade-in-up fade-in-up-delay-2">
        学习使用 Claude Code，从完全不会编程到独立发布真实项目。全中文教程，英文术语双语对照，专为中国留学生设计。
      </p>
      <div class="mt-10 fade-in-up fade-in-up-delay-3">
        <button id="hero-cta" class="cta-btn inline-flex items-center gap-3 bg-[#FF6B4A] text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg shadow-[#FF6B4A]/30">
          <span>🚀</span>
          <span>免费开始学习 Start Free</span>
        </button>
      </div>
    </div>

    <!-- Right: Terminal Mockup -->
    <div class="fade-in-up fade-in-up-delay-2 float-anim">
      <div class="bg-[#0D1117] rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10 max-w-md mx-auto md:ml-auto">
        <!-- Terminal title bar -->
        <div class="flex items-center gap-2 px-4 py-3 bg-[#161B22] border-b border-white/10">
          <div class="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
          <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          <span class="ml-3 text-xs text-white/40 font-mono">Terminal — claude</span>
        </div>
        <!-- Terminal content -->
        <div id="terminal-content" class="p-5 font-mono text-sm leading-relaxed min-h-[220px]">
          <div class="terminal-line" data-line="0">
            <span class="text-[#4ECDC4]">$</span> <span class="text-white">claude</span>
          </div>
          <div class="terminal-line mt-2" data-line="1">
            <span class="text-[#8B949E]">&gt;</span> <span class="text-white">你好！帮我创建一个个人网站</span>
          </div>
          <div class="terminal-line mt-2" data-line="2">
            <span class="text-[#FFBD2E]" id="spinner-char">⠋</span> <span class="text-white/60">Creating your personal website...</span>
          </div>
          <div class="terminal-line mt-2" data-line="3">
            <span class="text-[#27C93F]">✓</span> <span class="text-white">Created index.html</span>
          </div>
          <div class="terminal-line mt-1" data-line="4">
            <span class="text-[#27C93F]">✓</span> <span class="text-white">Added styles.css</span>
          </div>
          <div class="terminal-line mt-2" data-line="5">
            <span class="text-[#27C93F]">✓</span> <span class="text-white/90">Your site is ready! Run </span><span class="text-[#4ECDC4]">\`open index.html\`</span><span class="text-white/90"> to see it.</span>
          </div>
          <div class="terminal-line mt-3" data-line="6">
            <span class="text-[#4ECDC4]">$</span> <span class="terminal-cursor"></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
  </div>
</section>

<!-- ===================== PAIN POINT CARDS ===================== -->
<section class="bg-[#FFF8F0] py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-4">为什么选择 CodeLaunch？</h2>
    <p class="text-center text-[#1A1A2E]/60 mb-14 text-lg">Why CodeLaunch?</p>
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Card 1: Language Barrier -->
      <div class="card-hover bg-white rounded-2xl shadow-md p-8 text-center">
        <div class="text-5xl mb-5">🌏</div>
        <h3 class="text-xl font-bold text-[#1A1A2E] mb-1">语言障碍</h3>
        <p class="text-sm text-[#1A1A2E]/50 mb-3">Language Barrier</p>
        <p class="text-[#1A1A2E]/70 leading-relaxed">全中文教程，英文术语双语对照。不用在翻译和代码之间来回切换，学习效率翻倍。</p>
        <p class="text-sm text-[#1A1A2E]/40 mt-2">Bilingual tutorials so you never get lost in translation.</p>
      </div>
      <!-- Card 2: Tech Intimidation -->
      <div class="card-hover bg-white rounded-2xl shadow-md p-8 text-center">
        <div class="text-5xl mb-5">💻</div>
        <h3 class="text-xl font-bold text-[#1A1A2E] mb-1">技术恐惧</h3>
        <p class="text-sm text-[#1A1A2E]/50 mb-3">Tech Intimidation</p>
        <p class="text-[#1A1A2E]/70 leading-relaxed">零基础开始，AI帮你写代码。你只需要描述想法，Claude Code 帮你实现。</p>
        <p class="text-sm text-[#1A1A2E]/40 mt-2">Zero knowledge assumed — AI writes code for you.</p>
      </div>
      <!-- Card 3: Career Anxiety -->
      <div class="card-hover bg-white rounded-2xl shadow-md p-8 text-center">
        <div class="text-5xl mb-5">📈</div>
        <h3 class="text-xl font-bold text-[#1A1A2E] mb-1">求职焦虑</h3>
        <p class="text-sm text-[#1A1A2E]/50 mb-3">Career Anxiety</p>
        <p class="text-[#1A1A2E]/70 leading-relaxed">AI技能需求增长543%，掌握 AI 编程工具让你在求职市场脱颖而出。</p>
        <p class="text-sm text-[#1A1A2E]/40 mt-2">AI skill demand up 543% — future-proof your career.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===================== 14-DAY JOURNEY ===================== -->
<section class="bg-white py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-2">14天学习路线</h2>
    <p class="text-center text-[#1A1A2E]/50 mb-6 text-lg">Your 14-Day Journey</p>

    <!-- Week Labels -->
    <div class="flex justify-center gap-6 mb-10">
      <span class="inline-flex items-center gap-2 bg-[#FF6B4A]/10 text-[#FF6B4A] font-semibold px-4 py-2 rounded-full text-sm">
        <span>📖</span> Week 1: 基础篇 Foundations
      </span>
      <span class="inline-flex items-center gap-2 bg-[#4ECDC4]/10 text-[#0D8B7D] font-semibold px-4 py-2 rounded-full text-sm">
        <span>🔨</span> Week 2: 实战篇 Real-World
      </span>
    </div>

    <!-- Timeline (scrollable on mobile, grid on desktop) -->
    <div class="relative">
      <!-- Desktop grid -->
      <div class="hidden md:block">
        <div class="relative">
          <div class="grid grid-cols-7 gap-4 mb-4">
            ${days.slice(0, 7).map((d, i) => `
              <div class="day-card relative z-10 bg-white border-2 ${i < 7 ? 'border-[#FF6B4A]/20' : 'border-[#4ECDC4]/20'} rounded-xl p-4 text-center cursor-pointer">
                <div class="w-10 h-10 mx-auto rounded-full ${i < 7 ? 'bg-[#FF6B4A]' : 'bg-[#4ECDC4]'} text-white font-bold flex items-center justify-center text-sm mb-3">
                  ${d.day}
                </div>
                <h4 class="font-bold text-[#1A1A2E] text-sm mb-1">${d.zh}</h4>
                <p class="text-xs text-[#1A1A2E]/40">${d.en}</p>
                <p class="text-xs text-[#1A1A2E]/60 mt-2">${d.desc_zh}</p>
              </div>
            `).join('')}
          </div>
          <!-- Connector line between rows -->
          <div class="flex justify-center my-3">
            <div class="w-0.5 h-8 bg-gradient-to-b from-[#FF6B4A] to-[#4ECDC4] rounded-full"></div>
          </div>
          <div class="grid grid-cols-7 gap-4">
            ${days.slice(7, 14).map((d, i) => `
              <div class="day-card relative z-10 bg-white border-2 border-[#4ECDC4]/20 rounded-xl p-4 text-center cursor-pointer">
                <div class="w-10 h-10 mx-auto rounded-full bg-[#4ECDC4] text-white font-bold flex items-center justify-center text-sm mb-3">
                  ${d.day}
                </div>
                <h4 class="font-bold text-[#1A1A2E] text-sm mb-1">${d.zh}</h4>
                <p class="text-xs text-[#1A1A2E]/40">${d.en}</p>
                <p class="text-xs text-[#1A1A2E]/60 mt-2">${d.desc_zh}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Mobile horizontal scroll -->
      <div class="md:hidden relative">
        <div class="scroll-container flex gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory">
          ${days.map((d, i) => `
            <div class="day-card snap-center flex-shrink-0 w-48 bg-white border-2 ${i < 7 ? 'border-[#FF6B4A]/20' : 'border-[#4ECDC4]/20'} rounded-xl p-4 text-center">
              <div class="w-10 h-10 mx-auto rounded-full ${i < 7 ? 'bg-[#FF6B4A]' : 'bg-[#4ECDC4]'} text-white font-bold flex items-center justify-center text-sm mb-3">
                ${d.day}
              </div>
              <h4 class="font-bold text-[#1A1A2E] text-sm mb-1">${d.zh}</h4>
              <p class="text-xs text-[#1A1A2E]/40">${d.en}</p>
              <p class="text-xs text-[#1A1A2E]/60 mt-2">${d.desc_zh}</p>
            </div>
          `).join('')}
        </div>
        <p class="text-center text-xs text-[#1A1A2E]/30 mt-2">← 左右滑动查看 Swipe to explore →</p>
      </div>
    </div>
  </div>
</section>

<!-- ===================== STATS SECTION ===================== -->
<section class="bg-[#1A1A2E] py-20 px-6">
  <div class="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
    <div>
      <div class="stat-number text-5xl md:text-6xl font-extrabold text-[#FF6B4A]" data-target="543" data-suffix="%">0%</div>
      <p class="mt-3 text-white/60 text-sm md:text-base">AI 岗位需求增长<br><span class="text-white/30">AI Job Demand Growth</span></p>
    </div>
    <div>
      <div class="stat-number text-5xl md:text-6xl font-extrabold text-[#4ECDC4]" data-target="14" data-suffix="天">0天</div>
      <p class="mt-3 text-white/60 text-sm md:text-base">完成第一个项目<br><span class="text-white/30">To Your First Project</span></p>
    </div>
    <div>
      <div class="stat-number text-5xl md:text-6xl font-extrabold text-[#FFBD2E]" data-target="100" data-suffix="%">0%</div>
      <p class="mt-3 text-white/60 text-sm md:text-base">完全免费<br><span class="text-white/30">Completely Free</span></p>
    </div>
  </div>
</section>

<!-- ===================== TESTIMONIALS ===================== -->
<section class="bg-[#FFF8F0] py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-2">学员的故事</h2>
    <p class="text-center text-[#1A1A2E]/50 mb-14 text-lg">Student Stories</p>
    <div class="grid md:grid-cols-3 gap-8">
      ${testimonials.map(tm => `
        <div class="card-hover bg-white rounded-2xl shadow-md p-8">
          <div class="flex items-center gap-4 mb-5">
            <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style="background-color: ${tm.color};">
              ${tm.avatar}
            </div>
            <div>
              <h4 class="font-bold text-[#1A1A2E]">${tm.name}</h4>
              <p class="text-sm text-[#1A1A2E]/50">${tm.school}</p>
            </div>
          </div>
          <p class="text-[#1A1A2E]/70 leading-relaxed mb-3">"${tm.zh}"</p>
          <p class="text-sm text-[#1A1A2E]/40 italic">"${tm.en}"</p>
          <div class="flex gap-1 mt-4">
            ${'★'.repeat(5).split('').map(() => '<span class="text-[#FFBD2E]">★</span>').join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ===================== PRICING SECTION ===================== -->
<section class="bg-white py-20 px-6">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-[#1A1A2E] mb-2">选择你的计划</h2>
    <p class="text-center text-[#1A1A2E]/50 mb-14 text-lg">Choose Your Plan</p>
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Free Plan -->
      <div class="pricing-card bg-white border-2 border-[#FF6B4A] rounded-2xl p-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 bg-[#FF6B4A] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">推荐 Popular</div>
        <h3 class="text-2xl font-bold text-[#1A1A2E] mb-1">免费版</h3>
        <p class="text-sm text-[#1A1A2E]/50 mb-6">Free</p>
        <div class="text-5xl font-extrabold text-[#FF6B4A] mb-8">$0 <span class="text-lg font-normal text-[#1A1A2E]/40">/ 永久免费 forever</span></div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start gap-3 text-[#1A1A2E]/70">
            <span class="text-[#27C93F] mt-0.5">✓</span> <span>14天完整课程 <span class="text-[#1A1A2E]/40">Full 14-day curriculum</span></span>
          </li>
          <li class="flex items-start gap-3 text-[#1A1A2E]/70">
            <span class="text-[#27C93F] mt-0.5">✓</span> <span>双语术语词汇表 <span class="text-[#1A1A2E]/40">Bilingual glossary</span></span>
          </li>
          <li class="flex items-start gap-3 text-[#1A1A2E]/70">
            <span class="text-[#27C93F] mt-0.5">✓</span> <span>项目作品廊 <span class="text-[#1A1A2E]/40">Project gallery</span></span>
          </li>
          <li class="flex items-start gap-3 text-[#1A1A2E]/70">
            <span class="text-[#27C93F] mt-0.5">✓</span> <span>社区交流 <span class="text-[#1A1A2E]/40">Community access</span></span>
          </li>
        </ul>
        <button id="pricing-cta" class="cta-btn w-full bg-[#FF6B4A] text-white font-bold py-3 rounded-full shadow-lg shadow-[#FF6B4A]/20">
          免费开始 Start Free
        </button>
      </div>
      <!-- Pro Plan -->
      <div class="pricing-card bg-[#F8F9FA] border-2 border-[#E5E7EB] rounded-2xl p-8 relative overflow-hidden opacity-80">
        <div class="absolute top-0 right-0 bg-[#6C63FF] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">即将推出 Coming Soon</div>
        <h3 class="text-2xl font-bold text-[#1A1A2E] mb-1">专业版</h3>
        <p class="text-sm text-[#1A1A2E]/50 mb-6">Pro</p>
        <div class="text-5xl font-extrabold text-[#1A1A2E]/30 mb-8">$?? <span class="text-lg font-normal text-[#1A1A2E]/30">/ 敬请期待</span></div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start gap-3 text-[#1A1A2E]/50">
            <span class="text-[#27C93F] mt-0.5">✓</span> <span>免费版全部内容 <span class="text-[#1A1A2E]/30">Everything in Free</span></span>
          </li>
          <li class="flex items-start gap-3 text-[#1A1A2E]/50">
            <span class="text-[#6C63FF] mt-0.5">★</span> <span>视频教程 <span class="text-[#1A1A2E]/30">Video tutorials</span></span>
          </li>
          <li class="flex items-start gap-3 text-[#1A1A2E]/50">
            <span class="text-[#6C63FF] mt-0.5">★</span> <span>1对1辅导 <span class="text-[#1A1A2E]/30">1-on-1 mentoring</span></span>
          </li>
          <li class="flex items-start gap-3 text-[#1A1A2E]/50">
            <span class="text-[#6C63FF] mt-0.5">★</span> <span>完课证书 <span class="text-[#1A1A2E]/30">Certificate</span></span>
          </li>
          <li class="flex items-start gap-3 text-[#1A1A2E]/50">
            <span class="text-[#6C63FF] mt-0.5">★</span> <span>优先技术支持 <span class="text-[#1A1A2E]/30">Priority support</span></span>
          </li>
        </ul>
        <button disabled class="w-full bg-[#E5E7EB] text-[#1A1A2E]/40 font-bold py-3 rounded-full cursor-not-allowed">
          即将推出 Coming Soon
        </button>
      </div>
    </div>
  </div>
</section>

<!-- ===================== FOOTER ===================== -->
<footer class="bg-[#1A1A2E] py-16 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-3 gap-12">
      <!-- Brand -->
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">CodeLaunch <span class="text-[#FF6B4A]">码上出发</span></h3>
        <p class="text-white/40 text-sm leading-relaxed">两周，从零到发布。<br>Two weeks. Zero to shipped.</p>
      </div>
      <!-- Links -->
      <div>
        <h4 class="text-white font-semibold mb-4">链接 Links</h4>
        <ul class="space-y-2 text-white/40 text-sm">
          <li><a href="#" class="hover:text-[#FF6B4A] transition-colors">关于我们 About</a></li>
          <li><a href="#" class="hover:text-[#FF6B4A] transition-colors">学习社区 Community</a></li>
          <li><a href="#" class="hover:text-[#FF6B4A] transition-colors">隐私政策 Privacy</a></li>
          <li><a href="#" class="hover:text-[#FF6B4A] transition-colors">联系我们 Contact</a></li>
        </ul>
      </div>
      <!-- WeChat -->
      <div>
        <h4 class="text-white font-semibold mb-4">加入微信群 Join WeChat</h4>
        <div class="w-32 h-32 bg-white/10 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center">
          <span class="text-white/30 text-xs text-center">QR Code<br>二维码</span>
        </div>
        <p class="text-white/30 text-xs mt-3">扫码加入学习交流群</p>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
      &copy; 2026 CodeLaunch 码上出发. All rights reserved.
    </div>
  </div>
</footer>
`;
}

/**
 * Initializes interactivity for the landing page.
 * @param {function} navigate - Router navigation function
 */
export function init(navigate) {
  // --- CTA buttons ---
  const heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', () => {
      setState({ started: true });
      navigate('/dashboard');
    });
  }

  const pricingCta = document.getElementById('pricing-cta');
  if (pricingCta) {
    pricingCta.addEventListener('click', () => {
      setState({ started: true });
      navigate('/dashboard');
    });
  }

  // --- Terminal typing animation ---
  initTerminalAnimation();

  // --- Stat counter animation on scroll ---
  initStatCounters();
}

/**
 * Animates terminal lines appearing one by one with delays.
 */
function initTerminalAnimation() {
  const lines = document.querySelectorAll('.terminal-line');
  if (!lines.length) return;

  // Delays in ms for each line appearing
  const delays = [300, 1000, 1800, 2800, 3200, 3800, 4400];

  // Spinner animation for the "creating" line
  const spinnerChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let spinnerIndex = 0;
  let spinnerInterval = null;

  lines.forEach((line, i) => {
    const delay = delays[i] || (delays[delays.length - 1] + (i - delays.length + 1) * 500);
    setTimeout(() => {
      line.classList.add('visible');

      // Start spinner on the "Creating..." line
      if (i === 2) {
        const spinnerEl = document.getElementById('spinner-char');
        if (spinnerEl) {
          spinnerInterval = setInterval(() => {
            spinnerIndex = (spinnerIndex + 1) % spinnerChars.length;
            spinnerEl.textContent = spinnerChars[spinnerIndex];
          }, 100);
        }
      }

      // Stop spinner when check marks start appearing
      if (i === 3 && spinnerInterval) {
        clearInterval(spinnerInterval);
        spinnerInterval = null;
      }
    }, delay);
  });
}

/**
 * Animates stat numbers counting up when they scroll into view.
 */
function initStatCounters() {
  const statEls = document.querySelectorAll('.stat-number');
  if (!statEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      if (el.dataset.animated) return;
      el.dataset.animated = 'true';

      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 2000; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic for smooth deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  statEls.forEach(el => observer.observe(el));
}
