---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-22
---
# Contraste mínimo (WCAG 1.4.3)

## Overview
Criterio de éxito 1.4.3 *Contrast (Minimum)* de WCAG 2.2, nivel **AA**. Exige que el texto y las imágenes de texto presenten un [[Ratio de contraste]] de al menos **4.5:1** respecto a su fondo, o **3:1** si el texto es a gran escala. Es el umbral que usa el sector público europeo vía [[EN 301 549]] (nivel AA).

## Core Context & Architectural Rules

### Texto normativo (WCAG 2.2)
«The visual presentation of text and images of text has a contrast ratio of at least 4.5:1», con excepciones: texto grande (3:1), incidental, logotipos.

Fuente: <https://www.w3.org/TR/WCAG22/#contrast-minimum>
Guía Understanding: <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html>

### Texto a gran escala
Definición normativa: al menos **18 point** o **14 point en negrita**, o tamaño equivalente en fuentes CJK. Understanding convierte a CSS: `1pt = 1.333px` → ~**24px** y ~**18.5px**. El tamaño es el entregado por el autor, no el reescalado por el usuario. Fuentes muy finas o extrañas pueden no calificar aunque cumplan el cuerpo.

Fuente de la definición: <https://www.w3.org/TR/WCAG22/#dfn-large-scale>
Fuente de la conversión px: <https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html>

### Excepciones
- **Incidental**: componente de UI inactivo, decoración pura, invisible, o parte de una fotografía con otro contenido visual relevante.
- **Logotipos**: texto que forma parte de un logo o nombre de marca. Understanding aclara que la marca corporativa **no** exime al resto del texto de la interfaz, y que un logo usado como control interactivo con bajo contraste elegido por el autor (p. ej. logo apagado hasta el hover) no queda exento.

### Qué sí entra
Placeholder, texto al hover y al foco de teclado, e imágenes de texto destinadas a leerse como texto. El criterio no cubre gráficos ni controles: eso es [[Contraste de elementos no textuales (WCAG 1.4.11)]].

### Evaluación práctica
Understanding pide usar los colores del agente de usuario o de las hojas de estilo, no el píxel antialiasado en pantalla (el autor no controla el suavizado). G18: <https://www.w3.org/WAI/WCAG22/Techniques/general/G18.html>

## Linked Nodes
- Related: [[Index]], [[Color en interfaces web]], [[Ratio de contraste]], [[Contraste mejorado (WCAG 1.4.6)]], [[Niveles de conformidad WCAG]], [[EN 301 549]]
- Source History: [[2026-10-22]]
