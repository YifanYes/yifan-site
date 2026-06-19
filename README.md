# yifan-site

Personal website for Yifan: a minimalist personal profile and content-first workbench for articles, topic areas, study notes, curated recommendations, projects, and a professional CV.

This is not a generic portfolio and it is not a Covenant marketing site. Covenant should be present because it is an important project, but the website should be centered on Yifan's thinking, practice, writing, study, recommendations, and systems.

## Project Shape

- Built with Astro.
- Uses English and Spanish localized routes: `/en/...` and `/es/...`.
- Root route redirects to `/en/`.
- Primary public structure: Home, Articles, Areas, Notes, Recommendations, Projects, and CV.
- Content is modeled with Astro Content Collections for articles, notes, projects, recommendations, documents, and current-status entries.
- React should be reserved for interactive islands.
- Visual work follows the Systems Workbench direction in `DESIGN.md`.

## Documentation

- `AGENTS.md`: operating context for AI agents working in this repo.
- `DESIGN.md`: visual identity, layout rules, and component guidance.
- `TODO.md`: current implementation roadmap.

## Commands

All commands are run from the project root.

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm astro check
```

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies. |
| `pnpm dev` | Start the local dev server at `localhost:4321`. |
| `pnpm build` | Build the production site to `./dist/`. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm astro check` | Run Astro checks. |

## Deployment

Start with one deploy target when the site has enough real content. Vercel is the simplest personal-site workflow; Cloudflare is also a good static deployment option.
