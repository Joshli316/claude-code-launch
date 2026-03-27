# Implementation Plan: 起码 QiMa

## Overview

QiMa (起码) is a bilingual tutorial web app that guides Chinese international students from zero coding knowledge to shipping real prototypes with Claude Code in 14 days. It solves three critical pain points: language barriers (bilingual Chinese/English), tech intimidation (zero-assumed knowledge, step-by-step guidance), and career anxiety (connects AI skills to job outcomes). The app is a static SPA on Cloudflare Pages with localStorage-based progress tracking — no backend, no accounts required.

## Product Design Rationale

### Value Proposition
**"两周，从零到发布。" (Two weeks, from zero to shipped.)**

Chinese international students face a brutal job market (H-1B fee hikes, visa uncertainty) while AI skills are the #1 differentiator (543% YoY demand surge). This app turns "I've never coded" into "I shipped three projects with AI" — a portfolio-ready transformation in 14 days.

### Why They'd Pay
- **Career ROI**: Portfolio projects they can show employers
- **Language bridge**: Only product teaching Claude Code bilingually with career framing
- **Peer proof**: "My friend got a PM interview because she could prototype with AI"
- **Time-boxed**: 14 days is manageable, not overwhelming

### Design Principles
1. **Chinese-first, English-inclusive** — Primary UI in Chinese, English technical terms always paired
2. **Progressive disclosure** — Never show everything at once; unlock as they advance
3. **Celebrate relentlessly** — Confetti, badges, progress animations for every milestone
4. **Project-based** — Every lesson ends with something tangible (a file, a page, a deployed site)
5. **Mobile-friendly** — Students will browse on their phones between classes

---

## The 14-Day Curriculum

### Week 1: 基础篇 (Foundations)

| Day | Title (CN/EN) | What They Learn | What They Build |
|-----|---------------|-----------------|-----------------|
| 1 | 你好，Claude! / Hello, Claude! | What is Claude Code, why it matters for careers, install Claude Code, first conversation | Screenshot of first Claude Code session |
| 2 | 你的第一个网页 / Your First Webpage | Ask Claude to create an HTML page, understand files and folders | A "Hello World" personal intro page |
| 3 | 让它变漂亮 / Make It Pretty | CSS basics through Claude, colors, fonts, layout | Styled version of Day 2 page |
| 4 | 和Claude更好地对话 / Talk to Claude Better | Prompt engineering, CLAUDE.md, context, @file references | A CLAUDE.md file for their project |
| 5 | 让网页动起来 / Make It Interactive | JavaScript through Claude, buttons, forms, events | Page with a working form or interactive element |
| 6 | 你的数字名片 / Your Digital Card | Combine Days 2-5 into a portfolio/resume page | Complete personal portfolio page |
| 7 | 复习与展示 / Review & Showcase | Review week, fix issues, celebrate progress | Polished portfolio ready to share |

### Week 2: 实战篇 (Real-World Building)

| Day | Title (CN/EN) | What They Learn | What They Build |
|-----|---------------|-----------------|-----------------|
| 8 | 真正的项目从这里开始 / Real Projects Start Here | Plan Mode, project scoping, breaking problems into steps | A project plan for their chosen app |
| 9 | 数据的力量 / The Power of Data | APIs, JSON, fetching and displaying data | A mini app that shows live data (weather, quotes, etc.) |
| 10 | 打造你的应用 / Build Your App | Full app development workflow, multi-file projects | Working prototype of their chosen app |
| 11 | 当东西坏了 / When Things Break | Debugging with Claude, reading errors, git basics | Fixed and improved version of Day 10 app |
| 12 | 发布到全世界! / Ship It to the World! | Cloudflare Pages deployment, domain basics, sharing | Live deployed app with a real URL |
| 13 | 进阶技能 / Level Up | MCP servers, hooks, custom commands, advanced features | Enhanced app with at least one advanced feature |
| 14 | 毕业日 / Graduation Day | Final project polish, career tips, what's next | Final portfolio with 3 shipped projects |

---

## App Features & Components

