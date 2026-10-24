---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-24
---
# Errores frecuentes de color

## Overview
Los errores de color se repiten porque son fáciles de introducir y difíciles de ver a simple vista: texto con poco contraste, significado que depende solo del tono, estados sin verificar y paletas copiadas sin adaptar. El informe WebAIM Million 2026 permite cuantificar el más común —el texto de bajo contraste—; el resto se documenta a partir de fuentes técnicas y de sistemas de diseño.

## Core Context & Architectural Rules

### Qué dicen los datos primarios (WebAIM Million 2026)
- **56.114.377** errores detectados en las portadas analizadas; **56,1** por página y **+10,1 %** respecto al año anterior.
- **95,9 %** de las portadas presentan algún fallo detectable de WCAG.
- **Texto de bajo contraste:** aparece en **83,9 %** de las portadas, con una media de **34 instancias por página**. Es el fallo más frecuente.
- Complejidad media de **1.437 elementos por página** (**+14,3 %**), aproximadamente **un error por cada 26 elementos**.
- Son datos de **detección automática** sobre portadas, no sobre sitios completos ni aplicaciones; la conformidad real puede ser peor. Fuente: <https://webaim.org/projects/million/> ([[WebAIM Million 2026]]).

### Catálogo de errores frecuentes
1. **Texto de bajo contraste:** grises claros sobre blanco, texto de marca sobre fondos claros, placeholders demasiado tenues. Es el error con datos primarios más contundentes.
2. **Significado solo por color:** errores, estados, series de un gráfico o campos obligatorios identificados únicamente por el tono ([[Uso del color (WCAG 1.4.1)]]).
3. **Rojo y verde como únicos indicadores:** problemático para deficiencias rojo-verde y para quien no distingue matices ([[Deficiencia de visión al color]]).
4. **Enlaces no evidentes:** enlaces sin subrayado que solo se distinguen por color, o con menos de 3:1 respecto al texto circundante.
5. **Texto sobre imágenes, degradados o transparencias:** se mide el token y no el píxel final; pasa en escritorio y falla en móvil.
6. **Estados sin verificar:** hover, foco, activo, visitado y deshabilitado quedan fuera de la comprobación.
7. **Roles mal emparejados:** usar un rol `container` para texto o iconos, o combinar roles que no están pensados para ir juntos. Material Design 3 muestra ejemplos en los que el texto se vuelve ilegible al cambiar el nivel de contraste. Fuente: [[Material Design 3 — Color roles]].
8. **Marca por encima de legibilidad:** mantener el color corporativo en texto aunque no alcance el umbral ([[Color de marca]]).
9. **Exceso de acentos:** varios colores compitiendo, sin jerarquía ([[Jerarquía visual con color]]).
10. **Valores codificados a mano:** hex repetidos en componentes que no cambian con el tema oscuro ni con el alto contraste.
11. **Confiar solo en el escáner:** una herramienta automática no detecta texto dentro de imágenes, degradados ni transparencias ([[Verificación de contraste]]).
12. **Combinaciones con poca diferencia de luminancia:** dos tonos «armónicos» que, medidos, no llegan al umbral ([[Combinaciones de color (buenas y malas)]]).

### Por qué importa
- El color es responsable de una parte muy visible de los fallos de accesibilidad, y el contraste es uno de los más fáciles de corregir.
- Un error de color no suele romper la compilación ni el diseño: pasa desapercibido hasta que alguien no puede leer.
- Los mismos fallos se repiten año tras año, lo que sugiere que no basta con conocer la norma: hace falta un proceso de verificación ([[Checklist de color para desarrolladores]]).

### Cómo reconocerlos
- Medir los pares reales, no los valores nominales.
- Revisar la interfaz en escala de grises y con simulación de daltonismo.
- Navegar con teclado y comprobar el foco.
- Probar los estados y el modo oscuro.
- Leer el mensaje sin mirar el color: si no se entiende, hay dependencia cromática.

### Hechos frente a heurísticas
- **Hechos verificables:** las cifras de WebAIM, los umbrales de WCAG y la prohibición de usar el color como único canal.
- **Heurística:** la lista de «errores más graves» y su orden son una síntesis de este proyecto; no existe un ranking normativo.
- **Precaución:** los porcentajes de WebAIM no se pueden trasladar a una página concreta como predicción.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[Contraste WCAG]], [[Uso del color (WCAG 1.4.1)]], [[Verificación de contraste]], [[Combinaciones de color (buenas y malas)]], [[Convenciones culturales del color]], [[Checklist de color para desarrolladores]]
- Sources: [[WebAIM Million 2026]], [[WebAIM — Evaluación de contraste y color]], [[Pope Tech — Color contrast accessibility tools with examples]], [[Material Design 3 — Color roles]]
- Source History: [[2026-10-24]]
