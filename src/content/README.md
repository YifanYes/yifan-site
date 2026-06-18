# Content Collections

This directory contains the public content model for the site.

## Collections

- `writing`: long-form articles and essays.
- `notes`: shorter curated notes, working models, references, and Obsidian exports.
- `documents`: longer documents, study notes, PDFs, and polished artifacts.
- `projects`: case studies, experiments, tools, prototypes, and systems.
- `now`: current-status entries if `/now` becomes archival.

Each collection is configured in `src/content.config.ts` and requires:

```yaml
title: "Title"
description: "Short summary."
date: 2026-06-17
type: "article"
area: "engineering"
tags: ["engineering", "practice"]
draft: false
locale: "en"
```

Optional fields:

```yaml
source: "obsidian"
curated: true
featured: false
status: "published"
related: ["notes/en/attention-is-a-training-surface"]
translationOf: "writing/en/engineering-as-discipline"
```

## Slug Strategy

Translated content uses one file per locale, grouped by locale directory:

```text
src/content/writing/en/engineering-as-discipline.md
src/content/writing/es/ingenieria-como-disciplina.md
```

The content entry ID is the locale-prefixed file path without the extension, such as `en/engineering-as-discipline` or `es/ingenieria-como-disciplina`.

English is the source locale. Spanish entries may use Spanish slugs. A translated entry points back to its source entry with `translationOf`, using the collection and source entry ID:

```yaml
translationOf: "writing/en/engineering-as-discipline"
```

This keeps public URLs readable in each language while preserving an explicit translation link for future alternate navigation.

`pnpm run validate:content` checks that each entry's frontmatter `locale` matches its locale directory and that every `related` or `translationOf` target points to an existing content entry.
