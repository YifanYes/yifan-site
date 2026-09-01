---
title: "Software Engineering"
description: "A curated area guide on reducing complexity, preserving clarity, and building dependable software systems."
date: 2026-06-19
type: "area"
area: "engineering"
tags: ["software", "engineering", "architecture", "complexity"]
draft: false
source: "obsidian"
curated: true
status: "evergreen"
locale: "en"
related: ["documents/en/workbench-operating-notes"]
---

> An idiot admires complexity. A genius admires simplicity.
> — Terry A. Davis

Engineering is problem solving under uncertainty. Software engineering is problem solving using code, through systems and applications.

Software engineering was never just about typing code. Nowadays any AI agent can type it for you, and with reasonable quality. Our work is technical, but the center of gravity has always been and will always be our judgment: what to build, what to remove, what to stabilize, what to document, what to automate, and what to leave alone.

The main question you must ask yourself before doing anything:

> What's the root problem I'm solving right now?

Are you solving the real problem? Or are you just patching the symptom?

The API is slow, so the team proposes Redis. But the real bottleneck may be an unindexed database column, an N+1 request pattern, or a downstream service. Caching first can make the system harder to understand while hiding the actual constraint.

A good engineer should always approach a problem or a task with these mental frameworks.

### First principles thinking

Boil things down to the most fundamental truths. Separate underlying ideas from assumptions based on them. One of the best examples is Elon Musk and SpaceX. To take people to Mars and beyond, he needed rockets. But rockets are extremely expensive and difficult to manufacture. So he used first principles thinking:

- What is a rocket made of?
- What is the value of those materials on the commodity market?
- Why is it so expensive to get a rocket into space?

After this thought process and further investigation, it turned out that the materials cost of a rocket was around two percent of the typical price. So all the rest of the cost could be optimized. One way to do it was to build reusable rockets, so that the cost-per-launch would be cheaper. Nobody thought that way before. Everyone assumed that's impossible.

### Second order thinking

First-order thinking is easy and safe. "If we do this, this happens".

It works for simple, reversible, low-stakes decisions. But for the rest, it ensures you get the same results as everyone else. Second-order thinking is thinking farther ahead and holistically — considering not only actions and immediate consequences but subsequent effects. Ask what happens next. Plan for long-term results.

Second order thinkers ask themselves the question “And then what?”.

You could automate a repetitive process, which means less manual work. Sounds great, right? But it also means that errors now execute automatically and at greater scale unless validation is added.

## Reduce Complexity To Simplicity

Many engineers can solve a
Complexity is the default. It arrives through unclear requirements, rushed abstractions, half-owned dependencies, inconsistent patterns, and decisions nobody remembers making.

I really like Elon's Musk 5-step engineering process:

1. Make the requirements less dumb, less complex.
2. Delete the component, step, process, etc. Delete at least 10%. ry very hard to delete the part or process.
3. Simplify and optimize — don't optimize something that should not exist.
4. Accelerate cycle time.
5. Automate.

One of our less visible responsibilities is helping sales and business think deeply about the problem we're trying to solve. We're more squared-minded, methodological, analytical.

## Build Trustworthy Systems

- Reliable
- Scalable
- Maintainable

The best systems make ordinary work boring: deploys are calm, monitoring is useful, failures have owners, and recovery paths are known before anyone needs them. Reliability is not only uptime. It is whether the team can trust the system while changing it.

Maintainability is the same discipline applied over time. The code should explain itself. The patterns should be learnable. The cost of change should not rise every week.

Scalability is not only traffic. A system also has to scale across engineers, features, customers, incidents, and years of accumulated context.

## Treat AI As Leverage, Not Authority

AI raises the floor for producing code and raises the blast radius of weak judgment.

It can generate a useful first pass, explain unfamiliar code, propose tests, and accelerate routine implementation. It can also multiply confusion if the team lets it create structure nobody understands.

The important question is not "Can AI build this?" The important question is "Can the team own the result?"

If AI is involved, the engineering discipline matters more:

- Smaller changes.
- Clearer interfaces.
- Better tests.
- Stronger review habits.
- Written decisions.
- Human accountability for the final system.

## Lead Engineering Teams Toward Predictability

The best engineering teams are not simply the fastest. They are the most dependable.

Dependability comes from shared standards, clear ownership, honest planning, and enough slack to fix the system while building the product. A team that ships quickly by creating permanent maintenance load is borrowing from its own future.

Engineering leadership is mostly constraint management. You balance product pressure, technical risk, team capacity, customer urgency, and the hidden cost of every shortcut. The job is to make tradeoffs explicit before they become accidents.

## Make Better Decisions

Most engineering mistakes are decision mistakes before they are implementation mistakes.

Good decisions make the problem smaller. They expose the bottleneck. They name the tradeoff. They explain why other paths were rejected. They preserve optionality when the future is uncertain and commit hard when delay costs more than being wrong.

I keep returning to a few principles:

- Prefer composition over inheritance.
- Aim for loose coupling and high cohesion.
- Make invalid states hard to represent.
- Optimize the bottleneck, not the visible irritation.
- Keep dependencies boring unless the upside is real.
- Write down decisions while the context is fresh.
- Measure maintenance load, not only feature output.

## Concepts I Return To

- **Technical debt** - A decision whose cost compounds when the system changes.
- **Bus factor** - How many people can disappear before the project stops moving.
- **Premature optimization** - Improving performance before proving performance is the constraint.
- **Scope creep** - The quiet expansion of work after the real problem has already been agreed on.
- **The XY problem** - Asking for help with a chosen solution instead of the underlying problem.
- **Amdahl's Law** - Optimizing one part only matters in proportion to how much that part affects the whole.

## Reference Links

- [Skills for Real Engineers](https://github.com/mattpocock/skills) - A sharp map of practical engineering skills.
- [Patterns.dev](https://www.patterns.dev/) - Patterns for modern web application architecture.
- [Build your own X](https://github.com/codecrafters-io/build-your-own-x) - Learning by recreating real tools.
- [DevDocs](https://devdocs.io/) - Fast API documentation across languages and frameworks.
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/) - A small practice that improves technical memory.