### F1. Landing Page (着陆页)
- **Hero section**: Bold headline "两周，从零到发布" with animated terminal mockup showing Claude Code in action
- **Pain point cards**: Three cards addressing language, tech intimidation, career anxiety
- **Social proof section**: Testimonials, stats ("543% AI job growth"), partner logos
- **14-day journey preview**: Visual timeline showing the path
- **Pricing section**: Free tier vs. Pro comparison
- **CTA**: "免费开始 / Start Free" button
- **Footer**: Links, WeChat QR code for community

### F2. Dashboard (仪表盘)
- **Progress ring**: Circular progress showing days completed / 14
- **Current day card**: Large, prominent card for today's lesson with estimated time
- **Streak counter**: Fire icon + consecutive days count
- **XP display**: Total points earned with level indicator
- **Badge shelf**: Earned badges displayed, locked badges grayed out
- **Quick stats**: Lines of code generated, projects built, terms learned
- **Week tabs**: Toggle between Week 1 and Week 2 view

### F3. Lesson Viewer (课程页)
- **Split layout on desktop**: Lesson content (left 60%), terminal simulation (right 40%)
- **Stacked on mobile**: Content on top, terminal below
- **Lesson content includes**:
  - Bilingual headers and body text
  - Concept cards with Chinese explanation + English term
  - Step-by-step instructions with numbered markers
  - "Try it!" interactive prompts (copy-paste ready commands)
  - Screenshots/GIFs showing expected results
  - Tips and warnings in callout boxes
  - Mini-quiz at end of each section
- **Terminal simulation panel**:
  - Styled to look like a real terminal (dark background, monospace font)
  - Shows example Claude Code conversations
  - Copy button for each command
  - NOT a real terminal — it's a guided walkthrough showing what they should see
- **Progress bar**: Top of page showing lesson completion
- **Navigation**: Previous/Next lesson buttons, back to dashboard

### F4. Bilingual Glossary (双语词典)
- **Searchable**: Filter by English or Chinese term
- **Categories**: Setup, HTML/CSS, JavaScript, Claude Code, Deployment, Career
- **Term cards**: English term, Chinese translation, pinyin, simple definition in both languages, example usage in a Claude Code context
- **"Word of the day"**: Featured term on dashboard
- **~100 essential terms** covering the full curriculum

### F5. Project Gallery (作品展示)
- **Featured projects**: Curated examples of what students have built
- **Category filters**: Portfolio sites, data apps, tools, creative projects
- **Each project card**: Screenshot, title, description, tech used, "Build this" link to relevant lesson
- **Inspiration section**: "What will YOU build?" prompt with idea starters

### F6. Career Corner (职业角)
- **"Why This Matters" articles**: How AI skills affect hiring for international students
- **Resume tips**: How to list Claude Code / AI prototyping skills
- **Interview prep**: Common questions about AI tools in interviews
- **Job market data**: Visual cards showing AI job demand stats
- **Success stories**: Profiles of students who leveraged AI skills

### F7. Navigation Bar
- **Logo**: "起码 QiMa" with rocket icon
- **Nav items**: Dashboard, Lessons, Glossary, Gallery, Career
- **Language toggle**: 中/EN switch
- **Progress indicator**: Small progress ring in nav
- **Mobile**: Hamburger menu with slide-out drawer

### F8. Settings (设置)
- **Language preference**: Chinese / English / Auto-detect
- **Progress management**: Reset progress, export progress
- **Notification preferences**: Daily reminders toggle
- **Theme**: Light / Dark mode

### F9. Gamification System
- **XP Points**: Earned for completing lessons (100 XP), quizzes (25 XP), building exercises (50 XP)
- **Levels**:
  - Level 1: 新手 (Beginner) — 0 XP
  - Level 2: 学徒 (Apprentice) — 300 XP
  - Level 3: 探索者 (Explorer) — 800 XP
  - Level 4: 建造者 (Builder) — 1500 XP
  - Level 5: 创造者 (Creator) — 2500 XP
  - Level 6: 发布者 (Shipper) — 4000 XP
