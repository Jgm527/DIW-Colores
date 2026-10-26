---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-26
---
# OKLCH

## Overview
`oklch()` es la notación CSS del espacio OKLCH (OKLab en coordenadas cilíndricas): luminosidad percibida, croma y tono. Su ventaja práctica es que un mismo valor de `L` se percibe con el mismo brillo en cualquier tono, lo que permite construir rampas de color y estados hover/focus coherentes sin ajustar cada color a ojo.

## Core Context & Architectural Rules

### Sintaxis
```css
/* oklch(L C H)  ·  oklch(L C H / alfa) */
--brand: oklch(0.62 0.18 250);
--brand-hover: oklch(0.56 0.18 250); /* mismo tono y croma, menos L */
```
- `L` (lightness): 0–1 (o 0%–100%). 0 = negro, 1 = blanco.
- `C` (chroma): 0 (gris) hasta ~0.4; el rango útil depende del tono y de la gama del monitor.
- `H` (hue): ángulo en grados (0–360).
- `alfa`: 0–1 o porcentaje.

### Por qué se usa en sistemas de diseño
- **Uniformidad perceptual**: bajar `L` un porcentaje fijo produce un oscurecimiento percibido similar en azul, rojo o verde. Con HSL, el mismo `L` en tonos distintos produce brillos muy diferentes.
- **Rampas y estados**: hover = `L - Δ`, active = `L - 2Δ`, disabled = `C - Δ` y `L` intermedio. La jerarquía visual se controla con una sola variable.
- **Gama amplia**: OKLCH puede expresar colores fuera de sRGB (P3); el navegador los ajusta al dispositivo.
- **Colores relativos**: permiten derivar variantes desde un token existente:
  ```css
  --brand-soft: oklch(from var(--brand) 0.92 calc(c * 0.4) h);
  ```
- **No sustituye a la verificación**: OKLCH no dice si un par texto/fondo cumple WCAG; para eso se calcula el [[Ratio de contraste]] con la [[Luminancia relativa]].
- **Verificado con MDN (2026-10-26):** la documentación oficial describe la `L` de `oklch()` como *perceived lightness* (brillo percibido) y advierte expresamente de que es distinta de la `L` de `hsl()`, que es una luminosidad relativa a otros colores. Especificación de referencia: CSS Color Module Level 4, apartado *ok-lab*. MDN añade que los ángulos de matiz difieren entre `oklch()` y `hsl()` (en `oklch()` el 0° corresponde a magenta y el rojo ronda los 41°).

### Restricciones
- `C` fuera de la gama del dispositivo se recorta (gamut mapping): el color renderizado puede no ser el declarado.
- El contraste se mide sobre el color final, así que conviene verificar los tokens ya resueltos.
- Soporte: los navegadores modernos lo implementan; conviene consultar la tabla de compatibilidad de MDN y prever un valor de respaldo en hex/rgb.

### Fuentes
- MDN, *oklch()*: <https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch>
- W3C, *CSS Color Module Level 4*: <https://www.w3.org/TR/css-color-4/>
- Björn Ottosson, *A perceptual color space for image processing*: <https://bottosson.github.io/posts/oklab/>

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Modelos de color]], [[Paleta de colores]], [[Color de marca]], [[Sistema de color en CSS]], [[Ratio de contraste]]
- Source History: [[2026-10-22]], [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Añadida [[Hoja de Ruta]] como enlace inverso del plan del Tema 3.
- 2026-10-24 · Enlazado con [[Paleta de colores]] y [[Color de marca]] como herramienta recomendada para generar variantes y estados con escalones de brillo regulares; se recuerda que no sustituye la [[Verificación de contraste]].
- 2026-10-24 · Ampliada con aportes del vídeo [[Sajid — The Easy Way to Pick UI Colors]]: según el vídeo, LCH/OKLCH ofrecen mayor uniformidad perceptiva en las variaciones de luminosidad frente a HSL. Es una afirmación del autor del vídeo, no una norma.
- 2026-10-25 · **Corrección:** La afirmación sobre que fuentes oficiales (W3C CSS Color 4/MDN) destacan la uniformidad perceptiva de OKLCH **NO está verificada** (escrita de memoria, fuente no leída en esta sesión). Solo se puede afirmar lo que dice el vídeo. Se enlaza con [[UI Colors (herramienta)]]. Observación a verificar (basada en capturas): en OKLCH el matiz y el croma se mantienen constantes mientras solo varía la luminosidad, mientras que en HSL varían los tres valores. Se mantiene la primacía de las fuentes oficiales (WCAG/WebAIM) sobre afirmaciones divulgativas. **Pendiente de verificar** con documentación oficial.
- 2026-10-26 · **Verificación cerrada.** La lectura de la página oficial de MDN para `oklch()` respalda la uniformidad perceptiva: su `L` es brillo percibido y se distingue expresamente de la `L` de `hsl()` (spec CSS Color 4, apartado *ok-lab*). Se retira el marcado «pendiente de verificar» y se añade la advertencia sobre los ángulos de matiz. Limpieza de enlaces: creada [[Sistema de color en CSS]] y retirado el enlace a la nota inexistente de «paleta de interfaz por capas de luminosidad» (el contenido práctico vive en [[Paleta de colores]]).
