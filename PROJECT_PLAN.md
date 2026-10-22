# Poulios Brothers — Website Rebuild Project Plan

*A living document. Last updated: October 21, 2026 — mission re-scoped to a destination for young people entering the climate field; new site sections and four-phase roadmap; content taxonomy moved to `TAXONOMY.md`; Costi and Leo profile pages replace family bios; hosting moved from Vercel to Cloudflare; animation moved from Framer Motion to Astro View Transitions + CSS + Motion. See Appendix A for the updated brief.*

---

## 0. How to use this document

This is your single reference for the rebuild. It's long on purpose — so you don't have to come back and ask "what does X do again?" at 11pm on a school night. Skim the headers, read the sections you need right now, and come back to the rest later.

Three conventions you'll see throughout:

- 🚀 **SHORTCUT** — the quickest possible way to get something live. Ugly or limited but functional. Tag it in the "Revisit Later" log at the bottom so you don't forget.
- 🧠 **LEARN** — something worth investing 20–60 minutes to understand. Usually pays off many times over.
- 🎯 **CREDIBILITY MOMENT** — a feature or decision that directly supports your #1 goal (college/career credibility). Don't skip these.

---

## 1. Vision & success criteria

### Vision in one sentence
A vibrant, unmistakably-made-by-us destination where young people start and develop their environmental journey — and that still reads as genuinely impressive to an admissions officer, a journalist, a potential mentor, or a climate organisation looking for young talent.

### What visitors can do (the big picture)
- **Learn** the basics of key climate and environmental topics, themes, and sectors.
- **Get involved** in real projects, internships, and programmes around the world.
- **Read** seminal research (Library) and the latest news and developments (Feed).
- **Give** to projects, charities, and causes.
- **Discover innovation** — the startups, investors, and people driving each sector.
- **Follow our story** — Costi and Leo's blogs, adventures, and projects.
- **Post their project** — young people and organisations share projects and opportunities, approved by us.

### Goals
Credibility, attracting traffic, cool youthful design, growth in followers, donations, partnerships, and press.

This is the big-picture destination. We build it gradually and are not chasing lots of traffic or live listings in the early phases. Credibility with adult readers (admissions, press, mentors, funders) remains a filter for every design decision.

### What "credibility" means concretely
- A real brand, not a template — logo, type system, color palette.
- Custom profile pages for Costi and Leo showing what each has done, what they care about, and what they're learning. (No family bios for Spyros and Sara on the site.)
- Real project pages with photos, metrics ("we collected X kg of litter across Y days"), partners, and outcomes.
- Original writing — even one good essay from each brother puts you ahead of 95% of teen sites.
- A public GitHub repo showing you built this yourselves with Claude Code. This *is* part of the story. 🎯

### What we're explicitly NOT optimizing for
- SEO rankings for generic climate terms in the early phases (too competitive; wrong battle for now).
- Being a news aggregator (the Library and Feed are curated, not comprehensive).
- E-commerce, logins, or anything requiring user accounts. Submissions use a simple form plus our manual approval, not accounts.

---

## 2. The core strategy: ship first, polish later

You're school-busy. The temptation with a project like this is to plan for six months and launch nothing. We're doing the opposite:

**Week 1–2: A real, ugly, live site.** Good enough to replace what's there now. Custom domain, real content, working contact, working donate.

**Week 3–6: Brand and polish.** Logo, type, colors, better photography, motion.

**Month 2+: Knowledge hub.** Innovation and Give sections, filterable library, Notion curation inbox, signature moments (WebGL earth, live data).

**Later: Destination.** Get involved (opportunities) and Post your project with a submission form.

Every decision in Phase 1 gets a 🚀 SHORTCUT tag and goes into the Revisit Later log so nothing is forgotten. Think of Phase 1 as a scaffolding rebuild — it has to stand, but it doesn't have to be pretty.

---

## 3. Site & content architecture

### 3.1 The sitemap (what exists from day one)

### 3.1 The sitemap (full vision; phase in brackets)

```
Home                                   [1]
├── Our story                          [1]
│   ├── Costi (custom profile page)
│   ├── Leo (custom profile page)
│   ├── Projects (El Gouna = flagship)
│   ├── Journal (blogs, adventures, essays)
│   └── Press kit                      [3]
├── Learn (topic explainers)           [1 — off-the-shelf pieces first]
├── Library (reports, papers, books, videos, podcasts, data)   [1]
├── Feed (latest news and developments)                        [1]
├── Innovation (startups, investors, people)                   [3]
├── Give (charities, projects, causes; incl. donate to ours)   [3]
├── Get involved (internships, programmes, volunteering…)      [4]
├── Post your project                                          [4]
│   ├── Young people's projects
│   ├── Organisations' projects
│   └── Submission form (approved by us before publishing)
└── Contact / partner with us          [1]
```

### Pages in priority order for Phase 1
1. **Home** — hero, mission in one punchy line, teasers for Our story, Learn, Library, and Feed, newsletter signup.
2. **Costi and Leo profiles** — custom designs; short placeholders are fine at launch.
3. **Projects** — El Gouna as a real case study, not a paragraph.
4. **Library and Feed** — port existing content, keep it simple.
5. **Learn** — a handful of off-the-shelf explainers we already have.
6. **Contact** — clear CTAs for partner, press, donate.

