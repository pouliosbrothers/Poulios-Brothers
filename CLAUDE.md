# CLAUDE.md

*Persistent context for Claude Code. Read at the start of every coding session. Keep it tight. Update when decisions change.*

Last updated: October 21, 2026 (new mission and goals; ten content collections; content model now defined in `TAXONOMY.md`; Costi and Leo profile pages replace family bios; hosting Vercel → Cloudflare; animation Framer Motion → View Transitions + CSS + Motion; brand colours, fonts, logo and homepage layout approved; project scaffolded on Astro 7 + Tailwind v4, file map updated to match)

---

## Who we are

We're the Poulios family, building **pouliosbrothers.com** — a destination for young people starting their environmental journey, and a showcase for Costi and Leo's own work.

- **Costi** — 15, brother. Some Python; usually drives coding sessions.
- **Leo** — 11, brother. Learning as we go; writes content.
- **Spyros** — dad. Ops, Stripe, logistics.
- **Sara** — mom. Content and editorial.

We are not professional developers. We work in short weekend sessions. **You (Claude Code) do the heavy lifting; we decide what to build and review your changes.**

---

## The mission

Rebuild pouliosbrothers.com into a vibrant place where young people start and develop their environmental journey. They can:

- **Learn** the basics of key climate and environmental topics and sectors.
- **Get involved** in real projects, internships, and programmes around the world.
- **Read** seminal research (Library) and the latest news and developments (Feed).
- **Give** to projects, charities, and causes.
- **Discover innovation** — the startups, investors, and people driving each sector.
- **Follow our story** — Costi and Leo's blogs, adventures, and projects.
- **Post their project** — young people and organisations share projects and opportunities (approved by us).

It must still read as genuinely impressive to adult strangers (admissions officers, press, mentors, funders), and become a real destination for young people entering the climate field and for climate organisations promoting their work and looking for young talent.

Goals: credibility, attracting traffic, cool youthful design, growth in followers, donations, partnerships, and press. This is the big picture — we build it gradually and are not chasing traffic or live listings in the early phases.

Full context lives in `PROJECT_PLAN.md` (at repo root; mirrored in Notion). If something in this file conflicts with the plan, the plan wins — flag the conflict so we can update this file.

---

## Current phase

**Phase 1 — Minimum viable site.** Goal: clean, readable site live at `pouliosbrothers.com` with our real content: Costi and Leo profiles, our projects, journal, a small Library and Feed, and a few off-the-shelf Learn explainers. Plain is fine. Ugly-but-honest beats unlaunched-and-pretty.

Phases at a glance (details in `PROJECT_PLAN.md` section 7):
- **Phase 1:** profiles, projects, journal, library, feed, explainers
- **Phase 2:** brand and design polish
- **Phase 3:** innovators, causes, Notion curation inbox
- **Phase 4:** opportunities (Get involved), Post your project + submission form

All ten collections are defined in the schema from Phase 1, even if their pages come later.

When a task sounds out of Phase 1 scope (fancy animation, WebGL, filterable library, live data dashboards, submission forms), **default to the minimum viable version and flag it for the Revisit Later log** (section 10 of `PROJECT_PLAN.md`).

---

## Tech stack (decisions already made)

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Content:** Markdown (MDX only when a page needs embedded components)
- **Content structure:** Astro content collections with Zod schemas
- **Language:** TypeScript where Astro supports it; plain JS is fine for tiny components
- **Hosting:** Cloudflare Workers & Pages (free tier; static build, deploys from GitHub). Domain stays registered at GoDaddy, DNS managed by Cloudflare.
- **Version control:** GitHub (**public repo** — the code is part of our credibility story)
- **Analytics:** Cloudflare Web Analytics (Phase 2+)
- **Newsletter:** Substack embed
- **Forms:** Formspree
- **Email:** info@pouliosbrothers.com via Cloudflare Email Routing, forwarding to Costi's personal Gmail. Use info@ as the only public contact address — never put the personal Gmail address in code, content, or commits.
- **Donations:** Stripe Payment Link + PayPal (Phase 2+)
- **Animation:** Astro View Transitions and CSS first; Motion (vanilla JS, not the React version) only where those aren't enough. Used sparingly (Phase 2+). Respect `prefers-reduced-motion`.

**Don't swap the stack without discussing.** If a simpler tool exists for a specific task, suggest it — don't just substitute.

---

## Expected project structure

