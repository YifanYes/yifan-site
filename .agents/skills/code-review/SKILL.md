---
name: code-review
description: Review changes in yifan-site, an Astro/TypeScript personal website with localized routes, Astro Content Collections, and the Systems Workbench design language. Use for code review requests, PR review, diff review, regression hunting, and pre-ship quality checks.
metadata:
  short-description: Review yifan-site changes
---

# Code Review

Review current changes as a senior engineer. Lead with actionable findings, ordered by severity. Focus on regressions, broken contracts, missing validation, accessibility, i18n drift, content/schema mismatches, and design-system drift.

## Review Workflow

1. Inspect the diff before judging: `rtk git status --short`, `rtk git diff --stat`, and the relevant file diffs.
2. Read surrounding code and project docs when the change touches structure, routes, layout, visual design, content models, or copy: `AGENTS.md`, `DESIGN.md`, and `TODO.md`.
3. Review only the changed behavior unless nearby context proves the change creates or exposes a bug.
4. Do not rewrite or refactor during review unless the user explicitly asks for fixes.
5. Verify when useful with the narrowest command that exercises the risk, usually `rtk pnpm run build` or `rtk pnpm astro check`.

## Repo-Specific Checks

### Astro And Architecture

- Prefer Astro components and static rendering for pages and content surfaces.
- Use React only for interactive islands with a clear need.
- Keep components custom and simple; do not introduce generic component libraries without a specific reason.
- Preserve the existing file organization under `src/components`, `src/layouts`, `src/pages`, `src/lib`, and `src/content`.
- Watch for duplicated route logic that should use helpers from `src/lib/i18n.ts` or shared copy from `src/lib/ui.ts`.

### Localization

- Public routes should stay locale-prefixed as `/en/...` and `/es/...`; `/` should redirect to `/en/`.
- User-facing shared copy belongs in locale-keyed dictionaries, not scattered through page templates.
- New navigation labels, UI labels, ARIA labels, metadata, and repeated page copy should have English and Spanish entries.
- Page `lang`, canonical URL, and alternate `hreflang` behavior should remain correct through `src/layouts/Layout.astro`.
- Translated content should use one file per locale and `translationOf` when a counterpart exists.

### Content Collections

- Content entries should live in the correct collection: `articles`, `notes`, `documents`, `projects`, or `now`.
- Frontmatter must satisfy `src/content.config.ts`: `title`, `description`, `date`, `type`, `area`, `tags`, `draft`, and `locale`, plus appropriate optional fields.
- `type` should match its collection, and `locale` should match the locale folder.
- Draft, source, curated, status, related, and translation metadata should be intentional and consistent.
- Curated note/document imports should not expose private names, private links, unfinished claims, or broken internal backlinks.

### Systems Workbench Design

- Preserve the workbench identity from `DESIGN.md`: content-first pages, module labels, hard separators, archive layouts, dark artifact blocks, sober taxonomy chips, related content, and rectangular technical buttons.
- Avoid generic SaaS sections, stock portfolio patterns, soft card-heavy layouts, decorative blobs, gradient orbs, and unnecessary rounded dashboard surfaces.
- Use the black-hole mark only according to the logo rules: no decorative wrappers, shadows, gradients, or altered source marks.
- Keep visual changes responsive, readable, and dense-but-breathable on desktop and mobile.

### CSS, Accessibility, And UX

- Prefer the existing CSS variables and patterns in `src/styles/workbench.css`.
- Check keyboard focus states, semantic landmarks, accessible names, and link/button intent.
- Images and artifact previews need meaningful alt text or an intentional empty alt when decorative.
- Theme logic should avoid flashes, broken color contrast, or mismatched `color-scheme`.
- Interactive filters, toggles, and navigation should work without layout shift and degrade reasonably when possible.

### Correctness, Security, And Maintainability

- Flag logic errors, broken slugs, bad date handling, incorrect sorting/filtering, duplicate keys, and stale derived data.
- Watch for unsafe HTML rendering, untrusted content injection, path traversal, and accidental publication of private source material.
- Keep abstractions proportional; prefer existing helpers and patterns over new indirection.
- Check error handling and empty states for content collections, missing translations, and empty archives.
- Performance concerns are usually build-time or payload-related here: unnecessary client JavaScript, repeated collection work, oversized assets, or avoidable layout cost.

## Severity Guide

- `critical`: security/privacy issue, build-breaking regression, or public route unusable.
- `high`: wrong locale behavior, schema-breaking content, major accessibility failure, SEO regression, or design drift that compromises a core page.
- `medium`: broken edge case, maintainability risk likely to cause future bugs, incomplete verification around changed behavior.
- `low`: minor UX, copy, style, or consistency issue.
- `nitpick`: optional polish with no meaningful risk.

## Output Format

For each finding, include:

- **Location**: file:line or function/component name
- **Severity**: critical | high | medium | low | nitpick
- **Issue**: one-sentence description
- **Fix**: concrete remediation

After findings, include open questions or assumptions if any, then a brief summary and verification notes. If there are no findings, say so clearly and mention any tests or checks that were not run.
