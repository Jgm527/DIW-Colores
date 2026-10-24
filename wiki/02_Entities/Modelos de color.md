---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Modelos de color

## Overview
Un modelo de color es una forma de codificar colores numéricamente. En la web conviven el modelo aditivo RGB (del que dependen sRGB, HSL y HWB) y los modelos perceptualmente uniformes Lab/OKLab (que permiten construir escalas coherentes). Elegir mal el modelo produce paletas con escalones de brillo desiguales aunque los valores numéricos parezcan regulares.

## Core Context & Architectural Rules

### Modelos aditivos (pantalla)
| Modelo | Naturaleza | Uso en CSS | Limitación |
| --- | --- | --- | --- |
| RGB / sRGB | Aditivo; suma de luz roja, verde y azul | Espacio por defecto de CSS (`rgb()`, hex) | Los canales no son perceptualmente uniformes |
| HSL | Representación cilíndrica de RGB (tono, saturación, luminosidad) | `hsl()` | Su «luminosidad» no coincide con el brillo percibido |
| HWB | Tono + cantidad de blanco y de negro | `hwb()` | Igual que HSL: no uniforme |
| CMYK | Sustractivo; mezcla de tintas | No existe en CSS (impresión) | Fuera del ámbito web |

### Modelos perceptualmente uniformes
- **CIELAB / LCH**: espacio de referencia de la CIE basado en la visión humana; en CSS se declaran con `lab()` y `lch()` (iluminante D50).
- **OKLab / OKLCH**: revisión de Lab pensada para pantallas, publicada por Björn Ottosson (2020); en CSS se declaran con `oklab()` y `oklch()`. Es la base recomendada para generar escalas de color con pasos de brillo regulares. Ver [[OKLCH]].

### Reglas de uso
- Para **identidad y tokens de marca** se puede partir de HSL, pero para construir **rampas** (hover, superficies, estados) conviene OKLCH: un mismo `L` produce un brillo percibido equivalente entre tonos distintos.
- Para **contraste** no se usa la L de HSL ni la de OKLCH: WCAG define su propia [[Luminancia relativa]].
- El espacio por defecto de la web es sRGB; los colores fuera de esa gama (p. ej. P3) requieren `color()` y son gamut-mapped por el navegador.
- La gama de un color no garantiza su contraste: un color muy saturado puede tener luminancia baja.

### Fuentes
- W3C, *CSS Color Module Level 4*: <https://www.w3.org/TR/css-color-4/>
- MDN, *<color>*: <https://developer.mozilla.org/en-US/docs/Web/CSS/color_value>
- MDN, *oklch()*: <https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch>
- MDN, *Color and luminance*: <https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance>
- Björn Ottosson, *A perceptual color space for image processing* (OKLab): <https://bottosson.github.io/posts/oklab/>

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[OKLCH]], [[Paleta de colores]], [[Esquemas de color]], [[Percepción del color]], [[Luminancia relativa]], [[Sistema de color en CSS]]
- Sources: [[CareerFoundry — Teoría del color y paletas]], [[InfoQ — Colors and the UI]]
- Source History: [[2026-10-22]], [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Añadida [[Hoja de Ruta]] como enlace inverso del plan del Tema 3.
- 2026-10-24 · Enlazado con [[Paleta de colores]] y [[Esquemas de color]]: se confirma que los esquemas cromáticos describen relaciones de tono y no garantizan contraste de luminancia; para construir rampas se mantiene la recomendación de OKLCH.
- 2026-10-24 · Ampliada con aportes del vídeo [[Sajid — The Easy Way to Pick UI Colors]]: distinción práctica entre HSL (hue/saturation/lightness) para crear escalas intuitivas y LCH/OKLCH para mayor uniformidad perceptiva. Se enlaza con [[UI Colors (herramienta)]]. Marcado como divulgativo; prevalecen las fuentes oficiales (WCAG/WebAIM).
