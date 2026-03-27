# 起码 QiMa

A bilingual (Chinese/English) tutorial app that takes Chinese international students from zero coding knowledge to shipping prototypes with Claude Code in 14 days.

## Tech Stack
- Vanilla JavaScript/HTML single-page app on Cloudflare Pages
- Tailwind CSS via CDN for styling
- No build step — vanilla JS ES modules served directly
- localStorage for progress tracking (no backend)
- Bilingual: Chinese primary, English secondary (with language toggle)

## Structure
```
claude-code-launch/
├── index.html              # Entry point — landing page + app shell
├── src/
│   ├── app.js              # Main app controller, routing, state
│   ├── router.js           # Hash-based SPA router
│   ├── state.js            # Progress/settings state (localStorage)
│   ├── i18n.js             # Bilingual content system
│   ├── components/
│   │   ├── landing.js      # Landing/hero page
│   │   ├── dashboard.js    # Progress dashboard
│   │   ├── lesson.js       # Lesson viewer (content + terminal sim)
│   │   ├── glossary.js     # Bilingual tech glossary
│   │   ├── gallery.js      # Project showcase gallery
│   │   ├── career.js       # Career corner
│   │   ├── settings.js     # User preferences
│   │   └── nav.js          # Navigation bar
│   ├── content/
│   │   ├── curriculum.js   # All 14 days of lesson content
│   │   ├── glossary-data.js # Bilingual term dictionary
│   │   └── projects.js     # Gallery project data
│   └── styles/
│       └── custom.css      # Custom styles beyond Tailwind
├── assets/
│   ├── icons/              # SVG icons, badges, achievements
│   └── images/             # Screenshots, illustrations
├── CLAUDE.md
└── plan.md
```

## Entry Point
`index.html` — loads Tailwind CDN, custom CSS, and bundled JS.

## Deployment
`wrangler pages deploy .` from project root.

## Conventions
- **Bilingual content**: Chinese is primary. English technical terms always shown alongside Chinese (e.g., "终端 (Terminal)"). Code stays in English always.
- **Component pattern**: Each component exports a `render()` function returning an HTML string and an `init()` function for event listeners.
- **Routing**: Hash-based (`#/dashboard`, `#/lesson/3`, `#/glossary`).
- **State**: Single state object in localStorage, accessed via `state.js` helpers.
- **CSS**: Tailwind utility classes for layout/spacing. Custom CSS only for animations, gradients, and unique brand elements.
- **Tone**: Warm, encouraging, conversational. Never condescending. Celebrate small wins.
- **Color palette**: Warm coral (#FF6B4A) primary, deep navy (#1A1A2E) dark, soft cream (#FFF8F0) light, mint green (#4ECDC4) accent for success states.
- **Typography**: Inter for English, Noto Sans SC for Chinese. Code blocks use JetBrains Mono.
- **i18n**: All UI strings go through `i18n.js`. Content objects have `zh` and `en` keys.
