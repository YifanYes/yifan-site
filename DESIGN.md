# DESIGN.md

Design source of truth for `yifan-site`.

This document exists so agents and future contributors preserve the site's identity. Read it before building pages, components, layouts, typography, colors, navigation, or content surfaces.

## Direction

Chosen visual direction: **Systems Workbench**.

The website should feel like a precise public working surface for engineering, product, philosophy, productivity, martial arts, and curated notes. It should be editorial, technical, calm, and distinctive.

It should not feel like:

- A SaaS landing page.
- A generic developer portfolio.
- A shadcn dashboard.
- A Material UI documentation site.
- A fantasy-themed Covenant microsite.
- A raw Obsidian publish dump.

Reference prototype:

```text
/prototype/visual-style?variant=workbench
```

## Identity

Core feeling:

> A thoughtful engineer's workbench: structured, textual, disciplined, and alive with ideas.

Keywords:

- Workbench.
- Field notes.
- Systems.
- Craft.
- Practice.
- Pressure.
- Attention.
- Product judgment.
- Engineering discipline.

The site may borrow some intensity from Covenant, but Covenant must not dominate the whole visual language.

### Logo

Use the black-hole mark from `src/assets/Black Hole Logo.svg` for the site mark and browser icon. Public runtime copies live at `public/logo.svg` and `public/favicon.svg`.

Rules:

- Keep the supplied black-hole silhouette as the source of truth.
- Use it as a compact identity mark, especially in the sidebar rail and favicon.
- Favicons need a light paper backing and dark border so the mark remains visible in dark and light browser chrome.
- Do not add gradients, shadows, rounded badge containers, or extra decoration around it.
- If a larger wordmark is needed later, pair the mark with a mono `YIFAN` label rather than a soft display treatment.

## Content Priorities

The site is centered on:

- Engineering.
- Product.
- Philosophy.
- Faith.
- Productivity.
- Martial arts.
- Curated Obsidian notes and documents.
- Projects, including Covenant.

Covenant is a major project, not the site's main identity.

## Visual Principles

- Content first.
- Strong hierarchy.
- Dense but breathable layouts.
- Fewer cards, more rows, columns, rails, indexes, and article surfaces.
- Custom primitives over imported component libraries.
- Clear typography over decorative illustration.
- Visible structure: rules, columns, labels, metadata, timestamps, status markers.
- Module labels, archive layouts, grid/list indexes, hard separators, dark close-up blocks, sober taxonomy chips, related content, and technical rectangular buttons are core visual patterns.
- Light motion, if any. Motion should clarify state or navigation.
- No decorative blobs, gradient orbs, generic SVG hero art, or stock-like visuals.

## Typography

Core stacks:

```text
Body:        Atkinson Hyperlegible, Inter, Source Sans 3, system-ui
Display:     Arial Narrow, Inter Tight, Arial
Mono:        IBM Plex Mono, SFMono-Regular, Consolas
Typewriter:  IBM Plex Mono, Courier Prime, Courier New
```

Use the typewriter stack for compact editorial support copy, page header descriptions, artifact notes, and field-note style annotations. Keep it sober: normal casing, generous line-height, and no faux distressed effects.

## Core Design Patterns

These patterns are part of the site's visual identity. Use them before inventing new page treatments.

### Module System

Use module labels to make the site feel like a structured archive.

Format:

```text
ARTICLE.014 //
NOTE.032 //
DOC.007 //
PROJECT.003 //
AREA.ENGINEERING //
SOURCE.OBSIDIAN //
STATUS.DRAFT //
```

Rules:

- Use mono type.
- Keep labels short.
- Place module labels above page titles, section headers, artifact blocks, and list groups.
- Numbering can be derived from content order later; during early development, stable slugs or type labels are enough.
- Do not overuse labels inside body prose.

### Grid/List Indexes

Indexes for articles, notes, documents, and projects should support two browsing modes when content volume justifies it.

Use:

- `GRID` for visual browsing and featured artifacts.
- `LIST` for dense scanning and research mode.

Grid items should show title, area, date, source/status, and a short description.

List items should prioritize title, date, area, tags, and reading affordance.

Do not implement a toggle before there is enough content to make both modes useful. The visual language can exist first as static labels.

### Hard Separators And Archive Layout

Use strong horizontal and vertical rules as layout structure.

Preferred treatments:

- Full-width section dividers.
- Two-column archive detail pages.
- Left artifact, right metadata/specification.
- Header title on the left, description or navigation on the right.
- Cells separated by 1px borders rather than floating cards.

