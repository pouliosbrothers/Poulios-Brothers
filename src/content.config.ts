// Content collections: one per content type in TAXONOMY.md (the source of truth).
// If a Markdown file breaks these rules, `npm run build` stops and says why.
import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TOPICS, REGIONS, LEVELS, CURATORS, BROTHERS } from './content/taxonomy';

const topic = z.enum(TOPICS);
const region = z.enum(REGIONS);
const level = z.enum(LEVELS);
const curator = z.enum(CURATORS);
const brother = z.enum(BROTHERS);
const date = z.coerce.date(); // YYYY-MM-DD

// Base fields on every item (TAXONOMY.md section 3)
const base = (image: SchemaContext['image']) =>
  z.object({
    title: z.string(),
    summary: z.string(), // 1–2 sentences
    date,
    topics: z.array(topic).min(1).max(4), // first one = primary
    regions: z.array(region).min(1),
    curator,
    commentary: z.string().optional(),
    image: image().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    lastReviewed: date,
  });

const md = (folder: string) => glob({ pattern: '**/*.md', base: `./src/content/${folder}` });

// Extra fields by content type (TAXONOMY.md section 4)

const profiles = defineCollection({
  loader: md('profiles'),
  schema: ({ image }) =>
    base(image).extend({
      name: brother,
      tagline: z.string(),
      interests: z.array(topic),
      links: z.record(z.string(), z.url()).optional(), // instagram, youtube, linkedin…
      // No ages shown.
    }),
});

const projects = defineCollection({
  loader: md('projects'),
  schema: ({ image }) =>
    base(image).extend({
      status: z.enum(['planned', 'active', 'completed']),
      location: z.string(),
      startDate: date,
      endDate: date.optional(),
      people: z.array(brother),
      partners: z.array(z.string()).default([]),
      metrics: z.array(z.string()).default([]), // real numbers only, never invented
      donateUrl: z.url().optional(),
    }),
});

const journal = defineCollection({
  loader: md('journal'),
  schema: ({ image }) =>
    base(image).extend({
      author: brother,
      kind: z.enum(['blog', 'adventure', 'essay']),
    }),
});

const library = defineCollection({
  loader: md('library'),
  schema: ({ image }) =>
    base(image).extend({
      format: z.enum(['report', 'paper', 'book', 'video', 'podcast', 'data']),
      source: z.string(),
      sourceUrl: z.url(),
      level,
    }),
});

const feed = defineCollection({
  loader: md('feed'),
  schema: ({ image }) =>
    base(image).extend({
      format: z.enum(['news', 'article', 'announcement', 'event']),
      source: z.string(),
      sourceUrl: z.url(),
    }),
});

const explainers = defineCollection({
  loader: md('explainers'),
  schema: ({ image }) =>
    base(image).extend({
      level,
      readingTime: z.number().int().positive(), // minutes
      related: z.array(z.string()).default([]), // library / innovators / opportunities slugs
    }),
});

const innovators = defineCollection({
  loader: md('innovators'),
  schema: ({ image }) =>
    base(image).extend({
      kind: z.enum(['startup', 'investor', 'nonprofit', 'research', 'person']),
      website: z.url(),
      hq: z.string(), // City, Country
      founded: z.number().int().optional(), // YYYY
      stage: z.enum(['pre-seed', 'seed', 'series-a', 'growth', 'public']).optional(), // startups only
    }),
});

const causes = defineCollection({
  loader: md('causes'),
  schema: ({ image }) =>
    base(image).extend({
      kind: z.enum(['charity', 'project', 'campaign', 'fund']),
      organisation: z.string(),
      country: z.string(),
      registeredCharity: z.boolean(),
      donateUrl: z.url(),
      ours: z.boolean().default(false), // true for our own projects
    }),
});

const opportunities = defineCollection({
  loader: md('opportunities'),
  schema: ({ image }) =>
    base(image).extend({
      kind: z.enum(['internship', 'volunteering', 'programme', 'competition', 'course', 'fellowship', 'event']),
      organisation: z.string(),
      location: z.string(), // City, Country
      remote: z.boolean(),
      ageMin: z.number().int().optional(),
      ageMax: z.number().int().optional(),
      cost: z.enum(['free', 'paid', 'stipend', 'fee']),
      status: z.enum(['open', 'rolling', 'closed']),
      deadline: date.optional(), // optional if rolling
      applyUrl: z.url(),
      submittedBy: z.enum(['us', 'organisation']),
    }),
});

// Approved entries only. Strict: any field not listed here fails the build,
// so private details (like a contact email) can never slip into this public repo.
// Contact details stay in Formspree.
const submissions = defineCollection({
  loader: md('submissions'),
  schema: ({ image }) =>
    z.strictObject({
      ...base(image).shape,
      postedBy: z.enum(['young-person', 'organisation']), // decides which sub-section it appears in
      kind: z.enum(['project', 'opportunity']),
      name: z.string(), // project / organisation name shown on site
      location: z.string(),
      remote: z.boolean(),
      lookingFor: z.array(z.enum(['volunteers', 'funding', 'mentors', 'partners', 'participants'])).optional(),
      link: z.url(),
      // Only if kind = opportunity:
      deadline: date.optional(),
      ageMin: z.number().int().optional(),
      ageMax: z.number().int().optional(),
      applyUrl: z.url().optional(),
      approvedBy: curator,
      approvedDate: date,
    }),
});

export const collections = {
  profiles,
  projects,
  journal,
  library,
  feed,
  explainers,
  innovators,
  causes,
  opportunities,
  submissions,
};
