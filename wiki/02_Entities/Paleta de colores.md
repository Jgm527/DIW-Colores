---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Paleta de colores

## Overview
Una paleta de colores es el conjunto limitado y documentado de colores que usa un producto. No es una lista de colores bonitos: es un sistema con funciones (fondo, texto, marca, estados, semántica) y con reglas de combinación. Una paleta útil se reconoce porque permite construir cualquier pantalla sin improvisar valores nuevos.

## Core Context & Architectural Rules

### Qué es y por qué importa
- La paleta es la base visual del producto: da consistencia, acelera decisiones y evita que cada pantalla parezca de un proyecto distinto.
- En la web se expresa normalmente como variables CSS o tokens; el valor hexadecimal es la implementación, no la definición.
- Una paleta debe cubrir como mínimo: fondo/superficie, texto principal, texto secundario, color de marca, color de acento y colores semánticos.

### Cómo se construye (proceso razonable)
1. **Definir la función** de cada color antes de elegir el valor.
2. **Elegir un punto de partida**: color de marca, restricción corporativa o una imagen de referencia.
3. **Generar variantes** con un modelo perceptualmente uniforme ([[OKLCH]]) para que los escalones de brillo sean regulares.
4. **Asignar roles** ([[Roles de color (Material Design 3)]]) y nombrar los tokens por función.
5. **Verificar contraste** de todos los pares texto/fondo y de los componentes no textuales ([[Verificación de contraste]]).
6. **Probar en contexto**: tema claro, oscuro, estados hover/foco/deshabilitado y tamaños pequeños.
7. **Documentar** qué combinaciones están permitidas y cuáles no.

### Reglas
- Limitar el número de familias; añadir colores solo cuando exista una función nueva.
- Derivar los estados del mismo tono, no inventar un color distinto para cada estado.
- Separar **colores de superficie** (fondos) de **colores de contenido** (texto, iconos).
- No usar la paleta como decoración: cada color debe tener un trabajo.
- Comprobar el contraste con el color final renderizado, incluidos degradados y transparencias.

### Errores frecuentes
- Paletas de veinte colores sin función asignada.
- Usar el mismo color para marca, enlace y error.
- Elegir variantes a ojo en HSL, con saltos de brillo desiguales.
- Definir los colores solo en el archivo de diseño y no como tokens en código.
- Confundir una paleta accesible con una paleta «bonita».

### Buena y mala aplicación
- **Buena:** una paleta de 8–12 tokens con funciones documentadas, cada par texto/fondo verificado, y una única fuente de verdad en CSS.
- **Mala:** capturas de una web admirada cuyos hex se copian sin comprobar contraste ni adaptar al contenido propio.

### Hechos frente a heurísticas
- **Hecho verificable:** una paleta necesita cubrir los umbrales de contraste aplicables; eso se mide ([[Contraste WCAG]]).
- **Heurística:** la recomendación de «seis colores: uno dominante, cuatro de acento y uno de texto» es una propuesta de blog, no una norma. Fuente: [[CareerFoundry — Teoría del color y paletas]].
- **Heurística:** el reparto 60-30-10 es una guía de proporciones, no un estándar. Ver [[Regla 60-30-10]].

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[Esquemas de color]], [[Roles de color (Material Design 3)]], [[Color de marca]], [[Regla 60-30-10]], [[Modelos de color]], [[OKLCH]], [[Verificación de contraste]], [[Jerarquía visual con color]], [[Checklist de color para desarrolladores]], [[Sajid — The Easy Way to Pick UI Colors]], [[UI Colors (herramienta)]]
- Sources: [[CareerFoundry — Teoría del color y paletas]], [[SeedProd — Teoría del color en diseño web]], [[Bootcamp — Regla 60-30-10]], [[Material Design 3 — Color roles]]
- Source History: [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Añadidos [[Jerarquía visual con color]] y [[Checklist de color para desarrolladores]]. Se incorpora Material Design 3 como referencia para la asignación de roles y se refuerza la distinción entre paleta (conjunto) y rol (función).
- 2026-10-24 · Ampliada con aportes del vídeo [[Sajid — The Easy Way to Pick UI Colors]]: enfoque pragmático (neutros + primario + semánticos), generación de escalas con HSL (fondos 0%, 5%, 10%; texto principal/atenuado), técnicas de profundidad (gradientes, *highlight*, sombras con alfa), y uso de la herramienta [[UI Colors (herramienta)]] para generar tokens por función. Se recomienda verificar contraste con fuentes oficiales (WCAG/WebAIM). Marcado como divulgativo.
