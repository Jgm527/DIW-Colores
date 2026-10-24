---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Convenciones culturales del color

## Overview
Las asociaciones entre un color y una idea (rojo = peligro, verde = naturaleza, blanco = luto) son **aprendidas y variables**, no leyes perceptivas. En una interfaz conviene separar dos cosas: el **significado funcional** que el producto asigna a un color ([[Colores semánticos]]) y el **simbolismo cultural** que el usuario pueda traer consigo. Confundirlos produce interfaces que funcionan en una cultura y fallan en otra.

## Core Context & Architectural Rules

### Qué es y por qué importa
- El significado cultural del color se aprende en un contexto social; no es universal ni estable.
- InfoQ recoge asociaciones como rojo = peligro y verde = naturaleza, y advierte expresamente de que son **occidentales** y cambian según la cultura. Fuente: <https://www.infoq.com/articles/Colors-UI/>.
- SeedProd pone el ejemplo del rojo: peligro en Estados Unidos, suerte en China. Es un ejemplo divulgativo, no un estudio intercultural. Fuente: <https://www.seedprod.com/es/web-design-color-theory/>.
- CareerFoundry incluye los factores culturales entre los que condicionan la percepción y recomienda investigar al público. Fuente: <https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/>.
- En un producto global, una asociación local mal entendida puede cambiar el tono de un mensaje, no solo su estética.

### Reglas prácticas
- **No usar el color como único portador de un significado crítico**: añadir texto, icono o forma ([[Uso del color (WCAG 1.4.1)]]).
- Distinguir el color **funcional** (error, éxito, aviso) del color **simbólico** (cultura, marca, campaña).
- Documentar qué significa cada color en el producto y en qué contextos se usa.
- Revisar las convenciones del mercado objetivo antes de reutilizar una paleta de otro país.
- Probar con usuarios locales cuando el producto se internacionaliza; no basta con un simulador.
- Evitar decisiones irreversibles basadas solo en una asociación cultural: el color puede reforzar el mensaje, pero el texto debe sostenerlo.

### Errores frecuentes
- Afirmar que «el rojo siempre significa peligro» o que «el verde siempre significa éxito».
- Trasladar una paleta de marca a otro país sin revisar sus connotaciones.
- Usar colores de una bandera o de una festividad local como decoración genérica.
- Codificar estados solo con el color culturalmente esperado, sin alternativa textual.
- Convertir una observación de blog en una regla universal.

### Buena y mala aplicación
- **Buena:** un mensaje de error usa color + icono + texto («No se pudo guardar»), y el texto sigue teniendo sentido aunque se ignore la connotación cultural del tono.
- **Mala:** una campaña usa blanco para celebrar y negro para advertir porque «así se hace en mi país», sin comprobar el mercado destino.

### Hechos frente a heurísticas
- **Hecho verificable:** el criterio 1.4.1 exige que el color no sea el único medio visual de transmitir información, con independencia de la cultura. Fuente: <https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html>.
- **Heurística:** las listas de significados por color que difunden blogs y escuelas de diseño son orientativas y occidentales; no son normas ni estudios interculturales.
- **Hueco:** no se ha leído una fuente primaria de investigación intercultural sobre color. Las afirmaciones culturales de esta nota se presentan como ejemplos divulgativos, no como datos consolidados.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Percepción del color]], [[Colores semánticos]], [[Color de marca]], [[Uso del color (WCAG 1.4.1)]], [[Errores frecuentes de color]]
- Sources: [[InfoQ — Colors and the UI]], [[SeedProd — Teoría del color en diseño web]], [[CareerFoundry — Teoría del color y paletas]], [[W3C — Understanding SC 1.4.1 Uso del color]]
- Source History: [[2026-10-24]]
