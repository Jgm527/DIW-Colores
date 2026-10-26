---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-26
---
# Ratio de contraste

## Overview
El ratio de contraste de WCAG 2.x es la magnitud normativa que compara la [[Luminancia relativa]] del color más claro y del más oscuro de un par. Oscila entre 1:1 (sin diferencia) y 21:1 (blanco puro sobre negro puro). Los umbrales de los criterios de éxito se tratan como cortes estrictos: el valor calculado no se redondea.

## Core Context & Architectural Rules

### Fórmula normativa (WCAG 2.2)
```text
(L1 + 0.05) / (L2 + 0.05)
```
- `L1` = luminancia relativa del color más claro.
- `L2` = luminancia relativa del color más oscuro.
- El `0.05` modela el *viewing flare* típico (luz ambiente) citado por WCAG a partir de IEC 61966-2-1.

Fuente: definición *contrast ratio* en WCAG 2.2: <https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio>

### Umbrales que se aplican a este ratio
| Uso | Nivel | Umbral |
| --- | --- | --- |
| Texto normal e imágenes de texto | AA ([[Contraste mínimo (WCAG 1.4.3)]]) | ≥ 4.5:1 |
| Texto a gran escala | AA | ≥ 3:1 |
| Texto normal | AAA ([[Contraste mejorado (WCAG 1.4.6)]]) | ≥ 7:1 |
| Texto a gran escala | AAA | ≥ 4.5:1 |
| Componentes de UI y gráficos necesarios | AA ([[Contraste de elementos no textuales (WCAG 1.4.11)]]) | ≥ 3:1 frente al color adyacente |

### No redondear
Understanding SC 1.4.3 y 1.4.11 declaran que 4.499:1 no cumple 4.5:1 y que 2.999:1 no cumple 3:1.

- <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html>
- <https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html>

### Cómo medirlo
La técnica suficiente G18 indica: linealizar sRGB, calcular L, aplicar la fórmula y comprobar el umbral. Si el fondo no es sólido, el contraste se mide contra el fondo **inmediatamente detrás** de cada letra (halo, velo o recorte). Antes de mayo de 2021 G18 usaba el umbral de linealización 0.03928; ahora documenta 0.04045 (IEC sRGB) y afirma que el cambio no tiene efecto práctico. La definición normativa de WCAG 2.2 sigue citando 0.03928.

- Técnica G18: <https://www.w3.org/WAI/WCAG22/Techniques/general/G18.html>
- Definición *relative luminance*: <https://www.w3.org/TR/WCAG22/#dfn-relative-luminance>

### Origen de los números 3 / 4.5 / 7
Understanding 1.4.3 atribuye 3:1 a ISO 9241-3 y ANSI/HFES-100-1988 (visión estándar). 4.5:1 = 3 × 1.5 (pérdida de sensibilidad asociada a agudeza ~20/40). 7:1 corresponde a ~20/80. Esta justificación es informativa; lo normativo son los umbrales del criterio.

Fuente: <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html>

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Contraste WCAG]], [[Luminancia relativa]], [[Contraste mínimo (WCAG 1.4.3)]], [[Contraste mejorado (WCAG 1.4.6)]], [[Contraste de elementos no textuales (WCAG 1.4.11)]], [[Verificación de contraste]], [[WebAIM Million 2026]]
- Sources: [[W3C — Understanding SC 1.4.3 Contraste mínimo]], [[WebAIM — Comprobador de contraste]]
- Source History: [[2026-10-22]], [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Añadida [[Hoja de Ruta]] como enlace inverso del plan del Tema 3.
- 2026-10-24 · Enlazado con [[Contraste WCAG]] como nota-mapa, con [[Verificación de contraste]] y con [[WebAIM Million 2026]]. La fórmula y los umbrales no cambian; se confirma que los ratios no se redondean.
- 2026-10-26 · Limpieza: retirado de Related el enlace a la nota inexistente de APCA (el contexto de WCAG 3 queda como texto plano en [[Luminancia relativa]]).
