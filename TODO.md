# TODO

## Phase 1: Foundation

The site should support English and Spanish from the beginning. Do not hardcode final user-facing copy without deciding where translations live.

- [x] Decide i18n routing strategy: `/en/...` and `/es/...`, with `/` redirecting to `/en/`.
- [x] Choose source locale: English for public article structure, Spanish allowed as first draft language when easier.
- [x] Add Astro i18n configuration plus a small locale helper layer.
- [x] Define supported locales: `en` and `es`.
- [x] Create shared constants for locale labels, default locale, route prefixes, and alternate links.
- [x] Add SEO basics for both languages: `lang`, canonical URL, alternate hreflang links, title templates, descriptions.
- [x] Decide content translations are one file per locale with `translationOf` frontmatter references.

## Phase 2: Content Architecture

- [x] Add Astro Content Collections.
- [x] Define schemas for `articles`, `notes`, `documents`, `projects`, and optional `now`.
- [x] Include locale-aware fields in content schemas.
- [x] Add required frontmatter: `title`, `description`, `date`, `type`, `area`, `tags`, `draft`, `locale`.
- [x] Add optional frontmatter: `source`, `curated`, `featured`, `status`, `related`, `translationOf`.
- [x] Decide slug strategy for translated content.
- [x] Create sample English and Spanish entries for each content type.

## Phase 3: Design System

- [x] Turn the `workbench` prototype into reusable layout primitives.
- [x] Create `SiteShell` with responsive navigation.
- [x] Create `PageHeader` with module label, title, and right-side description.
- [x] Create `ModuleLabel` for `ARTICLE.014 //`, `NOTE.032 //`, etc.
- [x] Create `TaxonomyChip` for areas, content types, source, and status.
- [x] Create `TechnicalButton` for rectangular mono actions.
- [x] Create `CloseUpBlock` for dark artifact sections.
- [x] Create `RelatedContent` for page endings.
- [x] Create `ArchiveSpecPanel` for project/document metadata.
- [x] Preserve the Systems Workbench direction from `DESIGN.md`.

## Phase 4: Core Pages

- [x] Replace the Astro starter homepage.
- [x] Build localized home pages for English and Spanish.
- [x] Build `/[locale]/now`.
- [x] Build `/[locale]/articles` index.
- [x] Build `/[locale]/notes` index.
- [x] Build `/[locale]/documents` index.
- [x] Build `/[locale]/projects` index.
- [x] Build `/[locale]/about`.

## Phase 5: Index Patterns

- [ ] Add sober taxonomy filters by area.
- [ ] Add content type filters where useful.
- [ ] Add `GRID` / `LIST` visual mode for indexes once there is enough content.
- [ ] Make index URLs shareable if filters or modes are interactive.
- [ ] Ensure indexes work without client JavaScript where possible.

## Phase 6: Article And Note Templates

- [x] Create article detail layout.
- [ ] Create note detail layout.
- [ ] Create document detail layout.
- [ ] Add metadata rail: area, date, source, status, tags, language.
- [ ] Add related content section.
- [ ] Add optional table of contents for long articles/documents.
- [ ] Add support for code blocks and artifact figures.
- [ ] Add bilingual navigation between translations when both exist.

## Phase 7: Obsidian Publishing

- [ ] Decide where curated Obsidian exports live.
- [ ] Create import/curation guidelines in `docs/` or `src/content/README.md`.
- [ ] Define how to handle internal links, backlinks, embeds, images, and PDFs.
- [ ] Add one curated Obsidian note as a pilot.
- [ ] Add one longer Obsidian document as a pilot.
- [ ] Verify private context is removed before publishing.

## Phase 8: Content Seed

- [ ] Write initial homepage copy in English.
- [ ] Write initial homepage copy in Spanish.
- [ ] Add first engineering article.
- [ ] Add first product article.
- [ ] Add first philosophy article or note.
- [ ] Add first productivity article or note.
- [ ] Add first martial arts article or note.
- [ ] Add Covenant project/case-study entry.
- [ ] Add About page in English and Spanish.

## Phase 9: Quality

- [ ] Run `pnpm build`.
- [ ] Add `pnpm astro check` if not already wired into scripts.
- [ ] Check desktop layout.
- [ ] Check mobile layout.
- [ ] Check English and Spanish navigation.
- [ ] Check `hreflang` and canonical metadata.
- [ ] Check that no page visually drifts into generic SaaS/card-grid style.
- [ ] Check that Covenant is visible but not dominant.

## Phase 10: Cleanup

- [ ] Decide whether to keep or delete `/prototype/visual-style`.
- [ ] If the prototype direction is absorbed, delete throwaway prototype code.
- [ ] Remove Astro starter assets if unused.
- [ ] Keep `README.md`, `DESIGN.md`, `AGENTS.md`, and this `TODO.md` up to date as decisions change.
