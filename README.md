# yifan-site

Personal website for Yifan: a content-first workbench for engineering, product thinking, philosophy, productivity, martial arts, personal notes, and selected projects.

This is not a generic portfolio and it is not a Covenant marketing site. Covenant should be present because it is an important project, but the website should be centered on Yifan's thinking, practice, writing, and systems.

## Purpose

The site exists to answer five questions quickly:

- Who is Yifan?
- What does he think about engineering, product, productivity, philosophy, and disciplined practice?
- What is he building, studying, and testing now?
- What articles, notes, and documents are worth reading?
- How does Covenant fit into the larger body of work?

The strongest direction from the visual prototype is `workbench`: precise, editorial, systematic, and content-first. The site should feel like a public working surface, not a glossy landing page.

## Positioning

Core thesis:

> I write and build at the intersection of engineering, product systems, philosophy, productivity, and disciplined practice.

Supporting themes:

- Engineering as craft: architecture, software design, implementation judgment, debugging, tools.
- Product as systems thinking: loops, incentives, activation, retention, user behavior, tradeoffs.
- Productivity as practice: attention, habits, workflows, energy, discipline, visible progress.
- Philosophy as operating system: meaning, agency, ethics, identity, responsibility, decision-making.
- Martial arts as embodied learning: training, repetition, humility, pressure, calm, feedback.
- Notes as public artifacts: curated Obsidian documents, study notes, references, and working models.

Covenant belongs here as a major project and case study, not as the whole identity.

## Stack

Recommended stack:

- Astro
- TypeScript
- MDX
- Tailwind CSS, if utility CSS becomes useful
- Astro Content Collections
- React islands only for interactive pieces
- pnpm
- Vercel or Cloudflare for deployment
- Plausible or Umami for privacy-friendly analytics
- Buttondown or Resend later if a newsletter becomes useful

Why Astro:

- The site is mostly content: articles, notes, essays, documents, projects, and case studies.
- It keeps JavaScript low by default.
- It supports MDX well for writing with embedded components.
- It avoids using Next.js for a site that does not need app-level complexity.

Rule of thumb: Astro for the personal website, Next.js for Covenant.

## Design Source Of Truth

See [DESIGN.md](./DESIGN.md) before implementing visual work.

The chosen direction is based on the `workbench` prototype at:

```text
/prototype/visual-style?variant=workbench
```

Future agents should not default to shadcn, Material UI, SaaS cards, purple gradients, or a Covenant-first fantasy theme. This site needs a custom editorial system.

Core visual patterns to preserve:

- Module system: `ARTICLE.014 //`, `NOTE.032 //`, `DOC.007 //`, `PROJECT.003 //`.
- Indexes with `GRID` / `LIST` modes for writing, notes, documents, and projects when content volume justifies it.
- Hard separators and archive layouts instead of soft card-heavy surfaces.
- Dark `CLOSE-UP //` blocks for code, diagrams, document previews, screenshots, and important artifacts.
- Sober taxonomy chips for area, type, source, and status.
- Related content sections at the end of articles, notes, documents, and projects.
- Technical rectangular buttons with mono labels and strong borders.

## Site Structure

Planned routes:

```text
/
  Homepage: identity, current work, latest writing, selected notes, and selected projects.

/now
  What I am building, studying, training, and thinking about right now.

/writing
  Long-form articles and essays.

/notes
  Curated shorter notes, working models, references, and Obsidian exports.

/documents
  Longer imported documents, study notes, PDFs, or polished Obsidian artifacts.

/projects
  Covenant plus other experiments, tools, prototypes, and systems.

/covenant
  A personal case study for Covenant, distinct from the official product landing page.

/about
  Bio, areas of interest, taste, contact links, and collaboration surface.
```

## Content Model

Use Astro Content Collections for typed content.

Suggested collections:

```text
src/content/writing/
  Long-form articles and essays.

src/content/notes/
  Short notes, working models, reference notes, and curated Obsidian exports.

src/content/documents/
  Longer documents, study notes, PDFs, and structured artifacts.

src/content/projects/
  Project pages and case studies.

src/content/now/
  Current status entries if the /now page becomes archival.
```

Suggested frontmatter for writing:

```yaml
title: "Engineering as Discipline"
description: "Notes on craft, repetition, pressure, and judgment."
date: 2026-06-17
type: "article"
area: "engineering"
tags: ["engineering", "practice", "productivity"]
draft: false
featured: false
```

Suggested frontmatter for notes and Obsidian imports:

```yaml
title: "Attention Is A Training Surface"
description: "A curated note from my Obsidian vault."
date: 2026-06-17
type: "note"
source: "obsidian"
area: "productivity"
tags: ["attention", "practice"]
draft: false
curated: true
```

Suggested `area` values:

```text
engineering
product
philosophy
productivity
martial-arts
covenant
notes
```

## Obsidian Notes

The site may publish selected documents from Yifan's Obsidian vault, but it should not become a raw public vault dump.

