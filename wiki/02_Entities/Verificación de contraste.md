---
tags: [ai-memory, state/active, type/tool]
last_sync: 2026-10-24
---
# Verificación de contraste

## Overview
Verificar el contraste es comprobar, con herramientas y revisión manual, que los pares texto/fondo y los elementos no textuales alcanzan los umbrales de [[Contraste WCAG]]. La verificación no termina al obtener un ratio: hay que comprobar el color final renderizado, los estados y los fondos no sólidos.

## Core Context & Architectural Rules

### Proceso recomendado
1. **Barrido preliminar:** localizar dependencias del color (enlaces, formularios, estados), texto de bajo contraste, texto dentro de imágenes y componentes no textuales.
2. **Escaneo automatizado:** usar extensiones o auditores para detectar los casos evidentes.
3. **Revisión manual:** medir con cuenta gotas o inspector los casos que la herramienta no cubre.
4. **Corrección en el código:** cambiar el token o el CSS, no solo el valor en el inspector.
5. **Repetición:** volver a medir tras el cambio, en escritorio y en móvil.

Fuente del proceso: WebAIM, *Evaluating Contrast and Color Use*: <https://webaim.org/articles/contrast/evaluating>.

### Herramientas citadas
- **WebAIM Contrast Checker:** introduce dos colores y devuelve el ratio y el cumplimiento AA/AAA para texto normal, grande y componentes. <https://webaim.org/resources/contrastchecker/>
- **WebAIM Link Contrast Checker:** comprueba a la vez el contraste enlace-texto (3:1) y enlace-fondo (4.5:1). <https://webaim.org/resources/linkcontrastchecker/>
- **WAVE:** detecta errores de contraste en texto renderizado, pero no dentro de imágenes, degradados ni transparencias. <https://wave.webaim.org/extension/>
- **ColorZilla:** cuenta gotas para obtener el hex real de la página. <https://www.colorzilla.com/>
- **Colour Contrast Analyser:** cuenta gotas de escritorio, útil para texto dentro de imágenes y documentos.
- **Inspector de Chrome:** muestra el ratio del texto seleccionado y líneas de cumplimiento AA/AAA.
- **Comprobador de accesibilidad de Microsoft Office:** para documentos ofimáticos.

Fuentes: WebAIM (evaluación) y [[Pope Tech — Color contrast accessibility tools with examples]].

### Qué comprobar además del par principal
- **Estados:** hover, foco de teclado, activo, visitado y deshabilitado.
- **Texto sobre imágenes o degradados:** probar las zonas más claras y a distintos tamaños de pantalla; un texto puede pasar en escritorio y fallar en móvil.
- **Componentes no textuales:** bordes, iconos y indicadores que identifican un control (3:1).
- **Enlaces no subrayados:** 3:1 con el texto circundante y 4.5:1 con el fondo.
- **Transparencias y capas:** medir el color compuesto final, no el declarado.
- **Modo oscuro y alto contraste:** repetir las comprobaciones.

### Errores frecuentes
- Confiar en una sola herramienta y dar por buena la página.
- Medir el color del token y no el píxel renderizado.
- Ignorar los estados interactivos.
- Corregir el color en el inspector del navegador y no en el CSS.
- Redondear el ratio a favor.
- Usar el cuenta gotas sobre un borde antialiasado y obtener un color que no es el real.

### Buena y mala aplicación
- **Buena:** se mide cada par en el navegador, se corrige el token, se vuelve a medir en escritorio y móvil y se documenta el resultado.
- **Mala:** se pasa un escáner automático, no aparecen errores y se concluye que la interfaz es accesible.

### Hechos frente a heurísticas
- **Hecho verificable:** los umbrales y la fórmula están definidos en WCAG; las herramientas los implementan. Ver [[Ratio de contraste]].
- **Límite conocido:** ninguna herramienta automática sustituye la revisión manual; WebAIM y Pope Tech lo advierten expresamente.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Contraste WCAG]], [[Ratio de contraste]], [[Luminancia relativa]], [[Deficiencia de visión al color]], [[Color en interfaces web]]
- Sources: [[WebAIM — Comprobador de contraste]], [[WebAIM — Evaluación de contraste y color]], [[Pope Tech — Color contrast accessibility tools with examples]]
- Source History: [[2026-10-24]]
