---
tags: [ai-memory, state/active, type/source]
last_sync: 2026-10-24
---
# W3C — Understanding SC 1.4.3 Contraste mínimo

## Overview
Página informativa de W3C/WAI sobre el criterio de éxito 1.4.3 *Contrast (Minimum)* de WCAG 2.1. Explica el umbral, las excepciones y la justificación de los ratios. Leída el 2026-10-24.

## Core Context & Architectural Rules
- **URL:** <https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum>
- **Tipo:** oficial (W3C/WAI).
- **Apartados del Tema 3:** 4 (contraste), 7 (errores), 8 (buenas y malas combinaciones), 9 (recomendaciones).
- **Estado de lectura:** leída.

### Hechos verificables
- El criterio exige 4.5:1 para texto normal e imágenes de texto, y 3:1 para texto a gran escala.
- Se considera texto a gran escala el de al menos 18 pt, o 14 pt en negrita; la página lo traduce a unos 24 px y 18.5 px respectivamente.
- Las excepciones son el texto incidental, el texto invisible y el texto que forma parte de un logotipo o nombre de marca.
- La excepción de logotipo no cubre cualquier texto de la interfaz: si el logo se usa como control interactivo y se le aplica un contraste bajo por decisión del autor, esa presentación no queda exenta.
- El texto de marca o de identidad corporativa que no sea un logotipo no está exento por sí mismo.
- Los ratios se tratan como umbrales: no se redondean. La página pone el ejemplo de 4.499:1, que no alcanza 4.5:1.
- El criterio se aplica también a placeholders, texto al hover y texto al foco de teclado, e imágenes de texto pensadas para leerse como texto.
- Los caracteres usados como símbolos (por ejemplo, una «X» de cerrar o un «>» de flecha) se evalúan como contenido no textual en 1.4.11.
- La página explica la relación 3:1 → 4.5:1 → 7:1 con la pérdida de sensibilidad al contraste asociada a agudezas aproximadas de 20/40 y 20/80. Es una justificación informativa, no un requisito adicional.
- Aconseja no evaluar el color del píxel antialiasado, sino los colores del agente de usuario o de las hojas de estilo.

### Límites
- Es documentación informativa de WCAG 2.1, no el texto normativo de WCAG 2.2. Los umbrales coinciden, pero conviene citar la versión que se use en el trabajo.
- No desarrolla herramientas de medición ni fórmulas; para eso están [[Ratio de contraste]] y [[Verificación de contraste]].

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Contraste WCAG]], [[Contraste mínimo (WCAG 1.4.3)]], [[Ratio de contraste]], [[Verificación de contraste]]
- Source History: [[2026-10-24]]
