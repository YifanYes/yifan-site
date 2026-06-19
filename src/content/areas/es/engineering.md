---
title: "Ingeniería De Software"
description: "Una guía de área curada sobre reducir complejidad, preservar claridad y construir sistemas de software fiables."
date: 2026-06-19
type: "area"
area: "engineering"
tags: ["software", "ingeniería", "arquitectura", "complejidad"]
draft: false
source: "obsidian"
curated: true
status: "evergreen"
locale: "es"
translationOf: "areas/en/engineering"
related: ["notes/es/la-atencion-es-superficie-de-entrenamiento", "documents/es/notas-operativas-del-workbench"]
---

> Un idiota admira la complejidad. Un genio admira la simplicidad.

Mide dos veces, corta una.

Programar debe convertirse en el acto de reducir la complejidad hasta volverla simplicidad.

1. Haz que los requisitos sean menos ambiguos y menos complejos.
2. Elimina el componente, el paso, el proceso o la dependencia. Elimina al menos un 10%.
3. Simplifica y optimiza. No optimices algo que no debería existir.
4. Acelera la duración del ciclo.
5. Automatiza.

## Crea Claridad

En la era de la IA, el código es barato. La coherencia es cara.

Tu trabajo es hacer que el sistema sea comprensible: arquitectura clara, interfaces limpias, infraestructura predecible y decisiones documentadas. Las personas y la IA construyen mejor cuando el entorno tiene sentido.

## Evita El Caos Antes De Que Se Acumule

La IA puede generar miles de líneas de código en una noche. También puede generar miles de problemas futuros en una noche.

Los grandes líderes técnicos se obsesionan con la fiabilidad, la seguridad, la monitorización, las pruebas y la disciplina de despliegue porque cada inconsistencia se convierte en confusión futura a escala.

## Haz Que La Ingeniería Sea Predecible

Los mejores equipos de ingeniería no son los más rápidos. Son los más fiables.

Cuando cada despliegue es tranquilo, cada servicio se comporta como se espera y cada ingeniero conoce los patrones, la velocidad se vuelve automática. La predictibilidad es apalancamiento. Este es todo el trabajo.

No perseguir cada framework. No asistir a reuniones interminables. No fingir que la complejidad es sofisticación.

Optimizar lo que no es el cuello de botella no aumenta el throughput.

## Recursos

