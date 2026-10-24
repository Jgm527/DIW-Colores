---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-22
---
# Contraste de elementos no textuales (WCAG 1.4.11)

## Overview
Criterio de éxito 1.4.11 *Non-text Contrast* de WCAG 2.2, nivel **AA** (añadido en WCAG 2.1). Exige [[Ratio de contraste]] ≥ **3:1** entre la información visual necesaria para identificar un componente de interfaz o un gráfico significativo y el color o colores adyacentes.

## Core Context & Architectural Rules

### Texto normativo
Dos categorías:
1. **Componentes de UI**: información visual requerida para identificar el componente y sus estados, salvo componentes inactivos o apariencia no modificada por el autor (estilo nativo del agente de usuario).
2. **Objetos gráficos**: partes del gráfico necesarias para entender el contenido, salvo cuando una presentación concreta es esencial.

Fuente: <https://www.w3.org/TR/WCAG22/#non-text-contrast>
Understanding: <https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html>

### Implicaciones de interfaz
- El borde o el indicador de un input, el icono de un botón sin texto, la línea de un gráfico, el foco visible autorial: 3:1 contra el adyacente.
- Un botón deshabilitado no tiene requisito de contraste (inactivo).
- Si el autor no cambia el aspecto nativo del control, el criterio no aplica a esa apariencia.
- 2.999:1 no cumple 3:1 (Understanding, nota de umbral).
- Líneas muy finas pueden fallar en la práctica por antialiasing aunque el color CSS «pase»; Understanding recomienda no fiarse de trazos ultrafinos.

### Relación con texto
El texto del control sigue yendo por 1.4.3/1.4.6. Un carácter usado como símbolo (p. ej. «×» de cerrar) se trata como no texto y cae en 1.4.11. Fuente: Understanding 1.4.3.

## Linked Nodes
- Related: [[Index]], [[Contraste WCAG]], [[Contraste mínimo (WCAG 1.4.3)]], [[Ratio de contraste]], [[Uso del color (WCAG 1.4.1)]], [[Verificación de contraste]], [[Sistema de color en CSS]]
- Source History: [[2026-10-22]], [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Enlazado con [[Contraste WCAG]] y [[Verificación de contraste]]. Se mantiene el umbral de 3:1 para componentes y gráficos necesarios, y la advertencia sobre trazos ultrafinos.