### 3.2 Designing for a growing library (the market intelligence angle)

The El Gouna cleanup, Tom Chi video, and UN reports on the current site are early examples. The real goal is that pouliosbrothers.com evolves into a **curated source of climate knowledge and market intelligence** — filtered, contextualized, and commented on by this family. Phase 1 will look simple, but the underlying design should anticipate hundreds of library items, not a handful. This shapes decisions from day one so you don't have to retrofit later.

**Four principles that should shape every content decision:**

**1. Structured content, not just pages.** Every library item should be stored with consistent metadata: title, summary, source URL, date, topic tags, region tags, format, curator (Costi / Leo / Spyros / Sara), and a short commentary. This makes filtering, search, cross-linking, and topic landing pages possible as the library grows — and painful to retrofit if you skip it now. 🧠

**2. Ten content types (all defined in the schema from Phase 1, built out over time):**
- **Profiles** — Costi and Leo
- **Projects** — our own work (El Gouna, future cleanups, campaigns)
- **Journal** — blogs, adventures, essays (highest-leverage content for credibility 🎯)
- **Library** — lasting reference material: reports, papers, books, videos, podcasts, data
- **Feed** — latest news and developments, with our take
- **Explainers** — the Learn section
- **Innovators** — startups, investors, nonprofits, research groups, people (absorbs the old "Leaders" idea)
- **Causes** — the Give section
- **Opportunities** — the Get involved section
- **Submissions** — Post your project (young people and organisations)

**3. A shared taxonomy.** Fully specified in **`TAXONOMY.md`** (approved October 21, 2026). Summary:
- *Topics:* energy, water, blue economy, nature, agrifood, circular economy, built environment, transport, industry, adaptation, policy, finance, philanthropy, careers
- *Regions:* global, Europe, Americas, Asia, Middle East, Global South
- *Level:* beginner, intermediate, advanced
- *Curator:* Costi, Spyros, Leo

A consistent tag list is boring to maintain and wildly valuable later. Changes go through `TAXONOMY.md` first.

**4. Market intelligence as your differentiated angle.** A list of climate articles is a commodity. A list *curated and contextualized by thoughtful young people with a point of view* is scarce. Lean into that:
- **Weekly digest** via Substack synthesizing 3–5 notable pieces with your takes.
- **Topic pages** that tell an evolving story (e.g. "The plastic recycling fraud" builds on the Climate Integrity article you already surface).
- **"What we're reading"** signals taste.
- **Periodic deep dives** — one well-argued essay per quarter beats weekly small posts.
- **Vital signs dashboard** — live climate indicators (NOAA CO₂, NASA temperature, NSIDC sea ice) as a standing page, not just a homepage ticker.

**Live and semi-live feeds (Phase 3):**
- **RSS aggregation** from trusted sources (IPCC, UNEP, Carbon Brief, Bloomberg Green, Grist, MIT Tech Review) piped into a curation inbox in Notion. You don't auto-publish — you review, pick, and add commentary. This turns reading you'd do anyway into publishable output. 🧠
- **Automated stats dashboards** for live climate indicators, refreshed daily via free APIs.

**Tooling evolution as you scale:**

| Stage | Library size | Tool | Why |
| --- | --- | --- | --- |
| Phase 1 | 0–30 items | Markdown files in the repo | Simple, cheap, learnable, public proof of work 🎯 |
| Phase 2+ | 30–100 items | Add a **Notion "Library Inbox"** database with the full metadata model — all new curation happens there, finished entries copy to Markdown for publishing | Capture-fast on phone, review-before-publish, no new tech 🧠 |
| Phase 3+ | 100+ items | Move to a **headless CMS** (Sanity free tier) or sync Notion → site via API; add tag filtering, search, topic pages | Scale, automation, rich querying |

**A note on making this actually happen.** The hardest part isn't the tech — it's the *habit*. One family member noticing a great article on their phone, dropping it into the Notion Library Inbox with a 30-second take, and tagging it. If you build that habit, the site writes itself over time.

---

## 4. Brand direction brief (what you'll hand to a designer)

*Copy this section into a separate doc or a Fiverr Pro brief when you're ready to hire.*

### Who we are
Two brothers — **Costi (15)** and **Leo (11)** — working alongside our parents **Spyros** and **Sara**. Young voices, but the work is serious — beach cleanups in Egypt, curating UN reports, championing leaders we admire, building a small knowledge hub for climate issues. The current site reads like a school project. The new site should read like a movement-in-miniature run by people who know what they're doing.

### Brand adjectives (pick 3–5)
- Youthful but confident
- Sharp, not cute
- Editorial (magazine-ish), not corporate
- Optimistic but unflinching
- Distinctly Mediterranean / Greek heritage as a subtle thread

### What to avoid
- The default climate palette of leaf green + ocean blue + white
- Generic sans-serif + stock photo aesthetic
- Hand-drawn leaves, globes, or water droplets as the logo
- "Inspiring" swoopy gradients

