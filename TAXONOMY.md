# Poulios Brothers — Content Taxonomy (v3)

*Draft: October 21, 2026. Once approved, this becomes the source of truth for every content type and tag on the site, and CLAUDE.md links to it.*

---

## 1. Site sections and content types

| Section | Content type (collection) | What one item is | Phase |
| --- | --- | --- | --- |
| Our story | `profiles` | Costi or Leo profile page | 1 |
| Our story | `projects` | One of our own projects (e.g. El Gouna cleanup) | 1 |
| Our story | `journal` | Our blogs, adventures, essays | 1 |
| Library | `library` | Lasting reference material: reports, papers, books, videos, podcasts, datasets | 1 |
| Feed | `feed` | Latest news and developments, with our take | 1 |
| Learn | `explainers` | A beginner explainer on one topic or sector (Phase 1: off-the-shelf pieces we already have) | 1 |
| Innovation | `innovators` | A startup, investor, nonprofit, research group or person | 3 |
| Give | `causes` | A charity, project or campaign people can donate to | 3 |
| Get involved | `opportunities` | An internship, programme, volunteering role, competition etc. | 4 |
| Post your project | `submissions` | A project or opportunity posted by a young person or an organisation, approved by us. Two sub-sections (Young people / Organisations) plus a submission form | 4 |

All ten are defined now, including the ones built in later phases.

---

## 2. Shared tags (used on every content type)

### Topics: pick 1 primary + up to 3 more

| Tag | Covers |
| --- | --- |
| `energy` | Renewables, grids, storage, nuclear, efficiency |
| `water` | Freshwater, sanitation, drought, water tech |
| `blue-economy` | Oceans, coasts, fisheries, marine industries |
| `nature` | Biodiversity, forests, conservation, rewilding, land use |
| `agrifood` | Agriculture, diets, food waste, alt proteins |
| `circular-economy` | Plastic, recycling, waste, packaging, materials reuse |
| `built-environment` | Buildings, cities, urban planning, cooling |
| `transport` | EVs, aviation, shipping, public transport |
| `industry` | Steel, cement, chemicals, manufacturing |
| `adaptation` | Extreme heat, floods, resilience |
| `policy` | Law, treaties, COPs, government action, climate justice |
| `finance` | Climate investing, carbon markets, funding |
| `philanthropy` | Foundations, giving, grant-making |
| `careers` | Education, skills, climate jobs |

*Emissions, air quality and carbon removal have no tag of their own — tag them by the sector they belong to (e.g. `industry`, `energy`, `nature`).*

### Regions: pick 1 or more

`global` · `europe` · `americas` · `asia` · `middle-east` · `global-south`

### Level (for `explainers` and `library`)

`beginner` · `intermediate` · `advanced`

### Curator

`Costi` · `Spyros` · `Leo`

---

## 3. Base fields (every item)

```yaml
title: "…"
summary: "…"            # 1–2 sentences
date: YYYY-MM-DD         # published / added
topics: [energy, …]      # first one = primary
regions: [europe, …]
curator: Costi | Spyros | Leo
commentary: "…"          # our take — optional on own content
image: "…"               # optional
featured: false
draft: false
lastReviewed: YYYY-MM-DD # when we last checked it is still accurate
```

---

## 4. Extra fields by content type

### `profiles`
```yaml
name: Costi | Leo
tagline: "…"
interests: [topics…]
links: { instagram, youtube, linkedin, … }   # optional
# No ages shown.
```

### `projects` (our own)
```yaml
status: planned | active | completed
location: "El Gouna, Egypt"
startDate / endDate: YYYY-MM-DD
people: [Costi, Leo]
partners: ["…"]
metrics: ["…"]         # real numbers only, never invented
donateUrl: "…"         # optional
```

### `journal`
```yaml
author: Costi | Leo
kind: blog | adventure | essay
```

### `library`
```yaml
format: report | paper | book | video | podcast | data
source: "IPCC"         # publisher / channel
sourceUrl: "…"
level: beginner | intermediate | advanced
```

### `feed`
```yaml
format: news | article | announcement | event
source: "Carbon Brief"
sourceUrl: "…"
```

### `explainers` (Learn)
```yaml
level: beginner | intermediate | advanced
readingTime: 5           # minutes
related: [library / innovators / opportunities slugs]
```

### `innovators`
```yaml
kind: startup | investor | nonprofit | research | person
website: "…"
hq: "City, Country"
founded: YYYY            # optional
stage: pre-seed | seed | series-a | growth | public   # startups only
```

### `causes` (Give)
```yaml
kind: charity | project | campaign | fund
organisation: "…"
country: "…"
registeredCharity: true | false
donateUrl: "…"
ours: false              # true for our own projects
```

### `opportunities` (Get involved)
```yaml
kind: internship | volunteering | programme | competition | course | fellowship | event
organisation: "…"
location: "City, Country"
remote: true | false
ageMin: 14               # optional
ageMax: 25               # optional
cost: free | paid | stipend | fee
status: open | rolling | closed
deadline: YYYY-MM-DD     # optional if rolling
applyUrl: "…"
submittedBy: us | organisation
```

### `submissions` (Post your project)
```yaml
postedBy: young-person | organisation      # decides which sub-section it appears in
kind: project | opportunity
name: "…"                # project / organisation name shown on site
location: "City, Country"
remote: true | false
lookingFor: [volunteers, funding, mentors, partners, participants]   # optional
link: "…"                # website or social page
# Only if kind = opportunity:
deadline: YYYY-MM-DD
ageMin / ageMax: …
applyUrl: "…"
# Private (collected by the form, never published):
contactEmail: "…"
approvedBy: Costi | Spyros | Leo
approvedDate: YYYY-MM-DD
```

---

## 5. Rules

1. Use only the tags above. New tags go through this file first.
2. Use lowercase, hyphenated slugs for tags (`blue-economy`, not `Blue Economy`).
3. Topic is required. The first topic in the list is the primary one.
4. Curated items need a working `sourceUrl`, `applyUrl` or `donateUrl`.
5. Every item has a `lastReviewed` date. Opportunities and causes get checked at least every 3 months, and closed opportunities are hidden automatically.
6. All submissions (young people and organisations) are reviewed and approved by us before they go live. Nothing auto-publishes.
7. Young people's personal contact details are never published.
