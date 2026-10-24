---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Roles de color (Material Design 3)

## Overview
Un rol de color es una función asignada a un color dentro de un sistema de diseño (por ejemplo, «primario», «sobre primario», «superficie», «error»). El diseñador y el desarrollador usan el rol, no el valor hexadecimal suelto. Material Design 3 organiza así sus tokens para que el tema claro, el oscuro y el color dinámico funcionen sin rehacer cada componente.

## Core Context & Architectural Rules

### Qué es (según la documentación oficial)
- El sistema de color de Material 3 mantiene **tres colores de acento** y **dos colores de superficie neutros**, y añade **roles de contenedor** dentro de los roles de acento. Fuente: Android Developers, *Color en Wear OS*: <https://developer.android.com/design/ui/wear/guides/styles/color?hl=es>
- Los roles de contenedor permiten variar la superficie con más croma sin romper la jerarquía visual; se usan para estados y diseños complementarios.
- La página afirma que hay **más de 28 roles** asignados a componentes de Material.
- Los tokens se adaptan al tema (claro/oscuro) y a la pantalla; Wear OS parte de fondo negro para funcionar de día y de noche.

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
- La documentación consultada es de Wear OS, no una norma web. Los nombres y el fondo negro no se trasladan automáticamente a una interfaz de escritorio.
- ServiceNow Horizon también documenta color, pero no se pudo leer (403); no se usa como fuente. Ver [[ServiceNow — Color overview]].

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color de marca]], [[Paleta de colores]], [[Colores semánticos]], [[Contraste WCAG]]
- Sources: [[Android — Color en Wear OS]]
- Source History: [[2026-10-24]]
