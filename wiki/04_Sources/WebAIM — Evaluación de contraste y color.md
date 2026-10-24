---
tags: [ai-memory, state/active, type/source]
last_sync: 2026-10-24
---
# WebAIM — Evaluación de contraste y color

## Overview
Artículo técnico de WebAIM sobre cómo evaluar el contraste y el uso del color en interfaces web, con herramientas y un proceso de trabajo. Leído el 2026-10-24.

## Core Context & Architectural Rules
- **URL:** <https://webaim.org/articles/contrast/evaluating>
- **Tipo:** técnica (WebAIM).
- **Apartados del Tema 3:** 4 (contraste), 7 (errores), 9 (recomendaciones).
- **Estado de lectura:** leída (última actualización indicada: 9 de enero de 2021).

### Hechos verificables
- Propone un proceso en tres pasos: barrido preliminar de posibles problemas, escaneo automatizado cuando sea posible y prueba manual de los casos restantes.
- El barrido preliminar incluye dependencia del color (enlaces y formularios), texto de bajo contraste, texto dentro de imágenes, objetos gráficos o componentes de interfaz y estados hover/foco.
- Herramientas citadas: WebAIM Contrast Checker, WebAIM Link Contrast Checker, WAVE, ColorZilla, Colour Contrast Analyser y el comprobador de accesibilidad de Microsoft Office.
- WAVE no detecta problemas de contraste en imágenes de fondo, degradados, transparencias ni texto que forma parte de una imagen; esos casos requieren revisión manual.
- Si un enlace se distingue solo por color, WCAG exige 3:1 entre el texto del enlace y el texto circundante, además de 4.5:1 entre el enlace y el fondo y entre el texto normal y el fondo. El Link Contrast Checker comprueba los tres ratios a la vez.
- El Colour Contrast Analyser permite usar un cuentagotas fuera del navegador y es útil para texto dentro de imágenes y documentos.
- Recomienda revisar también los estados de hover y foco, no solo el estado por defecto.

### Límites
- El artículo tiene fecha de 2021; las herramientas y algunos detalles pueden haber cambiado.
- No es una norma: describe un proceso práctico de evaluación.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Verificación de contraste]], [[Contraste WCAG]], [[Ratio de contraste]]
- Source History: [[2026-10-24]]
