# DIW · Colores

Repositorio de investigación sobre **color en interfaces de usuario** (módulo DIW · 2º DAW).

La investigación vive en una bóveda de Obsidian con formato de grafo de conocimiento, gestionada por la skill `obsidian-memory`.

## Estructura

```
colores/
├── .opencode/skills/obsidian-memory/SKILL.md   # Skill de gestión de la memoria (se carga sola al clonar)
├── wiki/                                       # Bóveda Obsidian (abrir ESTA carpeta como vault)
│   ├── 00_Meta/        Index.md, Agent_Rules.md
│   ├── 02_Entities/    Notas atómicas: conceptos, modelos, herramientas
│   ├── 04_Sources/     Volcados en bruto, apuntes, transcripciones
│   └── 06_Journal/     Bitácora diaria de progreso
└── README.md
```

## Uso

1. Clonar el repositorio.
2. Abrir Obsidian → *Open folder as vault* → seleccionar la carpeta `wiki/`.
3. Trabajar con OpenCode dentro del repo: la skill `obsidian-memory` se descubre automáticamente desde `.opencode/skills/`.

## Convenciones

- Toda nota nueva va en `wiki/02_Entities/` y sigue la plantilla de `wiki/00_Meta/Agent_Rules.md`.
- Ninguna nota queda huérfana: siempre enlaza a `[[Index]]` o a otra entidad existente.
- Los enlaces usan formato Obsidian estricto: `[[Título Exacto]]` o `[[Título Exacto|texto visible]]`.
- El conocimiento nuevo se añade bajo `## Evolution / Updates` en vez de sobrescribir lo anterior.

## Flujo de trabajo (skill)

| Acción            | Cuándo                                              |
| ----------------- | --------------------------------------------------- |
| `initialize_vault`| Espacio sin memoria preparada (ya ejecutado aquí)   |
| `query_memory`    | Al empezar una tarea con contexto histórico incierto|
| `ingest_context`  | Al cerrar un hito o una investigación              |
