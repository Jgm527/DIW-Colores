---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Color de marca

## Overview
El color de marca es el color (o pequeño conjunto de colores) que identifica a una organización y que el usuario asocia con ella. En una interfaz cumple dos funciones a la vez: dar identidad y construir jerarquía. La regla central es que la marca se adapta a los requisitos de legibilidad y contraste, no al contrario.

## Core Context & Architectural Rules

### Qué es y por qué importa
- Es el color que el usuario aprenderá a asociar con el producto; por eso su elección condiciona reconocimiento y coherencia.
- En los sistemas de diseño se convierte en un **token** (por ejemplo `--color-primary`) del que derivan estados, superficies y variantes.
- La documentación de Android para Wear OS describe el color como factor de legibilidad, usabilidad, atractivo y expresión, y recuerda que debe comunicar significado con claridad. Fuente: <https://developer.android.com/design/ui/wear/guides/styles/color?hl=es>

### Reglas
- **La marca no exime de contraste.** Un color corporativo que no alcanza el umbral se oscurece, se aclara o se reserva para superficies no textuales; no se reduce el contraste del texto.
- Definir el color de marca como **rol**, no como valor suelto: primario, sobre primario, contenedor, sobre contenedor.
- Derivar estados (hover, activo, deshabilitado) del mismo tono con variaciones controladas de luminosidad; ver [[OKLCH]].
- Comprobar el par texto/fondo con el color final, no con el valor nominal.
- Documentar el uso: dónde puede aparecer el color de marca y dónde no.

### Errores frecuentes
- Usar el color de marca como color de texto sobre blanco sin comprobar el ratio.
- Repetir el color de marca en todos los elementos, de modo que nada destaque (ver [[Regla 60-30-10]]).
- Cambiar el tono de marca en cada pantalla por motivos estéticos.
- Confundir marca con significado: el azul corporativo no convierte por sí solo un botón en «seguro».

### Buena y mala aplicación
- **Buena:** el color de marca aparece en cabecera, enlaces y botones principales; el texto sobre él cumple 4.5:1 y existe una variante accesible para fondos claros.
- **Mala:** un botón con el amarillo corporativo y texto blanco porque «es el color de la marca», sin comprobar que el par no se lee.

### Hechos frente a heurísticas
- **Hecho verificable:** los sistemas de diseño oficiales organizan el color en roles y advierten de la necesidad de contraste (Android/Material 3).
- **Heurística:** la idea de que el color de marca debe ocupar aproximadamente el 30 % de la interfaz procede de la regla 60-30-10, difundida en blogs; no es un estándar. Ver [[Regla 60-30-10]].

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[Roles de color (Material Design 3)]], [[Paleta de colores]], [[Regla 60-30-10]], [[Colores semánticos]], [[OKLCH]], [[Jerarquía visual con color]], [[Convenciones culturales del color]], [[Checklist de color para desarrolladores]]
- Sources: [[Android — Color en Wear OS]], [[Material Design 3 — Color roles]], [[CareerFoundry — Teoría del color y paletas]], [[SeedProd — Teoría del color en diseño web]]
- Source History: [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Enlazada con [[Jerarquía visual con color]], [[Convenciones culturales del color]] y [[Checklist de color para desarrolladores]]. Se añade Material Design 3 como fuente de roles y se recuerda que el color de marca no exime del contraste.
