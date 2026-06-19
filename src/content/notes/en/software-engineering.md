---
title: "Software Engineering"
description: "A curated reference note on reducing complexity, preserving clarity, and building dependable software systems."
date: 2026-06-19
type: "note"
area: "engineering"
tags: ["software", "engineering", "architecture", "complexity"]
draft: false
source: "obsidian"
curated: true
status: "evergreen"
locale: "en"
related: ["notes/en/attention-is-a-training-surface", "documents/en/workbench-operating-notes"]
---

> An idiot admires complexity. A genius admires simplicity.

Measure twice, cut once.

Programming must become the act of reducing complexity to simplicity.

1. Make requirements less ambiguous and less complex.
2. Remove the component, step, process, or dependency. Remove at least 10%.
3. Simplify and optimize. Do not optimize something that should not exist.
4. Accelerate the cycle time.
5. Automate.

## Create Clarity

In the AI era, code is cheap. Coherence is expensive.

Your job is to make the system understandable: clear architecture, clean interfaces, predictable infrastructure, and documented decisions. Humans and AI both build better when the environment makes sense.

## Prevent Chaos Before It Compounds

AI can generate thousands of lines overnight. It can also generate thousands of future problems overnight.

Great technical leaders obsess over reliability, security, monitoring, testing, and deployment discipline because every inconsistency becomes future confusion at scale.

## Make Engineering Predictable

The best engineering teams are not the fastest. They are the most dependable.

When every deploy is calm, every service behaves as expected, and every engineer knows the patterns, velocity becomes automatic. Predictability is leverage. This is the entire job.

Not chasing every framework. Not attending endless meetings. Not pretending complexity is sophistication.

Optimizing the non-bottleneck does not increase throughput.

## Resources

- [Skills for Real Engineers](https://github.com/mattpocock/skills)
- [Odin Programming Language](https://odin-lang.org/)

### Courses

- [Cognitive Class](https://cognitiveclass.ai/)

### Articles

- [Challenging algorithms and data structures](https://austinhenley.com/blog/challengingalgorithms.html)
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
- [Strangler Pattern](https://accesto.com/blog/strangler-pattern-approach-to-migrating-applications-pros-and-cons/)

### Tools

- [Build your own X](https://github.com/codecrafters-io/build-your-own-x)
- [WebCheck](https://web-check.xyz/) — X-Ray Vision for your Website
- [DevDocs](https://devdocs.io/) — API documentation hub
- [Algorithm Visualizer](https://algorithm-visualizer.org/)
- [Patterns.dev](https://www.patterns.dev/) — Web app architecture patterns
- [Void](https://voideditor.com/) — Open source Cursor alternative
- [relative-time element](https://github.com/github/relative-time-element) — Formats timestamps as localized or relative text in the browser.
- [Kapso CLI](https://docs.kapso.ai/docs/whatsapp/cli) — Manage WhatsApp numbers, messages, templates, and webhooks from the terminal.

### Databases

- [PocketBase](https://pocketbase.io/) — Open source backend in one file.
- [SpacetimeDB](https://spacetimedb.com) — Real-time backend framework and database for apps and games.
- [Convex](https://www.convex.dev/) — Backend platform that keeps your app in sync.

### Hosting

- [Coolify](https://coolify.io/) — Self-hosting with superpowers.

## Core Principles

- Readability
- Maintainability
- Speed of development
- The elusive quality of beauty

> Complexity increases because adding is easy and removing is dangerous.

- Engineers are solution architects, not walking encyclopedias.
- If you increase abstraction, you increase coupling.
- Prefer composition over inheritance.
- Aim for loose coupling and high cohesion.
- Plan and write software that balances stability and change.

> There are only two hard things in computer science: cache invalidation and naming things. — Phil Karlton

## Key Concepts

- **Bus factor** — The number of people who could disappear from a project before everything stops. Distribute knowledge.
- **Yak shaving** — You wanted to change a button color and ended up migrating the whole project. Keep the focus.
- **Rubber duck debugging** — Explain your code out loud. When you verbalize the logic, the bug often reveals itself.
- **Technical debt** — Today's quick solution is tomorrow's problem. The longer you wait, the higher the interest.
- **Premature optimization** — Obsessing over efficiency before you know whether there is a performance problem.
- **Cargo cult programming** — Copying code or rituals without understanding the tools.
- **Scope creep** — The famous "while we are here" that turns projects into endless monsters.

## Amdahl's Law

In computer architecture, Amdahl's law is a formula limiting the speedup of a task as resources are added to the system executing that task.

The law can be stated like this:

> The overall performance improvement gained by optimizing a single part of a system is limited by the fraction of time that the improved part is actually used.

![Amdahl's law speedup diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/AmdahlsLaw.svg/960px-AmdahlsLaw.svg.png)

## Acronyms To Remember

- **DRY** — Don't Repeat Yourself
- **KISS** — Keep It Simple, Stupid
- **YAGNI** — You Aren't Gonna Need It
- **CAP** — Consistency, Availability, Partition tolerance
- **ACID** — Atomic, Consistent, Isolated, Durable
- **BASE** — Basically Available, Soft state, Eventual consistency

## Problem Solving Levels

1. **Level 1** — Here is the problem, solution, and implementation plan.
2. **Level 2** — Here is the problem and solution. Figure out the implementation.
3. **Level 3** — Here is the problem. Figure out the solution.
4. **Level 4** — Here is a list of problems. Identify the most impactful one.
5. **Level 5** — Find all the problems and determine which are worth solving.
6. **Level 6** — Predict future problems and create systems to prevent them.

## The XY Problem

The XY problem is asking about your attempted solution rather than your actual problem.

1. The user wants to do X.
2. The user does not know how to do X, but thinks they can fumble through if they can do Y.
3. The user asks for help with Y.
4. After wasted time, it becomes clear the user really wanted help with X.

**Response:**

- Include information about the broader picture.
- Provide details when someone asks for more information.
- Share why you ruled out other solutions.

## Software Engineers Should Write

> Writing is nature's way of telling us how lousy our thinking is.

- Writing helps you think about your problems.
- Write about why you made design decisions.
- Keep a weekly work log with projects and critical numbers.
- Writing about one problem often exposes others that matter more.

## Maintenance Load

How much time are developers spending on tasks that are not adding features?

If we have six developers but half our work is maintenance, the feature plan can only assume three developers.

Track how fast maintenance load grows. Zero growth means we can maintain the system with the same proportion of the team.

## Code Review Checklist

- Use meaningful and effective variable names.
- Avoid duplicate code.
- Write clear comments.
- Test your code thoroughly.
- Follow coding conventions.
- Keep functions short and modular.
- Handle errors gracefully.
- Optimize performance when necessary.

## Product Mistakes To Avoid

- Building your own authentication instead of using Auth0.
- Building features just because a customer asks.
- Building your own UI for payments instead of using Stripe.
- Copying features from competitors just because they have them.
- Building because you have engineering capacity.
- Building something because you think it is cool.

## Development Team Red Flags In 2026

- AI decides more than people do.
- Junior engineers are excluded from important decisions.
- Productivity is measured by closed tickets.
- Performance is measured by tokens spent.
- There is pressure to use AI where the contribution is not clear.
- The team confuses speed with efficiency.
- Agents automate work that nobody supervises.
- When something fails, people search for blame before context.
