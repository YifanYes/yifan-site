---
title: "Covenant"
description: "A gamified productivity app for managing tasks, habits, and objectives through RPG-style progression."
date: 2026-09-05
type: "project"
area: "productivity"
tags: ["productivity", "gamification", "rpg", "nextjs"]
draft: false
featured: true
locale: "en"
originalUrl: "https://github.com/YifanYes/covenant"
demoVideo:
  src: "covenant-landing.mp4"
  label: "Covenant landing page demonstrating its task system and combat interface."
---

Covenant is a productivity app built around tasks, habits, and objectives. Completing work advances a character through an RPG progression system and a dark fantasy narrative inspired by biblical themes.

The application is a Next.js monolith with an embedded backend. It uses tRPC for the API layer, Prisma with PostgreSQL for persistence, Better Auth for authentication, and TanStack Query and Zustand for client state.

[GitHub repository](https://github.com/YifanYes/covenant)

## Features

- Manage tasks, habits, and longer-term objectives.
- Write entries in your journal.
- Connect daily work to your character's progression.
- Take part in quests and defeat enemies in turn-based combat.
- Improve your equipment by buying upgrades in the shop.
- Share your progress with your guild.

## What I learned

- tRPC: thinking in functions instead of HTTP verbs and RESTful API design feels natural. The downside is that the interface is less elegant for third-party API consumers.
- Upstash Redis: sessions, rate limiting, and account lockout.
- Deployment on Railway.
- PostHog: I implemented events for product analytics and feature flags.
- Sentry: error logging, observability, and monitoring.

I migrated the database primary keys from UUIDs to auto-incrementing numeric IDs after reading [B-trees and database indexes](https://planetscale.com/blog/btrees-and-database-indexes).
