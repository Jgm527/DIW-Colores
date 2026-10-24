---
tags: [ai-memory, state/active, type/source]
last_sync: 2026-10-24
---
# Android — Color en Wear OS

## Overview
Página oficial de Android Developers sobre el uso del color en Wear OS con Material 3. Describe roles de color, significado semántico y accesibilidad. Leída el 2026-10-24.

## Core Context & Architectural Rules
- **URL:** <https://developer.android.com/design/ui/wear/guides/styles/color?hl=es>
- **Tipo:** oficial (documentación de Google/Android).
- **Apartados del Tema 3:** 1 (importancia), 2 (principales, secundarios y de apoyo), 5 (significado y uso), 6 (destacar información).
- **Estado de lectura:** leída (versión en español; última actualización indicada: 2025-07-26).

### Hechos verificables
- En wearables, el color influye en legibilidad, usabilidad, atractivo visual y expresión, especialmente en pantallas pequeñas.
- Las interfaces de reloj parten de fondo negro y deben funcionar de día y de noche; por eso los tokens de color se adaptan específicamente.
- El sistema de color de Material 3 mantiene tres colores de acento y dos colores de superficie neutros, y añade roles de contenedor dentro de los roles de acento.
- Los roles de contenedor permiten variar la superficie con más croma sin romper la jerarquía visual; sirven para estados y para diseños complementarios.
- La página afirma que el sistema incluye más de 28 roles de color asignados a componentes de Material.
- El color debe comunicar significado de forma clara: el rojo se asocia a error y el verde a éxito.
- La página incluye un apartado de accesibilidad de color y cumplimiento de contraste, pero no desarrolla en el texto extraído los umbrales concretos.
- Material 3 incorpora colores de tema oscuro, valores mejorados para estados deshabilitados, colores de error adicionales y color dinámico.

### Límites
- Es documentación específica de Wear OS, no una norma web. Los nombres de roles y las recomendaciones de fondo negro no se trasladan automáticamente a una interfaz web.
- La propia página remite a Material 3 para las prácticas recomendadas; no es una fuente normativa de WCAG.
- La afirmación de «más de 28 roles» es de la documentación, no se ha contrastado con otra fuente.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Roles de color (Material Design 3)]], [[Color de marca]], [[Colores semánticos]], [[Paleta de colores]]
- Source History: [[2026-10-24]]
