---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-26
---
# Uso del color (WCAG 1.4.1)

## Overview
Criterio de éxito 1.4.1 *Use of Color* de WCAG 2.2, nivel **A**. El color no puede ser el único medio visual de transmitir información, indicar una acción, pedir una respuesta o distinguir un elemento. Es independiente del [[Ratio de contraste]]: un par 7:1 puede fallar 1.4.1 si el significado es solo «rojo = error / verde = ok».

## Core Context & Architectural Rules

### Texto normativo
«Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.»

Fuente: <https://www.w3.org/TR/WCAG22/#use-of-color>
Understanding: <https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html>

### Qué cuenta como alternativa visual
Understanding admite, además de icono o texto, una diferencia de luminancia que produzca contraste ≥ **3:1** entre los dos estados (p. ej. verde claro vs rojo oscuro). No basta si el usuario debe reconocer un matiz concreto (el contorno «es verde de válido»). Invertir primer plano y fondo también vale si el contraste es suficiente.

### Enlaces visitados
Understanding declara que el estado `:visited` solo distinguible por color **no** es fallo de 1.4.1 (límites de privacidad y de CSS). El texto del enlace sigue teniendo que cumplir 1.4.3 contra el fondo.

### Fallos documentados
- F73: enlaces que no se distinguen sin visión del color.
- F81: campos obligatorios o de error identificados solo por color.
- F13: alternativa textual de una imagen que omite la información dada por el color.

Técnicas: <https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html>

### Relación con [[Deficiencia de visión al color]]
El criterio cubre a usuarios videntes que no distinguen ciertos matices, **aunque no usen tecnología de apoyo**. La exposición programática a AT es otro criterio (1.3.1, 4.1.2).

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[Contraste WCAG]], [[Deficiencia de visión al color]], [[Colores semánticos]], [[Contraste de elementos no textuales (WCAG 1.4.11)]], [[Jerarquía visual con color]], [[Errores frecuentes de color]], [[Combinaciones de color (buenas y malas)]], [[Convenciones culturales del color]], [[Checklist de color para desarrolladores]]
- Sources: [[W3C — Understanding SC 1.4.1 Uso del color]]
- Source History: [[2026-10-22]], [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Añadida [[Hoja de Ruta]] como enlace inverso del plan del Tema 3.
- 2026-10-24 · Ampliado con la lectura de Understanding 1.4.1: se confirma que una diferencia de luminancia de 3:1 puede servir como pista adicional, pero no basta cuando hay que reconocer un matiz concreto; se enlazan [[Colores semánticos]], [[Deficiencia de visión al color]] y [[Contraste WCAG]].
- 2026-10-24 · Releída la página en la versión de **WCAG 2.2** y enlazada con [[Jerarquía visual con color]], [[Errores frecuentes de color]], [[Combinaciones de color (buenas y malas)]], [[Convenciones culturales del color]] y [[Checklist de color para desarrolladores]].
- 2026-10-26 · Limpieza: retirado de Related el enlace a la nota inexistente de la Ley 11/2023.