Avoid soft card shadows, nested cards, and rounded dashboard surfaces.

### Dark Close-Up Blocks

Use dark blocks to spotlight artifacts, not as generic decoration.

Good use cases:

- Code excerpts.
- Architecture diagrams.
- PDF/document previews.
- Product screenshots.
- Key visual from a project.
- Covenant-specific moments.
- Important quoted ideas.

Treatment:

- Dark background: `#171512`.
- Light text: `#F4F0E8`.
- Small mono label such as `CLOSE-UP //`, `TRACE //`, `EXCERPT //`, or `ARTIFACT //`.
- Generous padding.
- Optional hard top edge or clipped-corner illusion using CSS, but no decorative blobs.

### Sober Taxonomy Chips

Taxonomy chips should feel like archive filters, not colorful badges.

Use them for:

- Areas: `Engineering`, `Product`, `Philosophy`, `Faith`, `Productivity`, `Martial Arts`, `Covenant`.
- Content types: `Article`, `Note`, `Document`, `Project`.
- Source/status: `Obsidian`, `Curated`, `Draft`, `Published`, `Updated`.

Style:

- Mono or small sans.
- Thin border.
- Minimal radius.
- Black-on-paper default.
- Filled dark state for selected filters.
- No rainbow category system.

### Related Content

Article, note, document, and project pages should end with related content when useful.

Labels:

```text
RELATED NOTES
RELATED ARTICLES
RELATED DOCUMENTS
RELATED PROJECTS
CONTINUE THREAD
```

Layout:

- Use bordered rows or a restrained grid.
- Show title, area, date, and why it is related when available.
- Avoid generic "You may also like" copy.

### Technical Rectangular Buttons

Buttons should be rectangular, precise, and functional.

Examples:

```text
READ ARTICLE ->
OPEN DOCUMENT ->
VIEW PROJECT ->
BACK TO LIST
GRID
LIST
FILTER
```

Style:

- Minimal radius, preferably 0-4px.
- Mono label.
- Strong border.
- Clear hover/focus state.
- Optional arrow or compact symbol.
- No pill CTAs unless the interaction is a taxonomy chip.

## Layout System

Prefer editorial layouts over marketing layouts.

Use:

- Left rail navigation on desktop where useful.
- Main content column with strong max-width.
- Split boards for home, notes, and project indexes.
- Article pages with readable measure.
- Metadata columns for date, area, tags, status, source.
- Full-width sections only when they serve content hierarchy.

Avoid:

- Hero plus card grid as the default pattern.
- Nested cards.
- Over-rounded containers.
- Marketing-style feature sections.
- Centered everything.

Recommended widths:

```text
Article text: 680-760px
Main workbench surface: 1080-1240px
Side rail: 150-220px
Metadata column: 180-260px
```

## Color

Base palette:

```text
Background:      #F8F7F2  near paper
Paper warm:      #F4F0E8
Text primary:    #171512
Text muted:      #6B6258
Line:            rgba(23, 21, 18, 0.16)
Line strong:     #171512
Product green:   #2F6B4F
Accent red:      #A33A2B
Accent gold:     #B8872D
Code bg:         #E7DFD2
Dark section:    #171512
```

Usage:

- Use warm off-white as the main background.
- Use near-black for text and rules.
- Use green for systems, metrics, and productive status.
- Use red sparingly for warnings, emphasis, Covenant, or strong calls.
- Use gold sparingly for highlights and progression.
- Use dark sections rarely, mostly for Covenant or special artifacts.

Avoid one-note palettes. Do not let the site become all beige, all dark, all blue, or all purple.

## Typography

Recommended stack:

```text
Display / forceful headings: Arial Narrow, Inter Tight, or a similar condensed sans
Body: Atkinson Hyperlegible, Inter, Source Sans 3, or system sans
Editorial headings: Fraunces, Source Serif 4, or Spectral when a page needs essay tone
Mono / metadata: IBM Plex Mono, SFMono-Regular, Consolas, monospace
```

Typography rules:

- Use large type only for true page-level statements.
- Use mono for labels, status, dates, slugs, source, and tags.
- Keep letter spacing at `0` for body and headings.
- Uppercase can be used for short metadata labels, not long text.
- Do not scale font size with viewport width beyond normal CSS `clamp()` for hero headings.
- Body copy must be highly readable.

## Components

Build small custom primitives instead of importing a component library.

Suggested primitives:

