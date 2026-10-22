---
name: Obsidian AI Memory Wiki
description: Gestiona la bóveda de Obsidian del repo (wiki/) como memoria a largo plazo mediante wiki-links. Úsala para inicializar la bóveda, ingerir contexto al cerrar un hito o consultar conocimiento previo antes de empezar una tarea.
---

# Skill Definition: Obsidian AI Memory Wiki

## Ubicación de la bóveda en este repositorio

- Raíz de memoria (vault): `wiki/`
- Enlaces relativos al vault: `[[Index]]`, `[[Teoría del Color]]`
- Reglas del proyecto: `wiki/00_Meta/Agent_Rules.md`

## Purpose
Enables the AI to act as a long-term knowledge graph, reading and writing context to an Obsidian vault using standard wiki-links (`[[Note Name]]`). It prevents repetitive context loading, extracts cross-project insights, and maintains a clean, human-readable "Second Brain" that doubles as an AI permanent memory layer.

## Vault Structure Conventions
The AI will enforce and look for this layout in the memory root directory:
- `/00_Meta/`: Contains `Index.md`, `Agent_Rules.md`, and global memory schemas.
- `/02_Entities/`: Atomic notes for core concepts, tools, architectures, and entities (e.g., `[[Docker Deployment]]`, `[[User Auth Module]]`).
- `/04_Sources/`: Raw session logs, unformatted text dumps, or meeting transcripts.
- `/06_Journal/`: Daily logs mapping temporal project progress.

---

## Core System Instructions (AI Behavior)

### 1. Information Ingestion & Atomic Extraction
- **Analyze** every finalized conversation, complex technical solution, or code snippet.
- **Extract** new entities, concepts, or system architecture changes.
- Do not store ephemeral bugs; focus on **foundational principles, structural patterns, and project business logic**.
- If a note for an extracted concept does not exist, create it in `/02_Entities/`.

### 2. Format Requirements for Notes
Every note created or modified by this skill MUST strictly follow this structure:
```markdown
---
tags: [ai-memory, state/active, type/concept]
last_sync: {YYYY-MM-DD}
---
# Note Title

## Overview
[A concise, definitive summary of the concept or project block]

## Core Context & Architectural Rules
[Technical specifications, API interfaces, constraints, or configurations]

## Linked Nodes
- Related: [[Parent Concept]], [[Sibling Feature]]
- Source History: [[Log_YYYY-MM-DD]]
```

### 3. Bidirectional Linking Policy
- **Never** create a standalone, orphaned note. Every new node must link to at least one preexisting entity or the main `[[Index]]`.
- Use strict Obsidian formatting: `[[Exact Note Title]]` or `[[Exact Note Title|Custom Anchor Text]]`.
- When updating an existing note, append new context chronologically under an `## Evolution / Updates` section instead of overwriting valid legacy constraints unless explicitly instructed.

---

## Executable Skill Actions

### Action 1: `initialize_vault`
- **When to use:** When the workspace lacks an AI memory setup or the user calls `Initialize Memory Wiki`.
- **Payload:** Creates `/00_Meta/Index.md` listing out the core project pillars, creates directories, and sets up `Agent_Rules.md`.

### Action 2: `ingest_context`
- **When to use:** Triggered at the end of a milestone, complex implementation, or by request.
- **Payload:** Read active chat/code context -> Map against existing `[[Notes]]` -> Update relevant documents -> Generate a short summary in `/06_Journal/`.

### Action 3: `query_memory`
- **When to use:** When starting a new task where historical context is unknown.
- **Payload:** Scan `/02_Entities/` and index files for terms related to the current task to seed the AI context window.
