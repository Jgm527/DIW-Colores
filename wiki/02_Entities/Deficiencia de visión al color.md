---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Deficiencia de visión al color

## Overview
La deficiencia de visión al color (o daltonismo) es una alteración de la percepción de ciertos matices. No implica ver en blanco y negro: lo habitual es confundir determinados pares de tonos, sobre todo rojo-verde. Para el diseño de interfaces la consecuencia es directa: el color no puede ser el único portador de información.

## Core Context & Architectural Rules

### Qué es (hechos verificables)
- La percepción del color depende de tres tipos de conos (L, M y S); una alteración en uno de ellos cambia la discriminación de ciertos tonos. Fuente: [[InfoQ — Colors and the UI]].
- InfoQ recoge una incidencia aproximada de **80 de cada 1.000 hombres** y **4 de cada 1.000 mujeres**, y señala que las deficiencias rojo-verde son las más frecuentes. Es un dato de un artículo de 2008; debe citarse con esa cautela.
- Las personas con deficiencia de visión al color pueden no usar tecnología de apoyo; el problema es visual y afecta también a usuarios videntes.

### Por qué importa
- Si un formulario marca el error solo con rojo, una persona con deuteranopia puede no detectarlo.
- Si un gráfico distingue series solo por tono, las series pueden volverse indistinguibles.
- La accesibilidad no consiste en «usar colores que el daltónico vea», sino en **no depender del color** para la información crítica.

### Reglas
- Añadir un segundo canal: texto, icono, forma, patrón, posición o subrayado. Ver [[Uso del color (WCAG 1.4.1)]].
- En enlaces, no distinguirlos solo por color: subrayarlos o darles un contraste de 3:1 con el texto circundante y un indicador adicional.
- En gráficos, usar patrones o etiquetas directas además de la leyenda cromática.
- En estados, combinar color con icono y mensaje.
- Comprobar el diseño en **escala de grises** y con simuladores de daltonismo.
- Verificar además el contraste de luminancia: una diferencia de brillo de 3:1 puede servir como pista adicional, pero no sustituye al texto cuando hay que reconocer un matiz concreto.

### Errores frecuentes
- Usar rojo y verde como únicos indicadores de error/éxito.
- Confiar en que «el contraste alto» resuelve el problema del daltonismo.
- Elegir una paleta categórica de muchos tonos sin etiquetas.
- Probar solo con un simulador y no con usuarios.

### Buena y mala aplicación
- **Buena:** un gráfico de líneas con colores distintos, además de patrones de trazo y etiquetas directas sobre cada serie.
- **Mala:** un semáforo de estados donde el único cambio es el color del círculo.

### Hechos frente a heuristics
- **Hecho verificable:** el criterio 1.4.1 obliga a que el color no sea el único medio visual; es independiente del ratio de contraste. Fuente: <https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html>
- **Heurística:** la creencia de que «los daltónicos no ven rojo ni verde» es una simplificación; existen varios tipos y grados.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Uso del color (WCAG 1.4.1)]], [[Colores semánticos]], [[Percepción del color]], [[Verificación de contraste]], [[Contraste WCAG]]
- Sources: [[InfoQ — Colors and the UI]], [[W3C — Understanding SC 1.4.1 Uso del color]], [[Pope Tech — Color contrast accessibility tools with examples]]
- Source History: [[2026-10-24]]