- [Skills for Real Engineers](https://github.com/mattpocock/skills)
- [Odin Programming Language](https://odin-lang.org/)

### Cursos

- [Cognitive Class](https://cognitiveclass.ai/)

### Artículos

- [Challenging algorithms and data structures](https://austinhenley.com/blog/challengingalgorithms.html)
- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
- [Strangler Pattern](https://accesto.com/blog/strangler-pattern-approach-to-migrating-applications-pros-and-cons/)

### Herramientas

- [Build your own X](https://github.com/codecrafters-io/build-your-own-x)
- [WebCheck](https://web-check.xyz/) — Visión de rayos X para tu sitio web.
- [DevDocs](https://devdocs.io/) — Hub de documentación de APIs.
- [Algorithm Visualizer](https://algorithm-visualizer.org/)
- [Patterns.dev](https://www.patterns.dev/) — Patrones de arquitectura para aplicaciones web.
- [Void](https://voideditor.com/) — Alternativa open source a Cursor.
- [relative-time element](https://github.com/github/relative-time-element) — Formatea timestamps como texto localizado o relativo en el navegador.
- [Kapso CLI](https://docs.kapso.ai/docs/whatsapp/cli) — Gestiona números de WhatsApp, mensajes, plantillas y webhooks desde la terminal.

### Bases De Datos

- [PocketBase](https://pocketbase.io/) — Backend open source en un solo archivo.
- [SpacetimeDB](https://spacetimedb.com) — Framework de backend y base de datos en tiempo real para apps y juegos.
- [Convex](https://www.convex.dev/) — Plataforma backend que mantiene tu app sincronizada.

### Hosting

- [Coolify](https://coolify.io/) — Self-hosting con superpoderes.

## Principios Centrales

- Legibilidad
- Mantenibilidad
- Velocidad de desarrollo
- La cualidad escurridiza de la belleza

> La complejidad aumenta porque agregar es fácil y eliminar es peligroso.

- Los ingenieros son arquitectos de soluciones, no enciclopedias andantes.
- Si aumentas la abstracción, aumentas el acoplamiento.
- Prefiere composición sobre herencia.
- Busca bajo acoplamiento y alta cohesión.
- Planifica y escribe software que equilibre estabilidad y cambio.

> Solo hay dos cosas difíciles en ciencias de la computación: invalidar caché y nombrar cosas. — Phil Karlton

## Conceptos Clave

- **Bus factor** — El número de personas que podrían desaparecer del proyecto antes de que todo se paralice. Distribuye el conocimiento.
- **Yak shaving** — Ibas a cambiar el color de un botón y terminaste migrando todo el proyecto. Mantén el foco.
- **Rubber duck debugging** — Explica tu código en voz alta. Al verbalizar la lógica, el error suele revelarse.
- **Deuda técnica** — La solución rápida de hoy es el problema de mañana. Cuanto más tardes, más altos serán los intereses.
- **Optimización prematura** — Obsesión por hacer código eficiente antes de saber si hay un problema de rendimiento.
- **Cargo cult programming** — Copiar código o rituales sin comprender las herramientas.
- **Scope creep** — El famoso "ya que estamos" que convierte proyectos en algo interminable.

## Ley De Amdahl

En arquitectura de computadores, la ley de Amdahl es una fórmula que limita la aceleración de una tarea cuando se agregan recursos al sistema que la ejecuta.

La ley puede formularse así:

> La mejora de rendimiento total obtenida al optimizar una sola parte de un sistema está limitada por la fracción de tiempo en que esa parte se usa realmente.

![Diagrama de aceleración de la ley de Amdahl](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/AmdahlsLaw.svg/960px-AmdahlsLaw.svg.png)

## Acrónimos Para Recordar

- **DRY** — Don't Repeat Yourself
- **KISS** — Keep It Simple, Stupid
- **YAGNI** — You Aren't Gonna Need It
- **CAP** — Consistency, Availability, Partition tolerance
- **ACID** — Atomic, Consistent, Isolated, Durable
- **BASE** — Basically Available, Soft state, Eventual consistency

## Niveles De Resolución De Problemas

1. **Nivel 1** — Aquí está el problema, la solución y el plan de implementación.
2. **Nivel 2** — Aquí está el problema y la solución. Resuelve la implementación.
3. **Nivel 3** — Aquí está el problema. Encuentra la solución.
4. **Nivel 4** — Aquí tienes una lista de problemas. Identifica el más importante.
5. **Nivel 5** — Encuentra todos los problemas y determina cuáles vale la pena resolver.
6. **Nivel 6** — Predice problemas futuros y crea sistemas para prevenirlos.

## El Problema XY

El problema XY consiste en preguntar por tu solución intentada en vez de por tu problema real.

1. El usuario quiere hacer X.
2. El usuario no sabe cómo hacer X, pero cree que puede avanzar si consigue hacer Y.
3. El usuario pide ayuda con Y.
4. Después de perder tiempo, queda claro que el usuario en realidad quería ayuda con X.

**Respuesta:**

- Incluye información sobre el panorama completo.
- Da detalles cuando alguien pida más información.
- Comparte por qué descartaste otras soluciones.

## Los Ingenieros De Software Deberían Escribir

> Escribir es la forma que tiene la naturaleza de decirnos lo flojo que es nuestro pensamiento.

- Escribir te ayuda a pensar sobre tus problemas.
- Escribe por qué tomaste decisiones de diseño.
- Mantén un registro semanal de trabajo con proyectos y números críticos.
- Escribir sobre un problema suele exponer otros más importantes.

## Carga De Mantenimiento

¿Cuánto tiempo dedican los desarrolladores a tareas que no agregan funcionalidades?

Si tenemos seis desarrolladores pero la mitad del trabajo es mantenimiento, el plan de producto solo puede contar con tres desarrolladores.

Mide lo rápido que crece la carga de mantenimiento. Crecimiento cero significa que podemos mantener el sistema con la misma proporción del equipo.

## Checklist De Code Review

- Usa nombres de variables significativos y efectivos.
- Evita código duplicado.
- Escribe comentarios claros.
- Prueba tu código a fondo.
- Sigue las convenciones de código.
- Mantén las funciones cortas y modulares.
- Maneja los errores con gracia.
- Optimiza el rendimiento cuando sea necesario.

## Errores De Producto A Evitar

- Construir tu propia autenticación en vez de usar Auth0.
- Construir funcionalidades solo porque las pide un cliente.
- Construir tu propia UI para pagos en vez de usar Stripe.
- Copiar funcionalidades de competidores solo porque ellos las tienen.
- Construir porque tienes capacidad de ingeniería.
- Construir algo porque crees que es interesante.

## Red Flags De Equipos De Desarrollo En 2026

- La IA decide más que las personas.
- Los juniors quedan fuera de decisiones importantes.
- Se mide la productividad por tickets cerrados.
- Se mide el rendimiento por tokens gastados.
- Hay presión para usar IA donde el aporte no está claro.
- El equipo confunde velocidad con eficiencia.
- Los agentes automatizan trabajo que nadie supervisa.
- Cuando algo falla, se busca culpable antes que contexto.
