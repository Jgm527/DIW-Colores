---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Esquemas de color

## Overview
Un esquema de color es una forma de seleccionar colores relacionados a partir del círculo cromático. Los esquemas clásicos (monocromático, análogo, complementario, complementario dividido, triádico, tetrádico) describen **relaciones de tono**; no garantizan por sí mismos armonía, legibilidad ni accesibilidad.

## Core Context & Architectural Rules

### Tipos y para qué sirve cada uno
| Esquema                 | Relación                                | Efecto típico                            | Uso habitual                |
| ----------------------- | --------------------------------------- | ---------------------------------------- | --------------------------- |
| Monocromático           | Variantes de un solo tono               | Coherente y sobrio; puede resultar plano | Fondos, marcas minimalistas |
| Análogo                 | Tonos contiguos en la rueda             | Suave y armonioso; poco contraste        | Fondos, banners             |
| Complementario          | Tonos opuestos                          | Alto contraste y atención                | Botón sobre fondo, acentos  |
| Complementario dividido | Un tono + los dos vecinos de su opuesto | Contraste sin tanta tensión              | Acentos                     |
| Triádico                | Tres tonos equidistantes                | Vivo y equilibrado si uno domina         | Marca con varios acentos    |
| Tetrádico               | Dos pares complementarios               | Rico y difícil de equilibrar             | Proyectos con experiencia   |

Fuentes: CareerFoundry, <https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/>; SeedProd, <https://www.seedprod.com/es/web-design-color-theory/>.

### Hechos y precisiones
- La teoría del color clásica distingue primarios, secundarios y terciarios, y variantes por tinte, sombra y tono apagado. Fuente: CareerFoundry.
- Los esquemas describen relaciones de **tono**; no dicen nada sobre el **contraste de luminancia**, que es lo que WCAG mide. Dos tonos complementarios pueden tener luminancias casi iguales y ser ilegibles entre sí.
- InfoQ distingue esquemas análogos y complementarios y advierte de que la combinación rojo-verde es problemática para personas con deficiencia rojo-verde. Fuente: <https://www.infoq.com/articles/Colors-UI/>
- Un esquema no es una paleta completa: la paleta añade neutros, superficies, textos y estados.

### Reglas prácticas
- Elegir el esquema por la **función** (fondo, acento, marca), no por la estética aislada.
- Verificar el contraste de cada par que vaya a convivir, aunque los tonos sean «armónicos».
- Usar un color dominante y reservar los demás para acentos; ver [[Regla 60-30-10]].
- En interfaces, los neutros suelen ocupar la mayor parte de la superficie; los tonos saturados, una minoría.
- Probar el esquema con daltonismo simulado y en escala de grises.

### Errores frecuentes
- Creer que un esquema complementario es automáticamente accesible.
- Usar triádico o tetrádico en toda la interfaz y saturar al usuario.
- Elegir el esquema antes de conocer el contenido y la marca.
- Confundir «armonía» con «contraste suficiente».

### Buena y mala aplicación
- **Buena:** esquema análogo para el fondo y la marca, con un complementario reservado al botón principal y verificado a 4.5:1.
- **Mala:** dos complementarios puros usados como texto y fondo porque «contrastan», sin medir luminancia.

### Hechos frente a heurísticas
- **Hecho verificable:** los esquemas son relaciones geométricas en el círculo cromático y no implican un ratio de contraste.
- **Heurística:** que un esquema sea «agradable» o «profesional» es una valoración de diseño; varía con el público y la cultura.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Paleta de colores]], [[Percepción del color]], [[Color de marca]], [[Regla 60-30-10]], [[Contraste WCAG]], [[Combinaciones de color (buenas y malas)]], [[Errores frecuentes de color]]
- Sources: [[CareerFoundry — Teoría del color y paletas]], [[SeedProd — Teoría del color en diseño web]], [[InfoQ — Colors and the UI]]
- Source History: [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Enlazada con [[Combinaciones de color (buenas y malas)]] y [[Errores frecuentes de color]] al tratar los apartados 7–8. Se recuerda que los esquemas describen relaciones de tono, no contraste de luminancia.
