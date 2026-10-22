---
tags: [ai-memory, state/active, type/schema]
last_sync: 2026-10-22
---
# Agent Rules

## Overview
Reglas operativas que gobiernan cualquier escritura en esta bóveda. Son de obligado cumplimiento tanto para agentes de IA como para personas que añadan notas a mano.

## Core Context & Architectural Rules

### Estructura obligatoria
- `00_Meta/` → índice y reglas (esta nota).
- `02_Entities/` → notas atómicas: un concepto, modelo, herramienta o técnica por nota.
- `04_Sources/` → material bruto sin curar (apuntes, enlaces, capturas, volcados).
- `06_Journal/` → una nota por día con lo avanzado: `YYYY-MM-DD.md`.

### Formato de nota
Toda nota creada o modificada debe empezar con frontmatter y contener las tres secciones:

```markdown
---
tags: [ai-memory, state/active, type/concept]
last_sync: YYYY-MM-DD
---
# Título de la Nota

## Overview
Resumen definitivo y conciso.

## Core Context & Architectural Rules
Especificaciones, restricciones, valores, configuraciones, código.

## Linked Nodes
- Related: [[Index]], [[Otra Entidad]]
- Source History: [[YYYY-MM-DD]]
```

`type/` admitidos: `type/concept`, `type/schema`, `type/tool`, `type/source`, `type/journal`.
Estados admitidos: `state/active`, `state/draft`, `state/archived`.

### Enlazado bidireccional
- Prohibido crear notas huérfanas: cada nota enlaza al menos a `[[Index]]` o a una entidad existente.
- Enlaces con títulos exactos: `[[Título Exacto]]`. Alias: `[[Título Exacto|texto visible]]`.
- Al enlazar, considerar también el enlace inverso: si A menciona B, añadir A en `Linked Nodes` de B.

### Nomenclatura
- Títulos en español, en singular y sin sufijos de fecha: `[[Contraste WCAG]]`, no `[[contraste-wcag-2026]]`.
- Nombres de fichero = título de la nota (Obsidian resuelve por nombre).
- Diferenciar conceptos parecidos con calificador entre paréntesis: `[[Armonía (teoría del color)]]`.

### Evolución del conocimiento
- Nunca sobrescribir contexto válido: añadir una sección `## Evolution / Updates` con la fecha y el cambio.
- Separar hechos verificables de opiniones; las fuentes externas se citan con URL en la propia nota.

### Higiene
- No guardar bugs efímeros ni pasos intermedios fallidos: sí principios, patrones y decisiones.
- Una idea → una nota. Si una nota crece demasiado, dividir y enlazar.

## Linked Nodes
- Related: [[Index]]
- Source History: [[2026-10-22]]
