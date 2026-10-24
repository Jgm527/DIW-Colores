---
tags: [ai-memory, state/active, type/tool]
last_sync: 2026-10-24
---
# UI Colors (herramienta)

## Overview
Herramienta web interactiva de Sajid para generar paletas de colores para UI. **No es una fuente oficial.** URL: <https://www.iamsajid.com/ui-colors/>. Versión observada: v1.1.0. Descripción basada en capturas del autor del trabajo (2026-10-24).

## Core Context & Architectural Rules

### ¿Qué hace?
- Permite ajustar una paleta con dos deslizadores:
  - **Neutral–Vivid** (observado: 0,05)
  - **Warmer–Cooler** (observado: 264)
- Agrupa los colores por función:
  - **Background:** `bg-dark`, `bg`, `bg-light`
  - **Text:** `text`, `text-muted`
  - **Border:** `highlight`, `border`, `border-muted`
  - **Action:** `primary`, `secondary`
  - **Alert:** `danger`, `warning`, `success`, `info`
- Incluye ejemplos de uso para contraste, degradados, resaltado y sombras.
- Botón **"Show Code"** genera variables CSS con nombre por función, permitiendo elegir formato: **OKLCH**, **HSL** o **Theme**.

### Observación a verificar (no como hecho)
- En las variables **OKLCH** el matiz (264) y el croma (0,025 o 0,05) se mantienen constantes y solo varía la luminosidad.
- En **HSL** varían los tres valores a la vez.
Esta observación se basa en las capturas del autor; conviene verificarla con distintos ajustes antes de darla como regla general.

### Utilidad para construir paletas
- Facilita generar escalas coherentes por función (fondos con elevación, texto con jerarquía, bordes destacados).
- Permite comparar rápidamente formatos OKLCH/HSL.
- Útil como punto de partida para crear tokens CSS, pero **los valores deben verificarse con herramientas de contraste** (p.ej. WebAIM Contrast Checker) para cumplir WCAG 2.2.

### Límites
- No es una fuente normativa u oficial.
- Los valores generados son sugerencias; la accesibilidad debe comprobarse con medición real.
- Basado en descripción/capturas propias, no en documentación oficial.

## Linked Nodes
- Related: [[Index]], [[Paleta de colores]], [[OKLCH]], [[Modelos de color]], [[Sajid — The Easy Way to Pick UI Colors]], [[Verificación de contraste]]
- Source History: [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Creada nota tipo tool con URL, grupos por función, deslizadores, formatos y observación a verificar. Enlazada a paleta, modelos, OKLCH y vídeo de Sajid.