- **Badges** (12 total):
  - 🚀 First Launch — Completed Day 1
  - 💻 First Page — Built first HTML page
  - 🎨 Style Master — Completed CSS lesson
  - 🗣️ Prompt Pro — Wrote a great CLAUDE.md
  - ⚡ Interactive — Added JavaScript
  - 📋 Portfolio Ready — Completed Week 1
  - 📐 Architect — Created a project plan
  - 🌐 Data Wizard — Fetched live data
  - 🔧 Bug Squasher — Debugged successfully
  - 🌍 Shipped It! — Deployed to the web
  - ⭐ Power User — Used an advanced feature
  - 🎓 Graduate — Completed all 14 days
- **Streak system**: Daily check-in, streak freeze available (1 per week)
- **Confetti animation**: Triggers on badge unlock and level up
- **Progress celebrations**: Encouraging messages at 25%, 50%, 75%, 100%

---

## Steps

### Phase 1: Foundation (App Shell)

1. **Create `index.html` with app shell**
   - HTML skeleton with `<div id="app">` mount point
   - Tailwind CSS CDN link
   - Google Fonts (Inter, Noto Sans SC, JetBrains Mono)
   - Custom CSS file link
   - Script tag for bundled JS
   - Meta tags for SEO (bilingual), Open Graph, viewport
   - Favicon (rocket emoji as SVG favicon)

2. **Create `src/styles/custom.css`**
   - CSS variables for color palette (coral, navy, cream, mint)
   - Custom animations: fadeIn, slideUp, confetti, pulse, shimmer
   - Terminal simulation styles (dark bg, green text, cursor blink)
   - Badge and achievement card styles
   - Progress ring SVG animation
   - Responsive breakpoints
   - Dark mode variant via `[data-theme="dark"]`

3. **Create `src/i18n.ts`**
   - Language type: `'zh' | 'en'`
   - `t(key: string)` function that returns string for current language
   - All UI strings in a flat object with `zh` and `en` keys
   - `setLanguage()`, `getLanguage()`, `toggleLanguage()` helpers
   - Persist language choice in localStorage

4. **Create `src/state.ts`**
   - State interface: `{ currentDay, completedLessons[], xp, streak, lastVisit, badges[], quizScores{}, language, theme }`
   - `getState()`, `setState()`, `resetState()` functions
   - `addXP(amount)`, `unlockBadge(id)`, `completeLesson(day)` helpers
   - `getLevel()` computed from XP thresholds
   - `getStreak()` computed from lastVisit date
   - Auto-save to localStorage on every mutation

5. **Create `src/router.ts`**
   - Hash-based router listening to `hashchange` event
   - Routes: `#/` (landing), `#/dashboard`, `#/lesson/:day`, `#/glossary`, `#/gallery`, `#/career`, `#/settings`
   - `navigate(path)` function
   - Route guards: redirect to `#/` if no progress, to `#/dashboard` if returning user

6. **Create `src/app.ts`**
   - Import router, state, i18n
   - Initialize app on DOMContentLoaded
   - Route change handler that calls component `render()` then `init()`
   - Global event delegation for language toggle
   - Check and update streak on load

### Phase 2: Components

7. **Create `src/components/nav.ts`**
   - Fixed top nav bar with logo, nav items, language toggle, progress ring
   - Mobile hamburger menu with slide-out drawer
   - Active route highlighting
   - Smooth transitions

8. **Create `src/components/landing.ts`**
   - Hero section with animated gradient background
   - Headline: "两周，从零到发布。" / "Two weeks. Zero to shipped."
   - Animated terminal mockup (CSS animation showing typing effect)
   - Three pain-point cards with icons
   - 14-day visual timeline (horizontal scroll on mobile)
   - Testimonial cards
   - Stat counters (animated number counting)
   - Pricing comparison table (Free vs Pro)
   - CTA button → starts Day 1 (saves state, navigates to dashboard)
   - Footer with links and community QR placeholder

