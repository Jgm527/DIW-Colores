---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-22
---
# Luminancia relativa

## Overview
La luminancia relativa es el brillo de un color normalizado entre 0 (negro) y 1 (blanco), calculado a partir de sus componentes sRGB linealizadas. Es la magnitud que WCAG usa para calcular el [[Ratio de contraste]]; no es lo mismo que la «luminosidad» de HSL ni que la `L` de OKLCH.

## Core Context & Architectural Rules

### Definición WCAG
Para el espacio sRGB, la luminancia relativa se define como:

```text
L = 0.2126 * R + 0.7152 * G + 0.0722 * B
```

donde cada canal se linealiza antes de aplicar los coeficientes:

```text
si Cs <= 0.03928  →  C = Cs / 12.92
si Cs >  0.03928  →  C = ((Cs + 0.055) / 1.055) ^ 2.4
```

`Cs` es el valor del canal en sRGB normalizado (0–1). Los coeficientes ponderan la sensibilidad del ojo humano: el verde pesa más que el rojo y el azul.

### Implicaciones prácticas
- Un color muy saturado puede tener luminancia baja (azul puro) o alta (amarillo puro); la saturación no indica brillo.
- Dos colores con el mismo `L` en HSL pueden tener luminancias relativas muy distintas.
- El cálculo debe hacerse sobre el color **compuesto** que llega a pantalla: si hay transparencia (`rgba`, `opacity`) o capas, primero se compone sobre el fondo real.
- La fórmula es la de WCAG 2.x. WCAG 3 estudia otra medida de contraste (aún sin determinar); ver [[WCAG 3.0 (borrador)]] y [[APCA]].

### Fuentes
- W3C, *WCAG 2.2 · Relative luminance* (definición normativa): <https://www.w3.org/TR/WCAG22/#dfn-relative-luminance>
- W3C, *Understanding SC 1.4.3*: <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html>
- MDN, *Color and luminance*: <https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance>

## Linked Nodes
- Related: [[Index]], [[Ratio de contraste]], [[Modelos de color]], [[OKLCH]], [[Contraste mínimo (WCAG 1.4.3)]]
- Source History: [[2026-10-22]]
