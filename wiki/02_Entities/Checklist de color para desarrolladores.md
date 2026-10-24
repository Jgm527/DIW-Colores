---
tags: [ai-memory, state/active, type/tool]
last_sync: 2026-10-24
---
# Checklist de color para desarrolladores

## Overview
Lista de comprobación práctica para revisar el color de una interfaz web antes de publicarla. Sintetiza los criterios de WCAG 2.2, el proceso de verificación de WebAIM y los roles de Material Design 3. **No sustituye** la auditoría de accesibilidad completa ni la norma: es una lista de trabajo para el color.

## Core Context & Architectural Rules

### 1. Definir antes de pintar
- [ ] Cada color tiene una **función** documentada: fondo, superficie, texto, marca, acento, error, aviso, éxito.
- [ ] Los colores se declaran como **tokens** (variables CSS o equivalente), no como hex sueltos repetidos.
- [ ] Los tokens se nombran por función (`--color-primary`, `--color-on-primary`, `--color-surface`), siguiendo el modelo de roles de [[Roles de color (Material Design 3)]].
- [ ] La paleta tiene un número limitado de familias; se añade un color solo si cubre una función nueva ([[Paleta de colores]]).
- [ ] Los estados (hover, foco, activo, deshabilitado) derivan del mismo tono y están documentados.

### 2. Verificar contraste
- [ ] Texto normal: **≥ 4.5:1** ([[Contraste mínimo (WCAG 1.4.3)]]).
- [ ] Texto grande (≥ 18 pt o ≥ 14 pt en negrita): **≥ 3:1**.
- [ ] Componentes no textuales necesarios (bordes, iconos, indicadores): **≥ 3:1** ([[Contraste de elementos no textuales (WCAG 1.4.11)]]).
- [ ] Si se busca AAA: **≥ 7:1** en texto normal ([[Contraste mejorado (WCAG 1.4.6)]]).
- [ ] Los ratios **no se redondean**: 4,49:1 no cumple 4.5:1 ([[Ratio de contraste]]).
- [ ] Se mide el **color final renderizado**, incluidas transparencias, degradados y texto sobre imagen.
- [ ] Se comprueban **todos los estados**, no solo el estado por defecto.
- [ ] Se repite la comprobación en **modo oscuro** y en alto contraste del sistema.

### 3. No depender del color
- [ ] Ningún significado crítico se transmite **solo** por color ([[Uso del color (WCAG 1.4.1)]]).
- [ ] Errores y avisos llevan **texto e icono**, no solo borde o fondo de color.
- [ ] Los enlaces se distinguen por **subrayado** u otra pista además del color.
- [ ] Los gráficos usan **patrones, etiquetas directas o formas** además de la leyenda cromática.
- [ ] Los estados de un formulario se explican con un mensaje, no solo con rojo/verde.
- [ ] La interfaz se revisa en **escala de grises** y con simulación de [[Deficiencia de visión al color]].

### 4. Construir jerarquía
- [ ] Hay **una acción principal** clara por vista; las demás son secundarias o terciarias ([[Jerarquía visual con color]]).
- [ ] El color de acento se reserva para lo que debe destacar; no se reparte por toda la pantalla ([[Regla 60-30-10]]).
- [ ] La jerarquía no depende solo del color: también de tamaño, posición, espacio y tipografía.
- [ ] El **foco de teclado** es visible y se distingue del estado normal y del fondo.
- [ ] El color de marca no se usa como texto sobre blanco sin verificar ([[Color de marca]]).

### 5. Probar y corregir
- [ ] Barrido automatizado con una herramienta (WAVE, inspector, auditor) para detectar lo evidente.
- [ ] Revisión manual de lo que la herramienta no ve: imágenes, degradados, transparencias, estados.
- [ ] Prueba con teclado, zoom y tamaños de pantalla pequeños.
- [ ] Las correcciones se hacen en el **CSS o en los tokens**, no solo en el inspector del navegador.
- [ ] Se vuelve a medir después de cada cambio ([[Verificación de contraste]]).

### 6. Documentar
- [ ] La bibliografía/webgrafía recoge todas las fuentes utilizadas, con URL.
- [ ] Cada imagen de Internet indica su **procedencia**; las propias se identifican como tales.
- [ ] Se anotan los ratios verificados y las combinaciones prohibidas.
- [ ] Se registra qué se ha probado y qué queda pendiente.

### Ejemplo mínimo de tokens
```css
:root {
  --color-surface: #ffffff;
  --color-on-surface: #1b1b1f;
  --color-primary: #0b57d0;
  --color-on-primary: #ffffff;
  --color-error: #b3261e;
  --color-on-error: #ffffff;
}
```
Este fragmento es una ilustración propia de nomenclatura; los valores deben verificarse con una herramienta antes de usarse.

### Hechos frente a heurísticas
- **Hechos verificables:** los umbrales, la prohibición de usar solo color y el proceso de verificación proceden de WCAG y de WebAIM.
- **Heurística:** el orden de la lista y la recomendación de «una acción principal» son criterios de práctica profesional, no requisitos normativos.
- **Límite:** la checklist no cubre otros criterios de accesibilidad (semántica, teclado, formularios, texto alternativo) que también afectan a la experiencia.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[Verificación de contraste]], [[Contraste WCAG]], [[Uso del color (WCAG 1.4.1)]], [[Errores frecuentes de color]], [[Combinaciones de color (buenas y malas)]], [[Jerarquía visual con color]], [[Niveles de conformidad WCAG]]
- Sources: [[W3C — Understanding SC 1.4.3 Contraste mínimo]], [[W3C — Understanding SC 1.4.1 Uso del color]], [[WebAIM — Evaluación de contraste y color]], [[Material Design 3 — Color roles]]
- Source History: [[2026-10-24]]
