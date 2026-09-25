---
title: "Covenant"
description: "Una aplicación de productividad gamificada para gestionar tareas, hábitos y objetivos mediante una progresión de estilo RPG."
date: 2026-09-05
type: "project"
area: "productivity"
tags: ["productividad", "gamificación", "rpg", "nextjs"]
draft: false
featured: true
locale: "es"
originalUrl: "https://github.com/YifanYes/covenant"
translationOf: "projects/en/covenant"
demoVideo:
  src: "covenant-landing.mp4"
  label: "Página de inicio de Covenant con una demostración de su sistema de tareas y su interfaz de combate."
---

Covenant es una aplicación de productividad centrada en tareas, hábitos y objetivos. Al completar el trabajo, el personaje avanza mediante un sistema de progresión RPG y una narrativa de fantasía oscura inspirada en temas bíblicos.

La aplicación consiste en un monolito Next.js con el backend integrado. Utiliza tRPC para la capa de API, Prisma con PostgreSQL para la persistencia, Better Auth para la autenticación y TanStack Query y Zustand para el estado del cliente.

[Repositorio de Github](https://github.com/YifanYes/covenant)

## Funcionalidades

- Gestiona tareas, hábitos y objetivos a largo plazo.
- Escribe entradas en tu diario.
- Conecta el trabajo diario con la progresión de tu personaje.
- Participa en misiones y derrota a tus enemigos en combate por turnos.
- Mejora tu equipamiento comprando mejoras en la tienda.
- Comparte tu progreso con tu gremio.

## Qué aprendí

- tRPC: es muy cómodo pensar en funciones y no en verbos HTTP y diseño de API RESTful. Lo malo es que si un tercero utiliza tu API, la interfaz no es tan elegante.
- Upstash Redis: sesiones, rate limiting y account lockout.
- Despliegue en Railway
- Posthog: implementé eventos para tener analíticas de producto y feature flags.
- Sentry: registro de errores, observabilidad y monitorización.

Migré las primary keys de la base de datos de UUIDs a IDs numéricos autoincrementales tras leer el artículo [B-trees and database indexes](https://planetscale.com/blog/btrees-and-database-indexes).
