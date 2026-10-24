---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Roles de color (Material Design 3)

## Overview
Un rol de color es una función asignada a un color dentro de un sistema de diseño (por ejemplo, «primario», «sobre primario», «superficie», «error»). El diseñador y el desarrollador usan el rol, no el valor hexadecimal suelto. Material Design 3 organiza así sus tokens para que el tema claro, el oscuro y el color dinámico funcionen sin rehacer cada componente.

## Core Context & Architectural Rules

### Qué es (según la documentación oficial)
- Material Design 3 define **26 roles estándar** agrupados en **seis familias**: primary, secondary, tertiary, error, surface y outline. Fuente principal: <https://m3.material.io/styles/color/roles> ([[Material Design 3 — Color roles]]).
- Los roles están **asociados a los componentes** y se implementan mediante **tokens**; los componentes propios deben mapearse a esos roles.
- El sistema se apoya en **emparejamientos accesibles**: la propia página afirma que sus pares de roles proporcionan un **mínimo de 3:1**. Para texto normal sigue aplicando el 4.5:1 de [[Contraste mínimo (WCAG 1.4.3)]].
- Los roles **container** son rellenos de componentes y **no deben usarse para texto ni iconos**; los roles **on** son el texto o icono que va encima de su color emparejado.
- La documentación de Android para Wear OS mantiene la misma lógica de roles y añade el contexto de pantalla pequeña y fondo negro: <https://developer.android.com/design/ui/wear/guides/styles/color?hl=es>.

### Por qué importa
- Separa **decisión semántica** (qué función cumple el color) de **valor concreto** (qué hexadecimal se usa).
- Permite cambiar de tema o de marca sin tocar componente por componente.
- Facilita comprobar contraste en pares definidos: cada rol de texto tiene un rol de fondo previsto.

### Reglas prácticas
- Nombrar los tokens por función: `primary`, `on-primary`, `surface`, `on-surface`, `error`, `on-error`.
- No usar un rol de acento como fondo de texto largo ni un rol de superficie como color de texto.
- Verificar cada par rol-sobre-rol con [[Ratio de contraste]]; el sistema no garantiza por sí solo el cumplimiento WCAG.
- Al adaptar el sistema a web, no copiar los nombres de Wear OS sin revisar el contexto de pantalla pequeña y fondo negro.

### Errores frecuentes
- Usar el color primario para texto y para fondo a la vez, perdiendo la jerarquía.
- Crear decenas de tokens nuevos en lugar de reutilizar los roles existentes.
- Confundir «rol» con «paleta»: el rol es una función; la paleta es el conjunto de colores disponibles.

### Buena y mala aplicación
- **Buena:** una tarjeta usa `surface-container` y su texto `on-surface`; el botón usa `primary` con `on-primary`, y el par está verificado.
- **Mala:** un componente con colores escritos a mano (`#1A73E8`, `#E8F0FE`) que no cambia con el tema oscuro y duplica valores.

### Límites de la fuente
- La fuente principal ya es la documentación **web** de Material Design 3, no solo Wear OS. Wear OS se conserva como contexto complementario de pantalla pequeña.
- El **3:1** de los emparejamientos de Material no sustituye el **4.5:1** de WCAG para texto normal; hay que verificar cada par con [[Verificación de contraste]].
- ServiceNow Horizon también documenta color, pero no se pudo leer (403); no se usa como fuente. Ver [[ServiceNow — Color overview]].

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color de marca]], [[Paleta de colores]], [[Colores semánticos]], [[Jerarquía visual con color]], [[Contraste WCAG]]
- Sources: [[Material Design 3 — Color roles]], [[Android — Color en Wear OS]]
- Source History: [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · **Sustituida la cautela basada en Wear OS.** Se leyó la página oficial de roles de Material Design 3 y se actualizan las cifras (26 roles estándar, seis familias), la función de primary/secondary/tertiary y la advertencia sobre container y texto. Se mantiene Wear OS como fuente complementaria y se enlaza [[Jerarquía visual con color]].
