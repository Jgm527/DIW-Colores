---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-22
---
# Contraste mejorado (WCAG 1.4.6)

## Overview
Criterio de éxito 1.4.6 *Contrast (Enhanced)* de WCAG 2.2, nivel **AAA**. Sube el umbral a **7:1** para texto normal e imágenes de texto, y a **4.5:1** para texto a gran escala. Las excepciones (incidental y logotipos) son las mismas que en [[Contraste mínimo (WCAG 1.4.3)]].

## Core Context & Architectural Rules

### Texto normativo
Fuente: <https://www.w3.org/TR/WCAG22/#contrast-enhanced>
Understanding: <https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html>

### Por qué 7:1
Understanding 1.4.3/1.4.6 lo asocia a agudeza ~20/80. Quien tiene más pérdida suele usar tecnología de apoyo con realce de contraste. AAA no es el nivel de política general: Understanding *Conformance* desaconseja exigir AAA a sitios enteros porque algunos criterios AAA no se pueden cumplir para todo tipo de contenido.

- <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html>
- <https://www.w3.org/WAI/WCAG22/Understanding/conformance>

### Relación con AA y con la ley
Cumplir 1.4.6 implica cumplir 1.4.3. [[EN 301 549]] y el [[Real Decreto 1112-2018]] se anclan al nivel **AA** (vía la norma armonizada), no al AAA. AAA es un objetivo de producto, no el mínimo legal del sector público europeo.

### Misma regla de no redondeo
4.499:1 no cumple 4.5:1 (texto grande AAA). Fuente: Understanding 1.4.6.

## Linked Nodes
- Related: [[Index]], [[Contraste WCAG]], [[Contraste mínimo (WCAG 1.4.3)]], [[Ratio de contraste]], [[Verificación de contraste]], [[Niveles de conformidad WCAG]]
- Source History: [[2026-10-22]], [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Enlazado con la nota-mapa [[Contraste WCAG]] y con [[Verificación de contraste]]. No cambian los umbrales (7:1 normal, 4.5:1 grande) ni la regla de no redondeo.