```
/
├── CLAUDE.md              ← this file
├── PROJECT_PLAN.md        ← strategic doc
├── BRAND_BRIEF.md         ← designer brief
├── TAXONOMY.md            ← content types, tags, and fields (source of truth)
├── public/                ← favicons, og-default.png, site.webmanifest
│   └── brand/             ← logo files (wordmarks, lockups, badge, social avatar)
├── src/
│   ├── components/        ← reusable UI pieces (Header, Footer, PlaceholderPage)
│   ├── content.config.ts  ← Zod schemas for all ten collections (Astro 7 location)
│   ├── navigation.ts      ← main menu links, Subscribe link, contact email
│   ├── content/
│   │   ├── taxonomy.ts    ← tag lists from TAXONOMY.md (topics, regions, level, curator)
│   │   ├── profiles/      ← Costi and Leo profile pages (custom designs)
│   │   ├── projects/      ← our own projects
│   │   ├── journal/       ← our blogs, adventures, essays
│   │   ├── library/       ← lasting reference material
│   │   ├── feed/          ← latest news and developments
│   │   ├── explainers/    ← Learn section
│   │   ├── innovators/    ← startups, investors, people (Phase 3)
│   │   ├── causes/        ← Give section (Phase 3)
│   │   ├── opportunities/ ← Get involved (Phase 4)
│   │   └── submissions/   ← Post your project, approved entries only (Phase 4)
│   ├── layouts/           ← BaseLayout (head tags, header, footer)
│   ├── pages/             ← routes
│   └── styles/
│       └── global.css     ← Tailwind import, brand fonts, brand tokens (@theme)
└── astro.config.mjs
```

Tailwind v4 has no `tailwind.config.mjs`: brand colours and fonts live in the `@theme` block in `src/styles/global.css`. Schemas live in `src/content.config.ts`, not `src/content/config.ts` (Astro 7).

---

## Content model

**`TAXONOMY.md` is the source of truth** for every collection, tag, and field. Enforce it via Zod in `src/content/config.ts`. Quick reference:

- **Topics** (1 primary + up to 3): `energy`, `water`, `blue-economy`, `nature`, `agrifood`, `circular-economy`, `built-environment`, `transport`, `industry`, `adaptation`, `policy`, `finance`, `philanthropy`, `careers`. Emissions and carbon removal are tagged by sector.
- **Regions:** `global`, `europe`, `americas`, `asia`, `middle-east`, `global-south`.
- **Level:** `beginner`, `intermediate`, `advanced`.
- **Curator:** `Costi`, `Spyros`, `Leo`.

Base fields on every item: `title`, `summary`, `date`, `topics`, `regions`, `curator`, `commentary`, `image`, `featured`, `draft`, `lastReviewed`. Each collection adds its own fields (see `TAXONOMY.md` section 4).

Two deliberate gaps from `TAXONOMY.md`: `submissions` has no `contactEmail` field (the repo is public, so contact details stay in Formspree; the submissions schema is strict and rejects unknown fields), and there is no alt-text field for `image` yet (proposed: `imageAlt`, add to `TAXONOMY.md` first).

Use exactly these vocabularies. **Don't invent new tags without updating `TAXONOMY.md` first.** Consistent taxonomy now = filterable library later.

Submissions: nothing auto-publishes, everything is approved by us, and young people's contact details are never shown on the site.

---

## Brand tokens

Colors and typography are chosen (from our Claude Design canvas). All fonts are free Google Fonts.

**Logo (approved October 21, 2026):**
- *Wordmark (W2-3):* stacked — "Poulios" (Fraunces 600, cream) over an indented "Brothers" (Fraunces italic 400, brass) + hot-pink full stop, with a short cyan bar underneath. On cream backgrounds use deeper shades: royal blue text, brass #A86E0E, pink #D6246E, cyan #0B7FA8.
- *Badge (B1-4):* royal blue circle, "PB" in Bricolage Grotesque 800, brass, + hot-pink full stop. Used for favicon, avatars, and beside the wordmark in the header.
- Currently built from live fonts on the design canvas; final SVG files still to be produced.

**Homepage layout (approved October 21, 2026)** — boards "Homepage · desktop" and "Homepage · phone" on the Claude Design canvas. Section order: header (badge + wordmark, 7-item nav, brass Subscribe) → hero ("Start your climate journey *here.*", two CTAs, photo) → topic tag strip → "Seven ways *in.*" section cards (later-phase sections marked "coming soon") → "What we're *reading.*" on cream (Learn / Library / Feed cards) → "Who we *are.*" (Costi, Leo, El Gouna project card on brass) → newsletter signup on brass → footer. Headline pattern: Bricolage Grotesque 800 with the last word in Fraunces italic brass. On phone: menu button, sideways-scrolling tags, single column. Flag any deviation from these values for approval before committing. Check text contrast passes AA whenever two of these colors are combined.

