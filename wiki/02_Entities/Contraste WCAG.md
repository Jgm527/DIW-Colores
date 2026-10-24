---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Contraste WCAG

## Overview
«Contraste WCAG» agrupa los criterios de éxito que fijan umbrales mínimos de [[Ratio de contraste]] entre elementos visuales. No es un único criterio: distingue texto normal, texto grande, componentes no textuales y nivel de conformidad. Esta nota actúa como mapa; el detalle normativo está en las notas de cada criterio.

## Core Context & Architectural Rules

### Criterios y umbrales
| Criterio | Nivel | Qué exige | Umbral |
| --- | --- | --- | --- |
| [[Contraste mínimo (WCAG 1.4.3)]] | AA | Texto normal e imágenes de texto | ≥ 4.5:1 |
| [[Contraste mínimo (WCAG 1.4.3)]] | AA | Texto a gran escala | ≥ 3:1 |
| [[Contraste mejorado (WCAG 1.4.6)]] | AAA | Texto normal | ≥ 7:1 |
| [[Contraste mejorado (WCAG 1.4.6)]] | AAA | Texto a gran escala | ≥ 4.5:1 |
| [[Contraste de elementos no textuales (WCAG 1.4.11)]] | AA | Componentes de UI y gráficos necesarios | ≥ 3:1 frente al color adyacente |

Fuente normativa: WCAG 2.2, <https://www.w3.org/TR/WCAG22/>. Guías: <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html> y <https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html>.

### Texto a gran escala
- La norma lo define como al menos **18 pt** o **14 pt en negrita**. En CSS equivale aproximadamente a **24 px** y **18.5 px**.
- El tamaño relevante es el que entrega el autor, no el que resulta de ampliar la página.

### Reglas duras
- **No se redondea:** 4.499:1 no cumple 4.5:1; 2.999:1 no cumple 3:1.
- El ratio se calcula con la [[Luminancia relativa]] de los colores **finales renderizados**, tras transparencias y composición.
- Si el fondo no es sólido, se mide contra el fondo inmediatamente detrás de cada letra.
- Las excepciones de 1.4.3 son texto incidental, texto invisible y texto que forma parte de un logotipo o nombre de marca; no cubren cualquier texto de la interfaz.
- El criterio 1.4.1 es independiente: un par puede cumplir 4.5:1 y seguir fallando si el significado depende solo del color.

### Por qué importa
- Es el problema de color más frecuente en la web real: el texto de bajo contraste apareció en el 83,9 % de las portadas analizadas por WebAIM en 2026. Ver [[WebAIM Million 2026]].
- Es un requisito verificable y, a diferencia de la armonía cromática, se puede medir antes de publicar.

### Errores frecuentes
- Comprobar solo el estado por defecto y olvidar hover, foco, visitado y deshabilitado.
- Medir el color nominal del token y no el resultado tras opacidad o degradado.
- Aplicar 4.5:1 a un botón y olvidar el 3:1 del borde o del icono que identifica el componente.
- Redondear 4.49 a 4.5.
- Confiar solo en una herramienta automática, que no detecta texto sobre imágenes ni degradados.

### Hechos frente a heurísticas
- **Hechos verificables:** los umbrales, la definición de texto grande y las excepciones están en WCAG y en sus documentos Understanding.
- **Justificación informativa:** la relación 3:1 → 4.5:1 → 7:1 se asocia a pérdidas de sensibilidad con agudezas ~20/40 y ~20/80; es una explicación, no un requisito adicional.
- **Heurística:** «más contraste siempre es mejor» no es exacto; un contraste excesivo también puede fatigar, pero nunca por debajo del umbral aplicable.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[Ratio de contraste]], [[Luminancia relativa]], [[Niveles de conformidad WCAG]], [[Uso del color (WCAG 1.4.1)]], [[Verificación de contraste]], [[WebAIM Million 2026]]
- Sources: [[W3C — Understanding SC 1.4.3 Contraste mínimo]], [[WebAIM — Comprobador de contraste]], [[WebAIM — Evaluación de contraste y color]], [[WebAIM Million 2026]]
- Source History: [[2026-10-24]]