```text
SiteShell
LeftRail
PageHeader
ModuleLabel
ArticleHeader
ArticleBody
AreaIndex
IndexViewToggle
ArticleList
NoteRow
DocumentRow
ProjectEntry
MetadataRail
TagList
TaxonomyChip
StatusLabel
SourceLabel
InlineMetric
ArtifactFigure
ArchiveSpecPanel
CloseUpBlock
Callout
ReadingList
RelatedContent
TechnicalButton
```

Component style:

- Prefer rows and bordered sections over floating cards.
- Tags should look like metadata, not colorful pills.
- Callouts should use a strong side rule or top rule.
- Project entries should expose problem, decision, tradeoff, and result.
- Notes should feel browsable and lightweight.
- Documents should feel more durable and archival.

## Navigation

Primary navigation should make the content model obvious:

```text
Now
Articles
Notes
Documents
Projects
About
```

Covenant can appear under Projects or as a selected homepage item. It should not be the only primary CTA across the site.

## Page Guidance

### Home

The homepage should introduce the thesis, then route into content.

It should include:

- A direct identity statement.
- Current focus.
- Latest articles.
- Selected notes/documents.
- Selected projects.
- Areas of interest.

### Articles

Use a strong index with filters by area.

Areas:

```text
Engineering
Product
Philosophy
Productivity
Martial Arts
Covenant
```

### Notes

Notes can be shorter and rougher than articles, but they must still be curated.

Good metadata:

- Area.
- Source.
- Date.
- Tags.
- Status.

### Documents

Documents are durable artifacts. They can include longer Obsidian exports, PDFs, study documents, or reference guides.

They should have a stronger archival layout than notes.

### Projects

Projects should not be only screenshots. They should explain judgment.

Use:

```text
Problem
Decision
Tradeoff
Learning
Artifact
```

### Covenant

Covenant's page may be visually more intense, but it still belongs inside the broader workbench identity.

Allowed Covenant-specific touches:

- Dark section.
- Accent red.
- Gold metric labels.
- Product screenshots.
- Product loop diagrams.

Do not turn the whole website into Covenant's fantasy UI.

## Obsidian Publishing

Obsidian content must be curated before publishing.

Rules:

- Do not expose the raw vault structure.
- Remove private names, links, and context.
- Convert internal links intentionally.
- Avoid publishing half-thoughts that need private context.
- Use stable slugs.
- Prefer `notes` for shorter artifacts and `documents` for polished long-form materials.

Potential visual treatment:

- `Source: Obsidian` metadata.
- `Curated note` or `Working note` status.
- Linkable references at the bottom.
- Clear last-updated date.

## Imagery And Artifacts

Use images when they reveal actual work:

- Product screenshots.
- Diagrams.
- Document previews.
- Notebook scans only if intentionally public.
- Architecture sketches.
- Training diagrams or notes if useful.

Avoid generic stock images and decorative illustrations.

## Interaction

The site should be mostly static.

Use interactivity for:

- Filtering articles by area.
- Search.
- Table of contents.
- Expanding references.
- Small diagrams or project artifacts.

Do not add heavy app-like interaction unless the content genuinely needs it.

## Accessibility

- Maintain strong color contrast.
- Keep body text readable.
- Use semantic HTML.
- Do not rely on color alone for category or status.
- Make focus states visible.
- Ensure all interactive controls work by keyboard.
- Keep line length comfortable for long articles.

## Mobile

Mobile should preserve the workbench identity without forcing desktop rails.

Rules:

- Collapse rails into top navigation or section indexes.
- Keep article text comfortable.
- Do not squeeze metadata into tiny side columns.
- Avoid horizontal scrolling.
- Keep tap targets large enough.
- Let long headings wrap naturally.

## Do

- Build custom CSS deliberately.
- Use strong grids and rules.
- Make metadata useful.
- Let content density feel intentional.
- Keep Covenant visible but proportionate.
- Treat notes and documents as first-class content.

## Do Not

- Add shadcn, Material UI, Chakra, Mantine, or similar component libraries by default.
- Use generic rounded cards everywhere.
- Use purple-blue gradients as a primary identity.
- Build a landing page before building the content experience.
- Make every CTA about Covenant.
- Publish uncurated Obsidian notes.
- Hide weak content behind visual polish.

## Implementation Rule For Agents

When adding or changing UI, first identify which content surface is being designed:

```text
home
article
note
document
project
covenant
about
index
```

Then choose the simplest custom layout that supports that content. If the design starts to look like a generic SaaS template, stop and return to the Systems Workbench direction.
