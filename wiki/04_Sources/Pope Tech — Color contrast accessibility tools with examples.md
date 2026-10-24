---
tags: [ai-memory, state/active, type/source]
last_sync: 2026-10-24
---
# Pope Tech — Color contrast accessibility tools with examples

## Overview
Artículo técnico-divulgativo de Whitney Lewis en el blog de Pope Tech, actualizado el 12 de febrero de 2024, sobre herramientas para detectar y corregir problemas de contraste. Leído el 2026-10-24.

## Core Context & Architectural Rules
- **URL:** <https://blog.pope.tech/?p=7791>
- **Tipo:** divulgación técnica (blog de una empresa de accesibilidad).
- **Apartados del Tema 3:** 4 (contraste), 7 (errores), 8 (buenas y malas combinaciones), 9 (recomendaciones).
- **Estado de lectura:** texto leído; los vídeos incrustados **no visualizados**.

### Contenido del artículo
- Afirma que el texto de bajo contraste es el error de accesibilidad más común en la web, citando WebAIM Million, y que también es de los más sencillos de corregir.
- Presenta tres herramientas: los comprobadores de contraste de WebAIM (normal y de enlaces), la extensión WAVE y el inspector de Chrome.
- WAVE no puede comprobar contraste dentro de imágenes, texto sobre imagen ni fondos con degradado; esos casos requieren comprobación manual.
- El inspector de Chrome muestra el ratio y líneas que indican qué colores cumplen AA/AAA.
- Ejemplo de texto gris `#7C7C7C` sobre blanco: 4,17:1, insuficiente para texto normal; se corrige a `#6B6B6B`, 5,36:1.
- Ejemplo de botón azul `#1550ED` sobre fondo `#112642`: 2,46:1, insuficiente para componente no textual (3:1); se ajusta a `#3365F0`, 3,08:1.
- Ejemplo de enlace sin subrayado `#0070C9` sobre texto `#333333`: 2,5:1, insuficiente para distinguirlo del texto (3:1); ajustar solo el enlace rompe el 4,5:1 con el fondo, así que hay que ajustar ambos colores o subrayar.
- Ejemplo de texto sobre imagen: probar las zonas más claras y a distintos tamaños de pantalla; el mismo texto puede fallar en móvil aunque pase en escritorio.
- Insiste en que cambiar el color en el inspector no arregla el sitio: hay que modificar el CSS o la plantilla.

### Precauciones
- Es un blog comercial, aunque los ejemplos y umbrales coinciden con WCAG.
- Los ratios concretos de los ejemplos son cálculos de la autora; se reproducen como ejemplos, no como valores universales.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Verificación de contraste]], [[Contraste WCAG]], [[Ratio de contraste]], [[WebAIM — Comprobador de contraste]]
- Source History: [[2026-10-24]]