Rules for imported notes:

- Curate before publishing.
- Remove private names, private links, unfinished claims, and sensitive context.
- Add frontmatter manually or through a small import script later.
- Prefer stable slugs and readable titles over Obsidian file names.
- Convert internal links intentionally. Broken backlinks are worse than no backlinks.
- Keep original source files out of the repo unless they are explicitly meant to be public.
- Treat PDFs and attachments as published artifacts, not incidental assets.

Recommended flow:

```text
Obsidian draft -> curated MD/MDX -> src/content/notes or src/content/documents -> published page
```

## Core Pages

### Home

The homepage should communicate the personal thesis and route people into the main content areas.

Possible framing:

> Engineering, product systems, philosophy, productivity, and disciplined practice.

Homepage sections:

- Short personal intro.
- Current focus.
- Latest writing.
- Selected notes or documents.
- Selected projects, including Covenant.
- Areas of interest.
- Contact and follow links.

### Now

A living page for current work.

Include:

- What is being built.
- What is being studied.
- What is being trained or practiced.
- What product, engineering, or philosophical question is currently active.
- What kind of conversations would be useful.

### Writing

The writing section should build authority around the way Yifan thinks.

Good topic clusters:

- Engineering: architecture, debugging, code quality, tradeoffs, tools, AI-assisted development.
- Product: activation loops, incentives, user research, metrics, retention, indie products.
- Philosophy: agency, discipline, identity, meaning, responsibility, ethics, focus.
- Productivity: attention, habits, journaling, systems, deep work, planning.
- Martial arts: practice, feedback, pressure, calm, repetition, embodied learning.
- Covenant: gameful productivity, mana, quests, beta learnings, retention lessons.

### Notes

The notes section is for shorter, sharper artifacts.

Examples:

- Working definitions.
- Reading notes.
- Obsidian exports.
- Training reflections.
- Product observations.
- Mental models.
- Lists of useful resources.

### Documents

The documents section is for longer or more artifact-like materials.

Examples:

- Polished Obsidian documents.
- Study notes.
- PDFs.
- Reference guides.
- Research summaries.

Documents should have a clear title, description, date, topic area, and publication status.

### Projects

This section should show systems, not only polished products.

Include:

- Covenant.
- Prototypes.
- Automation experiments.
- Engineering tools.
- Design explorations.
- Small software systems.

Each project can use a simple structure:

- Problem.
- Decision.
- Tradeoff.
- Result or learning.
- Link, screenshot, demo, or artifact when available.

### Covenant

This page should be a personal case study, not a duplicate of the official Covenant landing page.

Focus on:

- The founding idea.
- The product loop: complete real work, earn mana, spend it in quests.
- The beta mission: close the loop in 20 minutes.
- What is being tested.
- What has been learned.
- How Covenant connects to broader thinking about productivity, games, and behavior.

Useful copy:

> Covenant is a productivity RPG where real tasks become mana for tactical quests.

Short version:

> Complete tasks. Kill demons.

### About

The About page should make the person memorable.

Include:

- Short bio.
- Areas of interest.
- Current work.
- Influences and taste: books, tools, games, martial arts, products, ideas.
- Contact links.
- A clear invitation: follow the writing, discuss ideas, read notes, try Covenant, or talk about engineering/product systems.

## Editorial Principles

- Write from direct experience.
- Prefer concrete decisions over vague lessons.
- Show the tradeoff, not only the conclusion.
- Let notes be useful without pretending they are final essays.
- Keep Covenant updates honest and secondary to the broader body of work.
- Do not optimize the site around vanity metrics.
- Make the builder legible through artifacts, not slogans.

## Covenant Context

Covenant remains important, but it is one thread in the site.

The Covenant beta strategy is high-friction recruitment for qualified beta users, not broad marketing.

Important product event:

```text
loop_closed: the user earns mana from a real action and starts a quest.
```

The personal site can support Covenant by publishing:

- Product notes.
- Design decisions.
- Beta learnings.
- Screenshots and short demos.
- A clear route to try or follow the project.

The personal site should not make every page point back to Covenant.

## Commands

All commands are run from the project root.

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm astro check
```

Common command meanings:

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies. |
| `pnpm dev` | Start the local dev server at `localhost:4321`. |
| `pnpm build` | Build the production site to `./dist/`. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm astro check` | Run Astro checks. |

## Implementation Notes

- Keep the site content-first.
- Use MDX when a page needs embedded components.
- Use React only for interactive islands.
- Use Content Collections before inventing custom content loaders.
- Keep pages fast, readable, and easy to update.
- Prefer a few strong pages over many empty sections.
- Do not introduce a standard component library unless there is a very specific need.
- Use `DESIGN.md` for visual decisions before adding page or component styling.

## Deployment

Recommended deployment options:

- Vercel for the simplest personal-site workflow.
- Cloudflare for low-cost static deployment and strong edge performance.

Start with one deploy target. Do not overbuild deployment infrastructure until the site has real content.
