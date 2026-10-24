---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Combinaciones de color (buenas y malas)

## Overview
Una combinación de colores no es buena o mala por su gusto estético, sino por **qué función cumple y si se puede medir**. Para texto, la pregunta es si el par alcanza el umbral de [[Ratio de contraste]]; para componentes, si llega a 3:1; y para cualquier significado, si el color es el único canal. Una combinación «armónica» puede ser ilegible y una combinación sobria puede ser excelente.

## Core Context & Architectural Rules

### Cómo se justifica un juicio
1. **Identificar el uso:** texto normal, texto grande, componente no textual, fondo decorativo o estado.
2. **Medir el par real:** color final renderizado, no el token nominal; incluir transparencias, degradados y texto sobre imagen.
3. **Aplicar el umbral:** 4.5:1 (texto normal), 3:1 (texto grande y componentes), 7:1 si se busca AAA.
4. **Comprobar el segundo canal:** si el color transmite significado, ¿hay texto, icono, forma o patrón?
5. **Probar el contexto:** tamaños, estados, modo oscuro y daltonismo simulado.

Fórmula: `(L1 + 0.05) / (L2 + 0.05)`, con `L1` la luminancia relativa del color más claro. Ver [[Ratio de contraste]] y [[Luminancia relativa]].

### Tipos de combinación que fallan y por qué
- **Gris claro sobre blanco:** poca diferencia de luminancia. Es el caso típico del texto secundario y de los placeholders. El dato de WebAIM (83,9 % de portadas con texto de bajo contraste) confirma que es el fallo dominante. Ver [[Errores frecuentes de color]].
- **Dos tonos saturados con luminancia parecida:** el rojo y el verde puros pueden verse «muy distintos» y, sin embargo, tener un ratio bajo; además son el par más problemático para deficiencias rojo-verde.
- **Complementarios usados como texto y fondo:** la relación de tono no garantiza contraste de luminancia ([[Esquemas de color]]).
- **Texto de marca sobre blanco:** el color corporativo puede ser demasiado claro para texto normal; se reserva para superficies o se oscurece ([[Color de marca]]).
- **Texto sobre imágenes o degradados:** el fondo no es uniforme; hay que medir la zona más clara y probar en móvil.
- **Enlace sin subrayado:** si solo cambia el color, necesita 3:1 respecto al texto circundante y 4.5:1 respecto al fondo ([[Uso del color (WCAG 1.4.1)]]).
- **Rojo con violeta o azul en texto:** InfoQ advierte de que la aberración cromática puede hacer que se perciban borrosos; recomienda evitarlos en texto. Fuente: <https://www.infoq.com/articles/Colors-UI/>.
- **Colores `container` usados para texto:** Material Design 3 advierte de que esos roles son rellenos y no deben llevar texto o iconos ([[Material Design 3 — Color roles]]).

### Ejemplos con ratio calculado (Pope Tech)
Estos valores son cálculos del artículo, reproducidos como ejemplos didácticos; no son universales.

| Caso | Par | Ratio | Veredicto | Corrección |
| --- | --- | --- | --- | --- |
| Texto gris sobre blanco | `#7C7C7C` / `#FFFFFF` | **4,17:1** | Falla texto normal (4.5:1) | `#6B6B6B` → **5,36:1** |
| Botón azul sobre fondo oscuro | `#1550ED` / `#112642` | **2,46:1** | Falla componente no textual (3:1) | `#3365F0` → **3,08:1** |
| Enlace sin subrayar | `#0070C9` sobre texto `#333333` | **2,5:1** | Falla la distinción enlace/texto (3:1) | Ajustar ambos colores o subrayar |

Fuente: [[Pope Tech — Color contrast accessibility tools with examples]], <https://blog.pope.tech/?p=7791>.

### Ejemplos buenos y malos
- **Buena:** texto oscuro sobre un neutro claro, verificado con herramienta; el enlace se distingue por subrayado además del color; el botón principal tiene relleno de marca con texto `on-primary` comprobado.
- **Buena:** un estado de error combina rojo, icono y mensaje; el rojo no es el único portador del significado.
- **Mala:** texto blanco sobre amarillo corporativo porque «es el color de la marca».
- **Mala:** gráfico de líneas con seis colores y sin etiquetas ni patrones; en escala de grises las series se confunden.
- **Mala:** texto gris claro sobre una foto, comprobado solo en la zona oscura de la imagen.

### Hechos frente a heurísticas
- **Hecho verificable:** los umbrales y el cálculo están en WCAG 2.2; los ratios de los ejemplos son reproducibles con una herramienta de contraste.
- **Hecho verificable:** el criterio 1.4.1 es independiente del ratio: un par puede cumplir 4.5:1 y seguir fallando si el significado depende del color.
- **Heurística:** «los complementarios combinan bien» o «el gris siempre es elegante» son generalizaciones de diseño; no sustituyen la medición.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Contraste WCAG]], [[Ratio de contraste]], [[Verificación de contraste]], [[Errores frecuentes de color]], [[Jerarquía visual con color]], [[Colores semánticos]], [[Esquemas de color]], [[Deficiencia de visión al color]]
- Sources: [[Pope Tech — Color contrast accessibility tools with examples]], [[WebAIM — Comprobador de contraste]], [[Material Design 3 — Color roles]], [[InfoQ — Colors and the UI]], [[WebAIM Million 2026]]
- Source History: [[2026-10-24]]
