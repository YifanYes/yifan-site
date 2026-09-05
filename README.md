# yifan-site

Personal website for Yifan: a minimalist personal profile and content-first workbench for articles, topic areas, projects, and a professional CV.

This is not a generic portfolio or a product marketing site. The website should be centered on Yifan's thinking, practice, writing, study, projects, and systems.

## Project Shape

- Built with Astro.
- Uses English and Spanish localized routes: `/en/...` and `/es/...`.
- Root route redirects to `/en/`.
- Primary public structure: Home, Articles, Areas, Projects, and CV.
- Content is modeled with Astro Content Collections for articles, projects, documents, and current-status entries.
- React should be reserved for interactive islands.
- Visual work follows the Systems Workbench direction in `DESIGN.md`.

## Documentation

- `AGENTS.md`: operating context for AI agents working in this repo.
- `DESIGN.md`: visual identity, layout rules, and component guidance.
- `TODO.md`: current implementation roadmap.

## Commands

All commands are run from the project root. Use pnpm 11.20.0, pinned in `package.json`, for local and deployment installs.

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

Railway uses Railpack to detect this as an Astro static site. It installs dependencies with `pnpm install --frozen-lockfile --prefer-offline`, runs `pnpm run build`, and serves `dist` with Caddy.

Keep the `packageManager` version in `package.json` aligned with local pnpm. Without this pin, Railpack can infer pnpm 9 from the lockfile format even when the workspace settings were written for pnpm 11. The `packages` entry in `pnpm-workspace.yaml` explicitly includes this repository's root package.
