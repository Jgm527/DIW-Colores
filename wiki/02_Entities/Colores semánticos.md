---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Colores semánticos

## Overview
Los colores semánticos son colores con un significado asignado y estable dentro del producto: normalmente error, éxito, advertencia e información. Su valor no está en el tono concreto, sino en el significado compartido. Como el color por sí solo no basta para transmitir ese significado, siempre deben ir acompañados de texto, icono o forma ([[Uso del color (WCAG 1.4.1)]]).

## Core Context & Architectural Rules

### Qué son y por qué importan
- Crean un lenguaje común: el usuario aprende que un estado rojo implica error y uno verde, éxito.
- Permiten que componentes distintos (formularios, notificaciones, tablas) comuniquen lo mismo de forma coherente.
- Deben definirse como **roles** con su par de texto y fondo, no como colores sueltos. Ver [[Roles de color (Material Design 3)]].

### Reglas
- **Nunca usar el color como único canal.** Añadir texto («Error»), icono y, cuando proceda, forma o patrón.
- Definir un par accesible por estado: color de fondo/contenedor y color de texto/icono que cumpla [[Ratio de contraste]].
- Mantener el significado estable: no usar el rojo de error como color decorativo en otra parte de la interfaz.
- No depender de asociaciones culturales universales; rojo puede significar peligro en una cultura y suerte en otra. Fuente: SeedProd, <https://www.seedprod.com/es/web-design-color-theory/>.
- Comprobar los estados también en modo oscuro y en alto contraste del sistema.

### Errores frecuentes
- Borde rojo sin mensaje que explique qué falla.
- Verde y rojo como únicos indicadores de positivo/negativo en gráficos o tablas.
- Usar el mismo rojo para «error» y para «marca».
- Texto blanco sobre amarillo de advertencia sin verificar el contraste.
- Asumir que todos los usuarios ven el matiz igual (ver [[Deficiencia de visión al color]]).

### Buena y mala aplicación
- **Buena:** un campo inválido muestra borde + icono + mensaje «El correo no tiene un formato válido», y el conjunto cumple contraste.
- **Mala:** una lista de estados donde la única diferencia entre «aprobado» y «rechazado» es el color de un punto.

### Hechos frente a heurísticas
- **Hecho verificable:** el criterio 1.4.1 exige que el color no sea el único medio visual de transmitir información, indicar una acción, pedir una respuesta o distinguir un elemento. Fuente: <https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html>
- **Hecho verificable:** la documentación de Material/Wear OS indica que el color debe comunicar significado con claridad y asocia rojo a error y verde a éxito. Fuente: [[Android — Color en Wear OS]].
- **Heurística:** qué tono exacto usar para cada estado es una decisión de diseño; no hay un hex normativo.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Uso del color (WCAG 1.4.1)]], [[Deficiencia de visión al color]], [[Roles de color (Material Design 3)]], [[Color de marca]], [[Contraste WCAG]]
- Sources: [[W3C — Understanding SC 1.4.1 Uso del color]], [[Android — Color en Wear OS]], [[InfoQ — Colors and the UI]], [[SeedProd — Teoría del color en diseño web]]
- Source History: [[2026-10-24]]
