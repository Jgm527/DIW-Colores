---
tags: [ai-memory, state/active, type/source]
last_sync: 2026-10-24
---
# Material Design 3 — Color roles

## Overview
Página oficial de Material Design 3 sobre los roles de color. Define qué función cumple cada rol, cómo se emparejan y qué precauciones hay al aplicarlos. Leída el 2026-10-24. Sustituye a la documentación de Wear OS como referencia principal para los roles de Material en este proyecto.

## Core Context & Architectural Rules
- **URL:** <https://m3.material.io/styles/color/roles>
- **Tipo:** oficial (Google, sistema de diseño Material Design 3).
- **Apartados del Tema 3:** 2 (principales/secundarios/apoyo), 6 (destacar información), 7 (errores), 9 (recomendaciones).
- **Estado de lectura:** leída (contenido de la página obtenido el 2026-10-24; la página se actualizó por última vez el 2026-07-27 según sus metadatos).

### Hechos verificables
- Hay **26 roles de color estándar** organizados en **seis grupos**: primary, secondary, tertiary, error, surface y outline. La página menciona además roles adicionales (inverse, fixed, surface dim/bright, etc.).
- Los roles están **asociados a los componentes** de Material y se implementan mediante **tokens**; si se crean componentes propios, hay que mapearlos a esos roles.
- El sistema se apoya en **emparejamientos accesibles** de color: la página afirma que esos pares proporcionan un **contraste mínimo de 3:1**.
- **Primary** se reserva a las acciones y elementos más importantes (FAB, botones de alta énfasis, estados activos). **Secondary**, a elementos menos prominentes (chips de filtro, estados de selección secundarios). **Tertiary**, a acentos pequeños que requieren énfasis especial sin atención inmediata (badges, notificaciones).
- Los roles **container** son colores de relleno para elementos como botones; **no deben usarse para texto ni iconos**. Los roles **on** son para texto e iconos sobre su color emparejado (`on primary` sobre `primary`).
- **Error** comunica estados de error; es un color estático que no cambia con los esquemas dinámicos, aunque sí se adapta a tema claro y oscuro.
- **Surface** se usa para fondos y zonas grandes de bajo énfasis; existen cinco roles `surface container` para construir jerarquía. **On surface** y **on surface variant** son para texto e iconos.
- **Outline** se usa para límites importantes (borde de un campo de texto) y debe aportar 3:1 frente a la superficie. **Outline variant** es para elementos decorativos como divisores, no para definir límites de controles.
- Combinar roles de forma incorrecta puede **romper el contraste**; la página muestra ejemplos «do» y «don't» con botones y distintos niveles de contraste.
- Los roles deben mantenerse **consistentes entre breakpoints** y al cambiar de tema.
- Los colores **fixed** conservan el mismo tono en tema claro y oscuro, por lo que la propia página advierte de que pueden causar problemas de contraste.

### Límites y precauciones
- El **3:1** que menciona la página es el mínimo de sus emparejamientos de roles, no el umbral completo de WCAG para texto normal: 1.4.3 exige **4.5:1**. Los roles de Material ayudan, pero no garantizan por sí solos la conformidad.
- Es documentación de un sistema de diseño concreto (Material), no una norma aplicable a cualquier interfaz.
- La página no fija una paleta única: los valores concretos dependen del esquema estático o dinámico.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Roles de color (Material Design 3)]], [[Paleta de colores]], [[Colores semánticos]], [[Jerarquía visual con color]], [[Contraste WCAG]]
- Source History: [[2026-10-24]]