9. **Create `src/components/dashboard.ts`**
   - SVG progress ring (animated fill based on completion)
   - Current day lesson card (prominent, with "Start" button)
   - Streak counter with fire animation
   - XP bar with level name
   - Badge shelf (grid of badge icons, locked ones grayed + locked icon)
   - Stats row: days completed, XP earned, terms learned
   - Week 1 / Week 2 tab toggle showing day cards
   - Each day card: number, title, status (locked/available/completed), estimated time

10. **Create `src/components/lesson.ts`**
    - Fetch lesson content from `curriculum.ts` by day number
    - Render split layout: content panel + terminal panel
    - Content panel: bilingual headers, step-by-step instructions, concept cards, tips, screenshots
    - Terminal panel: dark themed, shows example commands and outputs, copy buttons
    - "Try it!" sections with copy-paste ready commands
    - Mini-quiz component (multiple choice, bilingual)
    - Progress bar at top (sections completed / total)
    - "Mark as Complete" button → awards XP, checks badge eligibility, confetti if badge unlocked
    - Previous/Next navigation at bottom

11. **Create `src/components/glossary.ts`**
    - Search input with real-time filtering
    - Category filter tabs
    - Term cards in a responsive grid
    - Each card: English term (large), Chinese translation, pinyin, definition (bilingual), usage example
    - "Word of the Day" featured card at top
    - Alphabet / stroke-order sort toggle

12. **Create `src/components/gallery.ts`**
    - Project card grid with screenshots
    - Category filter buttons
    - Each card: thumbnail, title, description, tags, "Learn to build this" link
    - "What will you build?" inspiration prompt at bottom
    - Placeholder projects showcasing curriculum outcomes

13. **Create `src/components/career.ts`**
    - Stat cards: AI job demand data, salary ranges, hiring trends
    - "Why This Matters" article cards (bilingual)
    - Resume tips section with before/after examples
    - Interview prep Q&A accordion
    - Success story cards with photos and quotes

14. **Create `src/components/settings.ts`**
    - Language selection radio buttons
    - Theme toggle (light/dark)
    - Reset progress button with confirmation modal
    - Export progress (download JSON)
    - About / credits section

### Phase 3: Content

15. **Create `src/content/curriculum.ts`**
    - Data structure for all 14 days of lesson content
    - Each day object contains:
      - `day: number`
      - `title: { zh, en }`
      - `subtitle: { zh, en }`
      - `estimatedMinutes: number`
      - `sections: Array<{ type, content }>` where type = 'text' | 'concept' | 'steps' | 'terminal' | 'quiz' | 'tip' | 'warning' | 'image'
      - `badge?: string` (badge ID unlocked on completion)
      - `xp: number`
    - **Day 1 content (fully written — ~2000 words bilingual)**:
      - Section 1: "What is Claude Code?" — explains AI-assisted coding in simple terms
      - Section 2: "Why learn this?" — career impact with real data
      - Section 3: "Install Claude Code" — step-by-step with screenshots for macOS, Windows, Linux
      - Section 4: "Your first conversation" — type `claude`, ask it something, see the magic
      - Section 5: Quiz — 3 multiple choice questions
    - **Days 2-14**: Full content outlines with section structure, key concepts, terminal examples, and quiz questions for each day (content follows curriculum table above)

16. **Create `src/content/glossary-data.ts`**
    - ~100 terms organized by category
    - Categories: 基础概念 (Basics), Claude Code, HTML/CSS, JavaScript, 部署 (Deployment), 职业 (Career)
    - Each term: `{ en, zh, pinyin, definition: { zh, en }, example: string, category: string }`
    - Key terms include: Terminal/终端, Prompt/提示词, Deploy/部署, Repository/代码仓库, API/接口, Debug/调试, etc.

17. **Create `src/content/projects.ts`**
    - 8-10 showcase projects with metadata
    - Each: `{ title: {zh, en}, description: {zh, en}, thumbnail, tags[], relatedDay: number }`
    - Projects range from simple (personal page) to advanced (data dashboard)

### Phase 4: Polish & Gamification

