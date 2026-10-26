---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-26
---
# Sistema de color en CSS

## Overview
Conjunto de mecanismos de CSS para declarar el color de una interfaz como **sistema** (tokens por función) en lugar de valores sueltos: variables CSS, funciones de color modernas (`oklch()`, `color-mix()`, `light-dark()`), color relativo y las preferencias del usuario (tema oscuro, alto contraste). Es la implementación en código de lo que describen [[Roles de color (Material Design 3)]] y [[Paleta de colores]].

## Core Context & Architectural Rules

### Tokens con variables CSS
- Las propiedades personalizadas (`--color-primary`) se declaran normalmente en `:root` y se consumen con `var()`: una única fuente de verdad, temas cambiables tocando un bloque y nomenclatura por función (no por valor). Ver el ejemplo de tokens en [[Checklist de color para desarrolladores]].

### Funciones de color modernas (CSS Color Module Level 4 y 5)
- `oklch()` / `oklab()`: color en espacio perceptualmente uniforme; base recomendada para generar rampas y estados con brillo regular. Ver [[OKLCH]].
- `color-mix(in <espacio>, colorA, colorB)`: mezcla dos colores; útil para hover/press sin inventar un hex nuevo.
- `light-dark(a, b)`: devuelve un valor u otro según el esquema claro/oscuro del usuario (junto a la propiedad `color-scheme`).
- **Color relativo:** `oklch(from var(--brand) calc(l - 0.1) c h)` deriva variantes (hover, superficies, texto atenuado) desde un token existente, manteniendo matiz y croma.

### Temas y preferencias del usuario
- `prefers-color-scheme` para el modo oscuro; `forced-colors` para el modo de alto contraste del sistema, donde conviene revisar qué colores sigue controlando el autor.
- Comprobar los estados y los temas también en móvil ([[Verificación de contraste]]).

### Reglas prácticas
- Si se da soporte a navegadores antiguos, declarar primero un valor de respaldo (hex/rgb) y después el moderno.
- El contraste se verifica sobre el **color final compuesto**, no sobre el token: transparencias, mezclas y degradados pueden cambiar el resultado ([[Ratio de contraste]]).

### Fuentes
- MDN, propiedades personalizadas: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/--*>
- MDN, *color-mix()*: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix>
- MDN, *light-dark()*: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark>
- MDN, *Using relative colors*: <https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors>
- W3C, *CSS Color Module Level 4*: <https://www.w3.org/TR/css-color-4/>

## Linked Nodes
- Related: [[Index]], [[Modelos de color]], [[OKLCH]], [[Paleta de colores]], [[Roles de color (Material Design 3)]], [[Checklist de color para desarrolladores]], [[Verificación de contraste]], [[Contraste de elementos no textuales (WCAG 1.4.11)]]
- Source History: [[2026-10-26]]

## Evolution / Updates
- 2026-10-26 · Creada para resolver los enlaces pendientes desde [[Color en interfaces web]], [[Modelos de color]], [[OKLCH]] y [[Contraste de elementos no textuales (WCAG 1.4.11)]], y para cubrir el pilar «Implementación en CSS» del [[Index]]. Referencias de MDN consultadas el 2026-10-26.
