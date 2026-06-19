# Content Collections

This directory contains the public content model for the site.

## Collections

- `articles`: long-form articles and essays.
- `areas`: body content for broad topic hubs such as software engineering or martial arts.
- `notes`: study notes from books, courses, resources, Obsidian exports, and active learning.
- `recommendations`: curated favorite books, courses, movies, anime, manga, video games, tools, and other resources.
- `documents`: longer documents, study notes, PDFs, and polished artifacts.
- `projects`: case studies, experiments, tools, prototypes, systems, and active writing projects.
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

Current area values:

```text
engineering
product
philosophy
faith
productivity
martial-arts
finance
notes
```

Recommendations also require a `medium` value:

```text
book
course
movie
anime
manga
video-game
podcast
tool
article
video
other
```

Optional fields:

```yaml
source: "obsidian"
curated: true
featured: false
status: "published"
related: ["notes/en/attention-is-a-training-surface"]
translationOf: "articles/en/decide-who-you-want-to-be-and-then-do-what-you-must"
```

Recommendation example:

```yaml
title: "Title"
description: "Why this favorite is worth recommending."
date: 2026-06-17
type: "recommendation"
medium: "book"
area: "philosophy"
tags: ["philosophy", "practice"]
draft: false
curated: true
locale: "en"
related: ["notes/en/example-book-notes"]
```

## Slug Strategy

Translated content uses one file per locale, grouped by locale directory:

```text
src/content/articles/en/decide-who-you-want-to-be-and-then-do-what-you-must.md
src/content/articles/es/decide-quien-quieres-ser-y-luego-haz-lo-que-debas-hacer.md
```

The content entry ID is the locale-prefixed file path without the extension, such as `en/decide-who-you-want-to-be-and-then-do-what-you-must` or `es/decide-quien-quieres-ser-y-luego-haz-lo-que-debas-hacer`.

English is the source locale. Spanish entries may use Spanish slugs. A translated entry points back to its source entry with `translationOf`, using the collection and source entry ID:

```yaml
translationOf: "articles/en/decide-who-you-want-to-be-and-then-do-what-you-must"
```

This keeps public URLs readable in each language while preserving an explicit translation link for future alternate navigation.

`pnpm run validate:content` checks that each entry's frontmatter `locale` matches its locale directory and that every `related` or `translationOf` target points to an existing content entry.
