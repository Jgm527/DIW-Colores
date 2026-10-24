---
tags: [ai-memory, state/active, type/source]
last_sync: 2026-10-24
---
# Sajid — The Easy Way to Pick UI Colors

## Overview
Vídeo de YouTube del canal Sajid titulado «The Easy Way to Pick UI Colors». **Vídeo visto por mí y transcrito en `The_Easy_Way_to_Pick_UI_Colors.txt`.** Fuente de divulgación, no oficial. Autor: Sajid. Idioma: inglés.

## Core Context & Architectural Rules
- **URL:** <https://youtu.be/vvPklRN0Tco>
- **Tipo:** vídeo de divulgación
- **Apartados del Tema 3:** 1, 2 y 3 (énfasis en paletas, tonalidades/saturación/brillo, HSL, OKLCH/LCH)
- **Estado de lectura:** **vídeo visto por mí, transcripción propia.**
- **Transcripción:** `wiki/04_Sources/The_Easy_Way_to_Pick_UI_Colors.txt`

### Resumen en español (con palabras propias)
Sajid propone un enfoque pragmático para paletas de UI: centrarse en **neutros** para fondo, texto y bordes, un **color primario** para acciones/caracter y, opcionalmente, **colores semánticos**. Para generar tonos coherentes recomienda usar **HSL** (matiz/hue, saturación/saturation, luminosidad/lightness) ya que el código resulta más intuitivo para crear escalas. Propone generar tres tonos para fondos (base, superficies/tarjetas, elementos elevados) y dos para texto (principal/más nítido y secundario/atenuado), ajustando con sentido común. Para pasar a modo claro, sugiere restar la luminosidad a 100 y reajustar nombres/valores (distinguiendo *bg-dark/bg-light* según el caso). Destaca el uso de **gradientes sutiles**, **highlight** para bordes superiores, **sombras** con transparencia y la posibilidad de añadir matiz/saturación al color primario con una herramienta interactiva. Por último, presenta **LCH/OKLCH** como formatos más perceptivamente coherentes frente a HSL (especialmente en las variaciones de luminosidad), señala que Tailwind V4 usa OKLCH por defecto y que la herramienta permite exportar en OKLCH/HSL/Theme.

### Ideas principales
- Los colores en UI se entienden mejor como **sombras/tonalidades** de unos pocos roles.
- HSL facilita crear paletas armoniosas con matemáticas simples (especialmente con saturación 0 para neutros).
- Crear escalas con lightness: fondos (0%, 5%, 10%), texto (principal vs atenuado).
- En dark/light: invertir/restar 100 y ajustar con criterio; los nombres deben tener sentido.
- Detalles que dan sensación de profundidad: gradientes, borde resaltado (*highlight*), sombras con alfa.
- Jugar con hue/saturación para dar carácter al color primario/acciones.
- LCH/OKLCH mejoran la uniformidad perceptiva frente a HSL en las variaciones.
- Herramienta interactiva para ajustar paleta y generar CSS con nombres por función.

### Comparación con notas existentes
**a) Coinciden:**
- Distinción entre valor y función/rol [[Paleta de colores]], [[Roles de color (Material Design 3)]].
- Importancia del contraste y legibilidad [[Contraste WCAG]].
- La regla 60-30-10 se menciona como heurística en nuestras notas, mientras Sajid propone un reparto pragmático (neutros + primario + semánticos) — enfoque compatible.
- Uso de tokens/variables CSS.
- Diferenciación entre modo claro/oscuro.

**b) Nuevas:**
- Énfasis explícito en **tonalidades/saturación/brillo** como concepto práctico (HSL).
- Técnica concreta: fondos con 0%, 5%, 10% de lightness para crear elevación.
- Uso de **border highlight** (borde superior más claro) para simular luz desde arriba.
- Técnica de sombras con dos sombras (más corta/oscura + más larga/clara) con transparencia.
- Distinción práctica entre HSL/LCH/OKLCH centrada en uniformidad perceptiva.
- Propuesta de herramienta propia para ajustar *Neutral–Vivid* y *Warmer–Cooler*.
- Enfoque «empezar por neutros» muy pragmático.

**c) Contradicciones/matizaciones frente a fuentes oficiales:**
- **OKLCH vs HSL:** Sajid afirma que OKLCH/LCH son «nuevos y mejores» por uniformidad perceptiva. **No hemos leído fuentes oficiales (W3C CSS Color 4, MDN) sobre este punto en esta sesión.** Por tanto, **no hay contradicción constatada — queda pendiente de verificar**. Solo podemos afirmar lo que dice el vídeo de divulgación: según Sajid, LCH/OKLCH ofrecen variaciones de luminosidad más uniformes frente a HSL. Cualquier afirmación sobre que fuentes oficiales lo destaquen es incorrecta y no estaba verificada.
- **Saturación 0 para neutros:** Correcto y pragmático; no contradice a las fuentes oficiales.
- **Proporciones 60-30-10:** Sajid no insiste en esa regla numérica; nuestras notas la marcan correctamente como heurística. Sin contradicción.
- **Accesibilidad:** Sajid menciona contraste en su herramienta, pero el vídeo es divulgativo. Las exigencias numéricas provienen de **WCAG/WebAIM**; prevalecen las fuentes oficiales.
- **Observación a verificar:** La afirmación de que en OKLCH matiz y croma se mantienen constantes mientras solo varía luminosidad (tal como se describe en la herramienta) es una **observación del autor a partir de capturas**, no un hecho general — hay que verificarlo caso por caso.

### Ideas que interesan especialmente
- Importancia de las tonalidades, saturación y brillo (HSL)
- Tipos de color de formato (HSL, LCH, OKLCH)
- Juego con bg-dark/bg-light según tipo de fondo
- Diferencia del chroma con saturation entre HSL y OKLCH

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Paleta de colores]], [[Color en interfaces web]], [[Modelos de color]], [[OKLCH]], [[UI Colors (herramienta)]]
- Source History: [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Actualizada: vídeo visto, transcripción propia añadida (`The_Easy_Way_to_Pick_UI_Colors.txt`). Resumen en español, ideas principales, comparación con notas existentes y análisis de contradicciones/matizaciones. Marcado como fuente de divulgación (no oficial). Autor: Sajid.
- 2026-10-25 · **Corrección:** En el apartado de contradicciones se aclara que **no hay contradicción constatada** con fuentes oficiales sobre OKLCH, ya que **no hemos leído W3C CSS Color 4 ni MDN en esta sesión**. La afirmación sobre uniformidad perceptiva queda **pendiente de verificar**; solo se puede afirmar lo que dice el vídeo. Se corrige la referencia errónea a esas fuentes (escrita de memoria).