### Deliverables from designer (approx $200–400 on Fiverr Pro)
- Primary wordmark ("Poulios Brothers") + optional monogram mark
- 2–3 color palettes to choose from (recommend 5–6 colors each, including 1–2 accent)
- Font pairing recommendation (headline + body + optional mono)
- Social avatar, favicon, OG card template
- Brand guidelines PDF (1–2 pages is fine)

### Directions to suggest to the designer
- Editorial feel: think *The Atlantic*, *Monocle*, *MIT Tech Review* — confident typography doing most of the work
- One unexpected color (coral, ochre, deep aubergine, terracotta — something Mediterranean)
- A mark that could work as a favicon at 32×32 and as a huge headline graphic

🎯 This is your single highest-leverage paid dollar. Do this before building the site so every component can use the final palette.

---

## 5. The tool kit — what each thing is, and how to get started

Each tool below includes: *what it is, why you want it, how to access it, your first action*. Read the ones you're about to use; skip the rest.

### 5.1 Claude Code (desktop app) 🧠
**What it is:** A desktop application from Anthropic that lets you tell Claude what you want to build in plain English, and Claude writes/edits the code in your project folder. Think of it as pair-programming with someone who already knows every language and framework.

**Why you want it:** This is the tool that makes the whole plan possible given your time constraint. You describe what you want ("add a hero section to the home page with a scroll animation"), Claude proposes the changes, you approve or reject each one.

**How to access:**
1. You already have Claude Pro/Max (assumption — if not, you'll need at minimum Pro; Max is better if you'll use it heavily).
2. Download the Claude desktop app from **claude.com/download** (macOS, Windows, Windows ARM — Linux CLI only for now).
3. Install, sign in with your Anthropic account.
4. Click the **Code** tab at the top center of the app.
5. Click **Select folder** and point it at wherever you'll keep the website project (more on this in Phase 1).

**Your first action:** Install the app today. Just install. Don't do anything else yet.

**Key features you'll use:**
- **Ask permissions mode (default):** Claude proposes a change, shows a diff, waits for your 👍. Safe for beginners.
- **Plan mode:** Claude writes a plan first *without touching files*. Great for "figure out how to do X" before committing.
- **Preview pane:** Shows your HTML/site rendering live in the right pane as Claude builds it.
- **CLAUDE.md file:** A file you create in your project to give Claude persistent context ("we use Tailwind, the brand color is #xxxxx, tone is editorial not corporate").

**What it costs:** Included in Claude Pro ($20/mo) or Max plans. If you already have Claude.ai subscription, you're set.

---

### 5.2 GitHub 🧠
**What it is:** A website (and service) that stores code projects. Think Google Drive, but built specifically for source code, with version history, collaboration, and public/private controls.

**Why you want it:**
1. Every version of your code is saved forever; you can roll back anything.
2. Your public repo *is* a credibility artifact. Admissions readers click through. 🎯
3. Cloudflare (your host) deploys directly from GitHub — every time you push a change, the site updates automatically.

**How to access:**
1. Go to **github.com** and create a free account. Use a professional username if you can (e.g. `pouliosbrothers` or `poulios-bros`).
2. Download **GitHub Desktop** from **desktop.github.com** — this is a friendly app that hides the command-line Git stuff.
3. You can also let Claude Code handle git operations for you ("commit these changes with the message 'add El Gouna page'") — this is often easiest.

**Your first action:** Create the account. Install GitHub Desktop. Sign in.

**What it costs:** Free forever for public repos. (And you *want* a public repo for the credibility angle. 🎯)

---

### 5.3 Astro 🧠
**What it is:** A modern website-building framework. You write content in simple files (Markdown for pages, HTML-ish components for design), and Astro turns it into a super-fast website.

**Why Astro and not something else:**
- **Fast:** Pages load instantly. Good for climate cred (less energy per visit) and for user experience.
- **Content-first:** Treats words as first-class citizens, which is what you have.
- **Simple enough for beginners, deep enough to grow with you.**
- **Works beautifully with Claude Code.** Claude knows Astro extremely well.
- **Free.** No licensing costs ever.

**How to access:** You don't install Astro globally — each project gets its own copy. When you create the project (Phase 1, Week 1), Claude Code will set it up with one prompt: "Create a new Astro project with Tailwind in this folder using the blog starter template."

**Your first action:** Nothing yet. Just know this is the engine.

**What it costs:** Free.

---

### 5.4 Markdown 🧠
**What it is:** A way of writing formatted text using plain symbols. It's not a program — it's a convention. `# Heading` becomes an H1, `**bold**` becomes **bold**, `[link](https://...)` becomes a link. You're reading Markdown right now.

**Why you want it:** Every article, project description, library entry, and bio on your site will be a Markdown file (`.md`). You can edit them in any text editor, in Claude Code, in Obsidian, even in Notion (which can export to Markdown).

**How to learn:** 10 minutes on **commonmark.org/help** is plenty. Then ask Claude "remind me how to do X in Markdown" whenever you forget.

**Your first action:** Skim the commonmark cheatsheet. Write one test file.

**What it costs:** Nothing, it's just a format.

---

