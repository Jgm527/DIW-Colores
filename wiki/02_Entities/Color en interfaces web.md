---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-22
---
# Color en interfaces web

## Overview
El color en una interfaz no es decoración: codifica jerarquía, estado e identidad, y a la vez condiciona la legibilidad. En la web se declara con CSS (espacio sRGB por defecto) y debe cumplir umbrales de contraste verificables cuando el producto está sujeto a la normativa de accesibilidad. Esta nota es el nodo de entrada del pilar y enlaza el resto de entidades.

## Core Context & Architectural Rules

### Las tres funciones del color
1. **Jerarquía y profundidad**: fondos elevados, superficies, separadores; el color comunica qué elemento está «encima» o es interactivo.
2. **Estado y significado**: éxito, error, aviso, selección, foco. El color nunca puede ser el único portador del significado (ver [[Uso del color (WCAG 1.4.1)]]).
3. **Identidad**: color de marca. La marca se adapta a los umbrales de contraste, no al contrario.

### Reglas duras
- Todo par texto/fondo debe superar el umbral aplicable: 4.5:1 (AA, texto normal), 3:1 (AA, texto grande y elementos no textuales) o 7:1 (AAA). Ver [[Contraste mínimo (WCAG 1.4.3)]], [[Contraste mejorado (WCAG 1.4.6)]] y [[Contraste de elementos no textuales (WCAG 1.4.11)]].
- Los ratios **no se redondean**: 4.49:1 no cumple 4.5:1. Ver [[Ratio de contraste]].
- La conformidad se declara por página completa y por nivel (A/AA/AAA); el W3C no valida la declaración. Ver [[Niveles de conformidad WCAG]].
- En España, el sector público está obligado por el [[Real Decreto 1112-2018]], que remite a la norma armonizada [[EN 301 549]]; esta se apoya en WCAG 2.1/2.2 nivel AA.
- El contraste se calcula sobre el color **final renderizado** (tras composición de transparencias y capas), no sobre el valor nominal del token.

### Ejes de investigación de este proyecto
| Eje | Notas |
| --- | --- |
| Modelos y espacios | [[Modelos de color]], [[OKLCH]] |
| Medición | [[Luminancia relativa]], [[Ratio de contraste]] |
| Percepción | [[Deficiencia de visión al color]] |
| Normativa | [[Contraste mínimo (WCAG 1.4.3)]], [[Contraste mejorado (WCAG 1.4.6)]], [[Contraste de elementos no textuales (WCAG 1.4.11)]], [[Uso del color (WCAG 1.4.1)]], [[Niveles de conformidad WCAG]], [[EN 301 549]], [[Real Decreto 1112-2018]], [[WCAG 3.0 (borrador)]], [[APCA]] |
| Implementación | [[Sistema de color en CSS]], [[Paleta de interfaz por capas de luminosidad]] |
| Verificación | [[Verificación de contraste]] |

### Fuentes
- W3C, *Web Content Accessibility Guidelines (WCAG) 2.2*: <https://www.w3.org/TR/WCAG22/>
- MDN, *CSS colors*: <https://developer.mozilla.org/en-US/docs/Web/CSS/color_value>
- MDN, *Color and luminance*: <https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance>
- BOE, *Real Decreto 1112/2018*: <https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699>

## Linked Nodes
- Related: [[Index]], [[Modelos de color]], [[OKLCH]], [[Ratio de contraste]], [[Niveles de conformidad WCAG]], [[Sistema de color en CSS]], [[Verificación de contraste]]
- Source History: [[2026-10-22]]
