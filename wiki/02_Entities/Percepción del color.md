---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Percepción del color

## Overview
El color no es una propiedad objetiva de la luz ni del píxel: es el resultado de cómo el sistema visual interpreta una señal. Esa interpretación depende del observador, del contexto espacial y del entorno. Para el diseño de interfaces esto significa que dos colores con el mismo valor hexadecimal pueden percibirse de forma distinta según lo que tengan al lado y quién los mire.

## Core Context & Architectural Rules

### Qué es (hechos verificables)
- En la retina hay tres tipos de conos (L, M y S) sensibles a distintas longitudes de onda; la percepción surge de su combinación y del procesamiento posterior, no de una lectura directa de la longitud de onda. Fuente: InfoQ, *Colors and the UI*: <https://www.infoq.com/articles/Colors-UI/>
- En pantalla el modelo es aditivo (RGB): los primarios no se obtienen mezclando otros y con ellos se generan los demás. Fuente: InfoQ y CareerFoundry, <https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/>.
- **Contraste simultáneo:** un gris rodeado de rojo tiende a verse verdoso; el mismo control puede parecer distinto sobre fondos distintos. Fuente: InfoQ.
- **Aberración cromática:** combinaciones de rojo con violeta o azul pueden percibirse borrosas; el artículo recomienda evitarlas en texto. Fuente: InfoQ.
- La percepción cambia con la edad, la cultura y la propia visión del color; no es universal. Fuente: CareerFoundry (factores personales y culturales).

### Por qué importa en una interfaz
- Un color «bonito» en el selector puede fallar al aplicarse sobre otro fondo o junto a otro estado.
- La legibilidad no se decide mirando el token aislado, sino el par real texto/fondo tal como se renderiza.
- Las asociaciones culturales (rojo = peligro, verde = naturaleza) son aprendidas y variables; no son leyes perceptivas.

### Reglas prácticas
- Evaluar siempre el color **en contexto**: fondo, elementos adyacentes, tamaño y estado.
- No confiar en la memoria cromática: comprobar con herramientas y con personas.
- Reservar el color como refuerzo, no como único canal de significado (ver [[Uso del color (WCAG 1.4.1)]]).
- Tener en cuenta que la percepción del brillo no coincide con la L de HSL (ver [[Modelos de color]]).

### Errores frecuentes
- Elegir colores de estado mirándolos por separado y no sobre el fondo final.
- Asumir que un contraste alto garantiza que el matiz se distingue.
- Usar rojo y verde como únicos indicadores de error/éxito.

### Buena y mala aplicación
- **Buena:** un mismo mensaje de error se refuerza con icono, texto y color, y se comprueba sobre el fondo real.
- **Mala:** un borde rojo fino sobre fondo blanco como único aviso de campo inválido.

### Heurísticas y opiniones (no normativas)
- La idea de que «los colores cálidos activan y los fríos calman» es una generalización de marketing y psicología popular; el propio material divulgativo la presenta como tendencia, no como ley. Fuente: SeedProd, <https://www.seedprod.com/es/web-design-color-theory/>.
- La cifra de que la gente juzga un producto en 90 segundos y que hasta el 90 % de esa valoración es color es una cita secundaria de un instituto privado, no un dato normativo. Fuentes: CareerFoundry y SeedProd.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[Deficiencia de visión al color]], [[Modelos de color]], [[Color de marca]], [[Colores semánticos]]
- Sources: [[InfoQ — Colors and the UI]], [[CareerFoundry — Teoría del color y paletas]], [[SeedProd — Teoría del color en diseño web]]
- Source History: [[2026-10-24]]
