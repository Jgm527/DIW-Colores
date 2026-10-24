---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Jerarquía visual con color

## Overview
El color dirige la atención mediante diferencias de luminancia, saturación y superficie. Una jerarquía clara reserva el mayor énfasis para la acción principal y deja el resto en un segundo plano. La jerarquía no se construye solo con color: también intervienen tamaño, posición, espacio y tipografía. El color **refuerza** esa jerarquía, no la sustituye.

## Core Context & Architectural Rules

### Qué es y por qué importa
- Sin jerarquía, todos los elementos compiten y el usuario no sabe dónde mirar ni qué hacer primero.
- Material Design 3 organiza el énfasis en roles: **primary** para las acciones más importantes, **secondary** para elementos menos prominentes y **tertiary** para acentos pequeños que requieren atención especial sin ser la acción principal. Fuente: <https://m3.material.io/styles/color/roles> ([[Material Design 3 — Color roles]]).
- El contraste de luminancia es el principal instrumento para separar primer plano y fondo; el tono por sí solo no basta ([[Ratio de contraste]]).
- El color también comunica estado: selección, foco, error, deshabilitado ([[Colores semánticos]]).

### Reglas prácticas
- **Una acción principal por vista.** Las demás se presentan como secundarias o terciarias.
- Reservar el color de mayor énfasis para lo que debe destacar; si todo está destacado, nada lo está ([[Regla 60-30-10]]).
- Usar el color junto con **tamaño, posición, espacio y tipografía**; el color no debe ser el único recurso jerárquico.
- Para texto y elementos esenciales, respetar los umbrales de [[Contraste WCAG]]: 4.5:1 en texto normal y 3:1 en componentes no textuales.
- En estados interactivos, cambiar **color + forma, borde, icono o texto**, no solo el tono ([[Uso del color (WCAG 1.4.1)]]).
- Mantener visible el foco de teclado; el color del foco debe distinguirse del estado normal y del fondo.
- Comprobar la jerarquía en escala de grises y con [[Deficiencia de visión al color]] simulada.
- En modo oscuro, reconstruir la jerarquía de superficies; no invertir los hex sin revisar el contraste.

### Errores frecuentes
- Varios botones «primarios» en la misma pantalla.
- Usar el color de acento en enlaces, botones, iconos y bordes a la vez.
- Distinguir un enlace del texto solo por el tono, sin subrayado ni otra pista.
- Indicar el estado de un campo solo con un borde de color.
- Confundir «color vivo» con «mayor contraste»: un tono saturado puede tener poca luminancia frente al fondo.
- Ocultar el foco del teclado porque «afea» el diseño.

### Buena y mala aplicación
- **Buena:** una pantalla con un botón principal en el color de marca verificado, acciones secundarias con relleno tenue o texto, y el foco visible con un anillo que contrasta.
- **Mala:** cinco botones del mismo color saturado y un enlace que solo se distingue del párrafo por ser azul claro.

### Hechos frente a heurísticas
- **Hecho verificable:** el color no puede ser el único medio de distinguir un elemento o indicar una acción (1.4.1); los componentes no textuales necesarios deben alcanzar 3:1 (1.4.11).
- **Hecho verificable:** los roles de énfasis de Material 3 asignan primary, secondary y tertiary a distintos niveles de importancia.
- **Heurística:** «una sola llamada a la acción por pantalla» es una recomendación de diseño, no un criterio WCAG. Del mismo modo, el reparto 60-30-10 es una guía, no una norma ([[Regla 60-30-10]]).

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[Uso del color (WCAG 1.4.1)]], [[Contraste WCAG]], [[Roles de color (Material Design 3)]], [[Colores semánticos]], [[Regla 60-30-10]], [[Combinaciones de color (buenas y malas)]], [[Checklist de color para desarrolladores]]
- Sources: [[Material Design 3 — Color roles]], [[W3C — Understanding SC 1.4.1 Uso del color]], [[W3C — Understanding SC 1.4.3 Contraste mínimo]]
- Source History: [[2026-10-24]]
