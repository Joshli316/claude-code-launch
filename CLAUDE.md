# CodeLaunch 码上出发

A bilingual (Chinese/English) tutorial app that takes Chinese international students from zero coding knowledge to shipping prototypes with Claude Code in 14 days.

## Tech Stack
- TypeScript/HTML single-page app on Cloudflare Pages
- Tailwind CSS via CDN for styling
- No build step — vanilla TS compiled inline, or pre-bundled
- localStorage for progress tracking (no backend)
- Bilingual: Chinese primary, English secondary (with language toggle)

## Structure
```
claude-code-launch/
├── index.html              # Entry point — landing page + app shell
├── src/
│   ├── app.ts              # Main app controller, routing, state
│   ├── router.ts           # Hash-based SPA router
│   ├── state.ts            # Progress/settings state (localStorage)
│   ├── i18n.ts             # Bilingual content system
│   ├── components/
│   │   ├── landing.ts      # Landing/hero page
│   │   ├── dashboard.ts    # Progress dashboard
│   │   ├── lesson.ts       # Lesson viewer (content + terminal sim)
│   │   ├── glossary.ts     # Bilingual tech glossary
│   │   ├── gallery.ts      # Project showcase gallery
│   │   ├── career.ts       # Career corner
│   │   ├── settings.ts     # User preferences
│   │   └── nav.ts          # Navigation bar
│   ├── content/
│   │   ├── curriculum.ts   # All 14 days of lesson content
│   │   ├── glossary-data.ts # Bilingual term dictionary
│   │   └── projects.ts     # Gallery project data
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
- **State**: Single state object in localStorage, accessed via `state.ts` helpers.
- **CSS**: Tailwind utility classes for layout/spacing. Custom CSS only for animations, gradients, and unique brand elements.
- **Tone**: Warm, encouraging, conversational. Never condescending. Celebrate small wins.
- **Color palette**: Warm coral (#FF6B4A) primary, deep navy (#1A1A2E) dark, soft cream (#FFF8F0) light, mint green (#4ECDC4) accent for success states.
- **Typography**: Inter for English, Noto Sans SC for Chinese. Code blocks use JetBrains Mono.
- **i18n**: All UI strings go through `i18n.ts`. Content objects have `zh` and `en` keys.