18. **Implement confetti animation**
    - Canvas-based confetti burst on badge unlock and level up
    - Colors match brand palette
    - Auto-dismiss after 3 seconds

19. **Implement toast notification system**
    - "+100 XP!" toast on lesson complete
    - "🔥 3 day streak!" toast on daily login
    - "🎖️ Badge unlocked: First Page!" toast
    - Stack up to 3 toasts, auto-dismiss after 4 seconds

20. **Add micro-interactions and polish**
    - Smooth page transitions (fade + slide)
    - Button hover/press states
    - Card hover lift effects
    - Progress bar fill animation
    - Number counting animation for stats
    - Terminal typing effect on landing page
    - Skeleton loading states
    - Scroll-triggered reveal animations

21. **Responsive design pass**
    - Test and fix all components at 375px (iPhone), 768px (iPad), 1024px+
    - Mobile nav drawer
    - Stacked lesson layout on mobile
    - Touch-friendly button sizes (min 44px)
    - Swipe gestures for lesson navigation on mobile

22. **Dark mode implementation**
    - Toggle in settings and nav
    - All colors mapped to CSS variables
    - Terminal panel always stays dark
    - Persist preference in state

### Phase 5: SEO & Meta

23. **Add SEO and social meta tags**
    - Bilingual title and description meta tags
    - Open Graph tags for social sharing (with preview image)
    - Twitter card meta
    - Structured data (JSON-LD for Course)
    - Canonical URL
    - Language alternates (hreflang)

24. **Add PWA manifest**
    - `manifest.json` with app name, icons, theme color
    - Basic service worker for offline shell caching
    - "Add to Home Screen" prompt on mobile

---

## Files to Create/Modify

- `index.html` — App shell, meta tags, script/style loading
- `manifest.json` — PWA manifest
- `src/app.ts` — Main app controller
- `src/router.ts` — Hash-based SPA router
- `src/state.ts` — localStorage state management
- `src/i18n.ts` — Bilingual content system
- `src/styles/custom.css` — Custom animations and brand styles
- `src/components/nav.ts` — Navigation bar
- `src/components/landing.ts` — Landing/hero page
- `src/components/dashboard.ts` — Progress dashboard
- `src/components/lesson.ts` — Lesson viewer
- `src/components/glossary.ts` — Bilingual glossary
- `src/components/gallery.ts` — Project gallery
- `src/components/career.ts` — Career corner
- `src/components/settings.ts` — Settings page
- `src/content/curriculum.ts` — All 14 days of lesson content
- `src/content/glossary-data.ts` — ~100 bilingual tech terms
- `src/content/projects.ts` — Gallery showcase data
- `assets/icons/` — SVG badge icons and UI icons

## Technical Notes

- **No build step**: Use `<script type="module">` with TypeScript compiled at dev time, or ship as vanilla JS. For simplicity in a Cloudflare Pages deploy, compile TS to a single `dist/bundle.js` or use inline `<script>` blocks with modern JS.
- **Tailwind via CDN**: Use the Tailwind CDN play script (`<script src="https://cdn.tailwindcss.com">`) for zero-build styling. Configure custom colors in the Tailwind config block.
- **Images**: Use placeholder SVGs and emoji for v1. Real screenshots can be added later.
- **Content volume**: Day 1 should be fully written (~2000 words bilingual). Days 2-14 should have complete section structures with key content (can be expanded later).

## Open Questions

1. **Real terminal vs. simulation**: V1 uses a terminal simulation (styled div showing expected output). A future V2 could embed a WebContainer (StackBlitz) for real in-browser terminal — worth considering but out of scope for V1.
2. **Authentication for Pro features**: V1 is fully free with no auth. If monetizing, consider Cloudflare Access or a simple email-based unlock code.
3. **Community features**: WeChat group QR code is low-tech but effective for V1. A built-in forum/comments system could come in V2.
4. **Video content**: The current plan is text + screenshots + terminal sims. Short video walkthroughs (hosted on YouTube/Bilibili) could be embedded in lessons as a future enhancement.