```css
/* colors — CHOSEN October 21, 2026 ("Blue B") */
--color-ground: #0A2472;      /* royal blue — main background */
--color-text: #F7F3EA;        /* cream — text on ground */
--color-secondary: #E8B04B;   /* brass — headline highlights, primary buttons */
--color-accent: #4FD1FF;      /* cyan — logo badge, tags, links */
--color-pop: #FF4F9A;         /* hot pink — sparing pops: "new" labels, small highlights */

/* type — CHOSEN October 21, 2026 (combo "C · Serif logo, bold headlines") */
--font-logo: 'Fraunces', Georgia, serif;              /* wordmark, weight 600 */
/* Fraunces everywhere: font-variation-settings: 'WONK' 0, 'SOFT' 0; (load the WONK and SOFT axes from Google Fonts) */
--font-display: 'Bricolage Grotesque', sans-serif;    /* headlines (800), section labels and buttons (700) */
--font-highlight: 'Fraunces', Georgia, serif;         /* italic 400, for highlighted words in headlines only */
--font-body: 'Inter', system-ui, sans-serif;          /* body and interface */
--font-mono: 'JetBrains Mono', monospace;             /* tags, dates, metadata */
```

---

## Writing & tone

When generating profile copy, hero copy, project descriptions, alt text, meta descriptions:

- **Editorial and confident, not corporate.** Think *The Atlantic*, not a nonprofit newsletter.
- **Youthful but not childish.** No exclamations, no "awesome," no emojis in content.
- **Specific over inspirational.** "Collected 47 kg of plastic across three beaches" beats "made a real difference."
- **Sentence case for headings** (not Title Case).
- **Oxford comma.**
- **Em dash over double hyphen** (—, not --).
- **No AI tells:** no "delve," "tapestry," "in today's rapidly evolving landscape," "at the intersection of," "navigate the complexities."
- **If you don't know a fact (a metric, a date, a name, a quote), ask — don't invent.**

---

## Coding conventions

- **Components:** PascalCase filenames (`ProjectCard.astro`).
- **Utilities / helpers:** camelCase.
- **Tailwind classes** over custom CSS unless a case really warrants it.
- **Accessibility is not optional.** Semantic HTML, alt text on every image, keyboard navigation, visible focus states, contrast that passes AA.
- **Performance:** images via Astro's `<Image />` component; no heavy JS on pages that don't need it; prefer static generation to SSR unless a feature requires otherwise.
- **No browser storage** (localStorage, sessionStorage) unless explicitly requested — keep the site stateless.
- **No tracking beyond Cloudflare Web Analytics.**
- **Small commits, clear messages.** `feat: add El Gouna project page`, not `update stuff`.

---

## How we want to work with you

- **Plan mode first for anything non-trivial.** If the change spans more than two files or introduces a new dependency, map the approach before touching files.
- **Ask permissions mode by default** — we review diffs.
- **If a task is ambiguous, ask.** One clarifying question beats an assumption.
- **When you implement a shortcut, say so.** End the task summary with: *"🚀 Shortcut: [what we skipped]. Add to Revisit Later log."* We'll update `PROJECT_PLAN.md` together.
- **Don't auto-install dependencies** without naming them and saying why.
- **Don't delete hand-written content** (essays, bios, drafts) without explicit confirmation.
- **Don't refactor what isn't broken.** If existing code works, leave it alone unless we ask.

---

## Always do

- Semantic tags, alt text, focus states on every UI change.
- Use the content collection schema — no ad-hoc frontmatter.
- Keep routes fast (< 100 KB JS where possible).
- Assume the repo is public — **no secrets, no API keys, no private email addresses in code.**
- Run `npm run build` locally before we deploy.

## Never do

- Add SSR, databases, or auth without discussion.
- Use emoji or decorative Unicode in code or in content.
- Invent facts, metrics, quotes, or attributions.
- Change brand tokens, file structure, or content schema without flagging it here first.
- Commit `.env`, `.env.local`, or any file containing keys.

---

## Reference docs

- `PROJECT_PLAN.md` — strategic plan, phased roadmap, Revisit Later log.
- `BRAND_BRIEF.md` — what we told the designer.
- `TAXONOMY.md` — content types, tags, and fields.
- Live site: [pouliosbrothers.com](https://pouliosbrothers.com) (old version until we deploy the rebuild).

---

*This file is a living contract. When we make a new decision, update it here. Date the change at the top.*
