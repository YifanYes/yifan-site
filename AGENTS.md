# AGENTS.md

## Project

`yifan-site` is Yifan's personal website: a content-first workbench for engineering, product, philosophy, productivity, martial arts, curated Obsidian notes, documents, and selected projects.

The site should answer five questions quickly:

- Who is Yifan?
- What does he think about engineering, product, productivity, philosophy, and disciplined practice?
- What is he building, studying, and testing now?
- What articles, notes, and documents are worth reading?
- How does Covenant fit into the larger body of work?

Core thesis:

> I write and build at the intersection of engineering, product systems, philosophy, productivity, and disciplined practice.

Covenant belongs here as a major project and case study, not as the whole identity.

## Required Context

Before changing structure, content models, routes, visual design, CSS, or page layout, read:

- `DESIGN.md` for visual identity, layout rules, and component guidance.
- `TODO.md` for the current implementation roadmap.
- This file for product direction, content structure, routing, and agent editing rules.

## Stack And Architecture

- Use Astro for the personal website.
- Use TypeScript where project code needs types.
- Use MDX when content needs embedded components.
- Use Astro Content Collections for articles, notes, documents, projects, and now entries.
- Use React only for interactive islands.
- Use Tailwind CSS only if utility CSS becomes useful; default to custom, simple CSS.
- Prefer pnpm for package management.
- Prefer Vercel or Cloudflare for deployment when deployment work begins.
- Use Plausible or Umami if privacy-friendly analytics become useful.
- Use Buttondown or Resend later if a newsletter becomes useful.

Rule of thumb: Astro for the personal website, Next.js for Covenant.

## Design Direction

Use the Systems Workbench direction. Do not default to shadcn, Material UI, generic SaaS sections, rounded card grids, or a Covenant-first fantasy theme.

Covenant is an important project and case study, but the website should not revolve around Covenant.

The chosen direction is based on the `workbench` prototype at:

```text
/prototype/visual-style?variant=workbench
```

Core visual patterns to preserve:

- Module system: `ARTICLE.014 //`, `NOTE.032 //`, `DOC.007 //`, `PROJECT.003 //`.
- Indexes with `GRID` / `LIST` modes for articles, notes, documents, and projects when content volume justifies it.
- Hard separators and archive layouts instead of soft card-heavy surfaces.
- Dark `CLOSE-UP //` blocks for code, diagrams, document previews, screenshots, and important artifacts.
- Sober taxonomy chips for area, type, source, and status.
- Related content sections at the end of articles, notes, documents, and projects.
- Technical rectangular buttons with mono labels and strong borders.

## Site Structure

Planned localized routes use English and Spanish prefixes from the start. The root route redirects to the English source locale.

```text
/
  Redirects to /en/.

/en
/es
  Homepage: identity, current work, latest articles, selected notes, and selected projects.

/{locale}/now
  What I am building, studying, training, and thinking about right now.

/{locale}/articles
  Long-form articles and essays.

/{locale}/notes
  Curated shorter notes, working models, references, and Obsidian exports.

/{locale}/documents
  Longer imported documents, study notes, PDFs, or polished Obsidian artifacts.

/{locale}/projects
  Covenant plus other experiments, tools, prototypes, and systems.

/{locale}/projects/covenant
  A personal case study for Covenant, distinct from the official product landing page.

/{locale}/about
  Bio, areas of interest, taste, contact links, and collaboration surface.
```

## Internationalization

The source locale is English (`en`). Spanish (`es`) is supported as a first-class locale, and Spanish can still be used as a drafting language when it helps the writing process.

- `/en/...` and `/es/...` are the canonical public route prefixes.
- `/` redirects to `/en/`.
- Locale labels, prefixes, default locale, source locale, translation strategy, and alternate-link helpers live in `src/lib/i18n.ts`.
- Shared user-facing copy lives in locale-keyed dictionaries, starting with `src/lib/ui.ts`, so final copy is not scattered through page templates.
- SEO basics are handled by `src/layouts/Layout.astro`: page `lang`, title template, description, canonical URL, and alternate `hreflang` links.
- Add Astro's `site` config value once the production domain is final so canonical and alternate URLs build as absolute production URLs.
- Use one content file per locale once Astro Content Collections are added.
- Use `locale` on every content entry.
- Use `translationOf` to connect translated entries across locales.

## Content Model

Use Astro Content Collections for typed content.

Suggested collections:

```text
src/content/articles/
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

Suggested frontmatter for articles:

```yaml
title: "Engineering as Discipline"
description: "Notes on craft, repetition, pressure, and judgment."
date: 2026-06-17
type: "article"
area: "engineering"
tags: ["engineering", "practice", "productivity"]
draft: false
featured: false
locale: "en"
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
locale: "en"
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

## Page Intent

- Home: personal thesis, current focus, latest articles, selected notes/documents, selected projects, areas of interest, and contact/follow links.
- Now: current building, studying, training, active questions, and useful conversations.
- Articles: long-form authority around engineering, product, philosophy, productivity, martial arts, and Covenant.
- Notes: shorter artifacts such as working definitions, reading notes, Obsidian exports, training reflections, product observations, mental models, and useful resources.
- Documents: longer or more artifact-like materials such as polished Obsidian documents, study notes, PDFs, reference guides, and research summaries.
- Projects: systems and judgment, not only polished products. Include problem, decision, tradeoff, result or learning, and artifact when available.
- Covenant: personal case study, not a duplicate of the official product landing page.
- About: memorable bio, areas of interest, current work, influences and taste, contact links, and a clear invitation.

## Obsidian Publishing

The site may publish selected documents from Yifan's Obsidian vault, but it should not become a raw public vault dump.

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

Useful copy:

> Covenant is a productivity RPG where real tasks become mana for tactical quests.

Short version:

> Complete tasks. Kill demons.

## Editing Principles

- Keep the site content-first.
- Prefer custom, simple Astro components and CSS.
- Use MDX and Astro Content Collections for content surfaces.
- Treat Obsidian imports as curated public artifacts, not raw vault dumps.
- Keep changes scoped to the user's request.
- Prefer a few strong pages over many empty sections.
- Do not introduce a standard component library unless there is a very specific need.
- Use `DESIGN.md` for visual decisions before adding page or component styling.