### 5.5 Tailwind CSS
**What it is:** A styling toolkit. Instead of writing CSS files, you apply small named classes directly in your HTML (`class="text-2xl font-bold text-coral-500"`). Makes design fast and consistent.

**Why you want it:** You'll spend zero time fiddling with style files. Claude Code uses Tailwind fluently. It's the current default for serious modern sites.

**How to access:** It comes bundled when Claude sets up your Astro project.

**Your first action:** Nothing. Just know the class names you see in code are Tailwind.

**What it costs:** Free.

---

### 5.6 Animation: Astro View Transitions + CSS + Motion
**What it is:** The tools that make elements fade in on scroll, pages slide smoothly into each other, and buttons pop on hover. The "cool youthful animated" part of your brief lives here.

*Changed October 2026: previously Framer Motion. Framer Motion has been renamed **Motion** and is mainly built for React. On an Astro site, lighter options do the same job with less code.*

**The approach, in order of preference:**
1. **Astro View Transitions** (built in) — smooth transitions between pages.
2. **Plain CSS animations** — hover states, simple fades.
3. **Motion (vanilla JS version)** — scroll-triggered and more complex animations, only where 1 and 2 aren't enough.

**Why you want it:** Subtle motion = feels modern. Overdone motion = feels like a 2012 agency site. You want the former.

**How to access:** View Transitions and CSS need nothing installed. Claude installs Motion only when a specific animation needs it.

**Your first action:** Nothing now. Phase 2 item.

**What it costs:** Free.

---

### 5.7 Cloudflare (hosting) 🧠
*Changed October 2026: previously Vercel.*

**What it is:** A hosting service. It takes your code from GitHub and turns it into a live website on the internet, for free, with a global network so it loads fast everywhere.

**Why Cloudflare and not Vercel/GoDaddy/Netlify:**
- **Free tier allows commercial use.** Vercel's free (Hobby) tier is for non-commercial use, and taking donations could break that. Check Vercel's current terms if you ever reconsider.
- **Cloudflare now owns Astro** (acquired January 2026), so Astro sites are a first-class citizen there.
- **One account for everything:** hosting, Web Analytics (already in the plan), and optionally the domain later (Cloudflare Registrar).
- **Deploys from GitHub automatically.** Push code, site updates. No FTP, no "upload files."
- **Preview URLs for every change** before it goes live.

**How to access:**
1. Go to **cloudflare.com** and sign up for a free account.
2. In the dashboard, go to **Workers & Pages** → Create → connect your GitHub account.
3. Once you have an Astro project on GitHub, pick the repo and deploy. Cloudflare detects Astro and sets the build up. Claude Code can walk you through it.

**Your first action:** Create the account (later, after you have a GitHub repo).

**What it costs:** Free, with generous limits for a site like this.

---

### 5.8 Your domain at GoDaddy
**What it is:** You already own **pouliosbrothers.com** through GoDaddy. You don't need to move the registration. You'll point it at Cloudflare.

**What you'll do (at the right moment — end of Phase 1):**
1. In Cloudflare, add pouliosbrothers.com as a site (free plan). Cloudflare gives you two nameserver addresses.
2. Log into GoDaddy → your domain → Nameservers → replace GoDaddy's nameservers with the two Cloudflare ones. (Using the root domain pouliosbrothers.com on Cloudflare hosting needs the domain's DNS managed by Cloudflare. The domain itself stays registered at GoDaddy.)
3. In Cloudflare, attach the domain to your site under its custom domains setting.
4. Wait for DNS to update — usually under an hour, occasionally up to 24 hours.
5. Your site is live at pouliosbrothers.com.

**Then set up email (decided October 2026):** the old info@pouliosbrothers.com account no longer exists. In Cloudflare, turn on **Email Routing** (free) and forward **info@pouliosbrothers.com** to Costi's Gmail. The public address is info@; mail lands in Gmail. Replies go out from the Gmail address — upgrade to a paid mailbox (e.g. Google Workspace) only if that becomes a problem.

**Claude Code can walk you through this live** when you get there.

**Optional later:** Move the domain to Cloudflare Registrar ($10/yr vs GoDaddy's $20+) once you're comfortable. Not urgent.

---

### 5.9 Substack (newsletter)
**What it is:** A free newsletter platform. You write posts, people subscribe, Substack handles sending.

**Why Substack:**
- Literally zero setup.
- Free forever for free newsletters.
- A public Substack archive is itself a portfolio of your writing. 🎯
- Carries weight — serious writers and journalists use it.

**How to access:**
1. Go to **substack.com**, sign up, create a publication.
2. Name it something like "Poulios Brothers" or find a separate brand (e.g. "Ten Second Climate" referencing the voice you admire).
3. Write a welcome post.

**Your first action:** Create the account and reserve the name. Writing can come later.

**What it costs:** Free. They take 10% only if you charge for subscriptions (you won't, for now).

**How it integrates:** Embed the signup form on your Home page and at the bottom of every article.

---

### 5.10 Cloudflare Web Analytics
**What it is:** Privacy-friendly website analytics. Shows you visitors, page views, where they come from, what they read.

**Why not Google Analytics:** GA is free but invasive and heavy. CWA is free, lightweight, and doesn't track users across the web. Better story when people ask about your data practices.

**How to access:**
1. Sign up at **cloudflare.com** (free account).
2. Dashboard → Analytics & Logs → Web Analytics.
3. Add a site, paste one snippet into your site (Claude handles this).

**Your first action:** Skip for Phase 1. Phase 2 item.

**What it costs:** Free.

---

### 5.11 Formspree
**What it is:** A service that handles website contact forms. You put a form on your page; when someone submits it, Formspree emails you the content.

**Why:** Without it, you'd need a backend server to receive form submissions. Formspree is free and one line of code.

**How to access:** Sign up at **formspree.io**, create a form endpoint, paste the URL into your contact form.

**Your first action:** Nothing yet. Phase 1, final step.

**What it costs:** Free for 50 submissions/month. Plenty.

---

### 5.12 Stripe Payment Links (donations)
**What it is:** The professional way to take money online. Stripe generates a hosted payment page; you link to it.

**Why vs. PayPal only:** Stripe looks serious, supports cards + Apple Pay + Google Pay, has a clean UI, and integrates with almost anything you'd add later.

**How to access:**
1. Sign up at **stripe.com** (requires ID and bank details — this is the one non-trivial account setup; Spyros should own this).
2. Create a Payment Link for "donation — custom amount."
3. Put the link on your "Support us" page.
4. Keep the PayPal button too for people who prefer it.

**Your first action:** Phase 1 or 2, Spyros's to-do.

**What it costs:** ~3% per transaction, no monthly fees. Standard.

**🚀 SHORTCUT:** If Stripe setup feels like too much in Phase 1, keep just PayPal for the initial launch. Add Stripe in Phase 2. Flag it in the Revisit Later log.

**🧠 LATER:** Look into **Every.org** (donations routed through a registered 501(c)(3) fiscal sponsor, so donors get US tax receipts). Only useful if you register the project formally or care about US donors.

---

### 5.13 Figma (design)
**What it is:** A free design tool that runs in the browser. If you hire a designer, they'll deliver Figma files. You can also use it to sketch your own ideas.

**How to access:** **figma.com**, free account. Install the desktop app too.

**Your first action:** Make an account when your designer delivers files, or earlier if you want to sketch.

**What it costs:** Free for your needs.

---

### 5.14 Tools you'll hear about but DON'T need yet
- **Node.js** — bundled with Claude Code desktop now; don't worry about it unless something breaks.
- **Next.js, Remix, SvelteKit** — other frameworks. Astro is better for you.
- **WordPress, Wix, Squarespace** — no. Ceiling too low for your credibility goal.
- **Docker, Kubernetes** — you'll never need these for this project.

---

## 6. On your Notion question (honest answer)

Short version: **Notion publishing is a useful tool — but not for your main public site.** Here's the full breakdown.

### Why Notion publishing doesn't fit your main site
- **Design ceiling is too low.** Notion sites look like Notion pages. You can pay for tools like Super.so ($12/mo) to reskin them, but you still can't do custom animations, WebGL, signature interactions, or a truly distinctive brand. That directly undermines your "punching above your weight" goal.
- **Slow page loads.** Notion pages are heavy.
- **Limited SEO and metadata control.**
- **Looks non-serious.** A college admissions officer who clicks through and recognizes Notion's template style will unconsciously downgrade their impression. A real custom site does the opposite.
- **Custom domain costs extra** (Notion's paid plans).
- **No code, no GitHub proof of work.** You lose the credibility artifact. 🎯

### Where Notion *does* fit in your workflow
- **As your internal CMS / staging area.** Draft project descriptions, essays, library entries in Notion first — it's where you already work. When they're ready, copy-paste into Markdown files in your repo. (Notion has "Export as Markdown" built in. Takes one click.)
- **As your team wiki.** Project planning, this document's Revisit Later log, meeting notes.
- **As a public press kit page** if you're in a hurry. One shared Notion page with bios, logos, and contact info works in a pinch for sending to journalists.

**Verdict:** Treat Notion as your back-office and draft space. Treat pouliosbrothers.com as the front door. They're complementary, not competing.

---

## 7. Phased roadmap

Time estimates assume ~3–5 hours per weekend from the family, not per person.

### Phase 0 — Setup (weekend 1, ~2 hours)

No separate project Gmail (decided October 2026): accounts use Costi's personal Gmail, which is also the inbox behind info@pouliosbrothers.com. Never put that address in the repo or on the site — the public address is info@ only.

- [ ] **Claude desktop app** (**claude.com/download**) — already installed; check Claude Code opens.
- [x] **GitHub** account — done, username `pouliosbrothers` (Costi's Gmail).
  - [ ] Settings → Emails → tick "Keep my email addresses private".
  - [ ] Turn on two-factor authentication; Spyros keeps the recovery codes.
  - [ ] Install GitHub Desktop. Sign in.
- [x] **Cloudflare** free account (Costi's Gmail) — done. Nothing to configure yet.
- [x] **Substack** publication (Costi's Gmail) — done.
- [ ] **Password manager:** store all logins in one shared place the family uses (not in Notion, not in the repo).
- [ ] **Docs:** PROJECT_PLAN, CLAUDE.md, TAXONOMY and BRAND_BRIEF are in Notion — done.
- [ ] Gather existing assets: all photos from El Gouna, any other project photos, the signature image, any writing you've done, photos of Costi and Leo for their profile pages, and the off-the-shelf explainer pieces for Learn.

**End of Phase 0: all accounts exist, no code yet.**

---

### Phase 1 — Minimum Viable Site (weekends 2 & 3, ~8 hours)

Goal: a clean, readable site live at pouliosbrothers.com with your real content, even if it looks plain.

**Weekend 2 (~4 hours):**
- [ ] Open Claude Code, point it at a new folder (e.g. `~/Code/poulios-brothers`).
- [ ] Prompt: *"Create a new Astro project in this folder using the Astro blog or portfolio starter template. Configure Tailwind CSS. Initialize a git repo."* Claude handles it.
- [ ] Create a file called `CLAUDE.md` in the project. Put in it: who you are, your brand adjectives, your goals for the site, file structure, and any decisions. (This is Claude's memory for every session in this folder.) 🧠
- [ ] Push the repo to GitHub (public repo). 🎯
- [ ] Connect the GitHub repo to Cloudflare (Workers & Pages). Deploy. You now have a live preview URL on a Cloudflare address.
- [ ] Prompt Claude to set up all ten content collections from `TAXONOMY.md` in `src/content/config.ts`.
- [ ] Prompt Claude to build the Phase 1 pages from section 3.1 with placeholder content.

**Weekend 3 (~4 hours):**
- [ ] Write starter profile content for Costi and Leo (`src/content/profiles/`). Placeholders are fine; custom designs come in Phase 2.
- [ ] Write the El Gouna project page (`src/content/projects/`). Include: what, where, why, photos, any numbers you can recover, the video link, what's next.
- [ ] Port existing content into Library and Feed, tagged per `TAXONOMY.md`. 🚀 SHORTCUT: flat lists for now. Filters come later.
- [ ] Add the off-the-shelf explainers to Learn (`src/content/explainers/`).
- [ ] Add a Substack newsletter embed to the home page and footer.
- [ ] Add a simple contact form via Formspree.
- [ ] Add the existing PayPal donate button for our own projects. (Stripe in Phase 2.)
- [ ] Point pouliosbrothers.com at Cloudflare (the GoDaddy nameserver change — see 5.8).

**End of Phase 1: real site, real content, real URL. You have something to show people.** Plain but honest. Ship it.

---

### Phase 2 — Brand and polish (weeks 3–6, part-time)

Goal: the site looks distinctive and intentional. This is the biggest visual jump.

- [x] Brand identity — done October 21, 2026 in Claude Design (canvas "Poulios Brothers — Brand Directions"): palette Blue B, fonts (Fraunces logo + Bricolage Grotesque + Inter + JetBrains Mono), logo W2-3 + badge B1-4, homepage layout (desktop + phone). Details in CLAUDE.md.
- [x] Final logo files produced October 21, 2026 (pouliosbrothers-logo-files.zip: wordmarks, lockups, badge/favicon SVG + PNGs, app icons, social avatar, default social sharing card). Goes into the repo's `public/` folder in Phase 1.
- [ ] Hiring a designer is now optional (logo polish only, if at all).
- [ ] Apply brand tokens (color, type, logo) to the site via Claude Code. Prompt: *"Update our Tailwind config to use these brand colors and fonts. Update the header to use our new logo."*
- [ ] Photograph or source better images. If you don't have great El Gouna photos, borrow from the video stills.
- [ ] Design and build custom profile pages for Costi and Leo (what you care about, what you've done, what you're learning).
- [ ] Add more Learn explainers, starting with the most-asked topics.
- [ ] Add subtle motion (Astro View Transitions + CSS; Motion only where needed): page transitions, fade-ins on scroll, hover states on cards. Restraint is the goal.
- [ ] Add Cloudflare Web Analytics.
- [ ] Add Open Graph images so links look good on social.
- [ ] Set up Stripe Payment Link for donations. 🎯

**End of Phase 2: site looks like something you'd send to an admissions counselor.**

---

### Phase 3 — Knowledge hub and signature moments (month 2+, opportunistic)

Pick 1–2 per month. These turn "nice site" into "whoa" and a real resource.

- [ ] **Innovation section.** Startups, investors, nonprofits, and people (including leaders we admire: Sagan, Gore, Chi, and others) — each with context and related reading.
- [ ] **Give section.** Charities, projects, and causes, with donation links; our own projects included.
- [ ] **Notion curation inbox** — capture library, feed, innovator, and cause items on a phone, review, then publish.
- [ ] **Filterable Library and Feed.** Filter by topic, region, format, level. Build "by topic" landing pages.
- [ ] **Live climate data ticker** on the homepage. CO₂ ppm from NOAA, sea level from NASA, global temp anomaly. Free APIs; Claude can wire it up.
- [ ] **WebGL earth or particle hero.** One big "oh damn" moment on the homepage. Use Three.js / React Three Fiber. Claude can do this.
- [ ] **Press kit page** with downloadable logos, photos, a one-pager PDF, and a clear "for press" contact.
- [ ] **Instagram / YouTube feed embeds** on project pages.
- [ ] **Every.org integration** for tax-deductible donations (if applicable).

---

### Phase 4 — Destination (when ready)

Goal: young people and climate organisations come to the site to find and share real opportunities.

- [ ] **Get involved section.** Internships, programmes, volunteering, competitions, fellowships — with deadlines, age range, cost, and apply links. Closed opportunities hide automatically.
- [ ] **Post your project section.** Two sub-sections (Young people / Organisations) listing approved projects and opportunities.
- [ ] **Submission form** (Formspree or similar). Every submission is reviewed and approved by us before going live. Young people's contact details are never published.
- [ ] **Review routine.** Check opportunities and causes at least every 3 months (`lastReviewed` field).

---

## 8. Content inventory (what needs writing)

| Item | Status | Who | Rough length |
| --- | --- | --- | --- |
| Homepage hero statement | TBD | All | 1 line + 2 sentences |
| Mission / story | Exists (weak) | Family | 150–200 words |
| Costi profile page | TBD | Costi | Custom design + copy |
| Leo profile page | TBD | Leo | Custom design + copy |
| El Gouna case study | Partial | Whoever was there | 300–500 words + photos |
| Library and Feed: port existing | Exists | Shared | Copy-paste + tags |
| Learn: off-the-shelf explainers | Exists | Shared | Copy-paste + tags |
| Press kit one-pager | TBD | Spyros | Half-page PDF |
| First essay | TBD | Costi or Leo | 500–800 words |

🚀 SHORTCUT for Phase 1: profile placeholders are fine if they say "Profile coming soon — [name] is focused on X." Don't block the launch on perfect profile pages.

---

## 9. Realistic weekly time budget (school weeks)

Given school, Phase 2 onward should assume roughly:

- **2 × 90-minute sessions/week** — one family member drives (usually Costi, since he's 15 and more experienced with code); Claude does the heavy lifting.
- **1 × Sunday session** (2–3 hours) — bigger change, deploy, content work. Good slot for all four to review together.
- **Claude does 90% of the code.** You decide what, approve changes, and write words.

Block it on the family calendar. A recurring 90-minute Saturday morning slot compounds into a lot of site over a school year.

---

## 10. Revisit Later log (your backlog)

*Anything tagged 🚀 SHORTCUT ends up here. Add as you go.*

**Site & brand**
- [ ] Swap PayPal-only for Stripe Payment Link (once Spyros sets up Stripe account).
- [ ] Profiles: replace placeholders with custom Costi and Leo pages.
- [ ] Press kit PDF.
- [ ] Open Graph images per page.
- [ ] Move domain to Cloudflare Registrar.
- [ ] Consider Every.org for tax-deductible donations.
- [ ] Real photos for El Gouna (replace video stills).

**Content architecture & library (from section 3.2)**
- [ ] Set up a Notion "Library Inbox" database with the metadata model from `TAXONOMY.md`.
- [x] Agree on the shared tag vocabulary — done, see `TAXONOMY.md` (October 21, 2026).
- [ ] Replace flat Library and Feed with filterable versions (by topic / region / format / level / curator).
- [ ] Topic landing pages (energy, water, nature, circular economy…).
- [ ] Innovator pages for leaders we admire (Sagan, Gore, Chi, and others).
- [ ] **RSS aggregation** from trusted sources piped into the Notion inbox.
- [ ] **Vital signs dashboard** — live climate indicators (NOAA CO₂, NASA temp, NSIDC sea ice) as a standing page.
- [ ] Weekly digest cadence on Substack.
- [ ] Migrate to a headless CMS (Sanity) or a Notion → site sync once the library exceeds ~100 items.
- [ ] Full-site search.

**Signature moments**
- [ ] WebGL hero moment (Three.js / R3F).
- [ ] Live climate data ticker on homepage.
- [ ] Instagram / YouTube feed embeds on project pages.

Keep this list in Notion so it's actually accessible and editable.

---

## 11. Glossary (terms you'll encounter)

- **Repo / repository** — a project folder tracked by Git.
- **Commit** — a saved snapshot of changes.
- **Push** — sending commits from your computer to GitHub.
- **Deploy** — publishing your site so it's live on the internet.
- **Build** — the process of turning your code into an optimized set of files to deploy.
- **DNS** — the address book of the internet; tells browsers where pouliosbrothers.com points.
- **CDN** — a network of servers around the world that caches your site so it loads fast everywhere. (Cloudflare gives you one for free.)
- **Frontend** — what users see (the design). Astro + Tailwind do this.
- **Backend** — servers and databases. You don't have one yet, and might never need one.
- **API** — a way for one service to talk to another (e.g. your site asking NOAA for CO₂ data).
- **Component** — a reusable piece of a page (e.g. a "card" used for each project).
- **Diff** — the list of changes between before-and-after. Claude shows you these before editing.

---

## 12. Your next steps (in order)

1. **This week:** Read sections 0–4 of this doc. Install Claude desktop. Make GitHub and Cloudflare accounts. Reserve Substack name. (~1 hour total.)
2. **Next weekend:** Run a 90-minute Phase 1 kickoff session with Claude Code. Prompt: *"I want to create a new Astro project for our climate-focused family website. Help me set up the project and push it to GitHub."* Let Claude lead.
3. **Reply to this chat** if anything in the plan needs adjusting, or when you're ready to get unstuck on a specific step.

---

*Any updates to this plan — re-scope, new tools, new priorities — should be edited directly into this document (via Notion, GitHub, or locally). Treat it as a living strategy, not a final spec.*

---

# Appendix

*A living section for artifacts and reference material that shape the project. Append new appendices as A, B, C… over time.*

---

## Appendix A — Project Brief

*Source: project kickoff with Claude (April 19, 2026) and the Instructions section of this Claude Chat Project. Edit this appendix as the brief evolves — it's the north star for every decision in this plan.*

### Update — October 21, 2026 (current brief)

Rebuild pouliosbrothers.com into a vibrant place where young people can start and develop their environmental journey, by:

- (a) learning the basics about key topics, themes, and sectors of environmental protection and climate change;
- (b) finding and getting involved in real-life projects, internships, or programmes related to climate change, conservation, etc. around the world;
- (c) accessing seminal research and the latest news and developments in their fields of climate interest;
- (d) finding and donating to projects, charities, and other causes related to the above;
- (e) learning about new innovations in the different climate sectors and the people, startups, and investors driving them;
- (f) learning about our own family's activities in this area, including our own blogs, adventures, and projects.

The site should still serve as a reference point for Costi's college admissions officers, press, mentors, funders, etc. — but also be a real destination for young people entering the climate field, and for real climate organisations to promote their work and access young talent. Young people and organisations can post their projects (approved by us).

**Goals:** credibility, attracting traffic, cool youthful design, growth in followers, donations, partnerships, and press. This is the big picture; we build it gradually and are not chasing lots of traffic or live projects right away.

**Decisions made in this update:**
- Ten site sections / content collections, phased 1–4 (section 3.1 and section 7).
- Full taxonomy approved and recorded in `TAXONOMY.md`.
- Custom profile pages for Costi and Leo; no family bios on the site.
- Curators: Costi, Spyros, Leo.
- No ages shown on profiles.
- All submissions approved by us; young people's contact details never published.

*The April brief below is kept for history.*

### The ask (original wording, April 2026)

> We already have a website on **https://pouliosbrothers.com**. The domain and website are hosted by GoDaddy. You are a full stack engineer and designer building a cool, youthful, fun, animated website and brand while communicating important messages about climate issues and innovative solutions, highlighting top leaders in this field, and showcasing our ongoing projects in this field and our other activities to a wide audience of young people but also people who might notice us and help us grow and succeed in our future careers.
>
> Our goal with this website is to inspire others, showcase ourselves as impressive young leaders who are punching above our weight, and raise awareness, money and other support for our projects.

### Who "we" are

- **Costi** — 15, brother
- **Leo** — 11, brother
- **Spyros** — father
- **Sara** — mother

Basic Python coding experience; willing to learn Claude Code. School-busy — limited time for experimentation — so the plan prioritizes shortcuts that ship now and improvements that compound later.

### Existing presence

- Domain & current site: **pouliosbrothers.com** (GoDaddy-hosted website builder template, to be rebuilt).
- Active projects (e.g. El Gouna litter cleanup) and curated library content (Tom Chi, Sagan, Gore, Thatcher, UN reports, climate news) — these are *early examples* of what will become a much larger, continuously growing body of work.

### Goals in priority order

1. **College / career credibility** — show adult strangers (admissions officers, journalists, potential mentors, funders) that this is a serious effort run by impressive young people.
2. **Community + newsletter growth** — convert visitors into a subscribed audience we can reach over time.
3. **Donations for projects** — provide a clean, trusted way to support our work financially.
4. **Partnerships / press coverage** — make it easy for journalists, schools, and potential partners to find and engage us.

### What we want the site to be

A **cool, youthful, fun, animated** website with a distinctive brand that:
- Communicates climate issues and innovative solutions.
- Highlights top leaders in the field.
- Showcases our ongoing projects and activities.
- Reaches a wide audience — young people especially, but also decision-makers and potential supporters.
- Evolves into a curated **source of knowledge and market intelligence** on climate issues, with live feeds, ongoing curation, and a point of view.

### Budget posture

Prefer free tools; willing to spend $500–$2,000 when it clearly buys quality or user experience (e.g. a freelance brand designer).

### Working principles (emergent from planning conversation)

- **Ship early, polish later.** Live ugly beats unlaunched beautiful.
- **Tag shortcuts, don't hide them.** Every quick-and-dirty choice goes in the Revisit Later log.
- **Public by default.** Code on public GitHub, content openly curated — both serve the credibility goal.
- **Habit over heroics.** A 30-second curation per family member per day grows the library faster than any weekend sprint.
- **Claude does the code; the family does the judgment and the words.**

---

## Appendix B — Content taxonomy

See **`TAXONOMY.md`** (approved October 21, 2026): content types, shared tags (topics, regions, level, curator), base fields, per-type fields, and publishing rules.

---

## Appendix C — [Reserved]

*Add future appendices here — e.g. brand guidelines once the designer delivers, partner list, press contacts, annual review notes.*
